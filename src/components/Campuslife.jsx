"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("admission");

  const renderContent = () => {
    switch (activeTab) {

      /* ================= ADMISSION ================= */
      case "admission":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Admission
            </h2>

            <Image
              src="/images/banner-4.jpg"
              alt="Admission"
              width={1200}
              height={400}
              className="w-full h-64 object-cover rounded mb-6"
            />

            <p className="text-gray-700 leading-relaxed text-justify">
              Admission details, eligibility criteria, important dates, and
              notifications related to undergraduate and postgraduate programs
              at Alva’s Institute of Medical Sciences and Research Centre will be
              published here.
            </p>
          </>
        );

      /* ================= PHOTO GALLERY ================= */
      case "photoGallery":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Explore photographs from academic events, campus life,
              conferences, and cultural activities at AIMSRC.
            </p>
          </>
        );

      /* ================= VIDEO GALLERY ================= */
      case "videoGallery":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Video Gallery
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Watch videos showcasing institutional events, academic programs,
              guest lectures, and student activities.
            </p>
          </>
        );

      /* ================= NEWSLETTER ================= */
      case "newsletter":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Newsletter
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Stay updated with the latest news, achievements, and important
              announcements through our institutional newsletters.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      <div className="w-1/4 bg-white shadow-md p-4">
        {[
          ["admission", "Admission"],
          ["photoGallery", "Photo Gallery"],
          ["videoGallery", "Video Gallery"],
          ["newsletter", "Newsletter"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`w-full text-left px-4 py-3 mb-2 rounded-md
              transition
              ${
                activeTab === key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-3/4 p-8 bg-white shadow-inner">
        {renderContent()}
      </div>
    </div>
  );
}
