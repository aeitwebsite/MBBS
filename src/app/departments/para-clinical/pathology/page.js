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
    faculties: [
      { name: "Dr Magad Rangaswamy", designation: "Professor" },
      { name: "Dr Damodar", designation: "Associate Professor" },
      { name: "Dr Shivakumar", designation: "Associate Professor" },
      { name: "Dr Sai", designation: "Assistant Professor" },
      { name: "Dr Vinutha", designation: "Assistant Professor" },
      { name: "Dr Pramitha", designation: "Assistant Professor" },
      { name: "Dr Rukmini Sudhakar", designation: "Associate Professor" },
      { name: "Dr Ashok Marathe", designation: "Senior Resident" },
      { name: "Dr Chaithanya", designation: "Senior Resident" },
      { name: "Dr Arun J R", designation: "Senior Resident" },
      { name: "Dr Yashwanth D J", designation: "Tutor" },
      { name: "Dr Karthik C", designation: "Tutor" },
      { name: "Tarun Somalingappa Yarabal", designation: "Tutor" },
      { name: "Dr Rakshitha R", designation: "Tutor" },
      { name: "K Anirudh Bhat", designation: "Tutor" }
    ]

  };

  return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}