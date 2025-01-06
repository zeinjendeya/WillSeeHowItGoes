"use client";

import { useState } from "react";
import RatePage from "./ratePage";
import CommentFooter from "./commentFoot";
import CommentSection from "./commentSection";
import Comments from "./comments.json";
import Comment from "./comment";
import CommentHead from "./commentHead";

export default function CommentLG({ shown }: { shown: boolean }) {
  const [comment, setComment] = useState(true);

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
            <CommentHead toggleCommentView={toggleCommentView} />

            <CommentSection
              toggleCommentView={toggleCommentView}
              comment={comment}
            />
          </div>

          <div className="w-full flex flex-col justify-start">
            <h2 className="flex justify-end pb-4 text-md font-bold">
              التعليقات
            </h2>

            {Comments.map((comment, index) => (
              <Comment key={index}
                name={comment.name}
                time={comment.time}
                comment={comment.comment}
              />
            ))}
          </div>

          <div className="w-full flex flex-col gap-4 p-7 border border-gray-300 rounded-2xl">
            <RatePage />
            <hr className="text-gray-400" />
            <CommentFooter />
          </div>
        </div>
      </div>
    )
  );
}
