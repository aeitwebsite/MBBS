'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroCarousel() {

  const IMAGES = [
    "/images/banner-3.jpg",
    "/images/banner66.jpeg",
    "/images/banner33.jpeg",
  ];

  const images = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Infinite loop fix
  useEffect(() => {
    if (index === images.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(images.length - 2);
      }, 700);
    }
    const t = setTimeout(() => setTransition(true), 50);
    return () => clearTimeout(t);
  }, [index, images.length]);

  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
      className="overflow-hidden bg-[#f4f6f9]"
    >
      <div
        className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="
              min-w-full
              h-[220px]
              sm:h-[300px]
              md:h-[380px]
              lg:h-[460px]
              flex items-center justify-center
              bg-[#f4f6f9]
            "
          >
            {/* 🔽 THIS WRAPPER IS THE REAL ZOOM-OUT FIX */}
            <div className="
              relative
              w-full
              max-w-[1100px]
              h-full
              px-6
              sm:px-12
              md:px-20
              lg:px-28
            ">
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                priority={i === 1}
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-contain object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
