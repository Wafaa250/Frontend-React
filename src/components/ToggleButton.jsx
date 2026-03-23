import { useState } from "react";

function ToggleButton() {
  const [show, setShow] = useState(false);

  const toggleContent = () => {
    setShow(prev => !prev);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      
      <button
        onClick={toggleContent}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: show ? "#c21f0d" : "#2ecc71",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {show ? "Hide Content" : "Show Content"}
      </button>

      {show && (
        <div style={{ marginTop: "15px" }}>
          <p>This content is now visible!</p>
        </div>
      )}

    </div>
  );
}

export default ToggleButton;