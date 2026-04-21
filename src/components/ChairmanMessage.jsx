"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ChairmanMessage() {
  return (
    <section className="w-full bg-amc-grayStrip pt-2 pb-12 md:pt-3 md:pb-16">

      {/* MESSAGE BLOCK CONTAINER */}

<div className="relative w-full px-4 md:px-16 overflow-hidden">
     {/* CENTER DNA */}
<div className="absolute left-1/2 top-[63%] -translate-x-1/2 -translate-y-1/2 w-[200vw] max-w-none flex items-center justify-center pointer-events-none md:top-1/2 md:max-w-none">
<motion.svg
  className="w-[3100px] h-[980px] opacity-20 rotate-[-48deg] translate-x-4 translate-y-6
           md:w-[1000px] md:h-[520px] md:rotate-[-18deg] md:translate-x-0 md:translate-y-0"
  viewBox="0 0 1600 420"
  fill="none"
>

{/* ANIMATED DNA GROUP */}
<motion.g
  animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
  {/* DNA CONNECTING BARS */}
  {[
    { x: 75, y1: 300, y2: 140 },
    { x: 150, y1: 320, y2: 120 },
    { x: 225, y1: 300, y2: 137 },
    { x: 300, y1: 200, y2: 240 },
    { x: 375, y1: 180, y2: 260 },
    { x: 450, y1: 160, y2: 280 },
    { x: 525, y1: 180, y2: 260 },
    { x: 600, y1: 200, y2: 240 },
    { x: 675, y1: 300, y2: 137 },
    { x: 750, y1: 320, y2: 120 },
    { x: 825, y1: 297, y2: 140 },
    { x: 900, y1: 240, y2: 200 },
    { x: 975, y1: 260, y2: 180 },
    { x: 1050, y1: 280, y2: 160 },
    { x: 1125, y1: 260, y2: 180 },
    { x: 1200, y1: 240, y2: 200 },
    { x: 1275, y1: 300, y2: 140 },
    { x: 1350, y1: 320, y2: 120 },
    { x: 1425, y1: 300, y2: 140 },
    { x: 1500, y1: 240, y2: 200 },
  ].map((bar, index) => (
    <motion.line
      key={index}
      x1={bar.x}
      y1={bar.y1}
      x2={bar.x}
      y2={bar.y2}
      stroke="#6b7280"
      strokeLinecap="round"
      animate={{ 
        opacity: [0.2, 1, 0.2],
        strokeWidth: [3, 6, 3],
        stroke: ["#6b7280", "#14D7E7", "#6b7280"]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.15
      }}
    />
  ))}

  {/* TOP HELIX */}
  <motion.path
    d="M0 200 Q150 40 300 200 T600 200 T900 200 T1200 200 T1500 200 T1600 200"
    stroke="#14D7E7"
    strokeLinecap="round"
    animate={{ 
      opacity: [0.5, 1, 0.5], 
      strokeWidth: [4, 8, 4] 
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* BOTTOM HELIX */}
  <motion.path
    d="M0 240 Q150 400 300 240 T600 240 T900 240 T1200 240 T1500 240 T1600 240"
    stroke="#2b1a63"
    strokeLinecap="round"
    animate={{ 
      opacity: [0.4, 1, 0.4], 
      strokeWidth: [4, 8, 4] 
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
  />
</motion.g>

</motion.svg>

</div>

       {/* CONTENT */}
<div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-8 md:px-28 min-h-[450px] flex items-center overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 md:gap-20 items-start">

    {/* IMAGE */}
    <motion.div
      initial={{ x: -80, opacity: 0.2, filter: "blur(4px)" }}
      whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="w-full flex justify-center md:block"
    >

      <div className="relative w-[320px] h-[420px] bg-white p-2 shadow-md">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/Chairman.jpeg"
            alt="Chairman"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

    </motion.div>

    {/* MESSAGE */}
    <motion.div
      initial={{ x: 80, opacity: 0.2, filter: "blur(4px)" }}
      whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="relative text-center md:text-left "
    >

      <h2 className="text-[22px] sm:text-2xl md:text-[36px] font-extrabold text-[#2b1a63]">
        Message From The Chairman
      </h2>

      <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#333] text-justify">
        Knowledge is power and education is a path to imbibe it. Alva’s Education Foundation (AEF) purports to do exactly the same that is, transform education into knowledge.
        It is knowledge that will empower the youth of today to understand the information explosions taking place in the rapidly globalizing world. 
        Personal integrity and ethics can be maintained only with a strong mind and a mind can become strong only with knowledge.
      </p>
      <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#333] text-justify"></p>
     {/* DESKTOP QUOTE ONLY */}
<div className="hidden md:block absolute bottom-6 right-6 text-[150px] font-bold text-gray-300 leading-none select-none pointer-events-none">
  ,,
</div>
      <div className="mt-8">
        <div className="text-[18px] font-bold text-[#000]">
          Dr. Mohan Alva
        </div>
        <div className="mt-1 text-[16px] text-[#444]">
          Chairman, Alva’s Institute of Medical Sciences and Research Centre.
        </div>
      </div>

      <div className="mt-8 flex justify-center md:justify-start">
        <Link
          href="/about/chairman-message"
          className="inline-block bg-[#14D7E7] hover:bg-[#12c4d3] text-black font-extrabold px-7 py-3 text-[14px] transition-all duration-300 hover:scale-105 shadow-md rounded"
        >
          Read Full Message
        </Link>
      </div>

    </motion.div>

  </div>

</div>

      </div>

    </section>
  );
}