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
    faculties: [
      { name: "Dr Bhanuprakash", designation: "Professor" },
      { name: "Dr Swarna Rekha", designation: "Associate Professor" },
      { name: "Dr Sujith Haralakattta Murthy", designation: "Assistant Professor" },
      { name: "Dr Dilip Kumar", designation: "Assistant Professor" },
      { name: "Dr Venugopal K", designation: "Assistant Professor" },
      { name: "Dr Sunil B K", designation: "Assistant Professor" },
      { name: "Dr Aishwarya Suresh", designation: "Senior Resident" },
      { name: "Dr Rajath", designation: "Senior Resident" },
      { name: "Dr Ranjini Shome", designation: "Senior Resident" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}