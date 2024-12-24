// this will have:
// links in our website navbar
// buttons
// logo

// import Link from "next/link";
import SvgSrc from "@/public/AmanaLogo.svg";
import NavBG from "@/public/nav-bg.jpg";
import Image from "next/image";
import Dropdown from "@/app/ui/up/dropdown";
import { url } from "inspector";

// text area to be toggled appear or not in certain pages
export default function NavBar() {
  return (
    <div className="relative flex h-auto py-4 px-6 items-center justify-between text-white" style={{ backgroundImage: `url(${NavBG.src})` }}>
      <div className="hidden md:block">
        <button>Sign In</button>
      </div>

      <div className="hidden md:flex gap-5 space-x-1 rtl:space-x-reverse flex-0.7">
        <div className="">
          <Dropdown dropName="عن الأمانة" links={[{label: "شركاؤنا", href: "/up"}, {label: "شركاؤنا", href: "/up"}, {label: "شركاؤنا", href: "/up"}]} />
        </div>

        {/* <div className="">الإعلام و الاتصال</div>

        <Link className="" href="/up/contact">
          المشاركة الاكلترونية
        </Link>

        <div className="">البيانات المفتوحة</div>

        <div className="">الخدمات الالكترونية</div> */}
      </div>

      <div className="flex items-center justify-between md:w-fit gap-4">
        <Image src={SvgSrc} alt="Amana Logo" width={220} height={93} />
      </div>
    </div>
  );
}
