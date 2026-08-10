import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/playfair-display";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://skyline-flow-toronto-plumbing.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Skyline Flow Toronto Plumbing",
  description:
    "Modern Toronto plumbing service for leaks, drains, installs, pipe repairs, and urgent plumbing calls.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Skyline Flow Toronto Plumbing",
    description:
      "Clean, responsive plumbing help for Toronto homes and small businesses.",
    images: ["/skyline-flow-hero-premium.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline Flow Toronto Plumbing",
    description:
      "Clean, responsive plumbing help for Toronto homes and small businesses.",
    images: ["/skyline-flow-hero-premium.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
