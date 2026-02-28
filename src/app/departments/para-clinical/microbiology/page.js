import Departments1 from "@/components/Departments1";

export default function MicrobiologyPage() {
    const data = {
        title: "Department of Microbiology",
        description: (
            <>
                <p>
          The Department of Microbiology at Alva’s Institute of Medical Sciences and Research Centre plays a crucial role in medical education by introducing MBBS students to the world of microorganisms and their impact on human health. Microbiology is a core subject that helps students understand the etiology, pathogenesis, diagnosis, treatment, and prevention of infectious diseases—knowledge that is vital for every medical professional.
        </p>
        <p>
          The department is dedicated to providing a strong foundation in both theoretical and practical aspects of microbiology, including bacteriology, virology, mycology, parasitology, and immunology. Through a combination of interactive lectures, practical laboratory sessions, and case-based discussions, students are trained to identify pathogens, interpret laboratory results, and apply microbiological principles in clinical settings.
        </p>
        <p>
          Our well-equipped laboratories and experienced faculty ensure a hands-on, inquiry-based learning environment. The department also emphasizes infection control practices, hospital-acquired infections, antibiotic resistance, and the rational use of antimicrobials—topics highly relevant to modern-day healthcare.
        </p>
        <p>
          With a strong commitment to academic excellence and clinical relevance, the Department of Microbiology at Alva’s aims to prepare students to play an active role in disease diagnosis, prevention, and public health.
        </p>

            </>
        ),
        faculties:  [
      { name: "Dr Yashwanth Rai", designation: "Professor and HOD" },
      { name: "Dr Indira Bairy", designation: "Professor" },
      { name: "Dr Rekha Rai", designation: "Associate Professor" },
      { name: "Dr Arun B", designation: "Associate Professor" },
      { name: "Dr Vishnu Teja", designation: "Assistant Professor" },
      { name: "Dr Shruthi", designation: "Assistant Professor" },
      { name: "Dr Ashokan", designation: "Assistant Professor" },
      { name: "Dr Dharmarathna", designation: "Tutor" },
      { name: "Dr Yashas P", designation: "Tutor" },
      { name: "Dr Chethan T", designation: "Tutor" },
      { name: "Jeevan Jogi", designation: "Tutor" }
    ]

    };

    return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}
