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
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of Radiology….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      { name: "Dr. Ram Prakash G", designation: "Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Kedarnath Dixit", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Thilak Shetty", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,DMRD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Dakshayini H S", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vaibhav", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Jeevan J", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Rutuparna S", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Nagaraj P", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,DMRD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Siddaling Basavraj Mindolli", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Gouri B Kaverappa", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}