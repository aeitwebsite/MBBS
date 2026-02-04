"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("academic");

  const renderContent = () => {
    switch (activeTab) {

      /* ================= ACADEMIC ================= */
      case "academic":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic
            </h2>

            <Image
              src="/images/banner-4.jpg"
              alt="Academic"
              width={1200}
              height={400}
              className="w-full h-64 object-cover rounded mb-6"
            />

            <p className="text-gray-700 leading-relaxed text-justify">
              The academic framework at Alva’s Institute of Medical Sciences and
              Research Centre is designed to deliver comprehensive medical
              education through a balanced integration of theory, clinical
              practice, research, and community engagement.
            </p>
          </>
        );

      /* ================= RULES & REGULATIONS ================= */
      case "rules":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rules and Regulations
            </h2>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Students must maintain discipline and professionalism.</li>
              <li>Attendance as per university and institutional norms.</li>
              <li>Strict adherence to academic integrity.</li>
              <li>Respect towards faculty, staff, and peers.</li>
            </ul>
          </>
        );

      /* ================= CAMPUS FACILITIES ================= */
      case "facilities":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Campus Facilities
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our campus provides state-of-the-art facilities to support
              academic excellence and student well-being.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Modern lecture halls and laboratories</li>
              <li>Teaching hospital with advanced medical equipment</li>
              <li>Library with digital and print resources</li>
              <li>Hostel and recreational facilities</li>
            </ul>
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
          ["academic", "Academic"],
          ["rules", "Rules and Regulation"],
          ["facilities", "Campus Facilities"],
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