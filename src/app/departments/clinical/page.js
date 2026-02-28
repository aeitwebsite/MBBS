import Link from "next/link";

export const metadata = {
  title: "Clinical Departments",
  description: "Explore all Clinical Departments"
};

export default function ClinicalDepartmentsPage() {
  const departments = [
    { name: "General Medicine", slug: "gen_medicine" },
    { name: "General Surgery", slug: "gen_surgery" },
    { name: "Paediatrics", slug: "paediatrics" },
    { name: "Obstetrics & Gynaecology", slug: "obs_gyn" },
    { name: "Orthopaedics", slug: "orthopaedics" },
    { name: "Ophthalmology", slug: "ophthalmology" },
    { name: "ENT", slug: "ent" },
    { name: "Dermatology", slug: "dermatology" },
    { name: "Psychiatry", slug: "psychiatry" },
    { name: "Radiology", slug: "radiology" },
    { name: "Anaesthesiology", slug: "anaesthesiology" }
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0A0B49] mb-4">
            Clinical Departments
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
              href={`/departments/clinical/${dept.slug}`}  // ✅ FIXED LINK
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