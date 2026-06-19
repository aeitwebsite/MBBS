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
    faculties: [
      { name: "Dr. Indira Bairy", designation: "Professor", image: "/images/profile-pic/para-clinical/microbiology/Microbio_Dr_Indira_Bairy.JPG", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Rekha Rai", designation: "Associate Professor", image: "/images/profile-pic/para-clinical/microbiology/Dr_Rekha_Rai.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Samira Abdul Wajid", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Aswathi Raveendran", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Shruthi L Rao", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/microbiology/Dr_Shruthi_L_Rao.png", email: "", joiningDate: "", qualifications: "MBBS, MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Ashokan K Kuttiyil", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/microbiology/Dr_Ashokan_K_Kuttiyil.png", email: "", joiningDate: "", qualifications: "M.Sc, Phd", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Arun Kumar P", designation: "Assistant Professor", image: "/images/profile-pic/para-clinical/microbiology/Dr_Arun_Kumar_P.png", email: "", joiningDate: "", qualifications: "", experience: "M.Sc, Phd", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Ashwath M Nair", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "M.Sc, Phd", experience: "", interests: "", responsibilities: "", memberships: "" },

      { name: "Dr. Dharmarathna", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Yashas P", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Chethan T", designation: "Tutor", image: "/images/profile-pic/para-clinical/microbiology/Dr_Chethan_T.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Jeevan Jogi", designation: "Tutor", image: "/images/profile-pic/para-clinical/microbiology/Dr_Jeevan_Jogi.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. B Sumanth Reddy", designation: "Tutor", image: "/images/profile-pic/para-clinical/microbiology/Dr_Sumanth_Reddy_Dr_Sumanth_Reddy_124.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vinod Kumar", designation: "Tutor", image: "/images/profile-pic/para-clinical/microbiology/Dr_Vinod_Kumar.png", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vittal Gundray", designation: "Tutor", image: "", email: "", joiningDate: "", qualifications: "MBBS", experience: "", interests: "", responsibilities: "", memberships: "" }
    ]

  };

  return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}
