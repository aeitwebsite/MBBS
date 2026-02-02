import Departments1 from "@/components/Departments1";

const preClinicalData = {
  anatomy: { 
    title: "Department of Anatomy", 
    description: "The Anatomy department deals with the structural organization of the human body through dissection and modern imaging techniques." 
  },
  physiology: { 
    title: "Department of Physiology", 
    description: "Physiology focuses on the normal functioning of organs and systems of the human body." 
  },
  biochemistry: { 
    title: "Department of Biochemistry", 
    description: "Biochemistry studies chemical processes and substances that occur within living organisms." 
  },
};

export default function PreClinicalPage() {
  return <Departments1 categoryTitle="Pre-Clinical" departmentData={preClinicalData} />;
}