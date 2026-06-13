import Departments1 from "@/components/Departments1";

export default function PharmacologyPage() {
  const data = {
    title: "Department of Pharmacology",
    description: (
      <>
        <p>
          Pharmacology is a vital discipline in medical education that bridges the gap between basic science and clinical practice. It is the study of drugs and their effects on the human body, focusing on how medications are developed, how they work, and how they are used to treat diseases. Understanding pharmacology is essential for safe and effective prescribing, patient care, and the rational use of medicines.
        </p>
        <p>
          At Alva’s Institute of Medical Sciences and Research Centre, the Department of Pharmacology is dedicated to training MBBS students to become competent and responsible future prescribers. The curriculum is designed to provide a strong foundation in drug mechanisms, therapeutic uses, adverse effects, and interactions, along with recent advancements in pharmacological research.
        </p>
        <p>
          The department adopts a student-centered approach with the use of interactive teaching methods, case-based learning, and practical sessions in prescription writing and experimental pharmacology. Emphasis is also placed on ethics in drug use, pharmacovigilance, and evidence-based medicine.
        </p>
        <p>
          By combining scientific knowledge with clinical relevance, the Department of Pharmacology plays a crucial role in shaping the professional judgment and prescribing skills of future doctors.
        </p>

      </>
    ),
    hod: {
      name: "Dr. Ravindra S Beedimani",
      designation: "Professor & Head of Department",
      image: "/images/profile-pic/para-clinical/pharmacology/Pharmaco_Dr_Ravindra_S_Beedimani.JPG",
      message: `Welcome to the Department of Pharmacology….,`,
      email: "",
      joiningDate: "",
      qualifications: "MBBS, MD",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [
      { name: "Dr Laxminarayana Bairy", designation: "Professor", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Laxminarayana_Bairy.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Rekha Nayaka", designation: "Professor", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Rekha_Nayak_Dr_Rekha_Nayak_20.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr H C Nandini", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr Sangeethanath Sharma", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Sangeeta_Nath_Sharma_Dr_Sangeeta_Nath_Sharma_13.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr Chaitra R", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr Krishnamurthy Kadamalakatte Hanumantha Shetty", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Krishnamurthy_Kadamalakatte_Hanumantha_Shetty.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr Abhijna Ballal R", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Abhijna_Ballal_R.png", email: "", joiningDate: "", qualifications: "M.Sc, Phd", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Rajasree G", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vasu Praveen Chander Kanuru", designation: "Senior Resident", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Vasu_Praveen_Chander_Kanuru.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr Pavan Kumar B N", designation: "Tutor", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Pavan_Kumar_B_N.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr Kurian S Thomas", designation: "Tutor", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Kurian_S_Thomas.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr Rabil Hussain", designation: "Tutor", image: "/images/profile-pic/para-clinical/pharmacology/Dr_Rabil_Hussain.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr Niveditha Kini", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" }
    ]

  };

  return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}
