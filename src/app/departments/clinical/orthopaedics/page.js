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
      { name: "Dr. Sachin Sarvotham Shetty", designation: "Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Jampani Ravitheja", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr.Geetha Kumar Pichika", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Arun Kumar Shetty", designation: "Assistant Professor", image: "/images/profile-pic/clinical/orthopaedics/Ortho_Dr_Arun_Kumar_Shetty.JPG", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Arjun Ballal", designation: "Assistant Professor", image: "/images/profile-pic/clinical/orthopaedics/Dr_Arjun_Ballal.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Nihal R Rai", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Naveen Raikar", designation: "Senior Resident", image: "/images/profile-pic/clinical/orthopaedics/Dr_Naveen_Raikar.png", email: "", joiningDate: "", qualifications: "MBBS,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Prakhyath Mahadev Gowda", designation: "Senior Resident", image: "/images/profile-pic/clinical/orthopaedics/Dr_Prakhyath_Mahadev_Gowda.png", email: "", joiningDate: "", qualifications: "MBBS,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Pratheeksh P", designation: "Senior Resident", image: "/images/profile-pic/clinical/orthopaedics/Dr_Pratheeksh_P.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Hannan Sheikh Kabir", designation: "Assistant Professor", image: "/images/profile-pic/clinical/orthopaedics/Dr_Hannan_Sheikh_Kabir.png", email: "", joiningDate: "", qualifications: "MBBS,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr.Vivek O Karanagi", designation: "Senior Resident", image: "/images/profile-pic/clinical/orthopaedics/Dr_Vivek_O_Karanagi.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr.Ranjith Kumar", designation: "Assistant Professor", image: "/images/profile-pic/clinical/orthopaedics/Dr_Ranjith_Kumar.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr.Chaithanya R Shetty", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}