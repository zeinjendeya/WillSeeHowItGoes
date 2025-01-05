interface LinkItem {
  href: string;
  label: string;
}

interface DropdownProps {
  name: string;
  links: LinkItem[];
}

export default function FooterUl({ name, links }: DropdownProps) {
  return (
    <div className="w-full h-auto text-white flex flex-col items-end gap-2 px-1">
      <h3 className="w-fit font-bold" style={{ fontSize: 18 }}>
        {name}
      </h3>

      <ul
        className="w-full flex flex-col pt-4 h-auto items-end gap-2"
        style={{ fontSize: 14 }}
      >
        {links.map((link) => {
          return (
            <li className="flex items-center" key={link.href}>
              <a href={`${link.href}`}>{link.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
