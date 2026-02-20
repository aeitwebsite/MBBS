export default function Objectives() {
  const objectives = [
    {
      title: "Academic Excellence",
      text: "To offer undergraduate and postgraduate medical education adhering to national standards with a focus on rural and community health."
    },
    {
      title: "Clinical Training",
      text: "To provide clinical training through our affiliated hospitals and healthcare centers, ensuring hands-on experience and patient-centered care."
    },
    {
      title: "Regional Research",
      text: "To engage in research that addresses prevalent medical and public health issues in the region, contributing to evidence-based healthcare."
    },
    {
      title: "Community Wellness",
      text: "To build partnerships with local organizations and health programs to enhance community wellness and medical education."
    },
    {
      title: "Ethical Leadership",
      text: "To ensure the development of professional ethics, leadership, and lifelong learning habits among students."
    }
  ];

  return (
    <div className="max-w-4xl py-6">
      {/* Header with Dark Navy text and Dusty Blue accent line */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-[#2A3341] mb-2">
          Objectives
        </h2>
        {/* Changed from Coral to Dusty Blue (#96BDD5) */}
        <div className="h-1.5 w-16 bg-[#96BDD5] rounded-full"></div>
      </div>
   
      {/* Simple, Attractive List without numbering */}
      <div className="space-y-6">
        {objectives.map((obj, index) => (
          <div 
            key={index} 
            className="flex items-start group"
          >
            {/* Minimalist vertical bar accent in Slate Blue */}
            <div className="mr-5 mt-1.5">
              {/* Changed hover color from Coral to Dusty Blue (#96BDD5) */}
              <div className="h-10 w-1 bg-[#405D81] group-hover:bg-[#96BDD5] transition-colors duration-300 rounded-full"></div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#405D81] mb-1">
                {obj.title}
              </h3>
              <p className="text-[#2A3341] leading-relaxed text-lg opacity-90">
                {obj.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}