"use client";
import Link from "next/link";

export default function DepartmentsLanding() {
  const categories = [
    {
      title: "Pre-Clinical",
      slug: "pre-clinical",
      image: "https://images.unsplash.com/photo-1576086213369-97a306dca664?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Para-Clinical",
      slug: "para-clinical",
      image: "https://images.unsplash.com/photo-1579152276503-617519f8a104?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Clinical",
      slug: "clinical",
      image: "https://images.unsplash.com/photo-1581595221444-9a13a5c94294?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Academic Departments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link href={`/departments/${cat.slug}`} key={cat.slug} className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="p-6 flex justify-between items-center bg-white">
                <span className="text-xl font-bold text-gray-800">{cat.title}</span>
                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}