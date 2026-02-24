"use client";

export default function IPDPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-12 py-8 sm:py-10 space-y-12 sm:space-y-14">

      {/* TABLE 1 */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-1 text-gray-800">
          Alva’s Health Centre – Teaching Hospital
        </h2>
        <p className="text-center text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Department wise In-Patient Statistics (Jan 2025 – Dec 2025)
        </p>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-[900px] w-full border text-xs sm:text-sm text-center">
            <thead className="bg-green-900 text-white">
              <tr>
                {[
                  "Department","Jan","Feb","Mar","Apr","May","Jun",
                  "Jul","Aug","Sep","Oct","Nov","Dec","Total"
                ].map((h) => (
                  <th key={h} className="p-2 border whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["General Medicine",685,477,659,587,612,593,695,708,680,607,550,814,7667],
                ["General Surgery",600,411,597,548,552,535,651,641,639,437,472,740,6823],
                ["Orthopaedics",433,376,517,475,499,461,534,546,328,237,301,423,5130],
                ["Ophthalmology",97,122,157,108,151,134,148,154,111,110,110,119,1521],
                ["Obstetrics & Gynaecology",410,365,537,456,441,428,528,511,386,157,280,473,4972],
                ["Paediatrics",325,231,330,296,307,289,346,360,363,321,317,446,3931],
                ["Psychiatry",66,63,58,55,57,47,60,62,47,71,21,3,610],
                ["Dermatology",66,78,87,60,78,73,87,96,45,39,28,30,767],
                ["ENT",153,111,128,109,108,110,126,133,128,93,66,112,1377],
                ["Emergency",0,0,0,0,0,0,0,0,0,2,6,10,18],
                ["Total",2835,2234,3070,2694,2805,2670,3175,3211,2727,2074,2151,3170,32816],
              ].map((row, i) => (
                <tr key={i} className="odd:bg-gray-100">
                  {row.map((cell, j) => (
                    <td key={j} className="p-2 border font-medium whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TABLE 2 */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-1 text-gray-800">
          Alva’s Health Centre – Teaching Hospital
        </h2>
        <p className="text-center text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Department wise In-Patient Statistics (Jan 2026 – 18 Feb 2026)
        </p>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-[900px] w-full border text-xs sm:text-sm text-center">
            <thead className="bg-green-900 text-white">
              <tr>
                {[
                  "Department","Jan","Feb","Mar","Apr","May","Jun",
                  "Jul","Aug","Sep","Oct","Nov","Dec","Total"
                ].map((h) => (
                  <th key={h} className="p-2 border whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["General Medicine",779,456,"","","","","","","","","","",1235],
                ["General Surgery",633,510,"","","","","","","","","","",1143],
                ["Orthopaedics",372,276,"","","","","","","","","","",648],
                ["Ophthalmology",110,126,"","","","","","","","","","",236],
                ["Obstetrics & Gynaecology",341,214,"","","","","","","","","","",555],
                ["Paediatrics",414,262,"","","","","","","","","","",676],
                ["Psychiatry",20,13,"","","","","","","","","","",33],
                ["Dermatology",28,27,"","","","","","","","","","",55],
                ["ENT",87,72,"","","","","","","","","","",159],
                ["Emergency",9,5,"","","","","","","","","","",14],
                ["Total",2793,1961,"","","","","","","","","","",4754],
              ].map((row, i) => (
                <tr key={i} className="odd:bg-gray-100">
                  {row.map((cell, j) => (
                    <td key={j} className="p-2 border font-medium whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}