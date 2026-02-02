"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Ourstory() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-16">
      <div className="w-full px-6 md:px-[12%]">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 md:gap-20 items-start">

          {/* IMAGE */}
          <div className="w-full px-2 md:px-4">
            <div
              className="
                relative
                w-full
                h-[420px]
                sm:h-[460px]
                md:w-[320px]
                md:h-[420px]
                bg-white
                p-2
                shadow-md
                rounded-xl
                mx-auto md:mx-0
              "
            >
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
          </div>

          {/* CONTENT */}
          <div className="relative px-2 md:px-6 max-w-none">

            <h2 className="text-sm tracking-widest text-gray-500 uppercase mb-3">
              Our Story
            </h2>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              A Legacy of Care.<br />
              A Future of Excellence.
            </h1>

            {/* MAIN TEXT */}
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
                  <h3 className="text-xl font-semibold text-gray-900">
                    From Healing Hands to Learning Minds
                  </h3>

                  <p className="text-gray-700 text-[16px] md:text-[17px] leading-[1.8] text-justify">
                    For over four decades, Alva’s Health Centre has stood as a
                    pillar of quality medical care, earning the trust of the
                    community through patient-centred treatment, ethical
                    practice, and unwavering commitment to health and
                    wellbeing.
                  </p>

                  <p className="text-gray-700 text-[16px] md:text-[17px] leading-[1.8] text-justify">
                    That vision gave birth to Alva’s Institute of Medical
                    Sciences and Research Centre—bridging healthcare service
                    and medical education through structured learning,
                    research, and innovation.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900">
                    Built on Values, Driven by Purpose
                  </h3>

                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Compassion in Care – Treating every patient with dignity</li>
                    <li>Excellence in Education – Future-ready medical training</li>
                    <li>Integrity in Practice – Highest ethical standards</li>
                    <li>Service to Society – Community health responsibility</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900">
                    Looking Ahead
                  </h3>

                  <p className="text-gray-700 text-[16px] md:text-[17px] leading-[1.8] text-justify">
                    Anchored by 40 years of healthcare excellence and energized
                    by a new generation of learners, AIMSRC stands as a symbol
                    of trust, progress, and hope.
                  </p>

                  <p className="font-semibold text-gray-900">
                    From a healing legacy to a learning future — this is our story.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
