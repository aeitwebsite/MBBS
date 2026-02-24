"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
      <div className="block md:hidden px-4 pt-4">
        <select
          className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={tabs.find((t) => isActive(t.path))?.path}
          onChange={(e) => router.push(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.path} value={tab.path}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* SIDEBAR */}
     <aside className="w-full md:w-[23%] lg:w-[20%] p-4 space-y-3">

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
      <main className="flex-1 px-4 sm:px-6 md:px-8 pb-8 pt-4 bg-white">
        {children}
      </main>
    </div>
  );
}