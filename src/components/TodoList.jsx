import { useState, useEffect } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>To-Do List</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: "10px", width: "70%" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            marginLeft: "10px",
            background: "#3498db",
            color: "white",
            border: "none",
          }}
        >
          Add
        </button>
      </form>

      {tasks.length > 0 && (
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            width: "70%",
            marginTop: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      )}

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {filteredTasks.length === 0 && search ? (
          <p style={{ color: "#999" }}>No tasks match "{search}"</p>
        ) : (
          filteredTasks.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              {item}
              <button
                onClick={() => handleDelete(index)}
                style={{
                  background: "#e74c3c",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
