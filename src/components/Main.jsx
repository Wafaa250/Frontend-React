function Main() {
  return (
    <main style={{
      minHeight: "70vh",
      padding: "40px",
      backgroundColor: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px"
    }}>
      <h2>Welcome to MyApp</h2>
      <p style={{ color: "#666", textAlign: "center", maxWidth: "500px" }}>
        This is the main content area. You can put anything here.
      </p>
    </main>
  );
}

export default Main;
