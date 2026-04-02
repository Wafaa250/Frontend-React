import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "16px 32px",
    background: "#2c3e50",
    alignItems: "center",
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#3498db" : "white",
    textDecoration: "none",
    fontWeight: location.pathname === path ? "bold" : "normal",
    fontSize: "16px",
  });

  return (
    <nav style={navStyle}>
      <Link style={linkStyle("/")} to="/">Home</Link>
      <Link style={linkStyle("/about")} to="/about">About</Link>
      <Link style={linkStyle("/todos")} to="/todos">Todo List</Link>
    </nav>
  );
}

export default Navbar;
