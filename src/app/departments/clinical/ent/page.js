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
    hod: {
      name: "Dr Roshan R Jalisatgi",
      designation: "Professor & Head of Department",
      image: "/images/profile-pic/clinical/ent/ENT_Dr_Roshan_R_Jalisatgi.JPG",
      message: `Welcome to the Department of ENT….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [
      { name: "Dr. Mahaveer Jain", designation: "Associate Professor", image: "/images/profile-pic/clinical/ent/Dr_Mahaveer_Jain.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Rajesh Radhakrishna Havaldar", designation: "Assistant Professor", image: "/images/profile-pic/clinical/ent/ENT_Dr_Rajesh_Radhakrishna_Havaladar.JPG", email: "", joiningDate: "", qualifications: "MBBS,MS,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Aishwarya Ramakrishnan", designation: "Assistant Professor", image: "/images/profile-pic/clinical/ent/ENT_Dr_Aishwarya_Ramakrishna.JPG", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Shamanth Manohar Shetty", designation: "Senior Resident", image: "/images/profile-pic/clinical/ent/ENT_Dr_Shamanth_Manohar_Shetty.JPG", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Tushara", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}