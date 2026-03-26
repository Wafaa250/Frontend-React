import { useState, useEffect } from "react";

function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <div style={{
        width: "50px",
        height: "50px",
        border: "5px solid #e0e0e0",
        borderTop: "5px solid #4A90D9",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function FetchData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        setUsers(data);
        setLoading(false);
      }, 2000); // تأخير 2 ثانية
    })
    .catch((err) => {
      setError("Failed to fetch data");
      setLoading(false);
    });
}, []);
  if (loading) return <Spinner />;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "24px", textAlign: "center" }}>Users List</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}>
        {users.map((user) => (
          <div key={user.id} style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            width: "260px",
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#4A90D9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "12px",
            }}>
              {user.name.charAt(0)}
            </div>
            <h3 style={{ margin: "0 0 6px", fontSize: "16px" }}>{user.name}</h3>
            <p style={{ margin: "0 0 4px", color: "#666", fontSize: "14px" }}>📧 {user.email}</p>
            <p style={{ margin: "0 0 4px", color: "#666", fontSize: "14px" }}>🌐 {user.website}</p>
            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>🏢 {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchData;