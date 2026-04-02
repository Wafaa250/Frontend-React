import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Welcome Home 🏠</h1>
      <p style={{ color: "#666", fontSize: "18px" }}>
        This is the home page of our React app.
      </p>
      <Link
        to="/todos"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 24px",
          background: "#3498db",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Go to Todo List →
      </Link>
    </div>
  );
}

export default Home;
