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
    faculties: [
      { name: "Dr. Jayaprakash B", designation: "Professor and HOD", image: "/images/faculty/jayaprakash.jpg" },
      { name: "Dr. Rajalaxmi Rai", designation: "Associate Professor", image: "/images/faculty/rajalaxmi.jpg" },
      { name: "Dr. Satyam Jyoti ", designation: "Tutor", image: "/images/faculty/lohith.jpg" },
      { name: "Dr. Rahul", designation: "Tutor", image: "/images/faculty/ravishankar.jpg" },
      { name: "Dr. Sourabh Shetty", designation: "Tutor", image: "/images/faculty/sourabh.jpg" },
      { name: "Dr. Prajwalkumar Hanchalappa Meti", designation: "Tutor", image: "/images/faculty/prajwal.jpg" },
      { name: "Dr. Ranganath Gurunath Talawar", designation: "Tutor", image: "/images/faculty/ranganath.jpg" },
      { name: "Dr. Balakrishna Y C", designation: "Tutor", image: "/images/faculty/balakrishna.jpg" },
      { name: "Dr. Sharath H", designation: "Tutor", image: "/images/faculty/sharath.jpg" }
    ]
  };

  return <Departments1 categoryTitle="Pre-Clinical" departmentData={data} />;
}