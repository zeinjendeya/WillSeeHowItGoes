import { FaRegFaceFrownOpen, FaRegFaceSmile } from "react-icons/fa6";

export default function CommentFooter() {
  return (
    <div className="flex md:flex-row-reverse flex-col justify-between gap-3">
      <div className="flex lg:flex-row-reverse flex-col justify-start gap-3 w-full">
        <h2 className="place-content-end flex text-btn-sm font-bold">
          هل كان المحتوي مفيد لك
        </h2>
        <div className="flex flex-row-reverse lg:place-content-center place-content-end gap-2">
          <button className="label11 font-medium flex cursor-pointer items-center justify-center rounded-full text-center hover:opacity-80 bg-green-100 w-full md:w-auto h-9 text-green-700 gap-1.5 p-4">
            مفيد
            <FaRegFaceSmile className=" w-5 h-5" />
          </button>
          <button className="label11 font-medium flex cursor-pointer items-center justify-center rounded-full text-center hover:opacity-80 bg-red-100 w-full md:w-auto h-9 text-red-700 gap-1.5 p-4">
            غير مفيد
            <FaRegFaceFrownOpen className=" w-5 h-5" />
          </button>
        </div>
      </div>
      <p className="text-btn-sm w-full md:block flex lg:justify-start justify-end gap-1">
        أعجب <span className="text-[#006946]">80</span> من الزوار بمحتوى الصفحة
        من أصل <span className="text-[#006946]">98</span> مشاركة
      </p>
    </div>
  );
}
