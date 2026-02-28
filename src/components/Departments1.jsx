"use client";

import Link from "next/link";

export default function Departments1({ categoryTitle, departmentData }) {

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
      <div>
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
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
        }}>
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
            whiteSpace: "pre-line"
          }}>
            {departmentData.hod.message}
          </div>
        </div>
      )}

      {/* Faculty Section */}
      {departmentData.faculties && (
        <div style={{ marginTop: "70px" }}>

          <h2 style={{
            fontSize: "30px",
            fontWeight: "700",
            marginBottom: "30px"
          }}>
            Faculty
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px"
          }}>
            {departmentData.faculties.map((faculty, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f3f6fb",
                  padding: "40px 20px",
                  borderRadius: "24px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
                }}
              >
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#e5eaf2",
                  margin: "0 auto 20px auto"
                }} />

                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "8px"
                }}>
                  {faculty.name}
                </h3>

                <p style={{
                  fontSize: "18px",
                  color: "#4b5d73",
                  marginBottom: "20px"
                }}>
                  {faculty.designation}
                </p>

                <button style={{
                  padding: "10px 30px",
                  borderRadius: "30px",
                  border: "1.5px solid #3b82f6",
                  background: "transparent",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  cursor: "pointer"
                }}>
                  READ MORE
                </button>

              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}