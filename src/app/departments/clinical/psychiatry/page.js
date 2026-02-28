import Departments1 from "@/components/Departments1";

export default function PsychiatryPage() {
  const data = {
    title: "Department of Psychiatry",
    description: (
      <>
        <p>
          The Department of Psychiatry introduces students to mental health, behavioral sciences, and psychological aspects of medical care. It focuses on conditions such as depression, anxiety, schizophrenia, substance abuse, and personality disorders. Students are taught how to communicate effectively with patients and understand the bio-psycho-social model of illness.
        </p>
        <p>
          Clinical exposure includes outpatient psychiatry clinics, in-patient ward rounds, and case discussions. Students are trained to identify psychiatric symptoms, perform mental status examinations, and understand treatment modalities including pharmacotherapy and psychotherapy. The department also sensitizes students to mental health stigma and ethical considerations in psychiatric practice.
        </p>

      </>
    ),
    faculties: [
      { name: "Dr Aniruddah Shetty", designation: "Assistant Professor" },
      { name: "Dr Prajaktha", designation: "Senior Resident" },
      { name: "Dr Sindhu", designation: "Clinical Psychologist" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}