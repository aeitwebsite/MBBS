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
    faculties: [
      {
        name: "Dr Mahabalesh Shetty",
        designation: "Dean / Principal",
        email: "dean@alvas.edu.in",
        joiningDate: "15-06-2005",
        // image: "Dean.jpg", // placeholder image mapping
        qualifications: "MBBS, MD (Forensic Medicine)\nPhD in Forensic Sciences",
        experience: "20+ years of teaching experience.\nFormer HOD at reputed medical colleges.",
        interests: "Forensic Pathology, Medical Ethics, Law & Medicine.",
        responsibilities: "Overall administration of the college.\nCurriculum planning and academic oversight.",
        memberships: "Member, Indian Academy of Forensic Medicine (IAFM)\nMedical Council of India (MCI) Assessor"
      },
      { name: "Dr Meena Kiran", designation: "Associate Professor" },
      { name: "Dr Pandu Naik", designation: "Tutor" },
      { name: "Dr Veeresh Patel S", designation: "Tutor" },
      { name: "Dr Mohammad Asif H", designation: "Tutor" }
    ]

  };

  return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}
