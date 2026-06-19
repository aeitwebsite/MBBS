import Departments1 from "@/components/Departments1";

export default function PaediatricsPage() {
  const data = {
    title: "Department of Paediatrics",
    description: (
      <>
        <p>
          The Department of Paediatrics focuses on the healthcare of infants, children, and adolescents, emphasizing both preventive and curative aspects. Students learn about growth and development, nutritional needs, immunization, and the management of common and complex pediatric illnesses. The department introduces the principles of family-centered care, where communication and empathy are central.
        </p>
        <p>
          Clinical exposure includes pediatric outpatient departments, inpatient wards, and neonatal intensive care units (NICU). Students are trained to perform pediatric examinations, assess developmental milestones, and manage childhood emergencies. Case discussions, bedside teaching, and regular academic activities help students develop competence in managing young patients with compassion and confidence.
        </p>

      </>
    ),
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of Paediatrics….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      { name: "Dr. Rangaswamy Maggad", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Rangaswamy_Maggad.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Shivakumar S", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Shivakumar_S.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Damodaran A M", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Damodaran_A_M.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Rukmini Sudhakar", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Rukmini_Sudhakar.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Aashish Sharma K", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Patho_Dr_Aashish_Sharma_K.JPG", email: "", joiningDate: "18/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Pramitha M", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Pramitha_M.png", email: "", joiningDate: "31/10/2025", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Sai K", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Patho_Dr_Sai_K.JPG", email: "", joiningDate: "03/07/2025", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Arun J R", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pathology/Patho_Dr_Arun_J_R.JPG", email: "", joiningDate: "01/12/2025", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Ashok Marathe", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pathology/Dr_Ashok_Marathe.png", email: "", joiningDate: "03/10/2025", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Roshini Rochelle Rodrigues", designation: "Senior Resident", image: "", email: "", joiningDate: "16/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Balaji D R", designation: "Tutor", image: "", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. K Anirudh Bhat", designation: "Tutor", image: "/images/profile-pic/para-clinical/pathology/Dr_K_Anirudh_Bhat.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Karthik C", designation: "Tutor", image: "", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Sonia George", designation: "Tutor", image: "", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Yashwanth D J", designation: "Tutor", image: "/images/profile-pic/para-clinical/pathology/Dr_Yashwanth_D_J.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Samith Ahmed", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Samith_Ahmed.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Vinutha B", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Vinutha_B.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]

  };


  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}