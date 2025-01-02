"use client";

import SvgSrc from "@/public/AmanaLogo.svg";
import NavBG from "@/public/nav-bg.jpg";
import Image from "next/image";
import HeaderTag from "./header-tag";
import { BsList } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { Cog6ToothIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import BurgerMenu from "./burger-menu";
import { useState, useEffect } from "react";

export default function NavBarMS() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleToggleMenu = (menuName : string) => {
    setOpenMenu(openMenu === menuName ? '' : menuName);
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDropdownVisible]);

  const aboutAmana = {
    name: "عن الأمانة",
    links: [
      { href: "##", label: "عن الأمانة" },
      { href: "#", label: "عن مدينة الرياض" },
      { href: "####", label: "أمناء الرياض" },
      { href: "###", label: "البلديات" },
      { href: "######", label: "شركاء الأمانة المحليين" },
      { href: "#####", label: "المبادرات و المشاريع" },
      { href: "########", label: "التنمية المستدامة" },
      { href: "#######", label: "إحصائيات البوابة" },
      { href: "##########", label: "الأمانة في أرقام" },
      { href: "#########", label: "الجوائز" },
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
    <header
      className={`w-full flex flex-col justify-between lg:hidden ${
        isDropdownVisible
          ? "fixed inset-0 z-40 h-screen overflow-y-auto"
          : "relative h-full"
      }`}
    >
      <nav
        style={{ backgroundImage: `url(${NavBG.src})` }}
        className="px-4 bg-center bg-no-repeat bg-cover rounded-b-2xl relative z-50 block text-white"
      >
        <div className="flex items-center justify-between w-full">
          {/* <BsList className="block w-6 h-6" strokeWidth={0.8} /> */}

          {isDropdownVisible ? (
            <BiX className="block w-8 h-8 cursor-pointer" onClick={toggleDropdown} />
          ) : (
            <BsList
              className="block w-6 h-6 cursor-pointer"
              strokeWidth={0.8}
              onClick={toggleDropdown}
            />
          )}

          <a href="/" className="flex items-center justify-between w-fit gap-4">
            <Image src={SvgSrc} alt="Amana Logo" width={220} height={93} />
          </a>
        </div>

        <HeaderTag px="px-4" show={true} h1_size={24} h6_size={12} />
      </nav>
      <div
        className={`bg-white transition-all w-full duration-300 dynamic-top ease-in-out ${
          isDropdownVisible ? "opacity-1 h-full" : "opacity-0 h-0"
        } overflow-y-auto`}
        style={{ transitionProperty: "opacity, height" }}
      >
        {/* isDropdownVisible */}
        <div className="pt-6 w-full h-full flex flex-col justify-between">
          <div className="flex justify-center w-full">
            <ul className="flex flex-col w-full text-[#2C302F]">
            <BurgerMenu
                name={aboutAmana.name}
                links={aboutAmana.links}
                isOpen={openMenu === aboutAmana.name}
                onToggle={() => handleToggleMenu(aboutAmana.name)}
              />
              <li className="w-full flex justify-end mt-2 px-5 py-2">
                <a href="#">الخدمات الالكترونية</a>
              </li>
              <li className="w-full flex justify-end mt-2 px-5 py-2">
                <a href="#">الإعلام و الاتصال</a>
              </li>
              <BurgerMenu
                name={openDataSet.name}
                links={openDataSet.links}
                isOpen={openMenu === openDataSet.name}
                onToggle={() => handleToggleMenu(openDataSet.name)}
              />
              <li className="w-full flex justify-end mt-2 px-5 py-2">
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
    </header>
  );
}
