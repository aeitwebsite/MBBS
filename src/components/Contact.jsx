"use client";

export default function contactPage({ mapUrl }) {
  const MAP_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.127816043799!2d74.9685597!3d13.0216525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a6595ce3ffff%3A0x583bc4fb8e6c3453!2sAlva%E2%80%99s%20Homoeopathic%20Medical%20College!5e0!3m2!1sen!2sin!4v1764321870203!5m2!1sen!2sin";

  return (
    <>
      <section className="w-full px-6 md:px-12 py-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* ROW 1: TITLE/BUTTONS + COLLEGE CARD */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
            {/* LEFT (TITLE + BUTTONS) */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Contact
              </h2>
              <div className="w-24 h-2 bg-red-500 rounded-full mt-3 mb-6" />

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Reach out to us for admissions, course details, or any queries.
                We're here to help you discover more about{" "}
                <span className="font-semibold">
                  Alva's Institute of Medical Science and Research Centre
                </span>.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:9945449784"
                  className="inline-flex items-center gap-2 rounded-full border border-red-500 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition"
                >
                  📞 Call Us
                </a>

                <a
                  href="mailto:office@aimsarc.org"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition"
                >
                  ✉️ Send Email
                </a>
              </div>
            </div>

            {/* RIGHT (COLLEGE CARD) */}
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-red-200/40 rounded-[32px] -z-10" />

                <div className="bg-[#dd5d52] text-white rounded-[32px] p-7 md:p-8 shadow-lg border border-white/30">
                  <h3 className="text-2xl font-semibold text-center mb-5">
                    Alva’s College
                  </h3>

                  <div className="flex items-start gap-4 mb-4">
                    <span>📍</span>
                    <p className="leading-relaxed text-sm md:text-base">
                      Alva's Institute of Medical Science and Research Centre<br />
                      Mijar, Moodbidri<br />
                      Dakshina Kannada – 574227<br />
                      Karnataka, India.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 mb-3">
                    <span>📞</span>
                    <p className="text-sm md:text-base">
                      <span className="font-semibold">Phone:</span> 9945449784
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span>✉️</span>
                    <a href="mailto:office@aimsarc.org" className="underline hover:text-gray-100">
                      office@aimsarc.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: DEAN + SUPERINTENDENT (HORIZONTAL ALIGNMENT) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-8">
            {/* Dean Contact Card */}
            <div className="bg-[#0A0B49] text-white rounded-[32px] p-7 md:p-8 shadow-lg border border-white/30">
              <h3 className="text-2xl font-semibold text-center mb-5">
                Dean’s Office
              </h3>

              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl">👤</span>
                <div>
                  <p className="font-bold text-base md:text-lg">Dr. Mahabalesh Shetty</p>
                  <p className="text-[10px] md:text-xs text-blue-200 mt-0.5">MBBS, MD (Forensic Medicine)</p>
                  <p className="text-xs md:text-sm text-blue-200 uppercase tracking-wider mt-1">Dean</p>
                </div>
              </div>

              <div className="space-y-3 text-sm md:text-base">
                <div className="flex items-start gap-4">
                  <span>📞</span>
                  <div>
                    <div><span className="font-semibold">Mobile:</span> 9448130574</div>
                    <div><span className="font-semibold">Office:</span> 08258-236821</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span>✉️</span>
                  <a href="mailto:dean@aimsarc.org" className="underline hover:text-blue-200 break-all">
                    dean@aimsarc.org
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <span>📍</span>
                  <p className="leading-relaxed text-xs md:text-sm opacity-90">
                    Lakshmi Manjushree Layout, New Kadri Road, Mangalore – 575004.
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Superintendent Contact Card */}
            <div className="bg-[#0A0B49] text-white rounded-[32px] p-7 md:p-8 shadow-lg border border-white/30">
              <h3 className="text-2xl font-semibold text-center mb-5">
                Superintendent
              </h3>

              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl">👤</span>
                <div>
                  <p className="font-bold text-base md:text-lg">Dr. Pangal Harish Nayak</p>
                  <p className="text-[10px] md:text-xs text-blue-200 mt-0.5">MBBS, MS (general surgery)</p>
                  <p className="text-xs md:text-sm text-blue-200 uppercase tracking-wider mt-1">Medical Superintendent</p>
                </div>
              </div>

              <div className="space-y-3 text-sm md:text-base">
                <div className="flex items-start gap-4">
                  <span>📞</span>
                  <div>
                    <span className="font-semibold">Mobile:</span> 9845283484
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span>✉️</span>
                  <a href="mailto:ms@aimsarc.org" className="underline hover:text-blue-200 break-all">
                    ms@aimsarc.org
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <span>📍</span>
                  <p className="leading-relaxed text-xs md:text-sm opacity-90">
                    Iruvail Road, Masthikatte, Moodabidri – 574227.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full px-6 md:px-12 py-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          Route Map:
        </h2>

        <div className="mt-4 w-full bg-[#e0e0e0] rounded-[32px] overflow-hidden shadow-sm">
          <iframe
            src={MAP_URL}
            className="w-full h-[360px] md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}