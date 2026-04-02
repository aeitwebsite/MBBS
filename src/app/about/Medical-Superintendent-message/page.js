export default function MedicalSuperintendentMessage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Message From The Medical Superintendent
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        
        {/* Image (same style as chairman) */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="w-[90%] mx-auto sm:w-56 md:w-[320px] aspect-[3/4] bg-[#0A0B49]/5 rounded shadow-md border border-gray-100 flex items-center justify-center text-gray-400">
            <span className="text-4xl">👤</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-6">
            I am privileged to welcome you to the clinical wing of Alva’s Institute of Medical Sciences. Our medical centre is committed to providing state-of-the-art healthcare services with a patient-first approach.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-6">
            Our mission is to provide high-quality, clinical care that is affordable and accessible to all members of our community, especially those in rural and underserved areas.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify mb-8">
            With a dedicated team of specialists and nursing staff, we ensure that every patient receives personalized care and the best possible clinical outcomes. We are focused on continuous improvement and excellence in clinical practice.
          </p>

          <div>
            <div className="text-base sm:text-lg font-bold text-black">
              Dr. Pangal Harish Nayak
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Medical Superintendent, AIMSRC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}