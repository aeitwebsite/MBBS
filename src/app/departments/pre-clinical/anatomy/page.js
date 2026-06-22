import Departments1 from "@/components/Departments1";

export default function AnatomyPage() {
  const data = {
    title: "Department of Anatomy",
    description: (
      <>
        <p>
          The Anatomy department deals with the structural organization of the human body through dissection and modern imaging techniques.
        </p>
      </>
    ),
    hod: {
      name: "Dr. Jayaprakash B",
      designation: "Professor & Head of Department",
      image: "/images/profile-pic/pre-clinical/anatomy/Anatom_Dr_Jayaprakash_BR.JPG",
      message: `Welcome to the Department of Anatomy….`,
      email: "",
      joiningDate: "31/10/2025",
      qualifications: "MBBS, MD",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },

    faculties: [
      { name: "Dr. Rajalaxmi Rai", designation: "Associate Professor", image: "/images/profile-pic/pre-clinical/anatomy/Anatomy_Dr_Rajalaxmi_Rai.jpeg", email: "", joiningDate: "01/01/2026", qualifications: "M.Sc, Phd", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Satyam Jyoti", designation: "Tutor", image: "/images/profile-pic/pre-clinical/anatomy/Anatomy_Dr_Satyam_Jyoti.jpeg", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Rahul", designation: "Tutor", image: "/images/profile-pic/pre-clinical/anatomy/Anatomy_Dr_Rahul.jpeg", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Sharanabasappa Kolli", designation: "Tutor", image: "/images/profile-pic/pre-clinical/anatomy/Dr_Sharanabasappa_Kolli.png", email: "", joiningDate: "02/03/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Prajwalkumar Hanchalappa Meti", designation: "Tutor", image: "/images/faculty/prajwal.jpg", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Ranganath Gurunath Talawar", designation: "Tutor", image: "/images/faculty/ranganath.jpg", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Balakrishna Y C", designation: "Tutor", image: "/images/faculty/balakrishna.jpg", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Sharath H", designation: "Tutor", image: "/images/profile-pic/pre-clinical/anatomy/Dr_Sharath_H.png", email: "", joiningDate: "01/11/2025", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Shreya G", designation: "Tutor", image: "", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" }
    ]
  };

  return <Departments1 categoryTitle="Pre-Clinical" departmentData={data} />;
}