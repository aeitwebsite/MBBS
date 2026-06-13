import Departments1 from "@/components/Departments1";

export default function DermatologyPage() {
  const data = {
    title: "Department of Dermatology",
    description: (
      <>
        <p>
          The Department of Dermatology provides insight into skin, hair, nail disorders, and sexually transmitted infections. Students are taught to recognize and differentiate between various dermatological conditions through visual inspection and clinical history. Emphasis is placed on common diseases such as eczema, psoriasis, acne, fungal infections, and scabies.
        </p>
        <p>
          Clinical exposure includes outpatient consultations and procedural dermatology, such as skin biopsies, cryotherapy, and patch testing. Students learn about systemic associations of skin diseases and the psychological impact of dermatological conditions. The department promotes compassionate care and a methodical approach to diagnosis and treatment.
        </p>

      </>
    ),
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of Dermatology….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      { name: "Dr. Vivek Mishra", designation: "Professor", image: "/images/profile-pic/clinical/dermatology/Dr_Vivek_Mishra.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Keerthi S", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Bhavishya K Shetty", designation: "Assistant Professor", image: "/images/profile-pic/clinical/dermatology/Dr_Bhavishya_K_Shetty.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Jiby V Benny", designation: "Senior Resident", image: "/images/profile-pic/clinical/dermatology/Dr_Jiby_V_Benny.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. H Anchitha", designation: "Senior Resident", image: "/images/profile-pic/clinical/dermatology/Dr_Anchitha_Dr_Anchitha_24.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },

    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}