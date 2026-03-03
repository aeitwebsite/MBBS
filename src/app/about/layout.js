"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react"; 

const tabs = [
  { label: "About College", path: "/about" },
  { label: "About Alva’s", path: "/about/about-alvas" },
  { label: "Chairman Message", path: "/about/chairman-message" },
  { label: "Dean’s Message", path: "/about/dean-message" },
  { label: "Vision & Mission", path: "/about/vision-mission" },
  { label: "Code of Conduct", path: "/about/code-of-conduct" },
  { label: "Objectives", path: "/about/objectives" },
];

export default function AboutLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    path === "/about"
      ? pathname === "/about" || pathname === "/about/"
      : pathname.startsWith(path);

  const tabClass = (path) =>
    `block w-full text-left p-4 rounded-xl transition-all border-2 font-medium
    ${
      isActive(path)
        ? "bg-blue-600 text-white border-blue-600 shadow-lg"
        : "bg-gray-50 text-gray-700 border-transparent hover:border-blue-200"
    }`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
     {/* MOBILE DROPDOWN */}
<div className="block md:hidden px-4 pt-4 relative">
  <div className="relative">
    <button
  onClick={() => setOpen(!open)}
 className="w-full mt-4 px-4 py-3 text-sm font-medium text-left 
           bg-white border border-gray-300 rounded-md
           flex justify-between items-center
           transition-all duration-300
           focus:outline-none focus:ring-2 focus:ring-[#0A0B49]
           hover:border-[#0A0B49]"
>
      {tabs.find((t) => isActive(t.path))?.label}

      <span
        className={`transition-transform duration-300 ${
          open ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>

    <div
      className={`absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50
                  transition-all duration-300 origin-top
                  ${
                    open
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
    >
      {tabs.map((tab) => (
        <div
          key={tab.path}
          onClick={() => {
            router.push(tab.path);
            setOpen(false);
          }}
          className={`px-3 py-2 text-sm cursor-pointer transition-colors duration-200
                      ${
                        isActive(tab.path)
                          ? "bg-[#0A0B49] text-white"
                          : "text-gray-700 hover:bg-[#0A0B49] hover:text-white"
                      }`}
        >
          {tab.label}
        </div>
      ))}
    </div>
  </div>
</div>
      {/* SIDEBAR */}
     {/* <aside className="w-full md:w-[23%] lg:w-[20%] p-4 space-y-3"> */}
     <aside className="hidden md:block md:w-[23%] lg:w-[20%] p-4 space-y-3">
     

        <Link href="/about" className={tabClass("/about")}>
          About College
        </Link>

        <Link href="/about/about-alvas" className={tabClass("/about/about-alvas")}>
          About Alva’s
        </Link>

        <Link href="/about/chairman-message" className={tabClass("/about/chairman-message")}>
          Chairman Message
        </Link>

        <Link href="/about/dean-message" className={tabClass("/about/dean-message")}>
          Dean’s Message
        </Link>

        <Link href="/about/vision-mission" className={tabClass("/about/vision-mission")}>
          Vision & Mission
        </Link>

        <Link href="/about/code-of-conduct" className={tabClass("/about/code-of-conduct")}>
          Code of Conduct
        </Link>

        <Link href="/about/objectives" className={tabClass("/about/objectives")}>
          Objectives
        </Link>
      </aside>

      {/* PAGE CONTENT */}
      <main className="flex-1 px-6 sm:px-6 md:px-8 pb-8 pt-4 bg-white">
  {children}
</main>
    </div>
  );
}