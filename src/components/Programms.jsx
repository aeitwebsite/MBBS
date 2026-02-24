"use client";

import { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("academic");
  const [activeCommittee, setActiveCommittee] = useState(null);

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
    <div className="flex w-full min-h-screen bg-white">
      {/* LEFT SIDEBAR */}
          <div className="w-full md:w-[23%] lg:w-[20%] p-4">
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
        ${
          activeTab === key
            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
            : "bg-gray-50 text-gray-700 border-transparent hover:border-blue-200"
        }`}
    >
            {label}
          </button>
        ))}
      </div>

      {/* RIGHT - Content Area */}
      <div className="w-full md:w-3/4 p-6 md:p-16">
        {activeTab === "committees" && !activeCommittee && (
          <>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12">Committee List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {committees.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCommittee(c.key)}
                  className="flex justify-between items-center bg-[#04044a] p-6 md:p-8 text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <span className="text-lg md:text-xl font-semibold text-left pr-2">{c.name}</span>
                  <span className="bg-white text-red-600 px-3 py-1 rounded text-sm font-bold flex-shrink-0">VIEW</span>
                </button>
              ))}
            </div>
          </>
        )}

        {activeCommittee && renderCommittee()}
        
        {/* Placeholder for other tabs */}
        {activeTab !== "committees" && (
            <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-400"></h3>
            </div>
        )}
      </div>
    </div>
  );
}