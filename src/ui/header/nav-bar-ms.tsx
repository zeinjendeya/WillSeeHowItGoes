"use client";

import SvgSrc from "@/public/AmanaLogo.svg";
import NavBG from "@/public/nav-bg.jpg";
import Image from "next/image";
import Link from "next/link";
import HeaderTag from "./header-tag";
import { BsList } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { Cog6ToothIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import BurgerMenu from "./burger-menu";
import { useState, useEffect } from "react";
import Links from "./Links.json";

export default function NavBarMS() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleToggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? "" : menuName);
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

  return (
    <header
      className={`w-full flex flex-col lg:hidden ${
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
            <BiX
              className="block w-8 h-8 cursor-pointer"
              onClick={toggleDropdown}
            />
          ) : (
            <BsList
              className="block w-6 h-6 cursor-pointer"
              strokeWidth={0.8}
              onClick={toggleDropdown}
            />
          )}

          <Link
            href="/"
            className="flex items-center justify-between w-fit gap-4"
          >
            <Image
              src={SvgSrc}
              className="h-auto"
              alt="Amana Logo"
              width={220}
              height={93}
            />
          </Link>
        </div>

        <HeaderTag px="px-4" show={true} h1="h4" h6="h5-sm" />
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
                name={Links.aboutAmana.name}
                links={Links.aboutAmana.links}
                isOpen={openMenu === Links.aboutAmana.name}
                onToggle={() => handleToggleMenu(Links.aboutAmana.name)}
              />
              <li className="w-full flex justify-end mt-2 px-5 py-2">
                <Link href="#">الخدمات الالكترونية</Link>
              </li>
              <li className="w-full flex justify-end mt-2 px-5 py-2">
                <Link href="#">الإعلام و الاتصال</Link>
              </li>
              <BurgerMenu
                name={Links.openDataSet.name}
                links={Links.openDataSet.links}
                isOpen={openMenu === Links.openDataSet.name}
                onToggle={() => handleToggleMenu(Links.openDataSet.name)}
              />
              <li className="w-full flex justify-end mt-2 px-5 py-2">
                <Link href="#">المشاركة الالكترونية</Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F3F7F5] flex justify-between flex-row-reverse px-3 py-4 mt-8">
            <div className=" w-[12rem] lg:hidden flex justify-center">
              <Link
                href="#"
                className="bg-[#006946] label11 text-white w-fit flex items-center justify-center lg:px-0 lg:py-0 px-6 py-2 rounded-full hover:text-white"
              >
                تسجيل الدخول
              </Link>
            </div>
            <div className="items-center justify-start w-full gap-4 px-4 pt-2 pb-2 flex text-green-800">
              <Link
                className="flex items-center text-btn-sm transition-colors text-base cursor-pointer bg-transparent hover:bg-transparent hover:no-underline undefined"
                href="#"
              >
                EN
              </Link>
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
