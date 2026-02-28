import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Message From The Chairman
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Chairman Image */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/images/Chairman.jpeg"
            alt="Chairman"
            width={320}
            height={420}
            className="object-cover shadow-md rounded w-48 sm:w-56 md:w-[320px] h-auto"
            priority
          />
        </div>

        {/* Message Content */}
        <div className="flex-1">
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-6">
            Knowledge is power and education is a path to imbibe it.
            Alva’s Education Foundation (AEF) purports to do exactly the
            same, that is, transform education into knowledge. It is
            knowledge that will empower the youth of today to understand
            the information explosions taking place in the rapidly
            globalizing world. Personal integrity and ethics can be
            maintained only with a strong mind and a mind can become
            strong only with knowledge.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-8">
            Alva’s Education Foundation (AEF) aims to develop individuals
            who will be ready to take up real challenges presented to
            them. At the same time, the foundation wants these individuals
            to be culturally and ethically enlightened because not only
            the industry but our country needs such individuals today.
          </p>

          <div>
            <div className="text-base sm:text-lg font-bold text-black">
              Dr. Mohan Alva
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Chairman, Alva’s Institute of Medical Sciences and Research
              Centre, Moodubidire.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}