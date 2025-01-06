"use client";

import { useState } from "react";

export default function Rating() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };
  return (
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
  );
}
