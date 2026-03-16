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

{/* DNA CONNECTING BARS */}
<line x1="75" y1="300" x2="75" y2="140" stroke="#6b7280" strokeWidth="4"/>
<line x1="150" y1="320" x2="150" y2="120" stroke="#6b7280" strokeWidth="4"/>
<line x1="225" y1="300" x2="225" y2="137" stroke="#6b7280" strokeWidth="4"/>
<line x1="300" y1="200" x2="300" y2="240" stroke="#6b7280" strokeWidth="4"/>
<line x1="375" y1="180" x2="375" y2="260" stroke="#6b7280" strokeWidth="4"/>
<line x1="450" y1="160" x2="450" y2="280" stroke="#6b7280" strokeWidth="4"/>
<line x1="525" y1="180" x2="525" y2="260" stroke="#6b7280" strokeWidth="4"/>
<line x1="600" y1="200" x2="600" y2="240" stroke="#6b7280" strokeWidth="4"/>
<line x1="675" y1="300" x2="675" y2="137" stroke="#6b7280" strokeWidth="4"/>
<line x1="750" y1="320" x2="750" y2="120" stroke="#6b7280" strokeWidth="4"/>
<line x1="825" y1="297" x2="825" y2="140" stroke="#6b7280" strokeWidth="4"/>
<line x1="900" y1="240" x2="900" y2="200" stroke="#6b7280" strokeWidth="4"/>
<line x1="975" y1="260" x2="975" y2="180" stroke="#6b7280" strokeWidth="4"/>
<line x1="1050" y1="280" x2="1050" y2="160" stroke="#6b7280" strokeWidth="4"/>

{/* EXTENDED BARS */}
<line x1="1125" y1="260" x2="1125" y2="180" stroke="#6b7280" strokeWidth="4"/>
<line x1="1200" y1="240" x2="1200" y2="200" stroke="#6b7280" strokeWidth="4"/>
<line x1="1275" y1="300" x2="1275" y2="140" stroke="#6b7280" strokeWidth="4"/>
<line x1="1350" y1="320" x2="1350" y2="120" stroke="#6b7280" strokeWidth="4"/>
<line x1="1425" y1="300" x2="1425" y2="140" stroke="#6b7280" strokeWidth="4"/>
<line x1="1500" y1="240" x2="1500" y2="200" stroke="#6b7280" strokeWidth="4"/>

{/* TOP HELIX */}
<path
  d="M0 200 Q150 40 300 200 T600 200 T900 200 T1200 200 T1500 200 T1600 200"
  stroke="#14D7E7"
  strokeWidth="6"
/>

{/* BOTTOM HELIX */}
<path
  d="M0 240 Q150 400 300 240 T600 240 T900 240 T1200 240 T1500 240 T1600 240"
  stroke="#2b1a63"
  strokeWidth="6"
/>

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