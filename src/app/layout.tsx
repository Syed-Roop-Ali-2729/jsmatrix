import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

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
      <body>
        <Header>
          <NavBar />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
