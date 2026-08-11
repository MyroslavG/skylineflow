import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = path.join(root, ".next");
const distDir = path.join(root, "dist");
const clientDir = path.join(distDir, "client");
const serverDir = path.join(distDir, "server");

async function copyIfExists(source, destination) {
  try {
    await cp(source, destination, { recursive: true });
  } catch (error) {
    if (error?.code !== "ENOENT") {
      throw error;
    }
  }
}

async function main() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(clientDir, { recursive: true });
  await mkdir(serverDir, { recursive: true });

  await cp(path.join(root, "public"), clientDir, { recursive: true });
  await cp(
    path.join(nextDir, "static"),
    path.join(clientDir, "_next", "static"),
    { recursive: true },
  );

  await cp(path.join(nextDir, "server", "app", "index.html"), path.join(clientDir, "index.html"));
  await copyIfExists(
    path.join(nextDir, "server", "app", "_not-found.html"),
    path.join(clientDir, "404.html"),
  );

  await mkdir(path.join(distDir, ".openai"), { recursive: true });
  await cp(
    path.join(root, ".openai", "hosting.json"),
    path.join(distDir, ".openai", "hosting.json"),
  );
  await copyIfExists(path.join(root, "drizzle"), path.join(distDir, ".openai", "drizzle"));

  const buildId = await readFile(path.join(nextDir, "BUILD_ID"), "utf8");
  await writeFile(path.join(serverDir, "BUILD_ID"), buildId);
  await writeFile(
    path.join(serverDir, "wrangler.json"),
    JSON.stringify(
      {
        name: "skyline-flow-toronto-plumbing",
        main: "index.js",
        compatibility_date: "2026-05-15",
        compatibility_flags: ["nodejs_compat"],
        assets: { directory: "../client" },
        observability: { enabled: true },
      },
      null,
      2,
    ),
  );
  await writeFile(
    path.join(serverDir, "index.js"),
    `const cacheable = /\\.(?:css|js|mjs|png|jpg|jpeg|gif|webp|avif|svg|ico|woff2?)$/i;

function assetRequest(request, pathname) {
  return new Request(new URL(pathname, request.url), request);
}

async function fetchAsset(env, request, pathname) {
  const response = await env.ASSETS.fetch(assetRequest(request, pathname));
  return response.status === 404 ? null : response;
}

async function staticResponse(env, request) {
  const url = new URL(request.url);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/_next/image") {
    const imagePath = url.searchParams.get("url");
    if (imagePath?.startsWith("/")) {
      const image = await fetchAsset(env, request, imagePath);
      if (image) return image;
    }
  }

  const candidates = [];
  if (pathname === "/") {
    candidates.push("/index.html");
  } else {
    candidates.push(pathname);
    if (!/\\.[^/]+$/.test(pathname)) {
      candidates.push(pathname.replace(/\\/$/, "") + "/index.html");
    }
  }

  for (const candidate of candidates) {
    const response = await fetchAsset(env, request, candidate);
    if (response) {
      const headers = new Headers(response.headers);
      if (cacheable.test(candidate)) {
        headers.set("Cache-Control", "public, max-age=31536000, immutable");
      }
      return new Response(response.body, { status: response.status, headers });
    }
  }

  const notFound = await fetchAsset(env, request, "/404.html");
  return new Response(notFound?.body ?? "Not found", {
    status: 404,
    headers: notFound?.headers,
  });
}

export default {
  fetch(request, env) {
    return staticResponse(env, request);
  },
};
`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
