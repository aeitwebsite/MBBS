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

      { name: "Dr. C B Ushakiran", designation: "Professor", image: "/images/profile-pic/clinical/paediatrics/Dr_C_B_Ushakiran.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vasantha", designation: "Associate Professor", image: "/images/profile-pic/clinical/paediatrics/Dr_Vasantha.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Raghavendra M Doddamani", designation: "Professor", image: "/images/profile-pic/clinical/paediatrics/Dr_Raghavendra_M_Doddamani.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Abhijith Y V", designation: "Assistant Professor", image: "/images/profile-pic/clinical/paediatrics/Dr_Abhijith_Y_V.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. A Shivaram Rai", designation: "Assistant Professor", image: "/images/profile-pic/clinical/paediatrics/Dr_A_Shivaram_Rai.png", email: "", joiningDate: "", qualifications: "MBBS,DCH", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Harshitha M Swamy", designation: "Assistant Professor", image: "/images/profile-pic/clinical/paediatrics/Dr_Harshitha_M_Swamy.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Deepak Preetesh DSouza", designation: "Senior Resident", image: "/images/profile-pic/clinical/paediatrics/Paedia_Dr_Deepak_Preetesh_Dsouza.JPG", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Charan R K", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Prathith", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Manjunath C B", designation: "Associate Professor", image: "/images/profile-pic/clinical/paediatrics/Dr_Manjunath_C_B.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Archana D V", designation: "Senior Resident", image: "/images/profile-pic/clinical/paediatrics/Dr_Archana_D_V.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Apoorva R M", designation: "Assistant Professor", image: "/images/profile-pic/clinical/paediatrics/Dr_Apoorva_R_M.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

    ]

  };


  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}