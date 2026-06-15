import Departments1 from "@/components/Departments1";

export default function ObsGynPage() {
  const data = {
    title: "Department of Obstetrics & Gynaecology",
    description: (
      <>
        <p>
          The Department of Obstetrics & Gynaecology introduces MBBS students to the medical and surgical care of the female reproductive system, including pregnancy, childbirth, and associated disorders. The department trains students in antenatal care, normal and high-risk deliveries, and common gynecological procedures. Emphasis is placed on maternal and fetal well-being, safe motherhood, and reproductive health.
        </p>
        <p>
          Students gain practical exposure through labor room postings, obstetric clinics, and gynecological surgery observations. They learn how to handle obstetric emergencies, counsel patients, and understand ethical issues related to women's health. The department integrates classroom learning with clinical exposure, shaping students into sensitive and skilled future practitioners.
        </p>
      </>
    ),
    hod: {
      name: "",
      designation: "Professor & Head of Department",
      image: "",
      message: `Welcome to the Department of Obstetrics & Gynaecology….,`,
      email: "",
      joiningDate: "",
      qualifications: "",
      experience: "",
      interests: "",
      responsibilities: "",
      memberships: ""
    },
    faculties: [

      { name: "Dr. Rajashekar Mallappa Hangarki", designation: "Professor", image: "/images/profile-pic/clinical/obs_gyn/Dr_Rajashekar_Mallappa_Hangarki.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Ramesha", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,DGO,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Santhi Mothukuri", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Prerna Sagar Bhattad", designation: "Associate Professor", image: "/images/profile-pic/clinical/obs_gyn/Dr_Prerna_Sagar_Bhattad.png", email: "", joiningDate: "", qualifications: "", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Hana Shetty", designation: "Assistant Professor", image: "/images/profile-pic/clinical/obs_gyn/Obs_Gyn_Dr_Hana_Shetty.JPG", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Faswila M", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Shabina Mohamed Adil", designation: "Assistant Professor", image: "/images/profile-pic/clinical/obs_gyn/Dr_Shabina_Mohamed_Adil.png", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Shruthi A G", designation: "Assistant Professor", image: "/images/profile-pic/clinical/obs_gyn/Dr_Shruthi_A_G.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Shreya Vaidya", designation: "Senior Resident", image: "/images/profile-pic/clinical/obste-gynae/OBG_Dr_Shreya_Vaidya.JPG", email: "", joiningDate: "", qualifications: "MBBS,MD", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Anvitha Shatananda Rao", designation: "Senior Resident", image: "/images/profile-pic/clinical/obs_gyn/Dr_Anvitha_Shatananda_Rao.png", email: "", joiningDate: "", qualifications: "MBBS,MS,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sannidhi", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Sharathchandra Rao", designation: "Senior Resident", image: "/images/profile-pic/clinical/obs_gyn/Dr_Sharathchandra_Rao.png", email: "", joiningDate: "", qualifications: "MBBS,DGO,DNB", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. P Sanjana", designation: "Senior Resident", image: "/images/profile-pic/clinical/obste-gynae/OBG_Dr_Sanjana_P.JPG", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
      { name: "Dr. Madhura B R", designation: "Assistant Professor", image: "/images/profile-pic/clinical/obs_gyn/Dr_Madhura_B_R.png", email: "", joiningDate: "", qualifications: "MBBS,MS", experience: "", interests: "", responsibilities: "", memberships: "" },
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}