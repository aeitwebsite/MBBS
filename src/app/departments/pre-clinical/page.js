// import Departments1 from "@/components/Departments1";

// const preClinicalData = {
//   anatomy: { 
//     title: "Department of Anatomy", 
//     description: "The Anatomy department deals with the structural organization of the human body through dissection and modern imaging techniques." 
  
//   },
//   physiology: { 
//     title: "Department of Physiology", 
//     description: "Physiology focuses on the normal functioning of organs and systems of the human body." 
//   },
//   biochemistry: { 
//     title: "Department of Biochemistry", 
//     description: "Biochemistry studies chemical processes and substances that occur within living organisms." 
//   },
// };

// export default function PreClinicalPage() {
//   return <Departments1 categoryTitle="Pre-Clinical" departmentData={preClinicalData} />;
// }








import Departments1 from "@/components/Departments1";

const preClinicalData = {
  anatomy: { 
    title: "Department of Anatomy", 
    description:
      "The Anatomy department deals with the structural organization of the human body through dissection and modern imaging techniques.",

    faculty: [
      {
        name: "Dr. Jayaprakash",
        designation: "Professor and HOD",
        image: "/images/faculty/jayaprakash.jpg"
      },
      {
        name: "Dr. Rajalaxmi Rai",
        designation: "Associate Professor",
        image: "/images/faculty/rajalaxmi.jpg"
      },
      {
        name: "Dr. Lohith Sah",
        designation: "Associate Professor",
        image: "/images/faculty/lohith.jpg"
      },
      {
        name: "Dr. Ravishankar Prasad",
        designation: "Assistant Professor",
        image: "/images/faculty/ravishankar.jpg"
      },
      {
        name: "Dr. Sourabh Shetty",
        designation: "Tutor",
        image: "/images/faculty/sourabh.jpg"
      },
      {
        name: "Dr. Prajwalkumar Hanchalappa Meti",
        designation: "Tutor",
        image: "/images/faculty/prajwal.jpg"
      },
      {
        name: "Dr. Ranganath Gurunath Talawar",
        designation: "Tutor",
        image: "/images/faculty/ranganath.jpg"
      },
      {
        name: "Dr. Balakrishna Y C",
        designation: "Tutor",
        image: "/images/faculty/balakrishna.jpg"
      },
      {
        name: "Dr. Sharath H",
        designation: "Tutor",
        image: "/images/faculty/sharath.jpg"
      }
    ]
  },

  physiology: { 
    title: "Department of Physiology", 
    description:
      "Physiology focuses on the normal functioning of organs and systems of the human body." 
  },

  biochemistry: { 
    title: "Department of Biochemistry", 
    description:
      "Biochemistry studies chemical processes and substances that occur within living organisms." 
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
