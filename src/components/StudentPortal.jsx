"use client";

import { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("academic");
  const [activeCommittee, setActiveCommittee] = useState(null);
  const [open, setOpen] = useState(false);

  const committees = [
    { name: "Medical Education Unit Committee", key: "meu" },
    { name: "Curriculum Committee", key: "curriculum" },
    { name: "Anti Ragging Committee", key: "anti" },
    { name: "Gender Harassment Committee", key: "gender" },
    { name: "Scientific Committee", key: "scientific" },
    { name: "Ethical Committee", key: "ethical" },
    { name: "Antimicrobial Stewardship Committee", key: "ams" },
    { name: "Hospital Infection Control Committee", key: "hic" },
    { name: "Pharmacovigilance Committee", key: "pv" },
  ];

  const handleTabChange = (key) => {
    setActiveTab(key);
    setActiveCommittee(null);
  };

  const BackButton = () => (
    <button
      onClick={() => setActiveCommittee(null)}
      className="mb-6 flex items-center text-[#04044a] font-bold"
    >
      <span className="mr-2 text-2xl">←</span> Back
    </button>
  );

  const Table = ({ head, rows }) => (
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl border">
      <table className="w-full border-collapse min-w-[600px]">
        <thead className="bg-[#04044a] text-white">
          <tr>
            {head.map((h, i) => (
              <th key={i} className="p-3 border text-sm md:text-base">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-gray-50">
              {row.map((cell, j) => (
                <td key={j} className="p-3 border text-xs md:text-sm">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderCommittee = () => {
    switch (activeCommittee) {
      case "meu":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Medical Education Unit Committee</h2>
            <Table
              head={["Sl. No", "Name", "Designation", "Position"]}
              rows={[
                ["1", "Dr. Mahabalesh Shetty", "Dean", "Head"],
                ["2", "Dr. Chethana K", "MEU Coordinator (Community Medicine)", "Member"],
                ["3", "Dr. Asharani N", "Professor & HOD – Biochemistry", "Member"],
                ["4", "Dr. Jayaprakash B.R", "Professor & HOD – Anatomy", "Member"],
                ["5", "Dr. Meena Kiran", "Associate Professor – Forensic Medicine", "Member"],
                ["6", "Dr. Ravindra S Beedimani", "Professor & HOD – Pharmacology", "Member"],
                ["7", "Dr. Anirudh Shetty", "Assistant Professor – Psychiatry", "Member"],
                ["8", "Dr. Dhanya Hegde", "Assistant Professor – General Medicine", "Member"],
                ["9", "Dr. Hana Shetty", "Assistant Professor – OBG", "Member"],
                ["10", "Dr. Aishwarya Ramakrishna", "Assistant Professor – ENT", "Member"],
              ]}
            />
          </>
        );
      case "curriculum":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Curriculum Committee</h2>
            <Table
              head={["Sl. No", "Name", "Designation", "Position"]}
              rows={[
                ["1", "Dr. Mahabalesh Shetty", "Dean", "Head"],
                ["2", "Dr. Jnaneshwar P Shenoy", "Professor & HOD – Physiology", "Member"],
                ["3", "Dr. Yashwanth Kumar Rai K", "Professor & HOD – Microbiology", "Member"],
                ["4", "Dr. Vasanth T", "Professor – Paediatrics", "Member"],
                ["5", "Dr. Roshan R Jalisatgi", "Professor & HOD – ENT", "Member"],
                ["6", "Dr. Sadananda Naik", "Professor – General Medicine", "Member"],
                ["7", "Dr. Swarna Rekha", "Associate Professor – Anaesthesia", "Member"],
                ["8", "Dr. Chethana K", "MEU Coordinator – Community Medicine", "Member"],
              ]}
            />
          </>
        );
      case "anti":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Anti Ragging Committee</h2>
            <Table
              head={["Sl. No", "Name", "Designation", "Position"]}
              rows={[
                ["1", "Dr. Mahabalesh Shetty", "Dean", "Head"],
                ["2", "Dr. Mamatha", "Advocate", "Member"],
                ["3", "Mr. Deviprasad Shetty", "NGO Representative", "Member"],
                ["4", "Mrs. Mookambika", "MSW Department", "Member"],
                ["5", "Police Inspector, Moodubidire", "-", "Member"],
                ["6", "Mr. Dhananjay", "Press", "Member"],
                ["7", "Mrs. Prarthana / Mr. Santhosh", "Resident Warden (F/M)", "Member"],
                ["8", "Dr. Cynthia", "Professor & HOD – Biochemistry", "Member"],
                ["9", "Dr. Jnaneshwar Shenoy", "Professor & HOD – Physiology", "Member"],
                ["10", "Dr. Hana Shetty", "Assistant Professor – OBG", "Member"],
                ["11", "Dr. Shamanth Shetty", "Deputy Medical Superintendent", "Member"],
              ]}
            />
          </>
        );
      case "gender":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Gender Harassment Committee</h2>
            <Table
              head={["Sl. No", "Name", "Designation", "Position"]}
              rows={[
                ["1", "Dr. Swarnarekha", "Associate Professor – Anaesthesiology", "Head"],
                ["2", "Dr. Madhumala", "NGO Representative", "Member"],
                ["3", "Dr. Prajakta V Rao", "Senior Resident – Psychiatry", "Member"],
                ["4", "Dr. Aishwarya Ramakrishnan", "Assistant Professor – ENT", "Member"],
                ["5", "Mrs. Chandrika", "HR Department", "Member"],
                ["6", "Ms. Deepika", "External Member", "Member"],
              ]}
            />
          </>
        );
      case "scientific":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Scientific Committee</h2>
            <Table
              head={["Sl. No", "Name", "Designation", "Position"]}
              rows={[
                ["1", "Dr. Mahabalesh Shetty", "Dean", "Head"],
                ["2", "Dr. Ravindra S Beedimani", "Secretary – Pharmacology", "Member"],
                ["3", "Dr. Jebitha", "Biostatistician", "Member"],
                ["4", "Dr. Roshan Jalisatgi", "Professor & HOD – ENT", "Member"],
                ["5", "Dr. Yashwanth Rai", "Professor & HOD – Microbiology", "Member"],
                ["6", "Dr. Shabina Inayath", "Associate Professor – OBG", "Member"],
              ]}
            />
          </>
        );
      case "ethical":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Ethical Committee</h2>
            <Table
              head={["Sl. No", "Name", "Designation", "Position"]}
              rows={[
                ["1", "Dr. Padmaja Uday Kumar", "Father Muller Medical College,Professor – Pharmacology", "Head"],
                ["2", "Dr. Ravindra S Beedimani", "Professor & HOD – Pharmacology", "Secretary"],
                ["3", "Dr. Mamatha", "Advocate", "Member"],
                ["4", "Dr. Sachin Shetty", "Professor", "Member"],
                ["5", "Dr. Sai K", "Assistant Professor – Pathology", "Member"],
                ["6", "Dr. Jayaprakash B R", "Professor & HOD – Anatomy", "Member"],
                ["7", "Dr. Chethan", "Professor – Physiology", "Member"],
                ["8", "Mr. Devi Prasad Shetty", "NGO", "Member"],
                ["9", "Dr. Aishwarya Ramakrishna", "Assistant Professor – ENT", "Member"],
                ["10", "Mr. Venugopal Shetty", "External Member", "Member"],
              ]}
            />
          </>
        );
      case "ams":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Antimicrobial Stewardship Committee</h2>
            <Table
              head={["Sl. No", "Name", "Department", "Position"]}
              rows={[
                ["1", "Dr. Sadananda Naik", "General Medicine", "Chairperson"],
                ["2", "Dr. Rekha Rai", "Microbiology", "Coordinator"],
                ["3", "Dr. Sattar Khan", "General Surgery", "Secretary"],
                ["4", "Dr. Vasantha Venkappa Belchada", "Paediatrics", "Member"],
                ["5", "Dr. Arun Kumar Shetty", "Orthopaedics", "Member"],
                ["6", "Dr. Hana Shetty", "OBG", "Member"],
                ["7", "Ms. Thabasam Fathima", "Clinical Pharmacist", "Member"],
                ["8", "Mrs. Julekhabi F. Sab", "Nursing Superintendent", "Member"],
                ["9", "Mr. Naveen Kumar R", "IT Incharge", "Member"],
              ]}
            />
          </>
        );
      case "hic":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Hospital Infection Control Committee</h2>
            <Table
              head={["Sl. No", "Name", "Department", "Position"]}
              rows={[
                ["1", "Dr. Harish Nayak", "General Surgery", "Chairperson"],
                ["2", "Dr. Rekha Rai", "Microbiology", "Coordinator"],
                ["3", "Dr. Dhanya Alva K", "General Medicine", "Secretary"],
                ["4", "Dr. Rakesh Shetty", "General Surgery", "Member"],
                ["5", "Dr. Harshith G C", "Community Medicine", "Member"],
                ["6", "Dr. Arun Kumar Shetty", "Orthopaedics", "Member"],
                ["7", "Dr. Hana Shetty", "OBG", "Member"],
                ["8", "Dr. Abhijith Y V", "Paediatrics", "Member"],
                ["9", "Dr. Swarna Rekha", "Anaesthesiology", "Member"],
                ["10", "Mrs. Anet Desouza", "Emergency Medicine", "Member"],
                ["11", "Mrs. Julekhabi F Sab", "Nursing Superintendent", "Member"],
                ["12", "Ms. Neeshma", "Quality Coordinator", "Member"],
                ["13", "Mrs. Kalavathi", "OT Incharge", "Member"],
                ["14", "Mrs. Yamuna G M", "Emergency Incharge", "Member"],
                ["15", "Mrs. Mangala N H", "ICU Incharge", "Member"],
              ]}
            />
          </>
        );
      case "pv":
        return (
          <>
            <BackButton />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#04044a]">Pharmacovigilance Committee</h2>
            <Table
              head={["Sl. No", "Name", "Designation", "Position"]}
              rows={[
                ["1", "Dr. Harish Nayak", "Medical Superintendent – General Surgery", "Chairperson"],
                ["2", "Dr. Ravindra S Beedimani", "Professor & HOD – Pharmacology", "Coordinator"],
                ["3", "Dr. Sangeethanath", "Assistant Professor – Pharmacology", "Secretary"],
                ["4", "Dr. Sadanand Naik", "Associate Professor – General Medicine", "Member"],
                ["5", "Dr. Abhijith Y V", "Assistant Professor – Paediatrics", "Member"],
                ["6", "Dr. Jiby V Benny", "Senior Resident – Dermatology", "Member"],
                ["7", "Dr. Prajaktha", "Senior Resident – Psychiatry", "Member"],
                ["8", "Dr. Sattar Khan", "Assistant Professor – General Surgery", "Member"],
                ["9", "Dr. Hana Shetty", "Assistant Professor – OBG", "Member"],
                ["10", "Ms. Preethi", "Clinical Pharmacist", "Member"],
                ["11", "Mrs. Julekhabi F Sab", "Nursing Superintendent", "Member"],
              ]}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">

      {/* ================= MOBILE DROPDOWN ================= */}
      <div className="block md:hidden w-full px-4 pt-6 relative">

        {/* Dropdown Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full px-4 py-3 text-sm font-semibold text-left 
               bg-white border border-gray-300 rounded-xl
               flex justify-between items-center
               transition-all duration-300
               focus:outline-none focus:ring-2 focus:ring-[#0A0B49]"
        >
          {
            {
              academic: "Academic",
              rules: "Rules and Regulation",
              facilities: "Campus Facilities",
              committees: "Committees",
            }[activeTab]
          }

          <span
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
          >
            ▼
          </span>
        </button>

        {/* Overlay Dropdown List */}
        {open && (
          <div className="absolute left-4 right-4 top-full mt-3 
                    bg-white border border-gray-200 
                    rounded-xl shadow-lg z-50">
            {[
              ["academic", "Academic"],
              ["rules", "Rules and Regulation"],
              ["facilities", "Campus Facilities"],
              ["committees", "Committees"],
            ].map(([key, label]) => (
              <div
                key={key}
                onClick={() => {
                  handleTabChange(key);
                  setOpen(false);
                }}
                className={`px-4 py-3 text-sm cursor-pointer transition-colors duration-200
            ${activeTab === key
                    ? "bg-[#0A0B49] text-white"
                    : "text-gray-700 hover:bg-blue-600 hover:text-white"
                  }`}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* ================= MAIN LAYOUT ================= */}
      <div className="flex flex-col md:flex-row w-full">

        {/* ================= DESKTOP SIDEBAR ================= */}
        <div className="hidden md:block md:w-[23%] lg:w-[20%] p-4">
          {[
            ["academic", "Academic"],
            ["rules", "Rules and Regulation"],
            ["facilities", "Campus Facilities"],
            ["committees", "Committees"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`w-full text-left px-4 py-4 mb-3 rounded-xl transition-all duration-200 font-semibold border-2
              ${activeTab === key
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-gray-50 text-gray-700 border-transparent hover:border-blue-200"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ================= CONTENT AREA ================= */}
        <div className="w-full md:w-[77%] lg:w-[80%] p-6 md:p-16">

          {activeTab === "committees" && !activeCommittee && (
            <>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-[#04044a]">
                Committee List
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {committees.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setActiveCommittee(c.key)}
                    className="flex justify-between items-center bg-[#04044a] p-6 md:p-8 text-white rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    <span className="text-lg md:text-xl font-semibold text-left pr-2">
                      {c.name}
                    </span>
                    <span className="bg-white text-black px-3 py-1 rounded text-sm font-bold flex-shrink-0">
                      VIEW
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {activeTab === "committees" && activeCommittee && renderCommittee()}

          {activeTab === "academic" && (
            <div className="text-left text-gray-800 animate-fadeIn space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#04044a] border-b-2 border-blue-100 pb-2 inline-block">Academics</h2>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg mb-6 leading-relaxed text-gray-600">
                  Welcome to the Academic portal of our Medical College. We offer a comprehensive and rigorous medical curriculum designed by expert academicians and clinicians to prepare the next generation of healthcare professionals.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-[#04044a] flex items-center">
                  <span className="bg-blue-100 p-2 rounded-lg mr-3 shadow-sm">🎓</span> Our Programs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:-translate-y-1 transition-transform duration-300 text-center shadow-sm hover:shadow-md">
                    <div className="text-4xl mb-4">👨‍⚕️</div>
                    <h4 className="font-bold text-[#04044a] text-lg mb-2">Undergraduate (MBBS)</h4>
                    <p className="text-sm text-gray-600">A comprehensive 5.5-year program including a 1-year mandatory rotating internship.</p>
                  </div>

                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#04044a] flex items-center mt-8">
                  <span className="bg-green-100 p-2 rounded-lg mr-3 shadow-sm">📚</span> Learning Pedagogy
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#04044a] shadow-inner mt-6">
                  <p className="text-md leading-relaxed text-gray-700">
                    Our teaching methodology emphasizes early clinical exposure, integrated learning, and competency-based medical education. Students benefit from interactive lectures, small group discussions, problem-based learning, and extensive hands-on clinical training in our multi-specialty teaching hospital.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rules" && (
            <div className="text-left text-gray-800 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#04044a] border-b-2 border-blue-100 pb-2 inline-block">Rules and Regulations</h2>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-lg mb-8 leading-relaxed text-gray-600">
                  Our institution maintains strict standards of discipline and professional conduct to ensure a safe and conducive learning environment for all students.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Rule 1 */}
                  <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-400"></div>
                    <div className="flex items-start">
                      <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                        🛡️
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#04044a] mb-2">Anti-Ragging Policy</h4>
                        <p className="text-sm text-gray-600">We enforce a strict zero-tolerance policy towards ragging in any form. Offenders will face immediate suspension and legal action as per UGC/NMC guidelines.</p>
                      </div>
                    </div>
                  </div>

                  {/* Rule 2 */}
                  <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-400"></div>
                    <div className="flex items-start">
                      <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                        📅
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#04044a] mb-2">Attendance Mandatory</h4>
                        <p className="text-sm text-gray-600">A minimum of 75% attendance in theory classes and 80% in clinical/practical sessions is strictly required to be eligible for university examinations.</p>
                      </div>
                    </div>
                  </div>

                  {/* Rule 3 */}
                  <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-400"></div>
                    <div className="flex items-start">
                      <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                        👔
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#04044a] mb-2">Dress Code & ID Cards</h4>
                        <p className="text-sm text-gray-600">Students must adhere to the formal dress code. Clean white aprons and valid college ID cards must be worn at all times within the college and hospital premises.</p>
                      </div>
                    </div>
                  </div>

                  {/* Rule 4 */}
                  <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-400"></div>
                    <div className="flex items-start">
                      <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                        🚷
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#04044a] mb-2">Campus Discipline</h4>
                        <p className="text-sm text-gray-600">Use of mobile phones is restricted during teaching hours. Smoking, consumption of alcohol, or any illicit substances is strictly prohibited on campus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "facilities" && (
            <div className="text-left text-gray-800 animate-fadeIn space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#04044a] border-b-2 border-blue-100 pb-2 inline-block">Campus Facilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    🏛️
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#04044a]">Central Library</h3>
                  <p className="text-sm text-gray-600">A fully air-conditioned, 24/7 central library with a vast collection of national and international medical books, journals, and e-resources to support research and learning.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    🔬
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#04044a]">Skill Labs & Museums</h3>
                  <p className="text-sm text-gray-600">State-of-the-art simulation centers and clinical skill labs equipped with advanced mannequins. Departmental museums offer excellent pathology and anatomy specimens.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    🛏️
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#04044a]">Hostel & Mess</h3>
                  <p className="text-sm text-gray-600">Separate, secure, and well-furnished hostels for boys and girls within the campus. The mess provides hygienic, nutritious, and balanced meals tailored for student needs.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    🏥
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#04044a]">Teaching Hospital</h3>
                  <p className="text-sm text-gray-600">An attached multi-specialty hospital with high patient footfall, modern OTs, and ICUs, ensuring excellent practical and clinical exposure for our students.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    ⚽
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#04044a]">Sports & Recreation</h3>
                  <p className="text-sm text-gray-600">Expansive playgrounds for outdoor sports (cricket, football), indoor game facilities, and a fully equipped gymnasium to promote physical fitness and well-being.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    🤝
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#04044a]">Student Support</h3>
                  <p className="text-sm text-gray-600">Dedicated student counseling center, round-the-clock campus security, ATM facilities, cafeteria, and a student healthcare clinic offering free medical aid.</p>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}