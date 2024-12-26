// this will have:
// links in our website navbar
// buttons
// logo

// import Link from "next/link";
import SvgSrc from "@/public/AmanaLogo.svg";
import NavBG from "@/public/nav-bg.jpg";
import Image from "next/image";
import { ChevronDownIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
// import Dropdown from "@/app/ui/up/dropdown";

// text area to be toggled appear or not in certain pages
export default function NavBar() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover rounded-b-2xl relative z-50 hidden md:block text-white px-8 py-4"
      style={{ backgroundImage: `url(${NavBG.src})` }}
    >
      <div className="w-full flex justify-start">
      <Cog6ToothIcon stroke="currentColor" fill="none" strokeWidth={1.5} className="flex justify-center w-5 h-5 text-text-white" width={1} height={1} />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="hidden md:block">
          <a
            style={{ fontSize: 18 }}
            className="bg-white text-green-800 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white"
          >
            تسجيل دخول
          </a>
        </div>

        <ul
          style={{ fontSize: 14 }}
          className=" space-x-2 hidden md:flex gap-5 flex-row-reverse"
        >
          <li className="flex items-start gap-0.5 flex-row-reverse">
            <a href="#" className="flex items-center gap-0.5">
              عن الأمانة
            </a>
            <span className="ms-1 me-0">
              <ChevronDownIcon  className="flex justify-center w-5 h-5 text-text-white" />
            </span>
          </li>

          <li className="flex items-start gap-0.5 flex-row-reverse">
            <a href="#" className="flex items-center gap-0.5">
              الإعلام و الاتصال
            </a>
          </li>

          <li className="flex items-start gap-0.5 flex-row-reverse">
            <a href="#" className="flex items-center gap-0.5">
              المشاركة الالكترونية
            </a>
          </li>

          <li className="flex items-start gap-0.5 flex-row-reverse">
            <a href="#" className="flex items-center gap-0.5">
              البيانات المفتوحة
            </a>
          </li>

          <li className="flex items-start gap-0.5 flex-row-reverse">
            <a href="#" className="flex items-center gap-0.5">
              الخدمات الالكترونية
            </a>
          </li>
        </ul>

        <div className="flex items-center justify-between md:w-fit gap-4">
          <Image src={SvgSrc} alt="Amana Logo" width={220} height={93} />
        </div>
      </div>
    </div>
  );
}
