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
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of General Medicine….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      // { name: "Dr. Nirmala A C", designation: "Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_Nirmala_A_C.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Bolar Sadananda Naik", designation: "Associate Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_Bolar_Sadananda_Naik.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. PVR Leela Mohan", designation: "Associate Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_PVR_Leela_Mohan.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Pranamya Jain", designation: "Associate Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_Pranamya_Dr_Pranamya_88.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Mithun S", designation: "Associate Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_Mithun_S.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Dhanya Alva K", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_Dhanya_Alva_K.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Dithesh M", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen-med/Gen_Med_Dr_Dithesh_M.JPG", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vipindas P S", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_Vipindas_P_S.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Abhijnya K R", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_Abhijnya_K_R.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Apoorva M Kottary", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_medicine/Dr_Apoorva_M_Kottary.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Abhilash N", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_medicine/Dr_Abhilash_N.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Anup Raikar", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_medicine/Dr_Anup_Raikar.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Harshavardhan R", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_medicine/Dr_Harshavardhan_R.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vaibhav S Jain", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_medicine/Dr_Vaibhav_S_Jain.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Rajashekhar Mulimani", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_medicine/Dr_Rajashekhar_Mulimani.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]
  };

  return (
    <Departments1
      categoryTitle="Clinical"
      departmentData={data}
    />
  );
}