import Departments1 from "@/components/Departments1";

export default function CommunityMedicinePage() {
    const data = {
        title: "Department of Community Medicine",
        description: (
            <>
                <p>Welcome to the Department of Community Medicine.</p>
                <p>Community Medicine forms the foundation of understanding health in its true sense — not merely as the absence of disease, but as a state of complete physical, mental, and social well-being. It is an integral part of medical education, laying the groundwork for understanding health beyond the confines of hospitals and clinics.</p>
                <p>The Department of Community Medicine is dedicated to promoting community health and well-being through quality education, research, and service to the community, in alignment with the institution’s vision and objectives. We strive to educate and empower future healthcare professionals with the knowledge, skills, and values necessary to strengthen public health and deliver equitable healthcare to all.</p>
                <p>The learning journey in Community Medicine begins in the first year and continues through the final year, culminating in a three-month internship training. With innovative teaching-learning strategies under the CBME curriculum, students gain a strong foundation in preventive, promotive, and social aspects of medicine.</p>
                <p>Overall, the Department will continue to be a driving force in shaping competent, compassionate, and socially responsible physicians, while supporting both faculty and students in their pursuit of excellence in research, education, and service — working together to build a healthier and more equitable society.</p>
            </>
        ),
        hod: {
            name: "Dr Chethana K",
            designation: "Professor and HOD",
            message: `Welcome to the Department of Community Medicine.
Community Medicine forms the foundation of understanding health in its true sense — not merely as the absence of disease, but as a state of complete physical, mental, and social well-being. It is an integral part of medical education, laying the groundwork for understanding health beyond the confines of hospitals and clinics.
The Department of Community Medicine is dedicated to promoting community health and well-being through quality education, research, and service to the community, in alignment with the institution’s vision and objectives. We strive to educate and empower future healthcare professionals with the knowledge, skills, and values necessary to strengthen public health and deliver equitable healthcare to all.
The learning journey in Community Medicine begins in the first year and continues through the final year, culminating in a three-month internship training. With innovative teaching-learning strategies under the CBME curriculum, students gain a strong foundation in preventive, promotive, and social aspects of medicine.
Overall, the Department will continue to be a driving force in shaping competent, compassionate, and socially responsible physicians, while supporting both faculty and students in their pursuit of excellence in research, education, and service — working together to build a healthier and more equitable society.`
        },
        faculties: [
            { name: "Dr Harshith G C", designation: "Assistant Professor" },
            { name: "Dr Harshavardan", designation: "Assistant Professor" },
            { name: "Dr Bharath", designation: "Assistant Professor" },
            { name: "Dr Krishna", designation: "Senior Resident" },
            { name: "Dr Mahamed Fazil", designation: "Tutor" },
            { name: "Dr Shashanka H R", designation: "Tutor" },
            { name: "Dr Sharvya", designation: "Tutor" }
        ]

    };

    return <Departments1 categoryTitle="Para-Clinical" departmentData={data} />;
}
