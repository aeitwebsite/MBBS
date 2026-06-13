import Departments1 from "@/components/Departments1";

export default function GeneralSurgeryPage() {
  const data = {
    title: "Department of General Surgery",
    description: (
      <>
        <p>
          The Department of General Surgery provides structured clinical exposure to surgical diseases and procedures. MBBS students are trained in the evaluation, diagnosis, and management of surgical cases, ranging from hernias and appendicitis to trauma and tumors. The department plays a key role in teaching sterile techniques, surgical ethics, pre-operative and post-operative care, and wound management.
        </p>
        <p>
          Students are encouraged to observe and assist in minor and major surgeries and actively participate in patient rounds and case discussions. They are trained to recognize surgical emergencies and understand the role of teamwork in the operating theatre. With a focus on clinical acumen and hands-on learning, the department helps students build a solid foundation for any future surgical specialty.
        </p>

      </>),
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of General Surgery….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      { name: "Dr. Pangal Harish Nayak", designation: "Medical Superintendent", image: "/images/profile-pic/clinical/gen_surgery/Dr_Pangal_Harish_Nayak.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Gaurav Prasad", designation: "Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Gaurav_Prasad.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Satyanarayan V", designation: "Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Satyanarayan_V.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Praveen G P", designation: "Associate Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Praveen_G_P.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Varadaraju.A.K", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sattar Khan", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Sattar_Khan.png", email: "", joiningDate: "", qualifications: "MBBS,MS,MCH", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Rakesh Shivram Shetty", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Rakesh_Shetty_Dr_Rakesh_Shetty_179.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Hyadalu Ramu Abhirup", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Hyadalu_Ramu_Abhirup.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Nithin Prabhu", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Prajwal K Rao", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Vinay Alva", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Nethravathi B", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sujay C", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_surgery/Dr_Sujay_C.png", email: "", joiningDate: "", qualifications: "MBBS,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Dhananjaya B .M", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_surgery/Dr_Dhananjaya_B_M.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sharanabasappa", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_surgery/Dr_Sharanabasappa.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Kuchendra HG", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Bhavya K P", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },


      // { name: "Dr Pangal Harish Nayak", designation: "Medical Superintendent", image: "/images/profile-pic/clinical/gen_surgery/Dr_Pangal_Harish_Nayak.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Sathyanarayan V", designation: "Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Gaurav Prasad", designation: "Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Gaurav_Prasad.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr  Varadaraju.A.K", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Praveen G P", designation: "Associate Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Praveen_G_P.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Sattar Khan ", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Sattar_Khan.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Prajwal K Rao", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Rakesh Shivram Shetty", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Hyadalu Ramu Abhirup ", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Hyadalu_Ramu_Abhirup.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Nithin Prabhu", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Snehashree M", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Sujay C ", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_surgery/Dr_Sujay_C.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Sathkar U Shetty", designation: "Senior Resident", image: "/images/profile-pic/clinical/gen_surgery/Dr_Sathkar_U_Shetty.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr N Ganesh Nandan Varma  ", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Mrudula", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      // { name: "Dr Nishchit Hegde", designation: "Assistant Professor", image: "/images/profile-pic/clinical/gen_surgery/Dr_Nishchit_Hegde.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}