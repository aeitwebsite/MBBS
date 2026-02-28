"use client";

import Image from "next/image";

export default function AboutCollegePage() {
  return (
    <div className="w-full">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        About the College
      </h2>

      {/* Banner Image */}
      <div className="mb-6">
        <Image
          src="/images/banner-4.jpg"
          alt="College Building"
          width={1200}
          height={420}
          className="w-full h-48 sm:h-60 md:h-80 object-cover rounded-md"
          priority
        />
      </div>

      {/* Main Content */}
      <p className="text-gray-700 leading-relaxed mb-4 text-justify text-sm sm:text-base">
        Alva’s Institute of Medical Sciences and Research Centre (AIMSRC)
        was established in 2026 as a proud unit of Alva’s Education
        Foundation, carrying forward a rich legacy of service,
        compassion, and academic excellence. Our journey is deeply rooted
        in the remarkable 40-year history of Alva’s Health Centre, a
        trusted name in healthcare that has served generations with
        dedication and integrity.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        From Healing Hands to Learning Minds
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4 text-justify text-sm sm:text-base">
        For over four decades, Alva’s Health Centre has stood as a pillar
        of quality medical care, earning the trust of the community
        through patient-centred treatment, ethical practice, and
        unwavering commitment to health and wellbeing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4 text-justify text-sm sm:text-base">
        That vision gave birth to Alva’s Institute of Medical Sciences and
        Research Centre—bridging healthcare service and medical education
        through structured learning, research, and innovation.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        Built on Values, Driven by Purpose
      </h3>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-sm sm:text-base">
        <li>Compassion in Care – Treating every patient with dignity</li>
        <li>Excellence in Education – Future-ready medical training</li>
        <li>Integrity in Practice – Highest ethical standards</li>
        <li>Service to Society – Community health responsibility</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        Looking Ahead
      </h3>

      <p className="text-gray-700 leading-relaxed mb-2 text-justify text-sm sm:text-base">
        Anchored by 40 years of healthcare excellence and energized by a
        new generation of learners, AIMSRC stands as a symbol of trust,
        progress, and hope.
      </p>

      <p className="font-semibold text-gray-900 text-sm sm:text-base">
        From a healing legacy to a learning future — this is our story.
      </p>
    </div>
  );
}