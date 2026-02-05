import Departments1 from "@/components/Departments1";

const clinicalData = {

  medicine: {
    title: "Department of General Medicine",
    description: "General Medicine deals with the diagnosis and non-surgical treatment of internal diseases.",
    faculties: [
      { name: "Dr Nirmala", designation: "Professor" },
      { name: "Dr PVR Leela Mohan", designation: "Associate Professor" },
      { name: "Dr Sadanand Naik", designation: "Associate Professor" },
      { name: "Dr Yashaswini Shettigar", designation: "Associate Professor" },
      { name: "Dr Pranamya Jain", designation: "Associate Professor" },
      { name: "Dr Vipin Das", designation: "Assistant Professor" },
      { name: "Dr Dithesh M", designation: "Assistant Professor" },
      { name: "Dr Dhanya Alva", designation: "Assistant Professor" },
      { name: "KR Joshi", designation: "Assistant Professor" },
      { name: "Dr Manukiran", designation: "Assistant Professor" },
      { name: "Dr Chaithra", designation: "Assistant Professor" },
      { name: "Dr Harshan Vardhan", designation: "Senior Resident" },
      { name: "Dr Rachel Luke", designation: "Senior Resident" },
      { name: "Dr Abhilash", designation: "Senior Resident" },
      { name: "Dr Chethan", designation: "Senior Resident" },
      { name: "Dr Anup Raikar", designation: "Senior Resident" }
    ]
  },

  surgery: {
    title: "Department of General Surgery",
    description: "General Surgery focuses on operative procedures for various conditions across the body.",
    faculties: [
      { name: "Dr Harish Nayak", designation: "Medical Superintendent" },
      { name: "Dr Sathyanarayan", designation: "Professor" },
      { name: "Dr Gaurav Prasad", designation: "Associate Professor" },
      { name: "Dr K K Sandeep", designation: "Associate Professor" },
      { name: "Dr Praveen G P", designation: "Associate Professor" },
      { name: "Dr Prajwal", designation: "Assistant Professor" },
      { name: "Dr Abhiroop", designation: "Assistant Professor" },
      { name: "Dr Rakesh Shetty", designation: "Assistant Professor" },
      { name: "Dr Sattarkhan", designation: "Assistant Professor" },
      { name: "Dr Nithin Prabhu", designation: "Assistant Professor" },
      { name: "Dr Snehashree", designation: "Senior Resident" },
      { name: "Dr Vishruth", designation: "Senior Resident" },
      { name: "Dr Sathkar U Shetty", designation: "Senior Resident" },
      { name: "Dr Sharanabasappa", designation: "Senior Resident" },
      { name: "Dr Mrudula", designation: "Senior Resident" },
      { name: "Dr Vinay Vasu Bangera", designation: "Tutor" }
    ]
  },

  pediatrics: {
    title: "Department of Paediatrics",
    description: "Paediatrics provides specialized medical care for infants, children, and adolescents.",
    faculties: [
      { name: "Dr Vasantha T", designation: "Professor" },
      { name: "Dr Ushakiran", designation: "Professor" },
      { name: "Dr Manjunath", designation: "Associate Professor" },
      { name: "Dr Pooja", designation: "Assistant Professor" },
      { name: "Dr Abhijith Y V", designation: "Assistant Professor" },
      { name: "Dr Shivaram Rai", designation: "Assistant Professor" },
      { name: "Dr Anup", designation: "Assistant Professor" },
      { name: "Dr Pratheeth", designation: "Senior Resident" },
      { name: "Dr Archana", designation: "Senior Resident" },
      { name: "Dr Charan R K", designation: "Senior Resident" }
    ]
  },

  obg: {
    title: "Department of Obstetrics & Gynaecology",
    description: "This department focuses on women’s reproductive health, pregnancy management, and childbirth.",
    faculties: [
      { name: "Dr Rajashekara M Hangarki", designation: "Professor & HOD" },
      { name: "Dr Ramesh", designation: "Associate Professor" },
      { name: "Dr Shabeena Inayath", designation: "Associate Professor" },
      { name: "Dr Srilatha Bhat", designation: "Associate Professor" },
      { name: "Dr Smitha Murthy", designation: "Assistant Professor" },
      { name: "Dr Hana", designation: "Assistant Professor" },
      { name: "Dr Sruthi Prajwal", designation: "Assistant Professor" },
      { name: "Dr Faswila", designation: "Assistant Professor" },
      { name: "Dr Anvita Rao", designation: "Senior Resident" },
      { name: "Dr Sharath Chandra", designation: "Senior Resident" },
      { name: "Dr Priyanka", designation: "Senior Resident" },
      { name: "Dr Sannidhi", designation: "Senior Resident" }
    ]
  },

  ortho: {
    title: "Department of Orthopaedics",
    description: "Orthopaedics deals with disorders and injuries of bones, joints, and the musculoskeletal system.",
    faculties: [
      { name: "Dr Sachin Shetty", designation: "Professor" },
      { name: "Dr Chaithanya Shetty", designation: "Associate Professor" },
      { name: "Dr Arjun Ballal", designation: "Assistant Professor" },
      { name: "Dr Ranjith Kumar", designation: "Assistant Professor" },
      { name: "Dr Arun Shetty", designation: "Assistant Professor" },
      { name: "Dr Hannan Sheikh", designation: "Assistant Professor" },
      { name: "Dr Nihal Rai", designation: "Assistant Professor" },
      { name: "Dr Prakyath", designation: "Senior Resident" },
      { name: "Dr Naveen Chandrakant Raikar", designation: "Senior Resident" },
      { name: "Dr Pratheeksh P", designation: "Senior Resident" },
      { name: "Dr Vamshikrishna", designation: "Senior Resident" }
    ]
  },

  ophthal: {
    title: "Department of Ophthalmology",
    description: "Ophthalmology specializes in eye care, vision treatment, and ophthalmic surgery.",
    faculties: [
      { name: "Dr Cynthia", designation: "Professor" },
      { name: "Dr Vikram Jain", designation: "Associate Professor" },
      { name: "Dr A L Rao", designation: "Assistant Professor" },
      { name: "Dr Aravinda Kini", designation: "Assistant Professor" },
      { name: "Dr Smrithi", designation: "Senior Resident" },
      { name: "Dr Jayanthi Shenoy", designation: "Senior Resident" }
    ]
  },

  ent: {
    title: "Department of ENT",
    description: "ENT focuses on medical and surgical management of disorders of the ear, nose, and throat.",
    faculties: [
      { name: "Dr Roshan R Jalisatgi", designation: "Professor & HOD" },
      { name: "Dr Mahaveer Jain", designation: "Associate Professor" },
      { name: "Dr Aishwarya Ramakrishna", designation: "Assistant Professor" },
      { name: "Dr Rajesh Havaladar", designation: "Assistant Professor" },
      { name: "Dr Shwetha Poojary", designation: "Senior Resident" },
      { name: "Dr Shamanth", designation: "Deputy Medical Superintendent" },
      { name: "Dr Bevin Biju Thomas", designation: "Tutor" }
    ]
  },

  derm: {
    title: "Department of Dermatology",
    description: "Dermatology deals with diseases of the skin, hair, and nails, including medical and cosmetic concerns.",
    faculties: [
      { name: "Dr Narendra Shetty", designation: "Professor" },
      { name: "Dr Bhavishya Shetty", designation: "Assistant Professor" },
      { name: "Dr Anchitha", designation: "Senior Resident" },
      { name: "Dr Jiby", designation: "Senior Resident" }
    ]
  },

  psych: {
    title: "Department of Psychiatry",
    description: "Psychiatry focuses on mental health, behavioral disorders, and clinical psychology.",
    faculties: [
      { name: "Dr Aniruddah Shetty", designation: "Assistant Professor" },
      { name: "Dr Prajaktha", designation: "Senior Resident" },
      { name: "Dr Sindhu", designation: "Clinical Psychologist" }
    ]
  },

  radio: {
    title: "Department of Radiology",
    description: "Radiology uses imaging techniques like MRI, CT, and X-ray for diagnosis and treatment guidance.",
    faculties: [
      { name: "Dr Ramesh", designation: "Professor" },
      { name: "Dr Keshav", designation: "Associate Professor" },
      { name: "Dr Thilak Shetty", designation: "Assistant Professor" },
      { name: "Dr Arjun Kamath", designation: "Assistant Professor" },
      { name: "Dr Siddalinga", designation: "Assistant Professor" },
      { name: "Dr Dakshayini", designation: "Assistant Professor" },
      { name: "Dr Rutuparna", designation: "Senior Resident" },
      { name: "Dr Jeevan", designation: "Senior Resident" },
      { name: "Dr Vaibhav", designation: "Senior Resident" }
    ]
  },

  anesthesia: {
    title: "Department of Anaesthesiology",
    description: "Anaesthesiology manages anesthesia, pain relief, and critical care during surgical procedures.",
    faculties: [
      { name: "Dr Bhanuprakash", designation: "Professor" },
      { name: "Dr Swarna Rekha", designation: "Associate Professor" },
      { name: "Dr Sujith Haralakattta Murthy", designation: "Assistant Professor" },
      { name: "Dr Dilip Kumar", designation: "Assistant Professor" },
      { name: "Dr Venugopal K", designation: "Assistant Professor" },
      { name: "Dr Sunil B K", designation: "Assistant Professor" },
      { name: "Dr Aishwarya Suresh", designation: "Senior Resident" },
      { name: "Dr Rajath", designation: "Senior Resident" },
      { name: "Dr Ranjini Shome", designation: "Senior Resident" }
    ]
  }

};

export default function ClinicalPage() {
  return (
    <Departments1
      categoryTitle="Clinical"
      departmentData={clinicalData}
    />
  );
}
