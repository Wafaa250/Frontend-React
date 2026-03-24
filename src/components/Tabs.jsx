import { useState } from "react";

const sections = [
  { id: 1, title: "Dashboard", text: "This section shows an overview of your activity." },
  { id: 2, title: "My Courses", text: "Here you can see all the courses you are enrolled in." },
  { id: 3, title: "Account", text: "Manage your account information and preferences here." },
];

function StudentTabs() {
  const [currentSection, setCurrentSection] = useState(1);

  const selectedContent = sections.find(
    (section) => section.id === currentSection
  ).text;

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      {/* Navigation Tabs */}
      <div style={{ display: "flex", borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            style={{
              padding: "10px 22px",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              background: "transparent",
              borderBottom: currentSection === section.id ? "3px solid #2C7BE5" : "3px solid transparent",
              color: currentSection === section.id ? "#2C7BE5" : "#555",
              fontWeight: currentSection === section.id ? "600" : "400",
            }}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "6px",
          fontSize: "15px",
        }}
      >
        {selectedContent}
      </div>
    </div>
  );
}

export default StudentTabs;