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
      <h3 className="w-fit h5-md">
        {name}
      </h3>

      <ul
        className="w-full flex flex-col pt-4 text-btn-sm h-auto items-end gap-2"
      >
        {links.map((link, index) => {
          return (
            <li className="flex items-center" key={index}>
              <a href={`${link.href}`}>{link.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
