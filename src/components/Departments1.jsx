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
        className={`w-full md:w-1/3 lg:w-1/4 p-6 bg-white border-r
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
                <span>›</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className={`w-full md:w-2/3 lg:w-3/4 bg-white p-8 md:p-16
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
                    className="mt-4 border border-yellow-400 px-6 py-2
                               rounded-full transition
                               hover:bg-yellow-400 hover:text-black
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
        <div className="fixed inset-0 bg-black/50 z-50
                        flex items-center justify-center">
          <div
            className="bg-white w-[90%] max-w-3xl
                           rounded-xl p-8 relative"
          >
            <button
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedFaculty.image || "/images/user.png"}
                className="w-40 h-40 rounded-full object-cover"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  {selectedFaculty.name}
                </h2>

                <p className="mt-2">
                  <b>Designation:</b> {selectedFaculty.designation}
                </p>

                <p className="mt-4 text-gray-600">
                  More faculty details can be added here.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
