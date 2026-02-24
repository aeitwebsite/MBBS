"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ChairmanMessage() {
  return (
    <section className="w-full bg-amc-grayStrip py-16 md:py-20 overflow-hidden">
      
      {/* ✅ CENTERED CONTAINER WITH EQUAL LEFT & RIGHT SPACE */}
      <div className="mx-auto w-full max-w-screen-sm px-4 md:max-w-none md:px-[12%]">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 md:gap-20 items-start">

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
            <div
              className="
                relative
                w-[260px]
                h-[380px]
                sm:w-[300px]
                sm:h-[420px]
                md:w-[320px]
                md:h-[420px]
                bg-white
                p-2
                shadow-md
                mx-auto md:mx-0
              "
            >
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

          {/* CONTENT */}
          <motion.div
            initial={{ x: 80, opacity: 0.2, filter: "blur(4px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 2.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative text-center md:text-left"
          >
            {/* TITLE */}
            <h2 className="text-[22px] sm:text-2xl md:text-[36px] font-extrabold text-[#2b1a63]">
              Message From The Chairman
            </h2>

            {/* PARAGRAPH */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-base md:text-[18px] leading-relaxed text-[#333] text-justify">
              Knowledge is power and education is a path to imbibe it. Alva’s
              Education Foundation (AEF) purports to do exactly the same that is,
              transform education into knowledge. It is knowledge that will
              empower the youth of today to understand the information
              explosions taking place in the rapidly globalizing world.
              Personal integrity and ethics can be maintained only with a
              strong mind and a mind can become strong only with knowledge.
            </p>

            {/* AUTHOR */}
            <div className="mt-6 md:mt-8">
              <div className="text-[16px] sm:text-[18px] font-bold text-[#000]">
                Dr. Mohan Alva
              </div>
              <div className="mt-1 text-[14px] sm:text-[16px] text-[#444]">
                Chairman, Alva’s Institute of Medical Sciences and Research Centre, Moodubidire.
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
              <Link
                href="/about/chairman-message"
                className="inline-block bg-[#14D7E7] hover:bg-[#12c4d3] text-black font-extrabold px-7 sm:px-8 py-3 text-[13px] sm:text-[14px] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg rounded"
              >
                Read Full Message
              </Link>
            </div>

            {/* DECORATIVE QUOTE */}
            <div className="hidden md:block absolute right-0 bottom-0 text-[180px] font-bold text-[#e0e0e0] leading-none pointer-events-none">
              "
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}