"use client";

export default function OPDPage() {
  const headers = [
    "Department","Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec","Total"
  ];

  const Table = ({ title, subtitle, data }) => (
    <div className="space-y-3 sm:space-y-4">
      <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800">
        {title}
      </h2>

      {subtitle && (
        <p className="text-center text-gray-600 text-xs sm:text-sm">
          {subtitle}
        </p>
      )}

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-[900px] w-full border text-xs sm:text-sm text-center">
          <thead className="bg-blue-900 text-white">
            <tr>
              {headers.map((h) => (
                <th
                  key={h}
                  className="p-2 border whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="odd:bg-gray-100">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="p-2 border font-medium whitespace-nowrap"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-12 py-8 sm:py-10 space-y-12 sm:space-y-16">

      {/* ================= 2026 ================= */}

      <Table
        title="OP – New (Jan 2026 – 18 Feb 2026)"
        data={[
          ["General Medicine",5453,3370,"","","","","","","","","","",8823],
          ["General Surgery",2263,1360,"","","","","","","","","","",3623],
          ["Orthopaedics",1488,1118,"","","","","","","","","","",2606],
          ["Ophthalmology",352,271,"","","","","","","","","","",623],
          ["Obstetrics & Gynaecology",1938,1211,"","","","","","","","","","",3149],
          ["Paediatrics",2351,1539,"","","","","","","","","","",3890],
          ["Psychiatry",234,145,"","","","","","","","","","",379],
          ["Dermatology",604,588,"","","","","","","","","","",1192],
          ["ENT",1206,881,"","","","","","","","","","",2087],
          ["Total",15889,10483,"","","","","","","","","","",26372],
        ]}
      />

      <Table
        title="OP – Revisit (Jan 2026 – 18 Feb 2026)"
        data={[
          ["General Medicine",2326,1475,"","","","","","","","","","",3801],
          ["General Surgery",1754,1020,"","","","","","","","","","",2774],
          ["Orthopaedics",1383,972,"","","","","","","","","","",2355],
          ["Ophthalmology",765,480,"","","","","","","","","","",1245],
          ["Obstetrics & Gynaecology",1271,786,"","","","","","","","","","",2057],
          ["Paediatrics",1193,839,"","","","","","","","","","",2032],
          ["Psychiatry",201,160,"","","","","","","","","","",361],
          ["Dermatology",486,222,"","","","","","","","","","",708],
          ["ENT",623,428,"","","","","","","","","","",1051],
          ["Total",10002,6382,"","","","","","","","","","",16384],
        ]}
      />

      <Table
        title="OP – New + Revisit (Jan 2026 – 18 Feb 2026)"
        data={[
          ["General Medicine",7779,4845,"","","","","","","","","","",12624],
          ["General Surgery",4017,2380,"","","","","","","","","","",6397],
          ["Orthopaedics",2871,2090,"","","","","","","","","","",4961],
          ["Ophthalmology",1117,751,"","","","","","","","","","",1868],
          ["Obstetrics & Gynaecology",3209,1997,"","","","","","","","","","",5206],
          ["Paediatrics",3544,2378,"","","","","","","","","","",5922],
          ["Psychiatry",435,305,"","","","","","","","","","",740],
          ["Dermatology",1090,810,"","","","","","","","","","",1900],
          ["ENT",1829,1309,"","","","","","","","","","",3138],
          ["Total",25891,16865,"","","","","","","","","","",42756],
          ["Emergency Footfall",1966,1274,"","","","","","","","","","",3240],
        ]}
      />

      {/* ================= 2025 ================= */}

      {/* (Remaining 2025 tables unchanged – fully responsive automatically) */}

    </div>
  );
}