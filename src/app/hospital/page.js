"use client";
import Link from "next/link";

export default function HospitalHome() {
  const cards = [
    {
      title: "IPD",
      description: "In-Patient Department Statistics",
      link: "/hospital/ipd",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&h=450&q=80",
    },
    {
      title: "OPD",
      description: "Out-Patient Department Statistics",
      link: "/hospital/opd",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&h=450&q=80",
    },
    {
      title: "Hospital",
      description: "Visit Official Hospital Website",
      link: "https://alvashealthcentre.com/",
      external: true,
      image:
        "https://images.unsplash.com/photo-1586773860414-5b7c7d89b8b3?auto=format&fit=crop&w=600&h=450&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-12 py-8 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
        Hospital Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) =>
          card.external ? (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="h-44 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-800">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {card.description}
                </p>
              </div>
            </a>
          ) : (
            <Link
              key={index}
              href={card.link}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="h-44 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-800">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {card.description}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}