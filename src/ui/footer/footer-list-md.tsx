import Dropdown from "./dropdown-footer"
import Links from "./Links.json"

export default function FooterListMd() {
  return (
    <div className="w-full h-auto text-white lg:hidden flex flex-col-reverse items-end gap-2">
        <Dropdown {...Links.important_links}/>
        <Dropdown {...Links.support_links}/>
        <Dropdown {...Links.overview_links}/>
    </div>
  );
}
