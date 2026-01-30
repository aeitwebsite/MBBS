"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("aboutCollege");

  const renderContent = () => {
    switch (activeTab) {

        case "aboutCollege":
        return (
          <>
            {/* TITLE */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About the College
            </h2>

            {/* IMAGE */}
            <div className="mb-6">
              <Image
                src="/images/banner-4.jpg"
                alt="College Building"
                width={1200}
                height={420}
                className="w-full h-60 md:h-80 object-cover rounded"
                priority
              />
            </div>

            {/* CONTENT */}
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              Alva’s Institute of Medical Sciences and Research Centre (AIMSRC)
              was established in 2026 as a proud unit of Alva’s Education
              Foundation, carrying forward a rich legacy of service,
              compassion, and academic excellence. Our journey is deeply rooted
              in the remarkable 40-year history of Alva’s Health Centre, a
              trusted name in healthcare that has served generations with
              dedication and integrity.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              From Healing Hands to Learning Minds
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              For over four decades, Alva’s Health Centre has stood as a pillar
              of quality medical care, earning the trust of the community
              through patient-centred treatment, ethical practice, and
              unwavering commitment to health and wellbeing.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              That vision gave birth to Alva’s Institute of Medical Sciences and
              Research Centre—bridging healthcare service and medical education
              through structured learning, research, and innovation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Built on Values, Driven by Purpose
            </h3>

            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Compassion in Care – Treating every patient with dignity</li>
              <li>Excellence in Education – Future-ready medical training</li>
              <li>Integrity in Practice – Highest ethical standards</li>
              <li>Service to Society – Community health responsibility</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Looking Ahead
            </h3>

            <p className="text-gray-700 leading-relaxed mb-2 text-justify">
              Anchored by 40 years of healthcare excellence and energized by a
              new generation of learners, AIMSRC stands as a symbol of trust,
              progress, and hope.
            </p>

            <p className="font-semibold text-gray-900">
              From a healing legacy to a learning future — this is our story.
            </p>
          </>
        );
      

      case "aboutAlvas":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">
              About Alva’s Education Foundation
            </h2>
            <img
              src="/images/alvas.jpg"
              alt="Alvas"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700 text-justify">
              Alva’s Education Foundation aims to empower students through
              quality education, cultural values, and leadership development.
            </p>
          </>
        );

      /* ================= CHAIRMAN MESSAGE ================= */
      case "chairman":
        return (
          <>
            <h2 className="text-3xl font-extrabold text-[#2b1a63] mb-6">
              Message From The Chairman
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
              <Image
                src="/images/chairman.jpeg"
                alt="Chairman"
                width={320}
                height={420}
                className="object-cover shadow-md rounded"
                priority
              />

              <div>
                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-6">
                  Knowledge is power and education is a path to imbibe it.
                  Alva’s Education Foundation (AEF) purports to do exactly the
                  same, that is, transform education into knowledge. It is
                  knowledge that will empower the youth of today to understand
                  the information explosions taking place in the rapidly
                  globalizing world. Personal integrity and ethics can be
                  maintained only with a strong mind and a mind can become
                  strong only with knowledge.
                </p>

                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-8">
                  Alva’s Education Foundation (AEF) aims to develop individuals
                  who will be ready to take up real challenges presented to
                  them. At the same time, the foundation wants these individuals
                  to be culturally and ethically enlightened because not only
                  the industry but our country needs such individuals today.
                </p>

                <div>
                  <div className="text-lg font-bold text-black">
                    Dr. Mohan Alva
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Chairman, Alva’s Institute of Medical Sciences and Research
                    Centre, Moodubidire.
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      /* ================= DEAN MESSAGE (NEW) ================= */
      case "dean":
        return (
          <>
            <h2 className="text-3xl font-extrabold text-[#2b1a63] mb-6">
              Message From The Dean
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
              <Image
                src="/images/dean.jpg"
                alt="Dean"
                width={320}
                height={420}
                className="object-cover shadow-md rounded"
                priority
              />

              <div>
                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-5">
                  It is my distinct pleasure and honour to welcome you to
                  Alva’s Institute of Medical Sciences and Research Centre,
                  Moodubidire.
                </p>

                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-5">
                  As Dean, I believe that our institution is dedicated to
                  shaping medical professionals who unite scientific excellence
                  with deep human compassion, guided by the belief that
                  healthcare is a profound responsibility to build a humane,
                  healthy, and equitable society.
                </p>

                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-5">
                  At Alva’s, education blends rigorous science with empathy,
                  integrity, and a strong sense of service. With devoted
                  faculty, advanced facilities, and active community
                  engagement, we prepare students to meet the challenges of
                  modern medicine through knowledge, values, and ethical
                  practice.
                </p>

                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-8">
                  Join us in advancing the frontiers of healthcare with
                  compassion, innovation, and excellence, and in shaping a
                  future where quality healthcare is accessible, ethical, and
                  truly patient-centred.
                </p>

                <div>
                  <div className="text-lg font-bold text-black">
                    Dr. Mahabalesh Shetty
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Dean, Alva’s Institute of Medical Sciences and Research
                    Centre, Moodubidire.
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "principal":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Principal’s Message</h2>
            <p className="text-gray-700 text-justify">
              We focus on academic excellence, discipline, and innovation to
              shape the future of our students.
            </p>
          </>
        );

      case "visionMission":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Vision & Mission</h2>

            <h3 className="text-xl font-semibold mb-2 text-blue-600">Vision</h3>
            <p className="text-gray-700 text-justify mb-6">
              To be a centre of excellence in medical education, research, and
              healthcare delivery, nurturing compassionate professionals
              dedicated to serving rural and underserved communities.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-blue-600">Mission</h3>
            <p className="text-gray-700 text-justify">
              To establish the college as a centre of excellence, delivering
              quality and affordable medical education; to train compassionate
              and skilled professionals committed to providing accessible
              healthcare and innovative solutions to health challenges with
              integrity and social responsibility.
            </p>
          </>
        );

      case "codeOfConduct":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Code of Conduct</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Maintain discipline and professionalism on campus.</li>
              <li>Respect faculty, staff, and fellow students.</li>
              <li>Adhere to academic integrity and institutional rules.</li>
              <li>Promote a safe and inclusive learning environment.</li>
            </ul>
          </>
        );

      case "objectives":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Objectives</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Provide high-quality education and training.</li>
              <li>Encourage research and innovation.</li>
              <li>Develop leadership and professional skills.</li>
              <li>Contribute to societal and national development.</li>
            </ul>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <div className="w-1/4 bg-white shadow-md p-4">
        {[
          ["aboutCollege", "About College"],
          ["aboutAlvas", "About Alva’s"],
          ["chairman", "Chairman Message"],
          ["principal", "Principal Message"],
          ["dean", "Dean’s Message"],
          ["visionMission", "Vision & Mission"],
          ["codeOfConduct", "Code of Conduct"],
          ["objectives", "Objectives"],
        ].map(([key, label]) => (
          <button
            key={key}
            className={`tab-btn ${activeTab === key && "active"}`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="w-3/4 p-8 bg-white shadow-inner">
        {renderContent()}
      </div>

      <style jsx>{`
        .tab-btn {
          width: 100%;
          padding: 12px;
          margin-bottom: 8px;
          border-radius: 6px;
          text-align: left;
          background: #f3f4f6;
        }
        .tab-btn.active {
          background: #2563eb;
          color: white;
        }
      `}</style>
    </div>
  );
}
