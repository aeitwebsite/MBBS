import Departments1 from "@/components/Departments1";

export default function ForensicMedicinePage() {
  const data = {
    title: "Department of Forensic Medicine",
    description: (
      <>
        <p>
          The Department of Forensic Medicine at Alva’s Institute of Medical Sciences and Research Centre plays a vital role in equipping MBBS students with knowledge at the intersection of medicine and law. Forensic Medicine involves the application of medical principles to assist in the administration of justice.
        </p>
        <p>
          As part of the MBBS curriculum, the subject is introduced during the second professional year, with a focus on theoretical understanding as well as practical skills.
        </p>
        <p>
          Our well-equipped mortuary, demonstration halls, and museum support hands-on learning.
        </p>
        <p>
          By integrating legal awareness with medical knowledge, the Department of Forensic Medicine prepares future doctors to fulfil their ethical and legal duties responsibly.
        </p>

      </>
    ),
    hod: {
      name: "Dr. Mahabalesh Shetty",
      designation: "Dean / Principal",
      email: "dean@alvas.edu.in",
      joiningDate: "15-06-2005",
      image: "/images/Dean.jpg", // placeholder image mapping
      qualifications: `MD (Forensic Medicine) – Kasturba Medical College (KMC), Manipal, Karnataka
MBBS – J.N. Medical College (JNMC), Belagavi, Karnataka`,
      experience: `Dean, Alva's Institute of Medical Sciences and Research Centre, Moodbidri
Former Head, Dept. of Forensic Medicine & Toxicology (18+ years) at K.S. Hegde Medical Academy
Former Director, Student Welfare, K.S. Hegde Medical Academy (NITTE University)
Honorary Medico-Legal Consultant: Governments of Karnataka and Kerala
Medico-Legal Advisor: Multiple State Police Departments across India`,
      interests: `Medico-Legal Consulting & Expert Opinion in Criminal Cases
Clinical Forensic Medicine & Postmortem Examinations
Disaster Response & Management (Specialist for 2010 Mangalore Air Crash)
Substance Abuse Prevention & Public Health Education`,
      responsibilities: `Expert Medico-Legal Consultant for National Human Rights Commission (NHRC)
Consultant for CBI, NIA, Karnataka Police, and Kerala Police
PhD Guide for numerous candidates
Conducted 2,500+ postmortem examinations & 35,000+ wound certificates
Investigation of 500+ crime scenes with expert forensic analysis`,
      memberships: `Past President: Karnataka Medico-Legal Society (KAMLS) & SIMLA
Past Vice President: Mangaluru Indian Medical Association (IMA)
Published 116 peer-reviewed research articles (National & International)
Deposed in 3,000+ court cases as an Expert Witness
300+ Drug Abuse Awareness talks reaching 65,000+ students
Best Teacher Award (Nitte) & 15+ Police Commendations for Expertise`
    },
    faculties: [
      { name: "Dr Meena Kiran", designation: "Associate Professor", image: "/images/profile-pic/para-clinical/forensic_medicine/Forens_Dr_Meena_Kiran.JPG", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Mohammad Asif H", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Pandu Naik", designation: "Tutor", image: "/images/profile-pic/para-clinical/forensic_medicine/Dr_Pandu_Naik.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Veeresh Patel S", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Shreyas G K", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Raza Rehman Ibrahim", designation: "Tutor", image: "/images/profile-pic/para-clinical/forensic_medicine/Dr_Raza_Rehman_Ibrahim.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Narendra H L", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },]

  };

  return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}
