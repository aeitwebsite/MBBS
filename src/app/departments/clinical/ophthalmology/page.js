import Departments1 from "@/components/Departments1";

export default function OphthalmologyPage() {
  const data = {
    title: "Department of Ophthalmology",
    description: (
      <>
        <p>
          The Department of Ophthalmology provides students with knowledge and skills related to the anatomy, physiology, and diseases of the eye. It focuses on common conditions such as refractive errors, cataract, glaucoma, and conjunctivitis. Students are taught how to perform basic eye examinations, including visual acuity testing, fundoscopy, and slit-lamp examination.
        </p>
        <p>
          Clinical postings allow students to participate in outpatient consultations, minor procedures, and community screening programs. The department emphasizes early detection and prevention of blindness and integrates theoretical learning with community eye health awareness. Regular demonstrations and clinical case discussions ensure a strong foundation in ocular care.
        </p>

      </>
    ),
    faculties: [
      { name: "Dr Cynthia Arunachalam ", designation: "Professor" },
      { name: "Dr  Roopashree ", designation: "Associate Professor" },
      { name: "Dr Laxminarayana Aroor Rao", designation: "Assistant Professor" },
      { name: "Dr Aravind Achutha Kini", designation: "Assistant Professor" },
      { name: "Dr  Tanvi Ravindranath Rai ", designation: "Senior Resident" },
      { name: "Dr Vikram Jain ", designation: "Assistant Professor" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}