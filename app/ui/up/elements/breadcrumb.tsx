import { JSX } from "react";

interface List {
  element: JSX.Element;
  href: string;
}

interface BreadcrumbProps {
  page: string;
  links: List[];
}

export default function Breadcrumb({ page, links }: BreadcrumbProps) {
  return (
    <div className=" ms-4 me-4 rounded-b-3xl bg-[#d7e5de] label12 flex items-center justify-end px-4 py-2 lg:px-6 lg:py-2">
      <nav aria-label="breadcrumb">
        <ol className="flex flex-row-reverse items-center gap-2.5 lg:gap-1.5">
          {links.map((link) => (
            <li key={link.href} className="gap-1.5">
              {link.element}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
