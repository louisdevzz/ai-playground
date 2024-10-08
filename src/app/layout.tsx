import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const SpaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  weight: "400",
});

export const metadata: Metadata = {
  title: "AI Playground",
  description: "Generated by create Potlock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
