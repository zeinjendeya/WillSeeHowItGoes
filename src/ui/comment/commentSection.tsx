export default function CommentSection({
  toggleCommentView,
  comment,
}: {
  toggleCommentView: (shown: boolean) => void;
  comment: boolean;
}) {
  return (
    <div
      className={`relative shadow-component border mt-11 border-[#e1e2e1] rounded-2xl ${comment ? "h-auto opacity-100 py-9 px-7" : "h-0 opacity-0"}`}
      style={{ transition: "0.5s ease, height 0.5s ease" }}
    >
      <h2 className="text-md font-bold flex justify-end">أترك تعليقك</h2>

      <div className="grid w-full grid-cols-1 gap-6">
        <div className="mt-4 flex flex-col justify-end gap-2 w-full">
          <label className="text-gray-800 flex justify-end">
            <span className="flex flex-row-reverse text-btn-sm">
              :الاسم<span className="text-red-400"> *</span>
            </span>
          </label>
          <input
            type="text"
            autoComplete="on"
            className="font-medium w-full rounded-[10px] border   border-gray-300 px-3 py-2 bg-white text-sm placeholder:text-grey-500 text-right"
            id="name"
            placeholder=":الاسم"
          />
        </div>

        <div className="mt-4 flex flex-col justify-end gap-2 w-full">
          <label className="text-gray-800 flex justify-end">
            <span className="flex flex-row-reverse text-btn-sm">
              :رقم الجوال<span className="text-red-400"> *</span>
            </span>
          </label>
          <input
            type="number"
            autoComplete="on"
            className="font-medium w-full rounded-[10px] border   border-gray-300 px-3 py-2 bg-white text-sm placeholder:text-grey-500 text-right"
            id="mobileNumber"
            placeholder=":رقم الجوال"
          />
        </div>

        <div className="mt-4 flex flex-col justify-end gap-2 w-full">
          <label className="text-gray-800 flex justify-end">
            <span className="flex flex-row-reverse text-btn-sm">
              :البريد الالكتروني
              <span className="text-red-400"> *</span>
            </span>
          </label>
          <input
            type="email"
            autoComplete="on"
            className="font-medium w-full rounded-[10px] border border-gray-300 px-3 py-2 bg-white text-sm placeholder:text-grey-500 text-right"
            id="email"
            placeholder=":البريد الالكتروني"
          />
        </div>

        <div className="mt-4 flex flex-col justify-end gap-2 w-full">
          <label className="text-gray-800 flex justify-end">
            <span className="flex flex-row-reverse text-btn-sm">
              :التعليق<span className="text-red-400"> *</span>
            </span>
          </label>
          <textarea
            autoComplete="on"
            rows={3}
            className="font-medium w-full rounded-[10px] border border-gray-300 px-3 py-2 bg-white text-sm text-right placeholder:text-grey-500"
            id="comment"
            placeholder="التعليق"
          ></textarea>
        </div>

        <div className="flex flex-row-reverse gap-1 mt-8">
          <input
            type="checkbox"
            id="terms"
            className="border-gray-400 border-[2px] h-5 w-5 rounded-sm"
          />
          <label className="p1 pe-3">
            اوافق على الشروط والاحكام و سياسة الخصوصية واتحمل مسؤولية التعليق
          </label>
        </div>

        <div className="flex flex-col gap-3">
          <button
            disabled
            type="button"
            className="mt-4 bg-[#006946] text-white py-3 w-full rounded-full opacity-50"
          >
            إرسال
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleCommentView(false);
            }}
            className="mt-4 border border-[#006946] text-[#006946] rounded-full py-3"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
