"use client";
import Link from "next/link";

export default function DepartmentsLanding() {
  const categories = [
    {
      title: "Pre-Clinical",
      slug: "pre-clinical",
      image: "/images/pre-clinical.png",
    },
    {
      title: "Para-Clinical",
      slug: "para-clinical",
      image: "/images/para-clinical.png",
    },
    {
      title: "Clinical",
      slug: "clinical",
      image: "/images/clinical.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Academic Departments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link href={`/departments/${cat.slug}`} key={cat.slug}>
            <div className="bg-white rounded-2xl shadow-md overflow-visible hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 p-2">
              
              <div className="h-80 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
