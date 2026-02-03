import Departments1 from "@/components/Departments1";

const paraClinicalData = {
  pathology: { 
    title: "Department of Pathology", 
    description: "Pathology studies the causes, mechanisms, and effects of diseases through laboratory analysis and diagnostics." 
  },
  pharmacology: { 
    title: "Department of Pharmacology", 
    description: "Pharmacology focuses on drugs, their actions, therapeutic uses, and potential side effects." 
  },
  microbiology: { 
    title: "Department of Microbiology", 
    description: "Microbiology studies microorganisms and their role in human health, infectious diseases, and immunology." 
  },
  forensic: { 
    title: "Department of Forensic Medicine", 
    description: "Forensic Medicine applies medical knowledge to legal investigations, including post-mortem examinations." 
  },
  community: { 
    title: "Department of Community Medicine", 
    description: "Community Medicine focuses on public health, prevention, epidemiology, and healthcare delivery to the population." 
  },
};

export default function ParaClinicalPage() {
  return <Departments1 categoryTitle="Para-Clinical" departmentData={paraClinicalData} />;
}