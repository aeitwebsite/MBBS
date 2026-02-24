"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutLayout({ children }) {
  const pathname = usePathname();
 const tabClass = (path) => {
  const isActive =
    path === "/about"
      //? pathname === "/about"
       ? pathname === "/about" || pathname === "/about/"
      : pathname.startsWith(path);

  return `block w-full text-left p-4 rounded-xl transition-all border-2 font-medium
    ${
      isActive
        ? "bg-blue-600 text-white border-blue-600 shadow-lg"
        : "bg-gray-50 text-gray-700 border-transparent hover:border-blue-200"
    }`;
};
  return (
    <div className="flex min-h-screen bg-white">

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
      <main className="flex-1 px-8 pb-8 pt-2 bg-white">
        {children}
      </main>

    </div>
  );
}
