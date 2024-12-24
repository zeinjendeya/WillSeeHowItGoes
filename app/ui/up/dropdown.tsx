"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { linkSync } from "fs";
import React, { useState, useRef, useEffect } from "react";

interface Link {
  label: string;
  href: string;
}

export default function Dropdown({
  links,
  dropName,
}: {
  links: Link[];
  dropName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-green-300">
        <svg className="inline-block w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        {dropName}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{ zIndex: 1000 }}
        >
          <ul className="py-1">
            {/* Your navigation links here */}
            {links.map((link) => {
              return (
                <li>
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
