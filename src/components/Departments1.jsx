"use client";

import Link from "next/link";
import { useState } from "react";

// The Modal Component
const FacultyModal = ({ faculty, onClose }) => {
  if (!faculty) return null;

  return (
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
      }}>
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
        <div style={{
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
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)"
              }}
            />
          ) : (
            <div style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "#e5eaf2",
              border: "4px solid #fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }} />
          )}

          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}>
              {faculty.name}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "8px", fontSize: "14px", color: "#333" }}>
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

          <details style={{ marginBottom: "10px", borderBottom: "1px solid #eee" }}>
            <summary style={{ padding: "15px 0", fontWeight: "600", cursor: "pointer", display: "flex", justifyContent: "space-between", outline: "none" }}>
              Educational Qualifications <span style={{ color: "#999" }}>&#x2304;</span>
            </summary>
            <div style={{ padding: "0 0 15px 0", color: "#555", fontSize: "14px", whiteSpace: "pre-line" }}>
              {faculty.qualifications || "Details not available."}
            </div>
          </details>

          <details style={{ marginBottom: "10px", borderBottom: "1px solid #eee" }}>
            <summary style={{ padding: "15px 0", fontWeight: "600", cursor: "pointer", display: "flex", justifyContent: "space-between", outline: "none" }}>
              Past Experience <span style={{ color: "#999" }}>&#x2304;</span>
            </summary>
            <div style={{ padding: "0 0 15px 0", color: "#555", fontSize: "14px", whiteSpace: "pre-line" }}>
              {faculty.experience || "Details not available."}
            </div>
          </details>

          <details style={{ marginBottom: "10px", borderBottom: "1px solid #eee" }}>
            <summary style={{ padding: "15px 0", fontWeight: "600", cursor: "pointer", display: "flex", justifyContent: "space-between", outline: "none" }}>
              Areas of Interest <span style={{ color: "#999" }}>&#x2304;</span>
            </summary>
            <div style={{ padding: "0 0 15px 0", color: "#555", fontSize: "14px", whiteSpace: "pre-line" }}>
              {faculty.interests || "Details not available."}
            </div>
          </details>

          <details style={{ marginBottom: "10px", borderBottom: "1px solid #eee" }}>
            <summary style={{ padding: "15px 0", fontWeight: "600", cursor: "pointer", display: "flex", justifyContent: "space-between", outline: "none" }}>
              Departmental Responsibilities <span style={{ color: "#999" }}>&#x2304;</span>
            </summary>
            <div style={{ padding: "0 0 15px 0", color: "#555", fontSize: "14px", whiteSpace: "pre-line" }}>
              {faculty.responsibilities || "Details not available."}
            </div>
          </details>

          <details style={{ marginBottom: "10px", borderBottom: "1px solid #eee" }}>
            <summary style={{ padding: "15px 0", fontWeight: "600", cursor: "pointer", display: "flex", justifyContent: "space-between", outline: "none" }}>
              Professional Membership <span style={{ color: "#999" }}>&#x2304;</span>
            </summary>
            <div style={{ padding: "0 0 15px 0", color: "#555", fontSize: "14px", whiteSpace: "pre-line" }}>
              {faculty.memberships || "Details not available."}
            </div>
          </details>

        </div>

      </div>
    </div>
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
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: isHovered ? "translateY(-2px)" : "none",
        borderTop: isHovered ? "4px solid #0A0B49" : "1px solid #eaeaea",
      }}
    >
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
        textTransform: "uppercase"
      }}>
        {faculty.name}
      </h3>

      <p style={{
        fontSize: "16px",
        color: "#4b5d73",
        marginBottom: "30px"
      }}>
        {faculty.designation}
      </p>

      <button
        onClick={() => onReadMore(faculty)}
        style={{
          padding: "10px 30px",
          borderRadius: "30px",
          border: "1.5px solid #0A0B49",
          backgroundColor: isHovered ? "#0A0B49" : "transparent",
          color: isHovered ? "#fff" : "#0A0B49",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "1px",
          cursor: "pointer",
          transition: "all 0.3s ease"
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

      {/* Back Button */}
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
        ← Back to Departments
      </Link>

      {/* Category Label */}
      <p style={{
        letterSpacing: "3px",
        fontSize: "14px",
        color: "#777",
        marginBottom: "10px"
      }}>
        {categoryTitle.toUpperCase()}
      </p>

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
      <div style={{ textAlign: "justify" }}>
        {departmentData.description}
      </div>

      {/* HOD Section */}
      {departmentData.hod && (
        <div style={{
          marginTop: "50px",
          padding: "40px",
          backgroundColor: "#f8fafc",
          borderRadius: "16px",
          borderLeft: "6px solid #2563eb",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
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
                flexShrink: 0
              }}
            />
          )}
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "8px"
            }}>
              {departmentData.hod.name}
            </h3>
            <p style={{
              fontSize: "16px",
              color: "#64748b",
              fontWeight: "600",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              {departmentData.hod.designation}
            </p>
            <div style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#334155",
              whiteSpace: "pre-line",
              textAlign: "justify"
            }}>
              {departmentData.hod.message}
            </div>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
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