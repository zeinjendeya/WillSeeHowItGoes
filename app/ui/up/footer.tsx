// this will be:
// links
// logo
// end bar with @ al Riyadh 202(5)

import Image from "next/image";
import Logo from "@/public/alriyadh.f93c4839.svg";
import Vision from "@/public/vision.svg";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-between mt-14">
      <div className="flex justify-between flex-row-reverse bg-[#006946] gap-4 px-8 py-8">
        <div className="w-1/4 flex flex-col gap-4 items-center justify-between">
          <Image src={Logo} alt="logo" width={159} height={159} />
          <Image src={Vision} alt="logo" width={159} height={159} />
        </div>

        <div className="flex justify-end gap-4 pb-4 px-2 w-3/4">
          <div className="w-full h-auto text-white flex flex-col items-end gap-2 px-8">
            <h3 className="w-fit font-bold" style={{ fontSize: 18 }}>
              روابط مهمة
            </h3>

            <ul
              className="w-full flex flex-col items-end gap-2"
              style={{ fontSize: 14 }}
            >
              <li className="flex items-center">
                <a className="" href="/ar">
                  منصة الخدمة الوطنية
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/open-data">
                  منصة البيانات المفتوحة
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  منصة الاستشارات القانونية
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  منصة المشاركة المجتمعية
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  الهيئة الملكية{" "}
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  دليل وفعاليات الرياض
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  التوظيف
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  المستشار العقاري
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full h-auto text-white flex flex-col items-end gap-2 px-8">
            <h3 className="w-fit font-bold" style={{ fontSize: 18 }}>
              الدعم و المساندة
            </h3>

            <ul
              className="w-full flex flex-col items-end gap-2"
              style={{ fontSize: 14 }}
            >
              <li className="flex items-center">
                <a className="" href="/ar/contact-private-sector">
                  تواصل معنا
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/complaint">
                  رفع شكوى
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/corruption">
                  التبليغ عن فساد
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  الأسئلة الشائعة
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  مركز الدعم الموحد
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  الدعم الفني بلغة الإشارة
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  سياسة حق الحصول{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full h-auto text-white flex flex-col items-end gap-2 px-8">
            <h3 className="w-fit font-bold" style={{ fontSize: 18 }}>
              نظرة عامة
            </h3>

            <ul
              className="w-full flex flex-col items-end gap-2"
              style={{ fontSize: 14 }}
            >
              <li className="flex items-center">
                <a className="" href="/ar/content/about-us">
                  من نحن
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/news">
                  نبذة عن البوابة
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/news">
                  أضف فكرة
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/add-idea">
                  الخصوصية وسرية المعلومات
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  شروط الإستخدام
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/news">
                  الأخبار
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  النشرة البريدية
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  إتفاقية مستوى الخدمة
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/portal-statistics">
                  إحصاءات أداء المنصة والخدمات
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar/images-gallery">
                  صور وأرسل
                </a>
              </li>
              <li className="flex items-center">
                <a className="" href="/ar">
                  سياسة الاستخدام الآمن للتطبيقات
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex text-white flex-row-reverse justify-between bg-[#01543A] px-8 py-7">
        <p>جميع حقوق الطبع محفوظةلأمانة منطقة الرياض © 2024</p>
        <a href="">خريطة الموقع</a>
        <div className="flex justify-around flex-row-reverse items-center">
          <span className="ms-3">
            <RiLinkedinBoxLine className="w-6 h-6" />
          </span>
          <span className="ms-3">
            <LuInstagram className="w-6 h-6" />
          </span>
          <span className="ms-3">
            <RiTwitterLine className="w-6 h-6" />
          </span>
        </div>
      </div>
    </footer>
  );
}
