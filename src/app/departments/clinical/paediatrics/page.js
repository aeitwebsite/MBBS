import Departments1 from "@/components/Departments1";

export default function PaediatricsPage() {
  const data = {
    title: "Department of Paediatrics",
    description: (
      <>
        <p>
          The Department of Paediatrics focuses on the healthcare of infants, children, and adolescents, emphasizing both preventive and curative aspects. Students learn about growth and development, nutritional needs, immunization, and the management of common and complex pediatric illnesses. The department introduces the principles of family-centered care, where communication and empathy are central.
        </p>
        <p>
          Clinical exposure includes pediatric outpatient departments, inpatient wards, and neonatal intensive care units (NICU). Students are trained to perform pediatric examinations, assess developmental milestones, and manage childhood emergencies. Case discussions, bedside teaching, and regular academic activities help students develop competence in managing young patients with compassion and confidence.
        </p>

      </>
    ),
    faculties: [
      { name: "Dr C BUshakiran", designation: "Professor" },
      { name: "Dr Vasantha T", designation: "Associate Professor" },
      
      { name: "Dr aghavendra M Doddamani  ", designation: " Professor" },
      { name: "Dr Pooja", designation: "Assistant Professor" },
      { name: "Dr Abhijith Y V", designation: "Assistant Professor" },
      { name: "Dr A Shivaram Rai", designation: "Assistant Professor" },
      { name: "Dr  Pooja S Wali", designation: "Assistant Professor" },
      { name: "Dr Prathith", designation: "Senior Resident" },
      { name: "Dr Archana D V", designation: "Senior Resident" },
      { name: "Dr Charan R K", designation: "Senior Resident" }
    ]
  
  };

  
  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}