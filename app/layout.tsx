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
  title: "Skyline Flow Toronto Plumbing | Residential & Renovation Services",
  description:
    "Residential, renovation and condo plumbing services for homes and projects throughout Toronto and the GTA.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Skyline Flow Toronto Plumbing",
    description:
      "Residential, renovation and condo plumbing services throughout Toronto and the GTA.",
    images: ["/4.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline Flow Toronto Plumbing",
    description:
      "Residential, renovation and condo plumbing services throughout Toronto and the GTA.",
    images: ["/4.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
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
