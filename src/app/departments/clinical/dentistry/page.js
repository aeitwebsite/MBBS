import Departments1 from "@/components/Departments1";

export default function DentistryPage() {
    const data = {
        title: "Department of Dentistry",
        description: (
            <>
                <p>
                    The Department of Dentistry provides comprehensive knowledge of oral health, dental diseases, and their prevention and management. Students are trained to identify and treat common dental conditions through clinical examination, diagnostic procedures, and patient care. Emphasis is placed on oral hygiene, dental caries, periodontal diseases, malocclusion, oral infections, and preventive dentistry, helping students develop the skills necessary to promote and maintain overall oral health.
                </p>
                <p>
                    Clinical exposure includes dental outpatient consultations, oral examinations, and basic dental procedures. Students gain hands-on experience in diagnosing and managing common oral health conditions, performing preventive dental care, and understanding the relationship between oral and systemic health. The department emphasizes patient-centered care, infection control practices, and a systematic approach to the diagnosis, treatment, and prevention of dental diseases.

                </p>

            </>
        ),
        hod: {
            name: "",
            designation: "Professor & Head of Department",
            image: "",
            message: `Welcome to the Department of Dentistry….,`,
            email: "",
            joiningDate: "",
            qualifications: "",
            experience: "",
            interests: "",
            responsibilities: "",
            memberships: ""
        },
        faculties: [

            { name: "Dr.Nagarathna D V", designation: "Professor", image: "", email: "", joiningDate: "", qualifications: "BDS,MDS", experience: "", interests: "", responsibilities: "", memberships: "" },
            { name: "Dr Ashish J Rai", designation: "Associate Professor", image: "", email: "", joiningDate: "", qualifications: "BDS,MDS", experience: "", interests: "", responsibilities: "", memberships: "" },
            { name: "Dr Venkatesh Kodgi M", designation: "Assistant Professor", image: "", email: "", joiningDate: "", qualifications: "BDS,MDS", experience: "", interests: "", responsibilities: "", memberships: "" },
            { name: "Dr Nidhi Shetty", designation: "Senior Resident", image: "", email: "", joiningDate: "", qualifications: "BDS,MDS", experience: "", interests: "", responsibilities: "", memberships: "" },
        ]

    };

    return <Departments1 categoryTitle="Clinical" departmentData={data} />;
}