import Departments1 from "@/components/Departments1";

const paraClinicalData = {
  pathology: { 
    title: "Department of Pathology", 
    description: "Pathology studies the causes, mechanisms, and effects of diseases through laboratory analysis and diagnostics.",
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
  },

  pharmacology: { 
    title: "Department of Pharmacology", 
    description: "Pharmacology focuses on drugs, their actions, therapeutic uses, and potential side effects.",
    faculties: [
      { name: "Dr Ravindra S Beedimani", designation: "Professor and HOD" },
      { name: "Dr Laxminarayana Bairy", designation: "Professor" },
      { name: "Dr Suresh Kumar", designation: "Assistant Professor" },
      { name: "Dr Sangeethanath", designation: "Assistant Professor" },
      { name: "Dr Mohammed Yaqub Pasha", designation: "Assistant Professor" },
      { name: "Dr Krishnamurthy", designation: "Senior Resident" },
      { name: "Dr Nethravathi", designation: "Senior Resident" },
      { name: "Dr Pavan Kumar B N", designation: "Tutor" },
      { name: "Dr Kurian S Thomas", designation: "Tutor" },
      { name: "Dr Rabil Hussain", designation: "Tutor" },
      { name: "Dr Niveditha Bhat", designation: "Tutor" }
    ]
  },

  microbiology: { 
    title: "Department of Microbiology", 
    description: "Microbiology studies microorganisms and their role in human health, infectious diseases, and immunology.",
    faculties: [
      { name: "Dr Yashwanth Rai", designation: "Professor and HOD" },
      { name: "Dr Indira Bairy", designation: "Professor" },
      { name: "Dr Rekha Rai", designation: "Associate Professor" },
      { name: "Dr Arun B", designation: "Associate Professor" },
      { name: "Dr Vishnu Teja", designation: "Assistant Professor" },
      { name: "Dr Shruthi", designation: "Assistant Professor" },
      { name: "Dr Ashokan", designation: "Assistant Professor" },
      { name: "Dr Dharmarathna", designation: "Tutor" },
      { name: "Dr Yashas P", designation: "Tutor" },
      { name: "Dr Chethan T", designation: "Tutor" },
      { name: "Jeevan Jogi", designation: "Tutor" }
    ]
  },

  forensic: { 
    title: "Department of Forensic Medicine", 
    description: "Forensic Medicine applies medical knowledge to legal investigations, including post-mortem examinations.",
    faculties: [
      { name: "Dr Mahabalesh Shetty", designation: "Dean / Principal" },
      { name: "Dr Meena Kiran", designation: "Associate Professor" },
      { name: "Dr Pandu Naik", designation: "Tutor" },
      { name: "Dr Veeresh Patel S", designation: "Tutor" },
      { name: "Dr Mohammad Asif H", designation: "Tutor" }
    ]
  },

  community: { 
    title: "Department of Community Medicine", 
    description: "Community Medicine focuses on public health, prevention, epidemiology, and healthcare delivery to the population.",
    faculties: [
      { name: "Dr Chethana K", designation: "Professor and HOD" },
      { name: "Dr Shravya Alva", designation: "Assistant Professor" },
      { name: "Dr Harshith G C", designation: "Assistant Professor" },
      { name: "Dr Harshavardan", designation: "Assistant Professor" },
      { name: "Dr Bharath", designation: "Assistant Professor" },
      { name: "Dr Krishna", designation: "Senior Resident" },
      { name: "Dr Mahamed Fazil", designation: "Tutor" },
      { name: "Dr Shashanka H R", designation: "Tutor" },
      { name: "Dr Sharvya", designation: "Tutor" }
    ]
  }
};

export default function ParaClinicalPage() {
  return (
    <Departments1
      categoryTitle="Para-Clinical"
      departmentData={paraClinicalData}
    />
  );
}
