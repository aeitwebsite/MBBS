<<<<<<< HEAD
import Link from "next/link";
=======
import Departments1 from "@/components/Departments1";

const clinicalData = {

  medicine: {
    title: "Department of General Medicine",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of General Medicine at Alva’s Institute of Medical Sciences and Research Centre forms the foundation of clinical training for MBBS students. It offers in-depth knowledge and hands-on exposure to the diagnosis and management of a wide spectrum of adult medical conditions, ranging from common infections to complex multi-system disorders. The department ensures that students learn the art of history-taking, physical examination, clinical reasoning, and appropriate use of investigations.
        </p>
        <p>
          Students participate in outpatient clinics, inpatient care, intensive care units, and emergency services under the guidance of experienced faculty. Emphasis is placed on developing strong diagnostic skills, ethical medical practice, and a holistic understanding of patient care. Regular case presentations, clinical discussions, and integrated teaching sessions with other departments enhance both the knowledge and confidence of medical students.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Nirmala A C", designation: "Professor" },
      { name: "Dr Bolar Sadananda Naik", designation: "Associate Professor" },
      { name: "Dr PVR Leela Mohan", designation: "Associate Professor" },
      { name: "Dr Vipindas P S", designation: "Assistant Professor" },
      { name: "Dr Dithesh M", designation: "Assistant Professor" },
      { name: "Dr Dhanya Alva K", designation: "Assistant Professor" },
      { name: "Dr Manukiran", designation: "Assistant Professor" },
      { name: "Dr Chaithra", designation: "Assistant Professor" },
      { name: "Dr Harshavardhan R", designation: "Senior Resident" },
      { name: "Dr Rachel R Luke", designation: "Senior Resident" },
      { name: "Dr Abhilash N", designation: "Senior Resident" },
      { name: "Dr Chethan", designation: "Senior Resident" },
      { name: "Dr Vaibhav S Jain", designation: "Senior Resident" },
      { name: "Dr Rajashekhar Mulimani", designation: "Senior Resident" },
      { name: "Dr Anup Raikar", designation: "Senior Resident" }
    ]
  },

  surgery: {
    title: "Department of General Surgery",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of General Surgery provides structured clinical exposure to surgical diseases and procedures. MBBS students are trained in the evaluation, diagnosis, and management of surgical cases, ranging from hernias and appendicitis to trauma and tumors. The department plays a key role in teaching sterile techniques, surgical ethics, pre-operative and post-operative care, and wound management.
        </p>
        <p>
          Students are encouraged to observe and assist in minor and major surgeries and actively participate in patient rounds and case discussions. They are trained to recognize surgical emergencies and understand the role of teamwork in the operating theatre. With a focus on clinical acumen and hands-on learning, the department helps students build a solid foundation for any future surgical specialty.
        </p>
      </div>
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
  },

  pediatrics: {
    title: "Department of Paediatrics",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Paediatrics focuses on the healthcare of infants, children, and adolescents, emphasizing both preventive and curative aspects. Students learn about growth and development, nutritional needs, immunization, and the management of common and complex pediatric illnesses. The department introduces the principles of family-centered care, where communication and empathy are central.
        </p>
        <p>
          Clinical exposure includes pediatric outpatient departments, inpatient wards, and neonatal intensive care units (NICU). Students are trained to perform pediatric examinations, assess developmental milestones, and manage childhood emergencies. Case discussions, bedside teaching, and regular academic activities help students develop competence in managing young patients with compassion and confidence.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr C BUshakiran", designation: "Professor" },
      { name: "Dr Vasantha T", designation: "Associate Professor" },
      
      { name: "Dr aghavendra M Doddamani  ", designation: " Professor" },
      { name: "Dr Pooja", designation: "Assistant Professor" },
      { name: "Dr Abhijith Y V", designation: "Assistant Professor" },
      { name: "Dr A Shivaram Rai", designation: "Assistant Professor" },
      { name: "Dr  Pooja S Wali", designation: "Assistant Professor" },
      { name: "Dr Prathith", designation: "Senior Resident" },
      { name: "Dr Archana D V", designation: "Senior Resident" },
      { name: "Dr Charan R K", designation: "Senior Resident" }
    ]
  },

  obg: {
    title: "Department of Obstetrics & Gynaecology",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Obstetrics & Gynaecology introduces MBBS students to the medical and surgical care of the female reproductive system, including pregnancy, childbirth, and associated disorders. The department trains students in antenatal care, normal and high-risk deliveries, and common gynecological procedures. Emphasis is placed on maternal and fetal well-being, safe motherhood, and reproductive health.
        </p>
        <p>
          Students gain practical exposure through labor room postings, obstetric clinics, and gynecological surgery observations. They learn how to handle obstetric emergencies, counsel patients, and understand ethical issues related to women's health. The department integrates classroom learning with clinical exposure, shaping students into sensitive and skilled future practitioners.
        </p>
      </div>
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
  },

  ortho: {
    title: "Department of Orthopaedics",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Orthopaedics trains MBBS students in the assessment and management of musculoskeletal injuries and disorders. Topics include fractures, joint diseases, congenital anomalies, and rehabilitation. Students learn through clinical postings, where they interact with patients, interpret radiographs, and assist in basic procedures.
        </p>
        <p>
          Hands-on experience is provided in plaster application, traction techniques, and orthopedic ward care. In addition to trauma management, students are introduced to elective orthopedic surgeries and physiotherapy principles. The department encourages a multidisciplinary approach involving pain management, physical therapy, and surgical intervention.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Sachin Sarvotham Shetty", designation: "Professor" },
      { name: "Dr Jampani Ravitheja", designation: "Associate Professor" },
      { name: "Dr Arjun Ballal", designation: "Assistant Professor" },
     { name: "Dr Ranjith Kumar", designation: "Assistant Professor" },
      { name: "Dr Arun Kumar Shetty", designation: "Assistant Professor" },
      { name: "Dr Hannan Sheikh Kabir", designation: "Assistant Professor" },
      { name: "Dr Nihal R Rai", designation: "Assistant Professor" },
      { name: "Dr Prakyath Mahadev Gowda", designation: "Senior Resident" },
      { name: "Dr Naveen Raikar", designation: "Senior Resident" },
      { name: "Dr Pratheeksh P", designation: "Senior Resident" },
      { name: "Dr Vamshikrishna", designation: "Senior Resident" }
    ]
  },

  ophthal: {
    title: "Department of Ophthalmology",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Ophthalmology provides students with knowledge and skills related to the anatomy, physiology, and diseases of the eye. It focuses on common conditions such as refractive errors, cataract, glaucoma, and conjunctivitis. Students are taught how to perform basic eye examinations, including visual acuity testing, fundoscopy, and slit-lamp examination.
        </p>
        <p>
          Clinical postings allow students to participate in outpatient consultations, minor procedures, and community screening programs. The department emphasizes early detection and prevention of blindness and integrates theoretical learning with community eye health awareness. Regular demonstrations and clinical case discussions ensure a strong foundation in ocular care.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Cynthia Arunachalam ", designation: "Professor" },
      { name: "Dr  Roopashree ", designation: "Associate Professor" },
      { name: "Dr Laxminarayana Aroor Rao", designation: "Assistant Professor" },
      { name: "Dr Aravind Achutha Kini", designation: "Assistant Professor" },
      { name: "Dr  Tanvi Ravindranath Rai ", designation: "Senior Resident" },
      { name: "Dr Vikram Jain ", designation: "Assistant Professor" }
    ]
  },

  ent: {
    title: "Department of ENT",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of ENT introduces MBBS students to the clinical assessment and management of diseases related to the ear, nose, throat, head, and neck. Students learn to evaluate symptoms such as hearing loss, nasal obstruction, throat pain, and balance disorders. Diagnostic skills include otoscopy, rhinoscopy, and laryngoscopy.
        </p>
        <p>
          Students participate in ENT outpatient clinics, observe common procedures such as ear syringing and nasal packing, and attend minor OT sessions. They are also trained in managing ENT emergencies like epistaxis and airway obstruction. The department promotes problem-solving and practical skill development, enhancing student confidence in clinical ENT practice.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Roshan R Jalisatgi", designation: "Professor & HOD" },
      { name: "Dr Mahaveer Jain", designation: "Associate Professor" },
      { name: "Dr Aishwarya Ramakrishna", designation: "Assistant Professor" },
      { name: "Dr Rajesh Havaladar", designation: "Assistant Professor" },
      { name: "Dr Shwetha C Poojary", designation: "Senior Resident" },
      { name: "Dr Shamanth Manohar Shetty", designation: "Senior Resident" },
      { name: "Dr Bevin Biju Thomas", designation: "Tutor" }
    ]
  },

  derm: {
    title: "Department of Dermatology",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Dermatology provides insight into skin, hair, nail disorders, and sexually transmitted infections. Students are taught to recognize and differentiate between various dermatological conditions through visual inspection and clinical history. Emphasis is placed on common diseases such as eczema, psoriasis, acne, fungal infections, and scabies.
        </p>
        <p>
          Clinical exposure includes outpatient consultations and procedural dermatology, such as skin biopsies, cryotherapy, and patch testing. Students learn about systemic associations of skin diseases and the psychological impact of dermatological conditions. The department promotes compassionate care and a methodical approach to diagnosis and treatment.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Narendra Shetty", designation: "Professor" },
      { name: "Dr Bhavishya Shetty", designation: "Assistant Professor" },
      { name: "Dr Anchitha", designation: "Senior Resident" },
      { name: "Dr Jiby", designation: "Senior Resident" }
    ]
  },

  psych: {
    title: "Department of Psychiatry",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Psychiatry introduces students to mental health, behavioral sciences, and psychological aspects of medical care. It focuses on conditions such as depression, anxiety, schizophrenia, substance abuse, and personality disorders. Students are taught how to communicate effectively with patients and understand the bio-psycho-social model of illness.
        </p>
        <p>
          Clinical exposure includes outpatient psychiatry clinics, in-patient ward rounds, and case discussions. Students are trained to identify psychiatric symptoms, perform mental status examinations, and understand treatment modalities including pharmacotherapy and psychotherapy. The department also sensitizes students to mental health stigma and ethical considerations in psychiatric practice.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Aniruddah Shetty", designation: "Assistant Professor" },
      { name: "Dr Prajaktha", designation: "Senior Resident" },
      { name: "Dr Sindhu", designation: "Clinical Psychologist" }
    ]
  },

  radio: {
    title: "Department of Radiology",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Radiology teaches the role of imaging in diagnosis, treatment planning, and follow-up care. Students are introduced to various modalities such as X-ray, ultrasound, CT scan, and MRI. They are trained to understand the indications, basic interpretation, and limitations of each imaging technique.
        </p>
        <p>
          Through practical exposure in the radiology department, students learn how to correlate clinical findings with imaging results. Emphasis is placed on the appropriate use of diagnostic imaging, radiation safety, and ethical considerations. The department supports interdisciplinary learning and plays a critical role in integrated patient care.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Ramesh", designation: "Professor" },
      { name: "Dr Keshav", designation: "Associate Professor" },
      { name: "Dr Thilak Shetty", designation: "Assistant Professor" },
      { name: "Dr Arjun Kamath", designation: "Assistant Professor" },
      { name: "Dr Siddalinga", designation: "Assistant Professor" },
      { name: "Dr Dakshayini", designation: "Assistant Professor" },
      { name: "Dr Nagaraj P ", designation: "Assistant Professor" },
      { name: "Dr Rutuparna", designation: "Senior Resident" },
      { name: "Dr Jeevan", designation: "Senior Resident" },
      { name: "Dr Vaibhav", designation: "Senior Resident" }
    ]
  },

  anesthesia: {
    title: "Department of Anaesthesiology",
    description: (
      <div style={{
        width: "100%",
        padding: "20px",
        lineHeight: "1.8",
        textAlign: "justify",
        fontSize: "16px",
        color: "#333",
        boxSizing: "border-box"
      }}>
        <p>
          The Department of Anaesthesiology educates MBBS students on the principles of anesthesia, perioperative care, and pain management. Students are introduced to the preparation of patients for surgery, types of anesthesia, and basic life-saving procedures such as airway management and resuscitation.
        </p>
        <p>
          In clinical postings, students observe anesthetic techniques in operation theatres and learn the basics of patient monitoring and post-operative care. The department also trains students in emergency protocols, including CPR and Basic Life Support (BLS). This early exposure helps build confidence in handling critical care situations and understanding the importance of teamwork during surgeries.
        </p>
      </div>
    ),
    faculties: [
      { name: "Dr Bhanuprakash", designation: "Professor" },
      { name: "Dr Swarna Rekha", designation: "Associate Professor" },
      { name: "Dr Sujith Haralakattta Murthy", designation: "Assistant Professor" },
      { name: "Dr Dilip Kumar", designation: "Assistant Professor" },
      { name: "Dr Venugopal K", designation: "Assistant Professor" },
      { name: "Dr Sunil B K", designation: "Assistant Professor" },
      { name: "Dr Balagowni Nagarjuna", designation: "Assistant Professor" },
      { name: "Dr Aishwarya Suresh", designation: "Senior Resident" },
      { name: "Dr Rajath", designation: "Senior Resident" },
      { name: "Dr Glenita Reema Pinto", designation: "Senior Resident" },
      { name: "Dr Suresh Kumar K A", designation: "Senior Resident" },
      { name: "Dr Poornima G S", designation: "Senior Resident" },
      { name: "Dr Ranjini Shome", designation: "Senior Resident" }
    ]
  }
