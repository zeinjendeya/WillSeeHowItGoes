// this will be:
// links
// logo
// end bar with @ al Riyadh 202(5)

import Image from "next/image";
import Logo from "@/public/alriyadh.f93c4839.svg";
import Vision from "@/public/vision.svg";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterLine } from "react-icons/ri";
import FooterListMd from "./footer-list-md";
import FooterListLg from "./footer-list-lg";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-between mt-14">
      <div className="flex justify-between lg:flex-row-reverse flex-col bg-[#006946] gap-4 px-8 py-8">
        <div className="lg:w-1/4 w-full flex flex-col gap-4 items-center justify-between">
          <Image src={Logo} alt="logo" width={159} height={159} />
          <Image src={Vision} alt="logo" width={159} height={159} />
        </div>

        <FooterListMd />
        <FooterListLg />
        
      </div>

      <div className="flex text-white lg:flex-row-reverse items-center flex-col-reverse lg:justify-between justify-center bg-[#01543A] px-8 py-7" style={{ fontSize: 14 }}>
        <p className="w-fit py-2  lg:py-0">جميع حقوق الطبع محفوظةلأمانة منطقة الرياض © 2024</p>
        <a className="w-fit py-2  lg:py-0" href="/sitemap">خريطة الموقع</a>
        <div className="flex lg:justify-end justify-around w-fit  flex-row-reverse items-center py-2 lg:py-0">
          <span className="ms-3">
            <RiLinkedinBoxLine className="w-6 h-6" />
          </span>
          <span className="ms-3">
            <LuInstagram className="w-6 h-6" />
          </span>
          <span className="ms-3">
            <RiTwitterLine className="w-6 h-6" />
          </span>
        </div>
      </div>
    </footer>
  );
}
