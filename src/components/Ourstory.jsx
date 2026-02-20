"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Ourstory() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="w-full px-6 md:px-[12%]">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 md:gap-20 items-center">

          {/* IMAGE — FROM LEFT (LIGHT → DARK, ONCE, SLOW) */}
          <motion.div
            initial={{ x: -80, opacity: 0.2, filter: "blur(4px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 2.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="w-full px-2 md:px-4"
          >
            <div className="relative w-full h-[420px] md:w-[320px] md:h-[420px] bg-white p-2 shadow-md rounded-xl mx-auto md:mx-0">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/banner-4.jpg"
                  alt="College Building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* CONTENT — FROM RIGHT (LIGHT → DARK, ONCE, SLOW) */}
          <motion.div
            initial={{ x: 80, opacity: 0.2, filter: "blur(4px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 2.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative px-2 md:px-6"
          >
            <h2 className="text-sm tracking-widest text-gray-500 uppercase mb-3">
              Our Story
            </h2>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              A Legacy of Care.
              <br />
              A Future of Excellence.
            </h1>

            <p className="text-gray-700 text-[16px] md:text-[17px] leading-[1.8] text-justify mb-6">
              Alva’s Institute of Medical Sciences and Research Centre (AIMSRC)
              was established in 2026 as a proud unit of Alva’s Education
              Foundation, carrying forward a rich legacy of service,
              compassion, and academic excellence.
            </p>

            <p className="text-gray-700 text-[16px] md:text-[17px] leading-[1.8] text-justify mb-8">
              Our journey is deeply rooted in the remarkable 40-year history
              of Alva’s Health Centre, a trusted name in healthcare that has
              served generations with dedication and integrity.
            </p>

            {/* READ MORE */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-blue-700 font-semibold group"
            >
              <span>{expanded ? "Read Less" : "Read More"}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ➜
              </span>
            </button>

            {/* EXPANDED CONTENT */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-10 space-y-6"
                >
                  <p className="text-gray-700 text-[16px] leading-[1.8] text-justify">
                    Guided by strong ethical values and academic discipline,
                    AIMSRC is committed to shaping compassionate medical
                    professionals equipped to serve society with excellence.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
