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

      </>
    ),
    faculties: [
      { name: "Dr Pangal Harish Nayak", designation: "Medical Superintendent" },
      { name: "Dr Sathyanarayan V", designation: "Professor" },
      { name: "Dr Gaurav Prasad", designation: "Professor" },
      { name: "Dr  Varadaraju.A.K", designation: "Associate Professor" },
      { name: "Dr Praveen G P", designation: "Associate Professor" },
      { name: "Dr Sattar Khan ", designation: "Assistant Professor" },
      { name: "Dr Prajwal K Rao", designation: "Assistant Professor" },
      { name: "Dr Rakesh Shivram Shetty", designation: "Assistant Professor" },
      { name: "Dr Hyadalu Ramu Abhirup ", designation: "Assistant Professor" },
      { name: "Dr Nithin Prabhu", designation: "Assistant Professor" },
      { name: "Dr Snehashree M", designation: "Senior Resident" },
      { name: "Dr Sujay C ", designation: "Senior Resident" },
      { name: "Dr Sathkar U Shetty", designation: "Senior Resident" },
      { name: "Dr N Ganesh Nandan Varma  ", designation: "Senior Resident" },
      { name: "Dr Mrudula", designation: "Senior Resident" },
      { name: "Dr Nishchit Hegde", designation: "Assistant Professor" }
    ]

  };

  return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}