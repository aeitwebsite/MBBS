import Departments1 from "@/components/Departments1";

export default function DermatologyPage() {
  const data = {
    title: "Department of Dermatology",
    description: (
      <>
        <p>
          The Department of Dermatology provides insight into skin, hair, nail disorders, and sexually transmitted infections. Students are taught to recognize and differentiate between various dermatological conditions through visual inspection and clinical history. Emphasis is placed on common diseases such as eczema, psoriasis, acne, fungal infections, and scabies.
        </p>
        <p>
          Clinical exposure includes outpatient consultations and procedural dermatology, such as skin biopsies, cryotherapy, and patch testing. Students learn about systemic associations of skin diseases and the psychological impact of dermatological conditions. The department promotes compassionate care and a methodical approach to diagnosis and treatment.
        </p>

      </>
    ),
    faculties:  [
      { name: "Dr Narendra Shetty", designation: "Professor" },
      { name: "Dr Bhavishya Shetty", designation: "Assistant Professor" },
      { name: "Dr Anchitha", designation: "Senior Resident" },
      { name: "Dr Jiby", designation: "Senior Resident" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}