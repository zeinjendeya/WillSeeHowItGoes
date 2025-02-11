import CommentSvg from "@/public/commentIcon.svg";
import Image from "next/image";

interface toggleCommentViewFunc {
  toggleCommentView: (shown: null) => void;
}

export default function CommentHead({
  toggleCommentView,
}: toggleCommentViewFunc) {
  return (
    <div className="p-6 relative shadow-component border border-gray-500 rounded-2xl bg-triangle-pattern">
      <div className="flex flex-row-reverse lg:items-center items-start w-full gap-3">
        <Image src={CommentSvg} alt="comment svg" />

        <div className="flex md:flex-row-reverse items-end flex-col justify-between w-full gap-4">
          <div className="flex md:flex-row-reverse flex-col md:items-center items-end w-full gap-3">
            <h2 className="w-fit text-right flex place-content-center font-bold text-md">
              تعليقات واقتراحات
            </h2>

            <div className="w-[2px] h-full border border-grey-700 bg-grey-500"></div>

            <p className="font-normal text-right place-content-center text-md">
              للاستفسارات أو التعليقات حول الخدمات البلدية، يُرجى تعبئة البيانات
              المطلوبة
            </p>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleCommentView(null);
            }}
            className="justify-center rounded-full text-white text-btn-sm md:w-1/5 w-2/5 flex px-6 py-3 bg-[#006946]"
          >
            أضف تعليق
          </button>
        </div>
      </div>
    </div>
  );
}
