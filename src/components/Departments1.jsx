"use client";
import { useState } from "react";
import Link from "next/link";

export default function Departments1({ categoryTitle, departmentData }) {
  // Check if data exists to prevent the "null to object" error
  if (!departmentData) return null;

  const keys = Object.keys(departmentData);
  const [activeKey, setActiveKey] = useState(keys[0]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const activeDept = departmentData[activeKey];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <div className={`w-full md:w-1/3 lg:w-1/4 p-6 bg-white border-r ${isMobileOpen ? 'hidden md:block' : 'block'}`}>
        <Link href="/departments" className="text-blue-600 font-medium mb-6 flex items-center hover:underline">
          ← All Categories
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{categoryTitle}</h2>
        <div className="space-y-3">
          {keys.map((key) => (
            <button
              key={key}
              onClick={() => { setActiveKey(key); setIsMobileOpen(true); }}
              className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                activeKey === key 
                ? "bg-blue-600 text-white border-blue-600 shadow-lg" 
                : "bg-gray-50 text-gray-700 border-transparent hover:border-blue-200"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{departmentData[key].title.replace('Department of ', '')}</span>
                <span>›</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className={`w-full md:w-2/3 lg:w-3/4 bg-white p-8 md:p-16 ${isMobileOpen ? 'block' : 'hidden md:block'}`}>
        <button onClick={() => setIsMobileOpen(false)} className="md:hidden mb-6 text-blue-600 font-semibold">
          ← Back to {categoryTitle}
        </button>
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">{activeDept?.title}</h1>
          <div className="h-1.5 w-24 bg-blue-600 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{activeDept?.description}</p>
        </div>
      </div>
    </div>
  );
}