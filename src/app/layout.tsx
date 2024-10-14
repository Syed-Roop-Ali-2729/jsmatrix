import "@/app/_styles/globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

type metadata = {
  title: {
    template: string;
    default: string;
  };
  description: string;
};

export const metadata = {
  title: {
    template: "%s | Js Matrix",
    default: "Welcome to Js Matrix",
  },
  description:
    "A blog website of JavaScript that containes all the information your want to know about JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
