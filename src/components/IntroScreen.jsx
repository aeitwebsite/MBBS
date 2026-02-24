"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function IntroScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();   // just hide intro
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-center px-4">

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.7s; }
        .delay-3 { animation-delay: 1.1s; }
      `}</style>

      <div className="animate delay-1">
        <Image
          src="/images/logo_home.png"
          width={120}
          height={120}
          alt="Alvas Logo"
          priority
        />
      </div>

      <h1 className="mt-6 text-[22px] md:text-[28px] font-semibold text-[#0A0B49] animate delay-2">
        ALVA&apos;S INSTITUTE OF MEDICAL SCIENCES
        <br />
        AND RESEARCH CENTRE
      </h1>

      <p className="mt-3 max-w-xl text-sm md:text-base text-gray-600 animate delay-3">
        Dedicated to excellence in medical education, research, and compassionate healthcare.
      </p>

    </div>
  );
}