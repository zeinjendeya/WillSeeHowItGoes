// this will have:
// links in our website navbar
// buttons
// logo

// import Link from "next/link";
import SvgSrc from "@/public/AmanaLogo.svg";
import NavBG from "@/public/nav-bg.jpg";
import Image from "next/image";
import {
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import HeaderTag from "./header-tag";
import Dropdown from "@/app/ui/up/dropdown";

// text area to be toggled appear or not in certain pages
export default function NavBar() {
  const aboutAmana = {
    'name' : 'عن الأمانة',
    'links' : [{href:'#',label:'عن مدينة الرياض'},{href:'##',label:'عن الأمانة'},{href:'###',label:'البلديات'}, {href:'####',label:'أمناء الرياض'},{href:'#####',label:'المبادرات و المشاريع'},{href:'######',label:'شركاء الأمانة المحليين'}, {href:'#######',label:'إحصائيات البوابة'},{href:'########',label:'التنمية المستدامة'},{href:'#########',label:'الجوائز'}, {href:'##########',label:'الأمانة في أرقام'}]
  };

  const openDataSet = {
    'name': 'البيانات المفتوحة',
    'links' : [{href: '#', label: 'البيانات المفتوحة'}, {href: '##', label: 'البيانات الحكومية المفتوحة'}, {href: '###', label: 'مجموعات  البيانات'}, {href: '####', label: 'البوابة الجيومكانية'}, {href: '#####', label: 'طلب اضافة مفوض'}, {href: '######', label: 'قصص نجاح البيانات المفتوحة'}]
  }
  return (
    <div
      className="bg-center bg-no-repeat bg-cover rounded-b-2xl relative z-50 hidden md:block text-white"
      style={{ backgroundImage: `url(${NavBG.src})` }}
    >
      <nav className="px-8 py-4">
        <div className="items-center justify-start hidden w-full gap-4 px-4 pt-2 pb-2 md:flex">
          <a
            className="inline-flex items-center transition-colors text-base cursor-pointer bg-transparent p1 text-rm-white hover:bg-transparent hover:no-underline undefined"
            href="#"
            style={{ fontSize: 14 }}
          >
            EN
          </a>
          <Cog6ToothIcon
            stroke="currentColor"
            fill="none"
            strokeWidth={1.5}
            className="flex justify-center w-5 h-5 text-text-white"
          />
          <MagnifyingGlassIcon className="flex justify-center w-6 h-6 text-text-white" />
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="hidden md:block">
            <a
              style={{ fontSize: 18 }}
              className="bg-white text-green-800 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white"
            >
              تسجيل الدخول
            </a>
          </div>

          <ul
            style={{ fontSize: 14 }}
            className=" space-x-2 hidden md:flex gap-5 flex-row-reverse"
          >
            <Dropdown gridCols="2" className="flex items-start gap-0.5" {...aboutAmana} />
            {/* <li className="flex items-start gap-0.5 flex-row-reverse">
              <a href="#" className="flex items-center gap-0.5">
                عن الأمانة
              </a>
              <span className="ms-1 me-0">
                <ChevronDownIcon className="flex justify-center w-5 h-5 text-text-white" />
              </span>
            </li> */}

            <li className="flex items-start gap-0.5 flex-row-reverse">
              <a href="#" className="flex items-center gap-0.5">
                الخدمات الالكترونية
              </a>
            </li>

            <li className="flex items-start gap-0.5 flex-row-reverse">
              <a href="#" className="flex items-center gap-0.5">
                الإعلام و الاتصال
              </a>
            </li>

              <Dropdown gridCols="1" {...openDataSet} className="flex items-start gap-0.5 flex-row-reverse"/>

            <li className="flex items-start gap-0.5 flex-row-reverse">
              <a href="#" className="flex items-center gap-0.5">
                المشاركة الالكترونية
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-between md:w-fit gap-4">
            <Image src={SvgSrc} alt="Amana Logo" width={220} height={93} />
          </div>
        </div>
      </nav>

      <HeaderTag show={true} />
    </div>
  );
}
