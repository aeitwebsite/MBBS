"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("academic");
  const [selectedPdf, setSelectedPdf] = useState(null);

  const committees = [
    { name: "Medical Education Unit Committee", file: "/pdfs/Medical Education Unit.pdf" },
    { name: "Curriculum Committee", file: "/pdfs/Curriculum Committee.pdf" },
    { name: "Anti Ragging Committee", file: "/pdfs/Anti Ragging Committee.pdf" },
    { name: "Gender Harassment Committee", file: "/pdfs/Gender Harassment Committee.pdf" },
    { name: "Scientific Committee", file: "/pdfs/Scientific Committee.pdf" },
    { name: "Ethical Committee", file: "/pdfs/Ethical Committee.pdf" },
  ];

  const handleTabChange = (key) => {
    setActiveTab(key);
    setSelectedPdf(null);
  };

  const renderContent = () => {
    /* ================= EMBEDDED PDF VIEWER ================= */
    if (activeTab === "committees" && selectedPdf) {
      return (
        <div className="flex flex-col h-full animate-fadeIn">
          <button 
            onClick={() => setSelectedPdf(null)}
            className="mb-6 flex items-center text-[#04044a] hover:opacity-80 font-bold transition-all"
          >
            <span className="mr-2 text-2xl">←</span> Back 
          </button>
          
          <div className="flex-grow border-4 border-gray-100 rounded-xl overflow-hidden shadow-2xl bg-gray-50">
            <iframe
              src={`${selectedPdf}#toolbar=0&navpanes=0`}
              className="w-full h-[70vh]"
              title="Committee PDF Viewer"
            />
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case "academic":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic</h2>
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

      case "rules":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules and Regulations</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Students must maintain discipline and professionalism.</li>
              <li>Attendance as per university and institutional norms.</li>
              <li>Strict adherence to academic integrity.</li>
              <li>Respect towards faculty, staff, and peers.</li>
            </ul>
          </>
        );

      case "facilities":
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our campus provides state-of-the-art facilities to support academic excellence and student well-being.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Modern lecture halls and laboratories</li>
              <li>Teaching hospital with advanced medical equipment</li>
              <li>Library with digital and print resources</li>
              <li>Hostel and recreational facilities</li>
            </ul>
          </>
        );

      case "committees":
        return (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-6">
                <h2 className="text-5xl font-bold text-[#2d2e2e]">Committee List</h2>
                <div className="w-32 h-[2px] bg-[#e36d5d] mt-4"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              {committees.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPdf(item.file)}
                  className="flex items-center justify-between bg-[#04044a] hover:bg-[#060661] transition-all p-8 shadow-sm group text-left border-l-4 border-transparent hover:border-orange-400"
                >
                  <div className="text-white">
                    <h3 className="font-semibold text-xl tracking-tight leading-tight group-hover:underline">
                      {item.name}
                    </h3>
                  </div>
                  <div className="bg-white p-2 rounded-sm shrink-0 ml-4 shadow-inner">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6 2V30H26V10L18 2H6Z" fill="#F4F4F4"/>
                        <path d="M18 2V10H26L18 2Z" fill="#D9D9D9"/>
                        <path d="M11 18H14.5C15.3 18 16 18.7 16 19.5V20.5C16 21.3 15.3 22 14.5 22H13V24H11V18ZM13 20H14V19.5C14 19.2 13.8 19 13.5 19H13V20Z" fill="#E21B1B"/>
                        <path d="M17 18H19.5C20.9 18 22 19.1 22 20.5V21.5C22 22.9 20.9 24 19.5 24H17V18ZM19 22H19.5C19.8 22 20 21.8 20 21.5V20.5C20 20.2 19.8 20 19.5 20H19V22Z" fill="#E21B1B"/>
                        <path d="M23 18H28V19H25V20H27V21H25V24H23V18Z" fill="#E21B1B"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* LEFT SIDEBAR */}
      <div className="w-1/4 bg-gray-100 border-r border-gray-200 p-6">
        {[
          ["academic", "Academic"],
          ["rules", "Rules and Regulation"],
          ["facilities", "Campus Facilities"],
          ["committees", "Committees"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => handleTabChange(key)}
            className={`w-full text-left px-4 py-4 mb-2 rounded transition-all font-semibold
              ${
                activeTab === key
                  ? "bg-[#04044a] text-white shadow-md scale-105"
                  : "bg-[#f8f9f9] text-gray-700 hover:bg-gray-200 border border-gray-100"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-3/4 p-16">
        {renderContent()}
      </div>
    </div>
  );
}