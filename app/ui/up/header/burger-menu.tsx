"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface LinkItem {
  href: string;
  label: string;
}

interface DropdownProps {
  name: string;
  links: LinkItem[];
}

export default function BurgerMenu({ name, links, isOpen, onToggle }: DropdownProps & { isOpen: boolean; onToggle: () => void }) {

  return (
    <li className="flex justify-end w-full flex-col mt-2 py-2">
      <div className="flex justify-between flex-row-reverse items-center cursor-pointer" onClick={onToggle}>
        <span className="px-5">{name}</span>
        <ChevronDownIcon
          strokeWidth={2}
          className={`flex items-center w-5 h-5 transition-transform duration-300 ${
            isOpen ? "transform rotate-180 text-green-700" : "text-[#2C302F]"
          }`}
        />
      </div>

      <ul
        className={`transition-all duration-600 ease-in-out overflow-hidden bg-[#F3F7F5] w-full flex-col items-end gap-2 ${
          isOpen ? "flex max-h-100 opacity-1 px-5 py-2" : " hidden max-h-0 opacity-0 py-0 px-0"
        }`}
        style={{ fontSize: 14, transitionProperty: "max-height, opacity, padding" }}
      >
        {links.map((link) => (
          <li className="flex items-center" key={link.href}>
            <a className="py-2 hover:underline" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
