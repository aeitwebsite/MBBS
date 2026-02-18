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

      <Image
        src="/images/logo_home.png"
        width={120}
        height={120}
        alt="Alvas Logo"
        priority
      />

      <h1 className="mt-6 text-[22px] md:text-[28px] font-semibold text-[#0A0B49]">
        ALVA&apos;S INSTITUTE OF MEDICAL SCIENCES
        <br />
        AND RESEARCH CENTRE
      </h1>

      <p className="mt-3 max-w-xl text-sm md:text-base text-gray-600">
        Dedicated to excellence in medical education, research, and compassionate healthcare.
      </p>

    </div>
  );
}
