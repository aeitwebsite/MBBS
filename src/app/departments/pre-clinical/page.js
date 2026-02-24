import Departments1 from "@/components/Departments1";

const preClinicalData = {

  anatomy: { 
    title: "Department of Anatomy", 
    description:
      "The Anatomy department deals with the structural organization of the human body through dissection and modern imaging techniques.",

    faculties: [
      { name: "Dr. Jayaprakash", designation: "Professor and HOD", image: "/images/faculty/jayaprakash.jpg" },
      { name: "Dr. Rajalaxmi Rai", designation: "Associate Professor", image: "/images/faculty/rajalaxmi.jpg" },
      { name: "Dr. Lohith Sah", designation: "Associate Professor", image: "/images/faculty/lohith.jpg" },
      { name: "Dr. Ravishankar Prasad", designation: "Assistant Professor", image: "/images/faculty/ravishankar.jpg" },
      { name: "Dr. Sourabh Shetty", designation: "Tutor", image: "/images/faculty/sourabh.jpg" },
      { name: "Dr. Prajwalkumar Hanchalappa Meti", designation: "Tutor", image: "/images/faculty/prajwal.jpg" },
      { name: "Dr. Ranganath Gurunath Talawar", designation: "Tutor", image: "/images/faculty/ranganath.jpg" },
      { name: "Dr. Balakrishna Y C", designation: "Tutor", image: "/images/faculty/balakrishna.jpg" },
      { name: "Dr. Sharath H", designation: "Tutor", image: "/images/faculty/sharath.jpg" }
    ]
  },

  physiology: { 
    title: "Department of Physiology", 
    description: (
      <div style={{
        width: "100%",          
        maxWidth: "100%",       
        margin: 0,              
        padding: "20px",        
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          Department of Physiology – Alva’s Institute of Medical Sciences and Research Centre. Physiology is a foundational pillar of medical education, offering essential insights into how the human body functions—from the workings of individual cells to the complex coordination of organs and systems that sustain life and health. At the Department of Physiology, Alva’s Institute of Medical Sciences and Research Centre, we are committed to nurturing a deep understanding of these principles among our students.
        </p>

        <p>
          Established with a vision to promote excellence in medical education and research, the department is equipped with modern infrastructure, well-designed laboratories, and a team of highly qualified faculty. Many of our educators hold advanced degrees and additional training in areas such as bioethics, medical education, and research methodologies. This enables us to deliver immersive and engaging learning experiences for both undergraduate and postgraduate students. We place a strong emphasis on integrating innovative teaching strategies and digital tools to keep pace with evolving educational needs. Our advanced research labs not only support academic learning but also foster scientific curiosity and inquiry among students and faculty alike. The department actively promotes research and has contributed to numerous high-impact publications, while also encouraging collaborative projects across disciplines.
        </p>

        <p>
          In addition to academics and research, we regularly organize conferences, CMEs, workshops, and intercollegiate competitions to encourage continuous learning and knowledge sharing. With a tradition rooted in academic excellence, the Department of Physiology at Alva’s Institute of Medical Sciences and Research Centre is dedicated to shaping well-informed, ethically grounded, and research-oriented healthcare professionals prepared to meet the challenges of modern medicine.
        </p>
      </div>
    ),

    faculties: [
      { name: "Dr. Jnaneshwar Shenoy", designation: "Professor and HOD", image: "/images/user.png" },
      { name: "Dr. Chethan", designation: "Associate Professor", image: "/images/user.png" },
      { name: "Dr. Swathi", designation: "Associate Professor", image: "/images/user.png" },
      { name: "Dr. Deepak Martin", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Anilreddy D N", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Nigel Preston Quadros", designation: "Tutor", image: "/images/user.png" },
      { name: "Dr. Mohanchandra Reddy Kesari", designation: "Tutor", image: "/images/user.png" }
    ]
  },

  biochemistry: { 
    title: "Department of Biochemistry", 
    description: (
      <div style={{
        width: "100%",          
        maxWidth: "100%",       
        margin: 0,              
        padding: "20px",        
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Biochemistry plays a vital role in bridging basic science with clinical practice. Biochemistry focuses on the structure and function of cellular components and biomolecules, helping students understand the complex biochemical interactions that occur in the human body—both in health and in disease. This foundational knowledge is crucial for interpreting clinical conditions and developing a scientific approach to diagnosis and treatment.
        </p>

        <p>
          The department has been actively involved in teaching and training undergraduate and postgraduate students from medical, dental, and allied health science programs. The faculty, highly qualified and research-oriented, are engaged in both teaching and basic scientific research. The department houses well-equipped laboratories for undergraduate and postgraduate research, supporting a hands-on, inquiry-driven learning experience.
        </p>

        <p>
          In addition to its academic role, the department also oversees the Biochemistry section of the Central Diagnostic Laboratory (CDL) at Alva’s hospital. This section is equipped with state-of-the-art technology, including fully automated analyzers, semi-auto analyzers, nephelometers, hormone analyzers, arterial blood gas analyzers, and electrolyte analyzers. These diagnostic services are managed by the department’s teaching faculty, ensuring a strong connection between laboratory science and clinical care. With its integrated approach to education, research, and diagnostics, the Department of Biochemistry at Alva’s Institute of Medical Sciences and Research Centre is dedicated to producing competent, analytical, and research-minded healthcare professionals.
        </p>
      </div>
    ),
     hod: {
    name: "Dr. Asharani N",
    designation: "Professor & Head of Department",
    image: "/images/HOD-Biochemistry.png",
    message:`Welcome to the Department of Biochemistry….
Biochemistry forms the foundation of modern medical education, bridging basic science and clinical medicine. It helps students understand the molecular mechanisms underlying health and disease. 
At Alva’s, we take pride in our well-equipped laboratories, committed faculty, and an academic atmosphere that fosters curiosity, innovation, and meaningful learning, making the study of biochemistry both comprehensive and clinically relevant.  
We encourage students to participate in research projects, scientific forums, and interdisciplinary activities to broaden their perspectives and deepen their understanding of biomedical science. The department remains focused on continuous improvement, academic integrity, and the holistic development of our students as future medical professionals.
Join us in exploring the fascinating world of biochemistry — where curiosity meets discovery and learning leads to innovation
`
  },
    faculties: [
  { name: "Dr. Somashekar Shetty", designation: "Associate Professor", image: "/images/user.png" },
  { name: "Dr. A Madhusudhana", designation: "Assistant Professor", image: "/images/user.png" },
  { name: "Dr. Nagendra", designation: "Assistant Professor", image: "/images/user.png" },
  { name: "Dr. Shraddha B", designation: "Assistant Professor", image: "/images/user.png" },
  { name: "Dr. Abhishek H", designation: "Tutor", image: "/images/user.png" },
  { name: "Dr. Jyothi P V", designation: "Tutor", image: "/images/user.png" },
  { name: "Dr. Shashank M S", designation: "Tutor", image: "/images/user.png" },
  { name: "Dr. Rakheshpal S D", designation: "Tutor", image: "/images/user.png" }
]

  }
};

export default function PreClinicalPage() {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <Departments1
        categoryTitle="Pre-Clinical"
        departmentData={preClinicalData}
      />
    </div>
  );
}
