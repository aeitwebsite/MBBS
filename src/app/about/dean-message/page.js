import Image from "next/image";

export default function AdministrativeMessages() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-[#0A0B49]">
        Leadership Messages
      </h1> */}

      {/* ================= DEAN SECTION ================= */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Message From The Dean
      </h2>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0 mx-auto md:mx-0">
            <Image
              src="/images/Dean.jpg"
              alt="Dean"
              width={280}
              height={380}
              className="object-cover shadow-md rounded w-48 sm:w-56 md:w-[240px] h-auto"
              priority
            />
          </div>

          <div className="flex-1">
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-6">
              It is my distinct pleasure and honour to welcome you to
              Alva’s Institute of Medical Sciences and Research Centre,
              Moodubidire.
              As Dean, I believe that our institution is dedicated to
              shaping medical professionals who unite scientific excellence
              with deep human compassion.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-6">
              At Alva’s, education blends rigorous science with empathy,
              integrity, and a strong sense of service.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-6">
              Join us in advancing the frontiers of healthcare with
              compassion, innovation, and excellence.
            </p>

            <div>
              <div className="text-base sm:text-lg font-bold text-black">
                Dr. Mahabalesh Shetty
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">
                Dean, AIMSRC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
