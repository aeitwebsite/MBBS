import Departments1 from "@/components/Departments1";

export default function ENTPage() {
  const data = {
    title: "Department of ENT",
    description: (
      <>
         <p>
          The Department of ENT introduces MBBS students to the clinical assessment and management of diseases related to the ear, nose, throat, head, and neck. Students learn to evaluate symptoms such as hearing loss, nasal obstruction, throat pain, and balance disorders. Diagnostic skills include otoscopy, rhinoscopy, and laryngoscopy.
        </p>
        <p>
          Students participate in ENT outpatient clinics, observe common procedures such as ear syringing and nasal packing, and attend minor OT sessions. They are also trained in managing ENT emergencies like epistaxis and airway obstruction. The department promotes problem-solving and practical skill development, enhancing student confidence in clinical ENT practice.
        </p>

      </>
    ),
    faculties: [
      { name: "Dr Roshan R Jalisatgi", designation: "Professor & HOD" },
      { name: "Dr Mahaveer Jain", designation: "Associate Professor" },
      { name: "Dr Aishwarya Ramakrishna", designation: "Assistant Professor" },
      { name: "Dr Rajesh Havaladar", designation: "Assistant Professor" },
      { name: "Dr Shwetha C Poojary", designation: "Senior Resident" },
      { name: "Dr Shamanth Manohar Shetty", designation: "Senior Resident" },
      { name: "Dr Bevin Biju Thomas", designation: "Tutor" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}