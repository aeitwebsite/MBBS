import Departments1 from "@/components/Departments1";

const preClinicalData = {

  anatomy: { 
    title: "Department of Anatomy", 
    description:
      "The Anatomy department deals with the structural organization of the human body through dissection and modern imaging techniques.",

    faculties: [
      { name: "Dr. Jayaprakash", designation: "Professor and HOD", image: "/images/faculty/jayaprakash.jpg" },
      { name: "Dr. Rajalaxmi Rai", designation: "Associate Professor", image: "/images/faculty/rajalaxmi.jpg" },
      { name: "Dr. Lohith Sah", designation: "Associate Professor", image: "/images/faculty/lohith.jpg" },
      { name: "Dr. Ravishankar Prasad", designation: "Assistant Professor", image: "/images/faculty/ravishankar.jpg" },
      { name: "Dr. Sourabh Shetty", designation: "Tutor", image: "/images/faculty/sourabh.jpg" },
      { name: "Dr. Prajwalkumar Hanchalappa Meti", designation: "Tutor", image: "/images/faculty/prajwal.jpg" },
      { name: "Dr. Ranganath Gurunath Talawar", designation: "Tutor", image: "/images/faculty/ranganath.jpg" },
      { name: "Dr. Balakrishna Y C", designation: "Tutor", image: "/images/faculty/balakrishna.jpg" },
      { name: "Dr. Sharath H", designation: "Tutor", image: "/images/faculty/sharath.jpg" }
    ]
  },

  physiology: { 
    title: "Department of Physiology", 
    description:
      "Physiology focuses on the normal functioning of organs and systems of the human body.",

    faculties: [
      { name: "Dr. Jnaneshwar Shenoy", designation: "Professor and HOD", image: "/images/user.png" },
      { name: "Dr. Chethan", designation: "Associate Professor", image: "/images/user.png" },
      { name: "Dr. Swathi", designation: "Associate Professor", image: "/images/user.png" },
      { name: "Dr. Deepak Martin", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Anilreddy D N", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Nigel Preston Quadros", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Mohanchandra Reddy Kesari", designation: "Tutor", image: "/images/user.png" }
    ]
  },

  biochemistry: { 
    title: "Department of Biochemistry", 
    description:
      "Biochemistry studies chemical processes and substances that occur within living organisms.",

    faculties: [
      { name: "Dr. Asharani N", designation: "Professor and HOD", image: "/images/user.png" },
      { name: "Dr. Somashekar Shetty", designation: "Associate Professor", image: "/images/user.png" },
      { name: "Dr. A Madhusudhana", designation: "Assistant Professor", image: "/images/user.png" },
      { name: "Dr. Nagendra", designation: "Assistant Professor", image: "/images/user.png" },
      { name: "Dr. Shraddha B", designation: "Assistant Professor", image: "/images/user.png" },
      { name: "Dr. Abhishek H", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Jyothi P V", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Shashank M S", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Rakheshpal S D", designation: "Tutor", image: "/images/user.png" }
    ]
  }
};

export default function PreClinicalPage() {
  return (
    <Departments1
      categoryTitle="Pre-Clinical"
      departmentData={preClinicalData}
    />
  );
}
