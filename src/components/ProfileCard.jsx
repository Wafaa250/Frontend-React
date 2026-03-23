import wafaa from "../assets/wafaa.jpg"
function ProfileCard() {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      width: "250px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      
<img
  src={wafaa}
  alt="profile"
  style={{
    width: "100px",
    height: "120px",
    borderRadius: "8px",
    objectFit: "cover"
  }}
/>

      <h2>Wafaa</h2>
      <p>Computer Engineering Student</p>
      <p>Frontend Developer</p>

    </div>
  )
}

export default ProfileCard