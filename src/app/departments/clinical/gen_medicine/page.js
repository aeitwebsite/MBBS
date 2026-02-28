import Departments1 from "@/components/Departments1";

export default function GeneralMedicinePage() {

  const data = {
    title: "Department of General Medicine",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of General Medicine at Alva’s Institute of Medical Sciences and Research Centre forms the foundation of clinical training for MBBS students. It offers in-depth knowledge and hands-on exposure to the diagnosis and management of a wide spectrum of adult medical conditions, ranging from common infections to complex multi-system disorders. The department ensures that students learn the art of history-taking, physical examination, clinical reasoning, and appropriate use of investigations.
        </p>
        <p>
          Students participate in outpatient clinics, inpatient care, intensive care units, and emergency services under the guidance of experienced faculty. Emphasis is placed on developing strong diagnostic skills, ethical medical practice, and a holistic understanding of patient care. Regular case presentations, clinical discussions, and integrated teaching sessions with other departments enhance both the knowledge and confidence of medical students.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Nirmala A C", designation: "Professor" },
      { name: "Dr Bolar Sadananda Naik", designation: "Associate Professor" },
      { name: "Dr PVR Leela Mohan", designation: "Associate Professor" },
      { name: "Dr Vipindas P S", designation: "Assistant Professor" },
      { name: "Dr Dithesh M", designation: "Assistant Professor" },
      { name: "Dr Dhanya Alva K", designation: "Assistant Professor" },
      { name: "Dr Manukiran", designation: "Assistant Professor" },
      { name: "Dr Chaithra", designation: "Assistant Professor" },
      { name: "Dr Harshavardhan R", designation: "Senior Resident" },
      { name: "Dr Rachel R Luke", designation: "Senior Resident" },
      { name: "Dr Abhilash N", designation: "Senior Resident" },
      { name: "Dr Chethan", designation: "Senior Resident" },
      { name: "Dr Vaibhav S Jain", designation: "Senior Resident" },
      { name: "Dr Rajashekhar Mulimani", designation: "Senior Resident" },
      { name: "Dr Anup Raikar", designation: "Senior Resident" }
    ]
  };

  return (
    <Departments1
      categoryTitle="Clinical"
      departmentData={data}
    />
  );
}