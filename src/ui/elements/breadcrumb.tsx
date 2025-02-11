"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const path = usePathname();

  const paths = path.split("/").filter(Boolean);

  paths.pop();

  const breadcrumbs = [
    { label: "الرئيسية", href: "/" },
    ...paths.map((segment, index) => ({
      label: segment,
      href: `/${paths.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <div className=" ms-4 me-4 mb-5 rounded-b-3xl bg-teal label12 flex items-center justify-end px-4 py-2 lg:px-6 lg:py-2">
      <nav aria-label="breadcrumb">
        <ol className="flex flex-row-reverse items-center gap-2.5 lg:gap-1.5">
          {breadcrumbs.map((crumb, index) => (
            <li key={index}>
              <Link
                href={crumb.href}
                className="flex flex-row-reverse items-center gap-1.5"
              >
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <ChevronLeftIcon strokeWidth={2.5} className="h-3 w-3 block" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
