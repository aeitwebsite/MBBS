"use client";

import "./globals.css";
import { Work_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { navRoutes } from "@/config/routeConfig";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import IntroScreen from "@/components/IntroScreen";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [campusLifeOpen, setCampusLifeOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleIntroFinish = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 500);
  };

  const getRouteName = (name) => {
    if (name === "Programs") return "Student Portal";
    if (name === "Campus Life") return "Happenings@AIMSARC";
    return name;
  };

  return (
    <html lang="en">
      <body className={workSans.className}>

        {/* ================= INTRO SCREEN ================= */}
        {showIntro && (
          <div
            className={`transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
              }`}
          >
            <IntroScreen onFinish={handleIntroFinish} />
          </div>
        )}

     {/* ================= TOP BAR ================= */}
<div className="w-full bg-[#0A0B49] text-white text-xs md:text-sm font-worksans">
  <div className="w-full flex items-center justify-between px-4 md:px-10 h-[34px]">
    <span className="tracking-wide whitespace-nowrap">
      +91-9945449784
    </span>

    <Link
      href="mailto:office@aimsarc.org"
      className="hover:text-[#14D7E7] transition-colors duration-200 whitespace-nowrap"
    >
      office@aimsarc.org
    </Link>
  </div>
</div>

{/* ================= NAVBAR ================= */}
<header className="sticky top-0 z-[200] bg-white border-b shadow-sm">
  <div className="w-full flex items-center h-[70px] md:h-[90px] px-4 md:px-10">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-4">

      {/* LOGO */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/images/logo_home.png"
          width={65}
          height={65}
          alt="Logo"
          priority
          className="object-contain"
        />
      </Link>

      {/* TITLE */}
      <div className="leading-tight font-worksans">
        <div className="text-[14px] md:text-[18px] font-semibold text-[#0A0B49]">
          ALVA&apos;S INSTITUTE OF MEDICAL SCIENCES
        </div>
        <div className="text-[12px] md:text-[15px] font-medium text-[#0A0B49]">
          AND RESEARCH CENTRE
        </div>
      </div>
    </div>

    {/* DESKTOP NAV */}
    <nav className="hidden lg:flex items-center gap-10 ml-auto">
      {navRoutes.map((r) => (
        <Link
          key={r.id}
          href={r.path}
          className="text-[15px] font-medium text-gray-700 hover:text-[#0A0B49] transition whitespace-nowrap"
        >
          {getRouteName(r.name)}
        </Link>
      ))}
    </nav>

    {/* MOBILE HAMBURGER */}
    <button
      className="lg:hidden ml-auto flex items-center justify-center w-10 h-10"
      onClick={() => setMobileMenuOpen(true)}
    >
      <HamburgerMenuIcon />
    </button>

  </div>
</header>
        {/* BACKDROP */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-[500]"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* MOBILE DRAWER */}
        
        <div
  className={`fixed top-0 right-0 w-[80%] max-w-[340px]
  bg-white z-[1000] h-screen overflow-y-auto
  shadow-2xl
  transform transition-transform duration-300 ease-in-out
  ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
>
         
<nav className="px-2 space-y-1">
  {navRoutes.map((route) => {

    /* ================= ABOUT DROPDOWN ================= */
    if (route.path === "/about") {
      return (
        <div key={route.id}>
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="w-full flex justify-between items-center px-3 py-4 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
          >
            About
            <span className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {aboutOpen && (
            <div className="mt-2 flex flex-col ml-5 space-y-3 text-sm text-gray-600">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About College</Link>
              <Link href="/about/about-alvas" onClick={() => setMobileMenuOpen(false)}>About Alva’s</Link>
              <Link href="/about/chairman-message" onClick={() => setMobileMenuOpen(false)}>Chairman Message</Link>
              <Link href="/about/dean-message" onClick={() => setMobileMenuOpen(false)}>Dean’s Message</Link>
              <Link href="/about/vision-mission" onClick={() => setMobileMenuOpen(false)}>Vision & Mission</Link>
              <Link href="/about/code-of-conduct" onClick={() => setMobileMenuOpen(false)}>Code of Conduct</Link>
              <Link href="/about/objectives" onClick={() => setMobileMenuOpen(false)}>Objectives</Link>
            </div>
          )}
        </div>
      );
    }

    /* ================= STUDENT PORTAL DROPDOWN ================= */
if (route.path === "/programs") {
  return (
    <div key={route.id}>
      <button
        onClick={() => setProgramsOpen(!programsOpen)}
        className="w-full flex justify-between items-center px-3 py-4 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
      >
        Student Portal
        <span
          className={`transition-transform duration-300 ${
            programsOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {programsOpen && (
        <div className="mt-2 flex flex-col ml-5 space-y-3 text-sm text-gray-600">
          <Link
            href="/programs?section=academic"
            onClick={() => setMobileMenuOpen(false)}
          >
            Academic
          </Link>

          <Link
            href="/programs?section=rules"
            onClick={() => setMobileMenuOpen(false)}
          >
            Rules and Regulation
          </Link>

          <Link
            href="/programs?section=facilities"
            onClick={() => setMobileMenuOpen(false)}
          >
            Campus Facilities
          </Link>

          <Link
            href="/programs?section=committees"
            onClick={() => setMobileMenuOpen(false)}
          >
            Committees
          </Link>
        </div>
      )}
    </div>
  );
}

    /* ================= HAPPENINGS DROPDOWN ================= */
if (route.path === "/campus-life") {
  return (
    <div key={route.id}>
      <button
        onClick={() => setCampusLifeOpen(!campusLifeOpen)}
        className="w-full flex justify-between items-center px-3 py-4 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
      >
        Happenings@AIMSARC
        <span className={`transition-transform duration-300 ${campusLifeOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {campusLifeOpen && (
        <div className="mt-2 flex flex-col ml-5 space-y-3 text-sm text-gray-600">
          <Link href="/campus-life?section=photo" onClick={() => setMobileMenuOpen(false)}>
            Photo Gallery
          </Link>

          <Link href="/campus-life?section=video" onClick={() => setMobileMenuOpen(false)}>
            Video Gallery
          </Link>

          <Link href="/campus-life?section=newsletter" onClick={() => setMobileMenuOpen(false)}>
            Newsletter
          </Link>
        </div>
      )}
    </div>
  );
}

    /* ================= NORMAL ROUTES ================= */
    return (
      <Link
        key={route.id}
        href={route.path}
        onClick={() => setMobileMenuOpen(false)}
        className="block px-3 py-4 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
      >
        {getRouteName(route.name)}
      </Link>
    );
  })}
</nav>
        </div>

        {/* MAIN CONTENT */}
        <main className="pt-0">
          {isHomePage && <HeroCarousel />}
          {children}
        </main>

        <Footer />

        <Script id="taos-init">
          {`document.documentElement.classList.add('js')`}
        </Script>

      </body>
    </html>
  );
}
