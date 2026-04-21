"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1919] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* LOGO */}
          <div className="flex-1 -mt-6">
            <img
              src="/images/logo_home.png"
              alt="Alvas Logo"
              className="w-28"
            />
          </div>

          {/* CONTACT */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="leading-relaxed text-sm mb-4">
              Alva&apos;s Medical Centre <br />
              Dakshina Kannada, Karnataka.
            </p>

            <p className="text-sm">Phone No: 9743700154</p>
            <p className="text-sm">Mobile No: 8150079070</p>
          </div>
          {/* CAMPUS */}
                        {/* <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">Campus</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/campus-life/celebrations" className="hover:text-gray-300">
                                        Celebrations
                                    </a>
                                </li>
                                <li>
                                    <a href="/about/aef/colleges-list" className="hover:text-gray-300">
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a href="/footer-links/literature" className="hover:text-gray-300">
                                        Literature
                                    </a>
                                </li>
                            </ul>
                        </div> */}

          {/* DEPARTMENTS */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Departments</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/departments/pre-clinical" className="hover:text-gray-300">
                  Pre-Clinical
                </Link>
              </li>
              <li>
                <Link href="/departments/para-clinical" className="hover:text-gray-300">
                  Para-Clinical
                </Link>
              </li>
              <li>
                <Link href="/departments/clinical" className="hover:text-gray-300">
                  Clinical
                </Link>
              </li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  College
                </Link>
              </li>
              <li>
                <Link href="/about/objectives" className="hover:text-gray-300">
                  Objectives
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
