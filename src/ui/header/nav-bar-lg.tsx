import SvgSrc from "@/public/AmanaLogo.svg";
import NavBG from "@/public/nav-bg.jpg";
import Image from "next/image";
import Link from "next/link";
import { Cog6ToothIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import HeaderTag from "./header-tag";
import DropdownLg from "@/src/ui/header/dropdown-header";
import Links from "./Links.json";

export default function NavBarLG() {
  return (
    <div className="w-full max-md:hidden">
      <nav
        style={{ backgroundImage: `url(${NavBG.src})` }}
        className="px-8 py-4 bg-center bg-no-repeat bg-cover rounded-b-2xl relative z-50 hidden lg:block text-white"
      >
        <div className="items-center justify-start w-full gap-4 px-4 pt-2 pb-2 flex">
          <a
            className="flex items-center text-btn-sm transition-colors text-base cursor-pointer bg-transparent p1 text-white hover:bg-transparent hover:no-underline undefined"
            href="#"
          >
            EN
          </a>
          <Cog6ToothIcon
            stroke="currentColor"
            fill="none"
            strokeWidth={1.5}
            className="flex justify-center w-5 h-5 text-white"
          />
          <MagnifyingGlassIcon className="flex justify-center w-6 h-6 text-white" />
        </div>

        <div className="flex items-center justify-between w-full">
          <div className=" w-[12em] flex justify-center">
            <Link
              href="#"
              className="bg-white text-green-800 text-md w-56 flex justify-center px-8 py-4  rounded-full hover:bg-green-600 hover:text-white"
            >
              تسجيل الدخول
            </Link>
          </div>

          <ul className="flex gap-5 text-btn-sm justify-center flex-row-reverse w-full">
            <DropdownLg
              gridCols="2"
              className="flex items-start justify-end gap-0.5"
              {...Links.aboutAmana}
            />

            <li className="flex items-start gap-0.5 flex-row-reverse justify-end w-fit">
              <Link href="#" className="flex items-center gap-0.5">
                الخدمات الالكترونية
              </Link>
            </li>

            <li className="flex items-start gap-0.5 flex-row-reverse justify-end w-fit">
              <Link href="#" className="flex items-center gap-0.5">
                الإعلام و الاتصال
              </Link>
            </li>

            <DropdownLg
              gridCols="1"
              {...Links.openDataSet}
              className="flex items-start justify-end w-fit gap-0.5 flex-row-reverse"
            />

            <li className="flex items-start gap-0.5 flex-row-reverse justify-end w-fit">
              <Link href="#" className="flex items-center gap-0.5">
                المشاركة الالكترونية
              </Link>
            </li>
          </ul>

          <Link
            href="/"
            className="flex items-center justify-between md:w-fit gap-4"
          >
            <Image
              src={SvgSrc}
              alt="Amana Logo"
              className="h-auto"
              width={300}
            />
          </Link>
        </div>
        <HeaderTag px="px-8" show={true} h1="h4" h6="h6" />
      </nav>
    </div>
  );
}
