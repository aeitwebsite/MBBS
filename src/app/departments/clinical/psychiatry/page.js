import Departments1 from "@/components/Departments1";

export default function PsychiatryPage() {
  const data = {
    title: "Department of Psychiatry",
    description: (
      <>
        <p>
          The Department of Psychiatry introduces students to mental health, behavioral sciences, and psychological aspects of medical care. It focuses on conditions such as depression, anxiety, schizophrenia, substance abuse, and personality disorders. Students are taught how to communicate effectively with patients and understand the bio-psycho-social model of illness.
        </p>
        <p>
          Clinical exposure includes outpatient psychiatry clinics, in-patient ward rounds, and case discussions. Students are trained to identify psychiatric symptoms, perform mental status examinations, and understand treatment modalities including pharmacotherapy and psychotherapy. The department also sensitizes students to mental health stigma and ethical considerations in psychiatric practice.
        </p>

      </>
    ),
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of Psychiatry….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      { name: "Dr. Kartik Kashyap", designation: "Associate Professor", image: "/images/profile-pic/clinical/psychiatry/Dr_Kartik_Kashyap.png", email: "", joiningDate: "", qualifications: "MBBS,DPM,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Aniruddha Shetty", designation: "Assistant Professor", image: "/images/profile-pic/clinical/psychiatry/Dr_Aniruddha_Shetty.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Prajakta V Rao", designation: "Senior Resident", image: "/images/profile-pic/clinical/psychiatry/Dr_Prajakta_V_Rao.png", email: "", joiningDate: "", qualifications: "MBBS,DPM,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sindhu K S", designation: "Clinical Psychologist", image: "/images/profile-pic/clinical/psychiatry/Dr_Sindhu_K_S.png", email: "", joiningDate: "", qualifications: "MSc,MPhil", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}