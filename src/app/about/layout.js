"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutLayout({ children }) {
  const pathname = usePathname();

  const tabClass = (path) =>
    `block w-full rounded-lg px-4 py-3 font-medium ${
      pathname === path
        ? "bg-blue-600 text-white"   // 🔵 DARK BLUE
        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
    }`;

  return (
    <div className="flex min-h-screen bg-white">

      {/* SIDEBAR */}
      <aside className="w-72 p-4 space-y-3">
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
