import Departments1 from "@/components/Departments1";

export default function PathologyPage() {
  const data = {
    title: "Department of Pathology",
    description: (
      <>
        <p>
          The Department of Pathology at Alva’s Institute of Medical Sciences and Research Centre plays a central role in bridging the gap between basic medical sciences and clinical practice. As one of the key subjects taught during the second professional year of the MBBS course, Pathology provides students with a strong foundation in understanding the mechanisms of disease and the principles of diagnosis.
        </p>
        <p>
          Our department is led by experienced and dedicated faculty who are passionate about teaching and mentoring future doctors. Students gain hands-on exposure through well-structured practical sessions, case-based discussions, and access to real-time diagnostic work, helping them develop critical thinking and diagnostic skills early in their medical journey.
        </p>
        <p>
          The department also operates a fully functional Central Diagnostic Laboratory and a NABH-certified Blood Bank, both of which are essential components of our teaching hospital. The lab offers diagnostic services in Clinical Pathology, Hematology, Cytology, Surgical Pathology, and Onco pathology, providing students with valuable opportunities to observe and understand real-world medical investigations.
        </p>
        <p>
          While our primary focus is on undergraduate education, we ensure that students are introduced to the broad scope of pathology and its relevance in various fields such as cancer screening, genetics, immunology, forensic medicine, and biomedical research. With over 17 recognized subspecialties in pathology, students are encouraged to explore future career opportunities and develop a deeper interest in the subject.
        </p>
        <p>
          At Alva’s, the Department of Pathology is committed to nurturing analytical thinking, scientific curiosity, and clinical relevance—equipping MBBS students with the knowledge and skills needed to contribute meaningfully to healthcare.
        </p>

      </>
    ),
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of Pathology….`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [
      { name: "Dr. Rangaswamy Maggad", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Rangaswamy_Maggad.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Shivakumar S", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Shivakumar_S.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Damodaran A M", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Damodaran_A_M.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Rukmini Sudhakar", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Rukmini_Sudhakar.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Aashish Sharma K", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Patho_Dr_Aashish_Sharma_K.JPG", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Pramitha M", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Pramitha_M.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sai K", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Sai_K.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Arun J R", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pathology/Dr_Arun_J_R.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Ashok Marathe", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pathology/Dr_Ashok_Marathe.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Roshini Rochelle Rodrigues", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Balaji D R", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. K Anirudh Bhat", designation: "Tutor", image: "/images/profile-pic/para-clinical/pathology/Dr_K_Anirudh_Bhat.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Karthik C", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sonia George", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Yashwanth D J", designation: "Tutor", image: "/images/profile-pic/para-clinical/pathology/Dr_Yashwanth_D_J.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Samith Ahmed", designation: "Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Samith_Ahmed.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vinutha B", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Vinutha_B.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]

    // { name: "Dr. Rangaswamy Magad", designation: "Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Samith Ahmed", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Samith_Ahmed.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

    // { name: "Dr. Damodaran A M", designation: "Associate Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Damodaran_A_M.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Shivakumar S", designation: "Associate Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Shivakumar_S.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

    // { name: "Dr. Aashish Sharma K", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Patho_Dr_Aashish_Sharma_K.JPG", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Sai K", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Sai_K.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Vinutha", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Vinutha.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Pramitha M", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pathology/Dr_Pramitha_M.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

    // { name: "Dr. Ashok Marathe", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pathology/Dr_Ashok_Marathe.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Arun J R", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pathology/Dr_Arun_J_R.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Roshini Rochelle Rodirgues", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

    // { name: "Dr. Yashwanth D J", designation: "Tutor", image: "/images/profile-pic/para-clinical/pathology/Dr_Yashwanth_D_J.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Karthik C", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Sonia George", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. K Anirudh Bhat", designation: "Tutor", image: "/images/profile-pic/para-clinical/pathology/Dr_K_Anirudh_Bhat.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
    // { name: "Dr. Balaji D R", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

  };

  return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}