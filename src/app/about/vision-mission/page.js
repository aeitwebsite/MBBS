export default function VisionMission() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 font-sans">
      {/* Header Section */}
      <div className="bg-[#2a3341] py-3 px-6 shadow-md rounded-sm">
        <h2 className="text-white text-xl font-medium tracking-wide">
          Vision & Mission 
        </h2>
      </div>

      <div className="space-y-8">
        {/* Vision Card */}
        <div className="bg-[#e0f7fa] border border-cyan-100 rounded-xl p-8 shadow-sm text-center transition-transform hover:scale-[1.01]">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 underline decoration-2 underline-offset-8">
            Vision
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "To be a centre of excellence in medical education, research, and
            healthcare delivery, nurturing compassionate professionals dedicated
            to serving rural and underserved communities."
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-[#e0f7fa] border border-cyan-100 rounded-xl p-8 shadow-sm text-center transition-transform hover:scale-[1.01]">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 underline decoration-2 underline-offset-8">
            Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "To establish the college as a centre of excellence, delivering
            quality and affordable medical education; to train compassionate and
            skilled professionals committed to providing accessible healthcare
            and innovative solutions to health challenges with integrity and
            social responsibility."
          </p>
        </div>
      </div>
    </div>
  );
}