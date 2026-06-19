import Departments1 from "@/components/Departments1";
import { image } from "framer-motion/client";

export default function PhysiologyPage() {
  const data = {
    title: "Department of Physiology",
    description: (
      <>
        <p>
          Department of Physiology – Alva’s Institute of Medical Sciences and Research Centre. Physiology is a foundational pillar of medical education, offering essential insights into how the human body functions—from the workings of individual cells to the complex coordination of organs and systems that sustain life and health. At the Department of Physiology, Alva’s Institute of Medical Sciences and Research Centre, we are committed to nurturing a deep understanding of these principles among our students.
        </p>
        <p>
          Established with a vision to promote excellence in medical education and research, the department is equipped with modern infrastructure, well-designed laboratories, and a team of highly qualified faculty. Many of our educators hold advanced degrees and additional training in areas such as bioethics, medical education, and research methodologies. This enables us to deliver immersive and engaging learning experiences for both undergraduate and postgraduate students. We place a strong emphasis on integrating innovative teaching strategies and digital tools to keep pace with evolving educational needs. Our advanced research labs not only support academic learning but also foster scientific curiosity and inquiry among students and faculty alike. The department actively promotes research and has contributed to numerous high-impact publications, while also encouraging collaborative projects across disciplines.
        </p>
        <p>
          In addition to academics and research, we regularly organize conferences, CMEs, workshops, and intercollegiate competitions to encourage continuous learning and knowledge sharing. With a tradition rooted in academic excellence, the Department of Physiology at Alva’s Institute of Medical Sciences and Research Centre is dedicated to shaping well-informed, ethically grounded, and research-oriented healthcare professionals prepared to meet the challenges of modern medicine.
        </p>
      </>
    ),
    hod: {
      name: "Dr. Jnaneshwar P Shenoy",
      designation: "Professor & Head of Department",
      image: "/images/profile-pic/pre-clinical/physiology/Physiology_Dr_Jnaneshwara_P_Shenoy.JPG",
      message: `Welcome to the Department of Physiology….`,
      email: "",
      joiningDate: "",
      qualifications: "MBBS, MD",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [
      { name: "Dr. Chethan K", designation: "Associate Professor", image: "", email: "", joiningDate: "01/11/2025", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Swati Nitin Tikare ", designation: "Associate Professor", image: "/images/profile-pic/pre-clinical/physiology/Dr_Swati_Nitin_Tikare.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Ganaraja Bolumbu", designation: "Associate Professor", image: "/images/profile-pic/pre-clinical/physiology/Dr_Ganaraja_Bolumbu.png", email: "", joiningDate: "13/04/2026", qualifications: "M.Sc, Phd", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Deepak Martin Tomy ", designation: "Tutor", image: "/images/profile-pic/pre-clinical/physiology/Dr_Deepak_Martin_Tomy.png", email: "", joiningDate: "01/11/2025", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Anil reddy D N", designation: "Tutor", image: "/images/user.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Nigel Preston Quadros", designation: "Tutor", image: "/images/profile-pic/pre-clinical/physiology/Dr_Nigel_Preston_Quadros.png", email: "", joiningDate: "01/11/2025", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Nicole Helen Dmello ", designation: "Tutor", image: "/images/user.png", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Gagan G M", designation: "Tutor", image: "", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Ranjitha H G", designation: "Tutor", image: "", email: "", joiningDate: "02/02/2026", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Sowmya K", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" }
    ]
  };

  return <Departments1 categoryTitle="Pre-Clinical" departmentData={data} />;
}