function Header() {
  return (
    <header style={{
      backgroundColor: "#2c3e50",
      color: "white",
      padding: "20px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <h1 style={{ margin: 0, fontSize: "24px" }}>MyApp</h1>
      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;