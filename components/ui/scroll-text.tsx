"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useRef } from "react";

interface InfiniteLoopProps {
  count?: number;
  textKey?: string;
  direction?: "left" | "right";
  speed?: number; // Добавляем скорость как опциональный пропс
}

const ScrollText: React.FC<InfiniteLoopProps> = ({
  count = 40,
  textKey = "music",
  direction = "left",
  speed = 0.4, // Задайте значение скорости по умолчанию
}) => {
  const t = useTranslations("InfiniteLoop");
  const marqueeRef = useRef<HTMLDivElement>(null);
  const words = Array(count).fill(t(textKey));

  useEffect(() => {
    const handleScroll = () => {
      if (marqueeRef.current) {
        const scrollTop = window.scrollY;
        const translateValue =
          direction === "right"
            ? (scrollTop * speed) % window.innerWidth
            : -(scrollTop * speed) % window.innerWidth;
        marqueeRef.current.style.transform = `translateX(${translateValue}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, direction]);

  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex items-center space-x-4 whitespace-nowrap md:space-x-8"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="text-6xl font-bold text-white lg:text-8xl xl:text-9xl"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollText;
