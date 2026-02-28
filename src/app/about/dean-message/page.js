import Image from "next/image";

export default function DeanMessage() {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Message From The Dean
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Dean Image */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/images/Dean.jpg"
            alt="Dean"
            width={320}
            height={420}
            className="object-cover shadow-md rounded w-48 sm:w-56 md:w-[320px] h-auto"
            priority
          />
        </div>

        {/* Message Content */}
        <div className="flex-1">
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-5">
            It is my distinct pleasure and honour to welcome you to
            Alva’s Institute of Medical Sciences and Research Centre,
            Moodubidire.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-5">
            As Dean, I believe that our institution is dedicated to
            shaping medical professionals who unite scientific excellence
            with deep human compassion, guided by the belief that
            healthcare is a profound responsibility to build a humane,
            healthy, and equitable society.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-5">
            At Alva’s, education blends rigorous science with empathy,
            integrity, and a strong sense of service. With devoted
            faculty, advanced facilities, and active community
            engagement, we prepare students to meet the challenges of
            modern medicine through knowledge, values, and ethical
            practice.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-8">
            Join us in advancing the frontiers of healthcare with
            compassion, innovation, and excellence, and in shaping a
            future where quality healthcare is accessible, ethical, and
            truly patient-centred.
          </p>

          <div>
            <div className="text-base sm:text-lg font-bold text-black">
              Dr. Mahabalesh Shetty
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Dean, Alva’s Institute of Medical Sciences and Research
              Centre, Moodubidire.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}