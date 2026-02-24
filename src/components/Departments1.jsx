
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Departments1({ categoryTitle, departmentData }) {
  if (!departmentData) return null;

  const keys = Object.keys(departmentData);
  const [activeKey, setActiveKey] = useState(keys[0]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const activeDept = departmentData[activeKey];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      
      {/* ================= SIDEBAR ================= */}
      <div
  className={`w-full md:w-[23%] lg:w-[20%] p-4 bg-white
  ${isMobileOpen ? "hidden md:block" : "block"}`}
>
        <Link
          href="/departments"
          className="text-blue-600 font-medium mb-6 flex items-center hover:underline"
        >
          ← All Categories
        </Link>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {categoryTitle}
        </h2>

        <div className="space-y-3">
          {keys.map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveKey(key);
                setIsMobileOpen(true);
              }}
              className={`w-full text-left p-4 rounded-xl transition-all border-2
                ${
                  activeKey === key
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : "bg-gray-50 text-gray-700 border-transparent hover:border-blue-200"
                }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  {departmentData[key].title.replace("Department of ", "")}
                </span>
                {/* <span>›</span> */}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div
  className={`flex-1 bg-white p-4 md:p-6
  ${isMobileOpen ? "block" : "hidden md:block"}`}
>

        <button
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden mb-6 text-blue-600 font-semibold"
        >
          ← Back to {categoryTitle}
        </button>

        {/* TITLE + DESC */}
        <div className="max-w-full mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
            {activeDept?.title}
          </h1>

          <div className="h-1.5 w-24 bg-blue-600 mb-8 rounded-full"></div>

          <p className="text-lg md:text-xl text-gray-600">
            {activeDept?.description}
          </p>
        </div>

        {/* ================= HOD MESSAGE ================= */}
{activeDept?.hod && (
  <section className="mb-16">
    {/* 🔹 Section Title */}
    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 inline-block pb-2">
      Message from HOD
    </h2>

    {/* 🔹 HOD Card */}
    <div className="bg-white rounded-xl shadow-md p-8 mt-6">
      <div className="flex flex-col md:flex-row gap-8 items-start"> 
        {/* HOD Image */}
     <img
  src={activeDept.hod.image || "/images/user.png"}
  alt={activeDept.hod.name}
  className="
    w-60
    h-96
    md:w-64
    md:h-[420px]
    rounded-xl
    object-cover
    border
    shadow-lg
    flex-shrink-0
  "
/>
        {/* HOD Content */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">
            {activeDept.hod.name}
          </h3>

          <p className="text-gray-600 mb-4">
            {activeDept.hod.designation}
          </p>

          <p className="whitespace-pre-line text-justify leading-7 text-gray-700">
            {activeDept.hod.message}
          </p>
        </div>
      </div>
    </div>
  </section>
)}
        {/* ================= FACULTY GRID ================= */}
        {activeDept?.faculties && (
          <>
            <h2 className="text-2xl font-bold mb-6">Faculty</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {activeDept.faculties.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow text-center
                             transition-all duration-300
                             hover:-translate-y-2
                             hover:shadow-2xl
                             hover:bg-blue-50"
                >
                  <img
                    src={f.image || "/images/user.png"}
                    className="w-36 h-36 mx-auto rounded-full object-cover
                               transition-transform duration-300
                               hover:scale-105"
                  />

                  <h3 className="mt-4 font-bold">{f.name}</h3>
                  <p className="text-gray-600">{f.designation}</p>

                  <button
                    onClick={() => setSelectedFaculty(f)}
                    className="mt-4 border border-blue-400 px-6 py-2
                               rounded-full transition
                               hover:bg-blue-400 hover:text-black
                               hover:scale-105"
                  >
                    READ MORE
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    {/* ================= MODAL ================= */}
{selectedFaculty && (
  <div
    className="fixed top-[80px] left-0 right-0 bottom-0
               bg-black/50 z-50
               flex justify-center overflow-y-auto"
  >
    <div
      className="bg-white w-[90%] max-w-3xl
                 rounded-xl p-8 relative mt-10 mb-10"
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedFaculty(null)}
        className="absolute top-4 right-4 text-xl font-bold"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={selectedFaculty.image || "/images/user.png"}
          alt={selectedFaculty.name}
          className="w-40 h-40 rounded-full object-cover flex-shrink-0"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold">
            {selectedFaculty.name}
          </h2>

          <p className="mt-2 text-gray-800">
            <b>Designation:</b> {selectedFaculty.designation}
          </p>

          {/* ✅ HOD MESSAGE (Scrollable & Well-Fitted) */}
          {selectedFaculty.message && (
            <div className="mt-5 p-5 bg-gray-50 border-l-4 border-blue-600 rounded">
              <h3 className="font-semibold text-gray-900 mb-3">
                Message from HOD
              </h3>

              <div className="max-h-[280px] overflow-y-auto pr-2">
                <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                  {selectedFaculty.message}
                </p>
              </div>
            </div>


          )}
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
