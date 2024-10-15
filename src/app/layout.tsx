import "@/app/_styles/globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { Roboto } from "next/font/google";

const lato = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: {
    template: "%s | Js Marix",
    default: "Welcome to Js Matrix",
  },
  description:
    "Js Matirx is a blog webstire that gives the knowledge about Java Script you need to know for web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
