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
    faculties: [
      { name: "Dr Rajashekara M Hangarki", designation: "Professor" },
      { name: "Dr Ramesha", designation: "Associate Professor" },
      { name: "Dr Santhi Mothukuri ", designation: "Associate Professor" },
      { name: "Dr Srilatha Bhat", designation: "Associate Professor" },
      { name: "Dr Shabina Mohamed Adil ", designation: "Assistant Professor" },
      { name: "Dr Hana Shetty", designation: "Assistant Professor" },
      { name: "Dr Sruthi A G", designation: "Assistant Professor" },
      { name: "Dr Faswila M", designation: "Assistant Professor" },
      { name: "Dr Anvitha Shatananda Rao", designation: "Senior Resident" },
      { name: "Dr Sharathchandra Rao", designation: "Senior Resident" },
      { name: "Dr Shreya Vaidya", designation: "Senior Resident" },
      { name: "Dr Sannidhi", designation: "Senior Resident" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}