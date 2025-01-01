"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface LinkItem {
  href: string;
  label: string;
}

interface DropdownProps {
  name: string;
  links: LinkItem[];
}

export default function BurgerMenu({ name, links }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
    console.log("isOpen", isOpen);
  }

  return (
    <li className="flex justify-end w-full flex-col mt-2 py-2">
      <div className="w-full flex flex-row-reverse justify-between px-5">
        <a
          href="#"
          className={`w-fit ${isOpen ? "text-green-700" : "text-[#2C302F]"}`}
          onClick={(e) => {
            e.preventDefault();
            openMenu();
          }}
        >
          {name}
        </a>
        <span
          className="ms-1 me-0 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            openMenu();
          }}
        >
          <ChevronDownIcon
            strokeWidth={2}
            className={`flex items-center w-5 h-5 transition-transform duration-300 ${
              isOpen ? "transform rotate-180 text-green-700" : "text-[#2C302F]"
            }`}
          />
        </span>
      </div>

      <ul
        className={`transition-all duration-600 ease-in-out overflow-hidden bg-[#F3F7F5] w-full flex-col items-end gap-2 ${
          isOpen ? "flex max-h-100 opacity-1 px-5 py-2" : " hidden max-h-0 opacity-0 py-0 px-0"
        }`}
        style={{ fontSize: 14, transitionProperty: "max-height, opacity, padding" }}
      >
        {links.map((link) => {
          return (
            <li className="flex items-center" key={link.href}>
              <a className="py-2 hover:underline" href={link.href}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
