"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AboutSection() {
  //const [activeTab, setActiveTab] = useState("admission");
  
  const searchParams = useSearchParams();
const tabFromUrl = searchParams.get("tab");

const [activeTab, setActiveTab] = useState(
  tabFromUrl || "photoGallery"
);
const [open, setOpen] = useState(false);
useEffect(() => {
  if (tabFromUrl) {
    setActiveTab(tabFromUrl);
  }
}, [tabFromUrl]);

  const renderContent = () => {
    switch (activeTab) {

      /* ================= ADMISSION ================= */
      // case "admission":
      //   return (
      //     <>
      //       <h2 className="text-3xl font-bold text-gray-900 mb-4">
      //         Admission
      //       </h2>

      //       <Image
      //         src="/images/banner-4.jpg"
      //         alt="Admission"
      //         width={1200}
      //         height={400}
      //         className="w-full h-64 object-cover rounded mb-6"
      //       />

      //       <p className="text-gray-700 leading-relaxed text-justify">
      //         Admission details, eligibility criteria, important dates, and
      //         notifications related to undergraduate and postgraduate programs
      //         at Alva’s Institute of Medical Sciences and Research Centre will be
      //         published here.
      //       </p>
      //     </>
      //   );

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
  <div className="w-full min-h-screen bg-gray-100">

   {/* ================= MOBILE DROPDOWN ================= */}
<div className="block md:hidden w-full px-4 pt-6 relative">

  {/* Dropdown Button */}
  <button
    onClick={() => setOpen(!open)}
    className="w-full px-4 py-3 text-sm font-semibold text-left 
               bg-white border border-gray-300 rounded-xl
               flex justify-between items-center
               transition-all duration-300
               focus:outline-none focus:ring-2 focus:ring-[#0A0B49]"
  >
    {
      {
        photoGallery: "Photo Gallery",
        videoGallery: "Video Gallery",
        newsletter: "Newsletter",
      }[activeTab]
    }

    <span
      className={`transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  {/* Overlay Dropdown List */}
  {open && (
    <div className="absolute left-4 right-4 top-full mt-3 
                    bg-white border border-gray-200 
                    rounded-xl shadow-lg z-50">
      {[
        ["photoGallery", "Photo Gallery"],
        ["videoGallery", "Video Gallery"],
        ["newsletter", "Newsletter"],
      ].map(([key, label]) => (
        <div
          key={key}
          onClick={() => {
            setActiveTab(key);
            setOpen(false);
          }}
          className={`px-4 py-3 text-sm cursor-pointer transition-colors duration-200
            ${
              activeTab === key
                ? "bg-[#0A0B49] text-white"
                : "text-gray-700 hover:bg-blue-600 hover:text-white"
            }`}
        >
          {label}
        </div>
      ))}
    </div>
  )}

</div>

    {/* ================= MAIN LAYOUT ================= */}
    <div className="flex flex-col md:flex-row w-full">

      {/* ================= DESKTOP SIDEBAR ================= */}
      <div className="hidden md:block md:w-[23%] lg:w-[20%] bg-white shadow-md p-4 space-y-3">
        {[
          ["photoGallery", "Photo Gallery"],
          ["videoGallery", "Video Gallery"],
          ["newsletter", "Newsletter"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`w-full text-left p-4 rounded-xl transition-all border-2 font-medium
              ${
                activeTab === key
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-gray-50 text-gray-700 border-transparent hover:border-blue-200"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="w-full md:w-[77%] lg:w-[80%] p-6 md:p-8 bg-white shadow-inner">
        {renderContent()}
      </div>

    </div>
  </div>
);
}
