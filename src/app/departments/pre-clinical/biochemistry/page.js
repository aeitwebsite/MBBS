import Departments1 from "@/components/Departments1";

export default function BiochemistryPage() {
  const data = {
    title: "Department of Biochemistry",
    description: (
      <>
        <p>
          The Department of Biochemistry plays a vital role in bridging basic science with clinical practice. Biochemistry focuses on the structure and function of cellular components and biomolecules, helping students understand the complex biochemical interactions that occur in the human body—both in health and in disease. This foundational knowledge is crucial for interpreting clinical conditions and developing a scientific approach to diagnosis and treatment.
        </p>
        <p>
          The department has been actively involved in teaching and training undergraduate and postgraduate students from medical, dental, and allied health science programs. The faculty, highly qualified and research-oriented, are engaged in both teaching and basic scientific research. The department houses well-equipped laboratories for undergraduate and postgraduate research, supporting a hands-on, inquiry-driven learning experience.
        </p>
        <p>
          In addition to its academic role, the department also oversees the Biochemistry section of the Central Diagnostic Laboratory (CDL) at Alva’s hospital. This section is equipped with state-of-the-art technology, including fully automated analyzers, semi-auto analyzers, nephelometers, hormone analyzers, arterial blood gas analyzers, and electrolyte analyzers. These diagnostic services are managed by the department’s teaching faculty, ensuring a strong connection between laboratory science and clinical care. With its integrated approach to education, research, and diagnostics, the Department of Biochemistry at Alva’s Institute of Medical Sciences and Research Centre is dedicated to producing competent, analytical, and research-minded healthcare professionals.
        </p>
      </>
    ),
    hod: {
      name: "Dr. Asharani N",
      designation: "Professor & Head of Department",
      image: "/images/HOD-Biochemistry.png",
      message: `Welcome to the Department of Biochemistry….
Biochemistry forms the foundation of modern medical education, bridging basic science and clinical medicine. It helps students understand the molecular mechanisms underlying health and disease. 
At Alva’s, we take pride in our well-equipped laboratories, committed faculty, and an academic atmosphere that fosters curiosity, innovation, and meaningful learning, making the study of biochemistry both comprehensive and clinically relevant.  
We encourage students to participate in research projects, scientific forums, and interdisciplinary activities to broaden their perspectives and deepen their understanding of biomedical science. The department remains focused on continuous improvement, academic integrity, and the holistic development of our students as future medical professionals.
Join us in exploring the fascinating world of biochemistry — where curiosity meets discovery and learning leads to innovation`
    },
    faculties: [
      { name: "Dr. A Madhusudhana", designation: "Assistant Professor", image: "/images/user.png" },
      { name: "Dr. Nagendra", designation: "Assistant Professor", image: "/images/user.png" },
      { name: "Dr. Shraddha B", designation: "Assistant Professor", image: "/images/user.png" },
      { name: "Dr. Abhishek H", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Jyothi P V", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Shashank M S", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Rakheshpal S D", designation: "Tutor", image: "/images/user.png" }
    ]
  };

  return <Departments1 categoryTitle="Pre-Clinical" departmentData={data} />;
}