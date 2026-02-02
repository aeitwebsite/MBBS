"use client";

import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { navRoutes } from "@/config/routeConfig";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const getRouteName = (name) => {
    if (name === "Programs") return "Student Portal";
    if (name === "Campus Life") return "Happenings@AIMSARC";
    return name;
  };

  return (
    <html lang="en">
      <body className={roboto.className}>

        {/* TOP BAR */}
        <div className="w-full flex bg-[#0A0B49] text-white text-xs md:text-sm
                        items-center justify-between px-4 md:px-10 h-[48px]">
          <span>+91-9945449784</span>
          <Link href="mailto:office@aimsarc.org">office@aimsarc.org</Link>
        </div>

        {/* NAVBAR */}
        <header className="sticky top-0 z-[200] bg-white shadow-md">
          <div className="flex items-center justify-between px-4 md:px-10 py-2">

            {/* LOGO + TWO-LINE TITLE */}
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <Image
                src="/images/logo-1.png"
                width={72}
                height={72}
                alt="Logo"
                className="shrink-0"
              />

              <div className="leading-tight">
                <div className="text-[15px] md:text-[16px] font-semibold text-[#0A0B49]">
                  ALVA&apos;S INSTITUTE OF MEDICAL SCIENCES
                </div>
                <div className="text-[14px] md:text-[15px] font-semibold text-[#0A0B49]">
                  AND RESEARCH CENTRE
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex gap-6 items-center">
              {navRoutes.map((r) => (
                <Link
                  key={r.id}
                  href={r.path}
                  className="text-[14px] font-medium whitespace-nowrap
                             text-gray-800 hover:text-[#0A0B49] transition"
                >
                  {getRouteName(r.name)}
                </Link>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden"
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
          className={`fixed top-0 right-0 w-[85%] max-w-[360px]
          bg-white z-[1000] h-screen overflow-y-auto
          transform transition-transform duration-300
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <Cross1Icon />
            </button>
          </div>

          <nav className="px-2">
            {navRoutes.map((route) => (
              <Link
                key={route.id}
                href={route.path}
                className="block px-3 py-4 text-sm font-medium
                           text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {getRouteName(route.name)}
              </Link>
            ))}
          </nav>
        </div>

        {/* MAIN CONTENT */}
        <main className="pt-[112px] lg:pt-0">
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
