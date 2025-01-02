interface List {
  name: string;
  href: string;
}

export default function Breadcrumb(links: List[]) {
  return (
    <div className="bg-[#d7e5de] section-container flex flex-col items-center justify-center px-6 py-2">
      <nav aria-label="breadcrumb">
        <ol>
          {links.map((link) => (
            <li>
                <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
