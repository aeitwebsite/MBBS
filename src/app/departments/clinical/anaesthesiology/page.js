import Departments1 from "@/components/Departments1";

export default function AnaesthesiologyPage() {
  const data = {
    title: "Department of Anaesthesiology",
    description: (
      <>
        <p>
          The Department of Anaesthesiology educates MBBS students on the principles of anesthesia, perioperative care, and pain management. Students are introduced to the preparation of patients for surgery, types of anesthesia, and basic life-saving procedures such as airway management and resuscitation.
        </p>
        <p>
          In clinical postings, students observe anesthetic techniques in operation theatres and learn the basics of patient monitoring and post-operative care. The department also trains students in emergency protocols, including CPR and Basic Life Support (BLS). This early exposure helps build confidence in handling critical care situations and understanding the importance of teamwork during surgeries.
        </p>

      </>
    ),
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of Anaesthesiology….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      { name: "Dr. Bhanuprakash Satyanarayana", designation: "Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Swarna Rekha Raghava Vothesar", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,DA,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Balagowni Nagarjuna", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Nilesh Pandurang Dixit", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Dilip Kumar S N", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Venugopala K", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sujith H M", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. AV Nagabhushan", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Keerthana K", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Malladihalli Kiran Ashok Kumar", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Glenita Reema Pinto", designation: "Senior Resident", image: "/images/profile-pic/clinical/anaesthesiology/Anaesth_Dr_Glenita_Reema_Pinto.JPG", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Aiswarya P Suresh", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Suresh Kumar K A", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Ranjini Shome", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Poornima G S", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Nikhila Raj K", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },



      // { name: "Dr. Glenita Reema Pinto", designation: "Senior Resident", image: "/images/profile-pic/clinical/anaesthesiology/Anaesth_Dr_Glenita_Reema_Pinto.JPG", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Bhanuprakash", designation: "Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Swarna Rekha", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Sujith Haralakattta Murthy", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Dilip Kumar", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Venugopal K", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Sunil B K", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Aishwarya Suresh", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Rajath", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Ranjini Shome", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}