>>>>>>> bc55e9af1d72d3ad08fc5a6dbd68aca0b445193d

export const metadata = {
  title: "Clinical Departments",
  description: "Explore all Clinical Departments"
};

export default function ClinicalDepartmentsPage() {
  const departments = [
    { name: "General Medicine", slug: "gen_medicine" },
    { name: "General Surgery", slug: "gen_surgery" },
    { name: "Paediatrics", slug: "paediatrics" },
    { name: "Obstetrics & Gynaecology", slug: "obs_gyn" },
    { name: "Orthopaedics", slug: "orthopaedics" },
    { name: "Ophthalmology", slug: "ophthalmology" },
    { name: "ENT", slug: "ent" },
    { name: "Dermatology", slug: "dermatology" },
    { name: "Psychiatry", slug: "psychiatry" },
    { name: "Radiology", slug: "radiology" },
    { name: "Anaesthesiology", slug: "anaesthesiology" }
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0A0B49] mb-4">
            Clinical Departments
          </h1>
          <p className="text-gray-600">
            Click on any department to explore detailed information.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <Link
              key={dept.slug}
              href={`/departments/clinical/${dept.slug}`}  // ✅ FIXED LINK
              className="bg-[#0A0B49] text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {dept.name}
              </h2>

              <p className="text-sm text-blue-100">
                View Department →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}