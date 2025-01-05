"use client";

import CommentSvg from "@/public/commentIcon.svg";
import Image from "next/image";
import { FaRegFaceFrownOpen, FaRegFaceSmile } from "react-icons/fa6";
import { useState } from "react";

export default function CommentLG({ shown }: { shown: boolean }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [comment, setComment] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const toggleCommentView = (show: boolean | null) => {
    if (show) {
      setComment(show);
    } else {
      setComment(!comment);
    }
  };

  return (
    shown && (
      <div className="section-container flex flex-col relative px-6 py-2">
        <div className="bg-white ms-4 me-4 rounded-lg flex flex-col gap-8 px-4 py-8">
          <div className="w-full">
            <div className="p-6 relative shadow-component border border-[#e1e2e1] rounded-2xl bg-triangle-pattern">
              <div className="flex flex-row-reverse items-center w-full gap-3">
                <Image src={CommentSvg} alt="comment svg" />
                <div className="flex flex-row-reverse justify-between w-full gap-4">
                  <div className="flex flex-row-reverse items-center w-full gap-3">
                    <h2 className="w-fit flex place-content-center font-bold text-md">
                      تعليقات واقتراحات
                    </h2>
                    <div className="w-[2px] h-full border border-grey-700 bg-grey-500"></div>
                    <p className="font-normal place-content-center text-md">
                      للاستفسارات أو التعليقات حول الخدمات البلدية، يُرجى تعبئة
                      البيانات المطلوبة
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCommentView(null);
                    }}
                    className="flex justify-center rounded-full text-white text-btn-sm w-1/5 flex px-6 py-3 bg-[#006946]"
                  >
                    أضف تعليق
                  </button>
                </div>
              </div>
            </div>

            {/* make the toggled add comment section */}
            <div className={`relative shadow-component border mt-11 border-[#e1e2e1] rounded-2xl ${comment ? 'h-auto opacity-100 py-9 px-7' : 'h-0 opacity-0'}`} style={{ transition: '0.5s ease, height 0.5s ease' }}>
                <h2 className="text-md font-bold flex justify-end">
                  أترك تعليقك
                </h2>

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
                      className="border-gray-400 border-[2px] h-5 w-5 rounded-sm border"
                    />
                    <label className="p1 pe-3">
                      اوافق على الشروط والاحكام و سياسة الخصوصية واتحمل مسؤولية
                      التعليق
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
          </div>

          <div className="w-full flex flex-col justify-start">
            <h2 className="flex justify-end pb-4 text-md font-bold">
              التعليقات
            </h2>

            <div className="w-full flex flex-row-reverse gap-3 p-4 rounded-lg bg-[#f0f0f0] mt-4 border border-[#f0f0f0]">
              <svg
                stroke="currentColor"
                fill="#9c9d9c"
                stroke-width="0"
                viewBox="0 0 496 512"
                className="flex justify-center items-center w-16 h-16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
              </svg>

              <div className="w-full flex flex-col gap-2 place-self-center">
                <div className="flex flex-row-reverse justify-between">
                  <p className="h6 line-clamp-3">أحمد عبدالله</p>
                  <p className="label11">20/10/2024</p>
                </div>

                <p className="flex justify-end label11">
                  الاستعلام عن معاملة الكترونية&nbsp;· وصف الخدمة. يقوم المستفيد
                  بالاستعلام عن المعاملة التي تم إنشاءها من قبله وآخر عملية تمت
                  عليها من الاتصالات الادارية · اخر تحديث
                </p>
              </div>
            </div>

            <div className="w-full flex flex-row-reverse gap-3 p-4 rounded-lg bg-[#f0f0f0] mt-4 border border-[#f0f0f0]">
              <svg
                stroke="currentColor"
                fill="#9c9d9c"
                stroke-width="0"
                viewBox="0 0 496 512"
                className="flex justify-center items-center w-16 h-16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
              </svg>

              <div className="w-full flex flex-col gap-2 place-self-center">
                <div className="flex flex-row-reverse justify-between">
                  <p className="h6 line-clamp-3">مجيد مكارم</p>
                  <p className="label11">20/10/2024</p>
                </div>
                <p className="flex justify-end label11">
                  الاستعلام عن معاملة الكترونية&nbsp;· وصف الخدمة. يقوم المستفيد
                  بالاستعلام عن المعاملة التي تم إنشاءها من قبله وآخر عملية تمت
                  عليها من الاتصالات الادارية · اخر تحديث
                </p>
              </div>
            </div>

            <div className="w-full flex flex-row-reverse gap-3 p-4 rounded-lg bg-[#f0f0f0] mt-4 border border-[#f0f0f0]">
              <svg
                stroke="currentColor"
                fill="#9c9d9c"
                stroke-width="0"
                viewBox="0 0 496 512"
                className="flex justify-center items-center w-16 h-16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
              </svg>

              <div className="w-full flex flex-col gap-2 place-self-center">
                <div className="flex flex-row-reverse justify-between">
                  <p className="h6 line-clamp-3">ولاء عبدالعزيز</p>
                  <p className="label11">20/10/2024</p>
                </div>
                <p className="flex justify-end label11">
                  الاستعلام عن معاملة الكترونية&nbsp;· وصف الخدمة. يقوم المستفيد
                  بالاستعلام عن المعاملة التي تم إنشاءها من قبله وآخر عملية تمت
                  عليها من الاتصالات الادارية · اخر تحديث
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 p-7 border border-gray-300 rounded-2xl">
            <div className=" flex flex-row-reverse justify-between">
              <div className="flex flex-row-reverse gap-2 items-center">
                <h6 className="text-sm font-bold">تقييمك للمحتوى</h6>
                <div className="flex gap-1 flex-row-reverse items-center">
                  <div className="flex flex-row-reverse items-center">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <span
                        key={index}
                        className={`h4 cursor-pointer transition-colors duration-200 ${
                          hoverIndex !== null && index <= hoverIndex
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }`}
                        style={{ fontSize: 20 }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="label11">(22 تقييم)</span>
                </div>
              </div>
              <div className="text-btn-sm flex flex-row-reverse gap-2">
                <p className=" place-content-center">:اخر تحديث</p>
                <p className=" place-content-center">02/11/2024</p>
              </div>
            </div>
            <hr className="text-gray-400" />
            <div className="flex flex-row-reverse justify-between gap-3">
              <div className="flex flex-row-reverse justify-end gap-3">
                <h2 className="place-content-center text-btn-sm font-bold">
                  هل كان المحتوي مفيد لك
                </h2>
                <div className="flex flex-row-reverse gap-2">
                  <button className="label11 font-medium flex cursor-pointer items-center justify-center rounded-full text-center transition-opacity duration-300 ease-in-out hover:opacity-80 bg-green-100 w-full md:w-auto h-9 p2 text-green-700 gap-1.5 p-4">
                    مفيد
                    <FaRegFaceSmile className=" w-5 h-5" />
                  </button>
                  <button className="label11 font-medium flex cursor-pointer items-center justify-center rounded-full text-center transition-opacity duration-300 ease-in-out hover:opacity-80 bg-red-100 w-full md:w-auto h-9 p2 text-red-700 gap-1.5 p-4">
                    غير مفيد
                    <FaRegFaceFrownOpen className=" w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-btn-sm">
                أعجب <span className="text-[#006946]">80</span> من الزوار بمحتوى
                الصفحة من أصل <span className="text-[#006946]">98</span> مشاركة
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
