import Image from "next/image";

export default function AdministrativeMessages() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-[#0A0B49]">
        Leadership Messages
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* ================= DEAN SECTION ================= */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#0A0B49] border-b-2 border-blue-100 pb-2">
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
              <p className="text-sm leading-relaxed text-gray-700 text-justify mb-4">
                It is my distinct pleasure and honour to welcome you to
                Alva’s Institute of Medical Sciences and Research Centre,
                Moodubidire.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 text-justify mb-4">
                As Dean, I believe that our institution is dedicated to
                shaping medical professionals who unite scientific excellence
                with deep human compassion.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 text-justify mb-4">
                At Alva’s, education blends rigorous science with empathy,
                integrity, and a strong sense of service.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 text-justify mb-6 italic">
                Join us in advancing the frontiers of healthcare with
                compassion, innovation, and excellence.
              </p>
              <div>
                <div className="text-base font-bold text-black">
                  Dr. Mahabalesh Shetty
                </div>
                <div className="text-xs text-blue-900 font-semibold mt-1">
                  Dean, AIMSRC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MEDICAL SUPERINTENDENT SECTION ================= */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#0A0B49] border-b-2 border-blue-100 pb-2">
            Message From The Medical Superintendent
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 mx-auto md:mx-0">
              {/* Using a placeholder styled div as MS image is not provided */}
              <div className="w-48 sm:w-56 md:w-[240px] aspect-[3/4] bg-[#0A0B49]/5 rounded shadow-sm border border-gray-100 flex items-center justify-center text-gray-400">
                <span className="text-4xl">👤</span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-relaxed text-gray-700 text-justify mb-4">
                I am privileged to welcome you to the clinical wing of Alva’s Institute of Medical Sciences. Our medical centre is committed to providing state-of-the-art healthcare services with a patient-first approach.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 text-justify mb-4">
                Our mission is to provide high-quality, clinical care that is affordable and accessible to all members of our community, especially those in rural and underserved areas.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 text-justify mb-4">
                With a dedicated team of specialists and nursing staff, we ensure that every patient receives personalized care and the best possible clinical outcomes.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 text-justify mb-6 italic">
                We are focused on continuous improvement and excellence in clinical practice.
              </p>
              <div>
                <div className="text-base font-bold text-black">
                  Dr. Pangal Harish Nayak
                </div>
                <div className="text-xs text-blue-900 font-semibold mt-1">
                  Medical Superintendent, AIMSRC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
