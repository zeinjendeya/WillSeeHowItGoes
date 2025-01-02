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

export default function Dropdown({ name, links }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-end gap-4 pb-4 w-full flex-col">
      <div className="w-full flex flex-row-reverse justify-between">
        <a
          href="#"
          className="w-fit font-bold"
          style={{ fontSize: 18 }}
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
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </span>
      </div>

        <ul
          className={`transition-max-height duration-300 ease-in-out overflow-hidden w-full flex flex-col items-end gap-2 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
          style={{ fontSize: 14 }}
        >
          {links.map((link) => {
            return (
              <li className="flex items-center" key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            );
          })}
        </ul>
    </div>
  );
}
