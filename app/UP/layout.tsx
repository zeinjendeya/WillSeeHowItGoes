import "tailwind.config";
import { Metadata } from "next";
import Footer from "../ui/up/footer/footer";
import NavBarLG from "../ui/up/header/nav-bar-lg";
import NavBarMS from "../ui/up/header/nav-bar-ms";

export const metadata: Metadata = {
  title: "Unified Portal",
  description: "The tryout for the Unified Portal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <NavBarLG />
      <NavBarMS />
      <div>{children}</div>
      <div>{/* comment section - section will be divided up later */}</div>
      <Footer />
    </div>
  );
}
