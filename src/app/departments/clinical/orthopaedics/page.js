import Departments1 from "@/components/Departments1";

export default function OrthopaedicsPage() {
  const data = {
    title: "Department of Orthopaedics",
    description: (
      <>
        <p>
          The Department of Orthopaedics trains MBBS students in the assessment and management of musculoskeletal injuries and disorders. Topics include fractures, joint diseases, congenital anomalies, and rehabilitation. Students learn through clinical postings, where they interact with patients, interpret radiographs, and assist in basic procedures.
        </p>
        <p>
          Hands-on experience is provided in plaster application, traction techniques, and orthopedic ward care. In addition to trauma management, students are introduced to elective orthopedic surgeries and physiotherapy principles. The department encourages a multidisciplinary approach involving pain management, physical therapy, and surgical intervention.
        </p>

      </>
    ),
    faculties: [
      { name: "Dr Sachin Sarvotham Shetty", designation: "Professor" },
      { name: "Dr Jampani Ravitheja", designation: "Associate Professor" },
      { name: "Dr Arjun Ballal", designation: "Assistant Professor" },
     { name: "Dr Ranjith Kumar", designation: "Assistant Professor" },
      { name: "Dr Arun Kumar Shetty", designation: "Assistant Professor" },
      { name: "Dr Hannan Sheikh Kabir", designation: "Assistant Professor" },
      { name: "Dr Nihal R Rai", designation: "Assistant Professor" },
      { name: "Dr Prakyath Mahadev Gowda", designation: "Senior Resident" },
      { name: "Dr Naveen Raikar", designation: "Senior Resident" },
      { name: "Dr Pratheeksh P", designation: "Senior Resident" },
      { name: "Dr Vamshikrishna", designation: "Senior Resident" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}