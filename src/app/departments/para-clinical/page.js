import Link from "next/link";

export const metadata = {
  title: "Para-Clinical Departments",
  description: "Explore all Para-Clinical Departments"
};

export default function ParaClinicalDepartmentsPage() {
  const departments = [
    { name: "Pathology", slug: "pathology" },
    { name: "Pharmacology", slug: "pharmacology" },
    { name: "Microbiology", slug: "microbiology" },
    { name: "Forensic Medicine", slug: "forensic_medicine" },
    { name: "Community Medicine", slug: "community_medicine" }
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0A0B49] mb-4">
            Para-Clinical Departments
          </h1>
          <p className="text-gray-600">
            Click on any department to explore detailed information.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <Link
              key={dept.slug}
              href={`/departments/para-clinical/${dept.slug}`}
              className="bg-[#0A0B49] text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {dept.name}
              </h2>

              <p className="text-sm text-blue-100">
                View Department →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}