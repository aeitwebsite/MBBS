"use client";

import Link from "next/link";
import { useState } from "react";

// The Modal Component
const FacultyModal = ({ faculty, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);

  if (!faculty) return null;

  const sections = [
    {
      id: "qualifications",
      title: "Educational Qualifications",
      content: faculty.qualifications || "Details not available.",
    },
    {
      id: "experience",
      title: "Past Experience",
      content: faculty.experience || "Details not available.",
    },
    {
      id: "interests",
      title: "Areas of Interest",
      content: faculty.interests || "Details not available.",
    },
    {
      id: "responsibilities",
      title: "Departmental Responsibilities",
      content: faculty.responsibilities || "Details not available.",
    },
    {
      id: "achievements",
      title: "Achievements",
      content: faculty.achievements || "Details not available.",
    },
    {
      id: "memberships",
      title: "Professional Membership",
      content: faculty.memberships || "Details not available.",
    },
  ];

  const toggleSection = (id) => {
    setActiveSection((current) => (current === id ? null : id));
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .faculty-modal-header {
            display: flex !important;
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
            padding: 20px !important;
            gap: 15px !important;
            border-bottom: 1px solid #eee !important;
          }
          .faculty-modal-info {
            text-align: center !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .faculty-modal-info h2 {
            margin-bottom: 10px !important;
            font-size: 20px !important;
          }
          .faculty-modal-grid {
            display: grid !important;
            grid-template-columns: auto auto !important;
            gap: 8px 12px !important;
            justify-content: center !important;
            width: 100% !important;
          }
          .faculty-modal-grid div {
            text-align: left !important;
          }
          .faculty-modal-img {
            flex-shrink: 0 !important;
            margin: 0 auto !important;
            display: block !important;
          }
        }

        .faculty-accordion-item {
          border-bottom: 1px solid #eee;
        }

        .faculty-accordion-button {
          width: 100%;
          background: none;
          border: none;
          padding: 18px 0;
          text-align: left;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #111;
          transition: color 0.25s ease;
        }

        .faculty-accordion-button:hover {
          color: #0a0b49;
        }

        .faculty-accordion-icon {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: #f1f5f9;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #334155;
          transition: transform 0.3s ease, background-color 0.3s ease;
          transform: rotate(0deg);
        }

        .faculty-accordion-icon.open {
          transform: rotate(90deg);
          background-color: #e2e8f0;
        }

        .faculty-accordion-panel {
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.35s ease, padding 0.35s ease;
        }

        .faculty-accordion-content {
          color: #555;
          font-size: 14px;
          white-space: pre-line;
          line-height: 1.7;
        }
      `}</style>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}>
        <div style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "800px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }} className="faculty-modal-container">
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "15px",
              right: "20px",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#666"
            }}
          >
            &times;
          </button>

          {/* Modal Header */}
          <div className="faculty-modal-header" style={{
            display: "flex",
            padding: "30px",
            borderBottom: "1px solid #eee",
            alignItems: "center",
            gap: "30px"
          }}>
            {faculty.image ? (
              <img
                src={faculty.image}
                alt={faculty.name}
                className="faculty-modal-img"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #fff",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  flexShrink: 0
                }}
              />
            ) : (
              <div
                className="faculty-modal-img"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "#e5eaf2",
                  border: "4px solid #fff",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  flexShrink: 0
                }}
              />
            )}

            <div className="faculty-modal-info">
              <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}>
                {faculty.name}
              </h2>
              <div className="faculty-modal-grid" style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "8px", fontSize: "14px", color: "#333" }}>
                <div style={{ fontWeight: "600" }}>Designation</div>
                <div>{faculty.designation}</div>

                <div style={{ fontWeight: "600" }}>Email</div>
                <div>{faculty.email || "N/A"}</div>

                <div style={{ fontWeight: "600" }}>Joining date</div>
                <div>{faculty.joiningDate || "N/A"}</div>
              </div>
            </div>
          </div>

          {/* Modal Accordion Details */}
          <div style={{ padding: "30px" }}>
            {sections.map((section) => {
              const isOpen = activeSection === section.id;
              return (
                <div className="faculty-accordion-item" key={section.id}>
                  <button
                    type="button"
                    className="faculty-accordion-button"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isOpen}
                  >
                    {section.title}
                    <span className={`faculty-accordion-icon ${isOpen ? "open" : ""}`}>
                      ▶
                    </span>
                  </button>
                  <div
                    className="faculty-accordion-panel"
                    style={{
                      maxHeight: isOpen ? "900px" : "0",
                      opacity: isOpen ? 1 : 0,
                      padding: isOpen ? "0 0 15px 0" : "0",
                    }}
                  >
                    <div className="faculty-accordion-content">
                      {section.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};

// Interactive Faculty Card
const FacultyCard = ({ faculty, onReadMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#fff",
        padding: "40px 20px",
        borderRadius: "24px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        border: "1px solid #eaeaea",
        borderTop: isHovered ? "4px solid #0A0B49" : "4px solid #eaeaea",
        transition: "box-shadow 0.3s ease, border-top-color 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          margin: "0 auto 20px auto",
          overflow: "hidden",
          backgroundColor: "#e5eaf2"
        }}>
          {faculty.image ? (
            <img
              src={faculty.image}
              alt={faculty.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                transition: "filter 0.3s ease",
              }}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", backgroundColor: "#e5eaf2" }} />
          )}
        </div>

        <h3 style={{
          fontSize: "20px",
          fontWeight: "700",
          marginBottom: "8px",
          wordBreak: "break-word"
        }}>
          {faculty.name}
        </h3>

        <p style={{
          fontSize: "16px",
          color: "#4b5d73",
          marginBottom: "30px",
          textAlign: "center",
          wordBreak: "break-word"
        }}>
          {faculty.designation}
        </p>
      </div>

      <button
        onClick={() => onReadMore(faculty)}
        style={{
          padding: "10px 24px",
          borderRadius: "30px",
          border: "1.5px solid #0A0B49",
          backgroundColor: isHovered ? "#0A0B49" : "transparent",
          color: isHovered ? "#fff" : "#0A0B49",
          fontWeight: "600",
          fontSize: "13px",
          letterSpacing: "1px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          alignSelf: "center",
        }}>
        READ MORE
      </button>

    </div>
  );
};

export default function Departments1({ categoryTitle, departmentData }) {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Function to handle "Read More" click
  const handleReadMore = (faculty) => {
    setSelectedFaculty(faculty);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedFaculty(null);
  };

  return (
    <div style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "60px 20px"
    }}>

      <Link
        href={categoryTitle ? `/departments/${categoryTitle.toLowerCase()}` : "/departments"}
        style={{
          display: "inline-block",
          marginBottom: "30px",
          color: "#2563eb",
          textDecoration: "none",
          fontWeight: "500"
        }}
      >
        ← Back to {categoryTitle} Department
      </Link>


      {/* Title */}
      <h1 style={{
        fontSize: "42px",
        fontWeight: "800",
        marginBottom: "15px"
      }}>
        {departmentData.title}
      </h1>

      {/* Blue Underline */}
      <div style={{
        width: "70px",
        height: "5px",
        background: "#2563eb",
        borderRadius: "6px",
        marginBottom: "30px"
      }} />

      {/* Description */}
      <div style={{ textAlign: "justify", wordBreak: "break-word" }}>
        {departmentData.description}
      </div>

      {/* HOD Section */}
      {departmentData.hod && (
        <div style={{
          marginTop: "50px",
          padding: "clamp(20px, 5vw, 40px)",
          backgroundColor: "#f8fafc",
          borderRadius: "16px",
          borderLeft: "6px solid #2563eb",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap", // Handles smaller screens
        }}>
          {departmentData.hod.image && (
            <img
              src={departmentData.hod.image}
              alt={departmentData.hod.name}
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                flexShrink: 0,
                margin: "0 auto"
              }}
            />
          )}
          <div style={{ flex: "1 1 300px", textAlign: "left", minWidth: "0" }}>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "8px",
              wordBreak: "break-word"
            }}>
              {departmentData.hod.name}
            </h3>
            <p style={{
              fontSize: "16px",
              color: "#64748b",
              fontWeight: "600",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              textAlign: "left",
              wordBreak: "break-word"
            }}>
              {departmentData.hod.designation}
            </p>
            <div style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#334155",
              whiteSpace: "pre-line",
              textAlign: "left",
              wordBreak: "break-word",
              marginBottom: "20px"
            }}>
              {departmentData.hod.message}
            </div>
            <button
              onClick={() => handleReadMore(departmentData.hod)}
              style={{
                padding: "10px 24px",
                borderRadius: "30px",
                border: "1.5px solid #0A0B49",
                backgroundColor: "#0A0B49",
                color: "#fff",
                fontWeight: "600",
                fontSize: "13px",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 4px 12px rgba(10, 11, 73, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "none";
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      )}

      {/* Faculty Section */}
      {departmentData.faculties && (
        <div style={{ marginTop: "70px", backgroundColor: "#f9f9f9", padding: "40px", borderRadius: "16px" }}>

          <h2 style={{
            fontSize: "30px",
            fontWeight: "700",
            marginBottom: "30px",
            color: "#333",
            borderBottom: "2px solid #ddd",
            paddingBottom: "10px"
          }}>
            Faculty
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "30px",
            justifyContent: "center",
            alignItems: "stretch"
          }}>
            {departmentData.faculties.map((faculty, index) => (
              <FacultyCard
                key={index}
                faculty={faculty}
                onReadMore={handleReadMore}
              />
            ))}
          </div>

        </div>
      )}

      {/* The Modal */}
      {selectedFaculty && (
        <FacultyModal
          faculty={selectedFaculty}
          onClose={closeModal}
        />
      )}

    </div>
  );
}