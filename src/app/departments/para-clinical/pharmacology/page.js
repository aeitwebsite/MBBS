import Departments1 from "@/components/Departments1";

export default function PharmacologyPage() {
    const data = {
        title: "Department of Pharmacology",
        description: (
            <>
                <p>
          Pharmacology is a vital discipline in medical education that bridges the gap between basic science and clinical practice. It is the study of drugs and their effects on the human body, focusing on how medications are developed, how they work, and how they are used to treat diseases. Understanding pharmacology is essential for safe and effective prescribing, patient care, and the rational use of medicines.
        </p>
        <p>
          At Alva’s Institute of Medical Sciences and Research Centre, the Department of Pharmacology is dedicated to training MBBS students to become competent and responsible future prescribers. The curriculum is designed to provide a strong foundation in drug mechanisms, therapeutic uses, adverse effects, and interactions, along with recent advancements in pharmacological research.
        </p>
        <p>
          The department adopts a student-centered approach with the use of interactive teaching methods, case-based learning, and practical sessions in prescription writing and experimental pharmacology. Emphasis is also placed on ethics in drug use, pharmacovigilance, and evidence-based medicine.
        </p>
        <p>
          By combining scientific knowledge with clinical relevance, the Department of Pharmacology plays a crucial role in shaping the professional judgment and prescribing skills of future doctors.
        </p>

            </>
        ),
        faculties:[
      { name: "Dr Ravindra S Beedimani", designation: "Professor and HOD" },
      { name: "Dr Laxminarayana Bairy", designation: "Professor" },
      { name: "Dr Suresh Kumar", designation: "Assistant Professor" },
      { name: "Dr Sangeethanath", designation: "Assistant Professor" },
      { name: "Dr Mohammed Yaqub Pasha", designation: "Assistant Professor" },
      { name: "Dr Krishnamurthy", designation: "Senior Resident" },
      { name: "Dr Nethravathi", designation: "Senior Resident" },
      { name: "Dr Pavan Kumar B N", designation: "Tutor" },
      { name: "Dr Kurian S Thomas", designation: "Tutor" },
      { name: "Dr Rabil Hussain", designation: "Tutor" },
      { name: "Dr Niveditha Bhat", designation: "Tutor" }
    ]

    };

    return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}
