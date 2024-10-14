import "@/app/_styles/globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: {
    template: "%s | Js Matirx",
    default: "Welcome to Js Matrix",
  },
  description:
    "Js matrix is a blog website that give you knowledge of js you need to know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
