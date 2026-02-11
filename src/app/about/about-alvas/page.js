"use client";

import { usePathname } from "next/navigation";

export default function AboutAlvas() {
  const pathname = usePathname();

  const isActive = pathname === "/about/about-alvas";

  return (
    <div
      className={`p-8 rounded-xl shadow-md transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-blue-900 to-blue-700 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4">
        About Alva’s Education Foundation
      </h2>

      <p className={`text-justify leading-relaxed ${
        isActive ? "text-gray-200" : "text-gray-700"
      }`}>
        Alva’s Education Foundation is dedicated to empowering students
        through quality education, strong ethical values, and leadership
        excellence. The foundation strives to create an academic environment
        that nurtures intellectual growth, professional competence, and
        social responsibility, preparing students to serve society with
        commitment and integrity.
      </p>
    </div>
  );
}
