import Departments1 from "@/components/Departments1";

export default function RadiologyPage() {
  const data = {
    title: "Department of Radiology",
    description: (
      <>
        <p>
          The Department of Radiology teaches the role of imaging in diagnosis, treatment planning, and follow-up care. Students are introduced to various modalities such as X-ray, ultrasound, CT scan, and MRI. They are trained to understand the indications, basic interpretation, and limitations of each imaging technique.
        </p>
        <p>
          Through practical exposure in the radiology department, students learn how to correlate clinical findings with imaging results. Emphasis is placed on the appropriate use of diagnostic imaging, radiation safety, and ethical considerations. The department supports interdisciplinary learning and plays a critical role in integrated patient care.
        </p>

      </>
    ),
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

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}