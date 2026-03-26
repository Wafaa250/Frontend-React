function Card({ image, title, description }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
      width: "280px",
    }}>
      <img src={image} alt={title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>{title}</h3>
        <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>{description}</p>
      </div>
    </div>
  );
}

export default Card; 