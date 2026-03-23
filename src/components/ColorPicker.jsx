import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#4A90D9");

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        transition: "background-color 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.15)",
        }}
      >
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            padding: "0",
            background: "none",
          }}
        />
        <span style={{ fontSize: "28px", fontWeight: "bold", color: "white" }}>
          {color.toUpperCase()}
        </span>
        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
          {hexToRgb(color)}
        </span>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
          Pick a color to change the background
        </span>
      </div>
    </div>
  );
}

export default ColorPicker;