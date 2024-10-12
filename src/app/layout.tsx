import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Js Matrix",
  description: "A blog website of javascript",
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
