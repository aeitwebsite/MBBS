import Departments1 from "@/components/Departments1";

export default function OphthalmologyPage() {
  const data = {
    title: "Department of Ophthalmology",
    description: (
      <>
        <p>
          The Department of Ophthalmology provides students with knowledge and skills related to the anatomy, physiology, and diseases of the eye. It focuses on common conditions such as refractive errors, cataract, glaucoma, and conjunctivitis. Students are taught how to perform basic eye examinations, including visual acuity testing, fundoscopy, and slit-lamp examination.
        </p>
        <p>
          Clinical postings allow students to participate in outpatient consultations, minor procedures, and community screening programs. The department emphasizes early detection and prevention of blindness and integrates theoretical learning with community eye health awareness. Regular demonstrations and clinical case discussions ensure a strong foundation in ocular care.
        </p>

      </>
    ),
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of Ophthalmology….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      { name: "Dr. Cynthia Arunachalam", designation: "Professor", image: "/images/profile-pic/clinical/ophthalmology/Dr_Cynthia_Arunachalam.png", email: "", joiningDate: "19/01/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Roopashree", designation: "Associate Professor", image: "/images/profile-pic/clinical/ophthalmology/Dr_Roopashree.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Arvind Achutha Kini", designation: "Assistant Professor", image: "", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Laxminarayana Aroor Rao", designation: "Assistant Professor", image: "/images/profile-pic/clinical/ophthalmology/Opthal_Dr_L_A_Rao.jpeg", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Tanvi Ravindranath Rai", designation: "Senior Resident", image: "/images/profile-pic/clinical/ophthalmology/Dr_Tanvi_Ravindranath_Rai.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Ranjitha", designation: "Senior Resident", image: "", email: "", joiningDate: "02/03/2026", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Vikram Jain", designation: "Assistant Professor", image: "/images/profile-pic/clinical/ophthalmology/Dr_Vikram_Jain.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Smruthi", designation: "Senior Resident", image: "/images/profile-pic/clinical/ophthalmology/Dr_Smruthi.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Kalary Jaynthi", designation: "Senior Resident", image: "/images/profile-pic/clinical/ophthalmology/Dr_Kalary_Jaynthi.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}