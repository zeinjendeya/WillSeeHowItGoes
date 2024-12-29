import "tailwind.config";
import { Metadata } from "next";
import NavBar from "../ui/up/header/nav-bar";
import Footer from "../ui/up/footer/footer";

export const metadata: Metadata = {
  title: "Unified Portal",
  description: "The tryout for the Unified Portal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div>{children}</div>
      <div>{/* comment section - section will be divided up later */}</div>
      <Footer />
    </div>
  );
}
