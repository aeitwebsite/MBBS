"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  "/images/banner-3.jpg",
  "/images/banner66.jpeg",
  "/images/banner33.jpeg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-full h-[calc(100vh-110px)] overflow-hidden font-sans">
      {/* Background Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Hero Image"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Centered Content Container - Matching Johns Hopkins Typography & Style */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
        {/* Shield Logo Overlay */}
        <div className="mb-3">
          <Image
            src="/images/logo_home.png"
            width={80}
            height={80}
            alt="Alvas Shield"
            className="brightness-0 invert object-contain"
          />
        </div>

        {/* Institution Title (Matching Johns Hopkins serif, capitalization, and tracking) */}
        <div className="font-serif text-2xl md:text-[38px] tracking-[0.2em] font-normal text-white uppercase select-none leading-none">
          ALVA&apos;S
        </div>
        <div className="font-serif text-base md:text-xl font-light text-gray-200 mt-2 select-none">
          Institute of Medical Sciences & Research Centre
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-14 h-[1px] bg-[#EAAA00] my-5" />

        {/* Tagline */}
        <h1 className="font-serif text-2xl md:text-3xl lg:text-[40px] font-light max-w-4xl leading-tight text-white select-none">
          A Centre of Excellence in Medical Education, Research &amp; Healthcare Delivery
        </h1>

        {/* Admissions Link */}
        <Link
          href="/admissions"
          className="mt-8 inline-block bg-[#EAAA00] hover:bg-[#d19c00] text-black font-black px-8 py-3.5 text-[13px] tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md rounded"
        >
          Explore Admissions
        </Link>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-6 md:left-12 z-30 flex items-center gap-3">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/50 bg-black/35 hover:bg-black/60 transition text-white"
          aria-label={isPlaying ? "Pause background slideshow" : "Play background slideshow"}
        >
          {isPlaying ? (
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5 ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          className="px-4 py-1.5 rounded-full border border-white/50 bg-black/35 hover:bg-black/60 transition text-[11px] uppercase tracking-wider font-semibold text-white"
          onClick={() => alert("Transcript: Welcome to Alva's Institute of Medical Sciences and Research Centre.")}
        >
          Transcript
        </button>
      </div>
    </div>
  );
}
