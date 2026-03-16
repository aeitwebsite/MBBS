"use client";

export default function contactPage({ mapUrl }) {
  const MAP_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.127816043799!2d74.9685597!3d13.0216525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a6595ce3ffff%3A0x583bc4fb8e6c3453!2sAlva%E2%80%99s%20Homoeopathic%20Medical%20College!5e0!3m2!1sen!2sin!4v1764321870203!5m2!1sen!2sin";

  return (
    <div className="bg-gray-50 relative overflow-hidden flex flex-col items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute top-40 right-40 w-80 h-80 bg-indigo-100/50 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-indigo-50/50 rounded-full mix-blend-multiply blur-3xl"></div>

      <section className="w-full px-6 md:px-12 py-16 md:py-24 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-6xl space-y-16">
          {/* ROW 1: TITLE/BUTTONS + COLLEGE CARD */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* LEFT (TITLE + BUTTONS) */}
            <div className="flex-1 space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#04044a] tracking-tight">
                  Get in Touch
                </h2>
                <div className="h-1.5 w-1/3 bg-blue-600 rounded-full mt-3" />
              </div>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
                Reach out to us for admissions, course details, or any queries.
                We're here to help you discover more about{" "}
                <span className="font-semibold text-gray-800">
                  Alva's Institute of Medical Science and Research Centre
                </span>.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:9945449784"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#04044a] px-6 py-3 text-sm md:text-base font-bold text-[#04044a] hover:bg-[#04044a] hover:text-white transition-all duration-300 hover:shadow-lg group shadow-sm bg-white"
                >
                  <span className="group-hover:animate-bounce">📞</span> Call Us
                </a>

                <a
                  href="mailto:office@aimsarc.org"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm md:text-base font-bold text-white hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md"
                >
                  ✉️ Send Email
                </a>
              </div>
            </div>

            {/* RIGHT (COLLEGE CARD) */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none mx-auto">
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-[2.5rem] blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

                <div className="relative bg-gradient-to-br from-[#04044a] to-blue-900 text-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/10 overflow-hidden transition-transform duration-500 transform group-hover:-translate-y-2">
                  {/* Internal top lighting */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-8 border-b border-white/20 pb-4">
                    Alva’s College
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group/item">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors shadow-inner">
                        📍
                      </div>
                      <p className="leading-relaxed text-blue-50 pt-1 text-sm md:text-base">
                        <span className="font-semibold text-white block mb-1">Alva's Institute of Medical Science and Research Centre</span>
                        Mijar, Moodbidri<br />
                        Dakshina Kannada – 574227<br />
                        Karnataka, India.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors shadow-inner">
                        📞
                      </div>
                      <p className="text-blue-50 text-sm md:text-base">
                        <span className="font-semibold text-white">Phone:</span> 9945449784
                      </p>
                    </div>

                    <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors shadow-inner">
                        ✉️
                      </div>
                      <a href="mailto:office@aimsarc.org" className="text-blue-50 hover:text-white hover:underline transition-colors text-sm md:text-base">
                        office@aimsarc.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: DEAN + SUPERINTENDENT (HORIZONTAL ALIGNMENT) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 w-full">
            {/* Dean Contact Card */}
            <div className="bg-gradient-to-br from-[#04044a] to-[#0a0f44] text-white rounded-[2rem] p-8 shadow-2xl border border-white/10 hover:shadow-blue-900/40 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

              <div className="flex items-center gap-5 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:bg-white/20 transition-colors duration-300">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Dean’s Office
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-blue-300 tracking-wider mt-1">Dr. Mahabalesh Shetty</p>
                  <p className="text-[11px] md:text-xs text-blue-100/70 mt-0.5 uppercase">MBBS, MD (Forensic Medicine)</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-white/10 transition-colors text-sm">📞</div>
                  <div className="pt-1 text-sm md:text-base">
                    <div className="mb-1"><span className="font-semibold text-white">Mobile:</span> 9448130574</div>
                    <div><span className="font-semibold text-white">Office:</span> 08258-236821</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-white/10 transition-colors text-sm">✉️</div>
                  <a href="mailto:dean@aimsarc.org" className="text-sm md:text-base hover:text-white transition-colors font-medium break-all">
                    dean@aimsarc.org
                  </a>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-white/10 transition-colors text-sm">📍</div>
                  <p className="leading-relaxed text-sm pt-1.5 opacity-90 text-blue-50">
                    Lakshmi Manjushree Layout, New Kadri Road, Mangalore – 575004.
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Superintendent Contact Card */}
            <div className="bg-gradient-to-br from-[#04044a] to-[#0a0f44] text-white rounded-[2rem] p-8 shadow-2xl border border-white/10 hover:shadow-blue-900/40 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

              <div className="flex items-center gap-5 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:bg-white/20 transition-colors duration-300">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Superintendent
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-blue-300 tracking-wider mt-1">Dr. Pangal Harish Nayak</p>
                  <p className="text-[11px] md:text-xs text-blue-100/70 mt-0.5 uppercase">MBBS, MS (General Surgery)</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-white/10 transition-colors text-sm">📞</div>
                  <div className="pt-1 text-sm md:text-base">
                    <span className="font-semibold text-white">Mobile:</span> 9845283484
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-white/10 transition-colors text-sm">✉️</div>
                  <a href="mailto:ms@aimsarc.org" className="text-sm md:text-base hover:text-white transition-colors font-medium break-all">
                    ms@aimsarc.org
                  </a>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-white/10 transition-colors text-sm">📍</div>
                  <p className="leading-relaxed text-sm pt-1.5 opacity-90 text-blue-50">
                    Iruvail Road, Masthikatte, Moodabidri – 574227.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full px-6 md:px-12 pb-20 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#04044a] flex items-center">
              <span className="bg-white shadow-sm border border-gray-100 p-2.5 rounded-xl mr-3 text-2xl">🗺️</span> Route Map
            </h2>
            <div className="h-0.5 bg-gray-200 flex-1 ml-4 rounded-full hidden sm:block" />
          </div>

          <div className="w-full bg-white p-2 md:p-4 rounded-[2.5rem] shadow-xl border border-gray-100 group">
            <div className="rounded-[2rem] overflow-hidden relative border border-gray-100 bg-gray-50">
              <div className="absolute inset-0 pointer-events-none rounded-[2rem] shadow-inner z-10"></div>
              <iframe
                src={MAP_URL}
                className="w-full h-[400px] md:h-[550px] transition-transform duration-700 group-hover:scale-[1.01]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}