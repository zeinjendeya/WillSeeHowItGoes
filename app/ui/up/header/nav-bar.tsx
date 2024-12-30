import SvgSrc from "@/public/AmanaLogo.svg";
import NavBG from "@/public/nav-bg.jpg";
import Image from "next/image";
import { Cog6ToothIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import HeaderTag from "./header-tag";
import DropdownLg from "@/app/ui/up/header/dropdown-header";
import { BsList } from "react-icons/bs";
import BurgerMenu from "./burger-menu";
import NavBarLG from "./nav-bar-lg";
import NavBarMS from "./nav-bar-ms";

// text area to be toggled appear or not in certain pages
export default function NavBar() {
  const aboutAmana = {
    name: "عن الأمانة",
    links: [
      { href: "#", label: "عن مدينة الرياض" },
      { href: "##", label: "عن الأمانة" },
      { href: "###", label: "البلديات" },
      { href: "####", label: "أمناء الرياض" },
      { href: "#####", label: "المبادرات و المشاريع" },
      { href: "######", label: "شركاء الأمانة المحليين" },
      { href: "#######", label: "إحصائيات البوابة" },
      { href: "########", label: "التنمية المستدامة" },
      { href: "#########", label: "الجوائز" },
      { href: "##########", label: "الأمانة في أرقام" },
    ],
  };

  const openDataSet = {
    name: "البيانات المفتوحة",
    links: [
      { href: "#", label: "البيانات المفتوحة" },
      { href: "##", label: "البيانات الحكومية المفتوحة" },
      { href: "###", label: "مجموعات  البيانات" },
      { href: "####", label: "البوابة الجيومكانية" },
      { href: "#####", label: "طلب اضافة مفوض" },
      { href: "######", label: "قصص نجاح البيانات المفتوحة" },
    ],
  };

  return (
    <div className="w-full">
      <NavBarLG />
      <NavBarMS />
      
      <div className="hidden justify-center">
        <div className="pt-6 w-full h-full flex flex-col justify-between">
          <div className="flex justify-center w-full">
            <ul className="flex flex-col w-full text-[#2C302F]">
              <BurgerMenu {...aboutAmana} />
              <li className="w-full flex justify-end px-5 py-2">
                <a href="#">الخدمات الالكترونية</a>
              </li>
              <li className="w-full flex justify-end px-5 py-2">
                <a href="#">الإعلام و الاتصال</a>
              </li>
              <BurgerMenu {...openDataSet} />
              <li className="w-full flex justify-end px-5 py-2">
                <a href="#">المشاركة الالكترونية</a>
              </li>
            </ul>
          </div>

          <div className="bg-[#F3F7F5] flex justify-between flex-row-reverse px-3 py-4 mt-8">
            <div className=" w-[12rem] lg:hidden flex justify-center">
              <a
                style={{ fontSize: 12 }}
                className="bg-[#006946] text-white w-fit flex items-center justify-center lg:px-0 lg:py-0 px-6 py-2 rounded-full hover:text-white"
              >
                تسجيل الدخول
              </a>
            </div>
            <div className="items-center justify-start w-full gap-4 px-4 pt-2 pb-2 flex text-green-800">
              <a
                className="flex items-center transition-colors text-base cursor-pointer bg-transparent hover:bg-transparent hover:no-underline undefined"
                href="#"
                style={{ fontSize: 14 }}
              >
                EN
              </a>
              <Cog6ToothIcon
                stroke="currentColor"
                fill="none"
                strokeWidth={1.5}
                className="flex justify-center w-5 h-5"
              />
              <MagnifyingGlassIcon className="flex justify-center w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
