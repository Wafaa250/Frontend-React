import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Live Character Counter</h2>

      <textarea
        placeholder="Type your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          resize: "none"
        }}
      />

      <p style={{ marginTop: "15px", fontWeight: "bold" }}>
        Characters: {text.length}
      </p>
    </div>
  );
}

export default CharacterCounter;