import FooterUl from "./footer-ul";
import Links from "./Links.json";

export default function FooterListLg() {
  return (
    <div className="lg:flex hidden justify-end gap-4 pb-4 px-2 w-3/4">
      <FooterUl {...Links.important_links} />
      <FooterUl {...Links.support_links} />
      <FooterUl {...Links.overview_links} />
    </div>
  );
}
