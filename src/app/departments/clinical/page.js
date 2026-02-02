import Departments1 from "@/components/Departments1";

const clinicalData = {
  medicine: { 
    title: "Department of General Medicine", 
    description: "General Medicine deals with the diagnosis and non-surgical treatment of internal diseases." 
  },
  surgery: { 
    title: "Department of General Surgery", 
    description: "General Surgery focuses on operative procedures for various conditions across the body." 
  },
  pediatrics: { 
    title: "Department of Paediatrics", 
    description: "Paediatrics provides specialized medical care for infants, children, and adolescents." 
  },
  obg: { 
    title: "Department of Obstetrics & Gynaecology", 
    description: "This department focuses on women’s reproductive health, pregnancy management, and childbirth." 
  },
  ortho: { 
    title: "Department of Orthopaedics", 
    description: "Orthopaedics deals with disorders and injuries of bones, joints, and the musculoskeletal system." 
  },
  ophthal: { 
    title: "Department of Ophthalmology", 
    description: "Ophthalmology specializes in eye care, vision treatment, and ophthalmic surgery." 
  },
  ent: { 
    title: "Department of ENT", 
    description: "ENT focuses on medical and surgical management of disorders of the ear, nose, and throat." 
  },
  derm: { 
    title: "Department of Dermatology", 
    description: "Dermatology deals with diseases of the skin, hair, and nails, including medical and cosmetic concerns." 
  },
  psych: { 
    title: "Department of Psychiatry", 
    description: "Psychiatry focuses on mental health, behavioral disorders, and clinical psychology." 
  },
  radio: { 
    title: "Department of Radiology", 
    description: "Radiology uses imaging techniques like MRI, CT, and X-ray for diagnosis and treatment guidance." 
  },
  anesthesia: { 
    title: "Department of Anaesthesiology", 
    description: "Anaesthesiology manages anesthesia, pain relief, and critical care during surgical procedures." 
  },
};

export default function ClinicalPage() {
  return <Departments1 categoryTitle="Clinical" departmentData={clinicalData} />;
}