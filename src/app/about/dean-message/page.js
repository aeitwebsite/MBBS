import Image from "next/image";

export default function DeanMessage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Message From The Dean
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
              <Image
                src="/images/dean.jpg"
                alt="Dean"
                width={320}
                height={420}
                className="object-cover shadow-md rounded"
                priority
              />

              <div>
                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-5">
                  It is my distinct pleasure and honour to welcome you to
                  Alva’s Institute of Medical Sciences and Research Centre,
                  Moodubidire.
                </p>

                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-5">
                  As Dean, I believe that our institution is dedicated to
                  shaping medical professionals who unite scientific excellence
                  with deep human compassion, guided by the belief that
                  healthcare is a profound responsibility to build a humane,
                  healthy, and equitable society.
                </p>

                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-5">
                  At Alva’s, education blends rigorous science with empathy,
                  integrity, and a strong sense of service. With devoted
                  faculty, advanced facilities, and active community
                  engagement, we prepare students to meet the challenges of
                  modern medicine through knowledge, values, and ethical
                  practice.
                </p>

                <p className="text-[16px] leading-relaxed text-gray-700 text-justify mb-8">
                  Join us in advancing the frontiers of healthcare with
                  compassion, innovation, and excellence, and in shaping a
                  future where quality healthcare is accessible, ethical, and
                  truly patient-centred.
                </p>

                <div>
                  <div className="text-lg font-bold text-black">
                    Dr. Mahabalesh Shetty
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Dean, Alva’s Institute of Medical Sciences and Research
                    Centre, Moodubidire.
                  </div>
                </div>
              </div>
            </div>
            </div>
  );
}
