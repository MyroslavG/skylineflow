import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyline Flow Toronto Plumbing",
  description:
    "Modern Toronto plumbing service for leaks, drains, installs, pipe repairs, and urgent plumbing calls.",
  openGraph: {
    title: "Skyline Flow Toronto Plumbing",
    description:
      "Clean, responsive plumbing help for Toronto homes and small businesses.",
    images: ["/skyline-flow-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline Flow Toronto Plumbing",
    description:
      "Clean, responsive plumbing help for Toronto homes and small businesses.",
    images: ["/skyline-flow-hero.png"],
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
