"use client";

import subNav from "@/public/subNavigationCard.svg"
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BiSolidLeftArrow } from "react-icons/bi";

interface LinkItem {
  href: string;
  label: string;
}

interface DropdownProps {
  name: string;
  links: LinkItem[];
}

export default function DropdownLg({ name, links, className, gridCols }: DropdownProps & { className?: string } & { gridCols?: string }) {
    return (
        <li className={`relative group/main block text-left ${className}`}>
            <a
                href="#"
                className="relative group flex items-center justify-between w-full text-sm font-medium focus:outline-none"
            >
                <span className="ms-0 me-0">
                    <ChevronDownIcon
                        strokeWidth={2}
                        className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:transform group-hover:rotate-180"
                    />
                </span>
                {name}
            </a>

            <ul
                className={`absolute grid grid-cols-${gridCols} right-0 mt-2 pt-5 pb-10 ps-10 pe-14 w-[max-content] bg-pattern bg-no-repeat bg-left bg-x-10 gap-4 origin-top-right rounded-md shadow-lg bg-white overflow-hidden shadow-light opacity-0 invisible translate-y-1 transition-all duration-300 ease-in-out group-hover/main:opacity-100 group-hover/main:visible group-hover/main:translate-y-2`}
            >
                {links.map((link) => (
                    <li className="block group/sub w-56 flex justify-end items-center gap-1" key={link.href}>
                        <Link
                            href={link.href}
                            className="items-center text-base flex flex-row justify-between py-1.5 px-0 p1 text-sm text-gray-700 hover:text-green-600 transition-transform duration-500 ease-in-out transform hover:translate-x-2"
                        >
                            {link.label}
                            <span className="hidden group-hover/sub:block ms-1 transition-opacity duration-500 ease-in-out">
                                <BiSolidLeftArrow className="flex justify-center items-center w-4 h-4" />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .bg-pattern {
                    background-image: url("${subNav.src}");
                }
                .bg-x-10 {
                    background-position: 5% center
                }
            `}</style>
        </li>
    );
}
