import { useState, useEffect } from "react";

function UsersDashboard() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setUsersData(result);
        setIsLoading(false);
      })
      .catch(() => {
        setFetchError("Unable to load users data");
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        Loading users...
      </p>
    );

  if (fetchError)
    return (
      <p style={{ textAlign: "center", color: "red" }}>
        {fetchError}
      </p>
    );

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2 style={{ marginBottom: "25px", textAlign: "center" }}>
        Team Members
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "22px",
          justifyContent: "center",
        }}
      >
        {usersData.map((person) => (
          <div
            key={person.id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
              padding: "20px",
              width: "260px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#2C7BE5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              {person.name.charAt(0)}
            </div>

            <h3 style={{ margin: "0 0 6px", fontSize: "16px" }}>
              {person.name}
            </h3>

            <p style={{ margin: "0 0 4px", color: "#555", fontSize: "14px" }}>
              Email: {person.email}
            </p>

            <p style={{ margin: "0 0 4px", color: "#555", fontSize: "14px" }}>
              Website: {person.website}
            </p>

            <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>
              Company: {person.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersDashboard;