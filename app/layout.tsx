import "tailwind.config";
import { Metadata } from "next";
import Footer from "./ui/up/footer/footer";
import NavBarLG from "./ui/up/header/nav-bar-lg";
import NavBarMS from "./ui/up/header/nav-bar-ms";
import './ui/global.css'
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Unified Portal",
  description: "The tryout for the Unified Portal.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-[#f4f6f7]">
        <NavBarLG />
        <NavBarMS />
        {children}
        <Footer />
      </body>
    </html>
  );
}
