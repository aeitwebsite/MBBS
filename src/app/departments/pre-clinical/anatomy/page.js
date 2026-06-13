import Departments1 from "@/components/Departments1";

export default function AnatomyPage() {
  const data = {
    title: "Department of Anatomy",
    description: (
      <>
        <p>
          The Anatomy department deals with the structural organization of the human body through dissection and modern imaging techniques.
        </p>
      </>
    ),
    hod: {
      name: "Dr. Jayaprakash B",
      designation: "Professor & Head of Department",
      image: "/images/profile-pic/pre-clinical/anatomy/Anatom_Dr_Jayaprakash_BR.JPG",
      message: `Welcome to the Department of Anatomy….`,      email: "",      joiningDate: "nil",
      qualifications: "MBBS, MD",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [
      { name: "Dr. Rajalaxmi Rai", designation: "Associate Professor", image: "/images/faculty/rajalaxmi.jpg", email: "", joiningDate: "", qualifications: "M.Sc, Phd", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Satyam Jyoti ", designation: "Tutor", image: "/images/faculty/satyam.jpg", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Rahul", designation: "Tutor", image: "/images/faculty/ravishankar.jpg", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sharanabasappa Kolli", designation: "Tutor", image: "/images/profile-pic/pre-clinical/anatomy/Dr_Sharanabasappa_Kolli.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Prajwalkumar Hanchalappa Meti", designation: "Tutor", image: "/images/faculty/prajwal.jpg", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Ranganath Gurunath Talawar", designation: "Tutor", image: "/images/faculty/ranganath.jpg", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Balakrishna Y C", designation: "Tutor", image: "/images/faculty/balakrishna.jpg", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sharath H", designation: "Tutor", image: "/images/profile-pic/pre-clinical/anatomy/Dr_Sharath_H.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Shreya G", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" }
    ]
  };

  return <Departments1 categoryTitle="Pre-Clinical" departmentData={data} />;
}