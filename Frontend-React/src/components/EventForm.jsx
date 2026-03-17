import { useState } from "react";

function TaskManager() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // إضافة مهمة
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  // حذف مهمة
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Task Manager</h2>

      <form onSubmit={handleSubmit}>
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
            backgroundColor: "#3498db",
            color: "white",
            border: "none"
          }}
        >
          Add
        </button>
      </form>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            {t}

            <button
              onClick={() => handleDelete(index)}
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                padding: "5px 10px"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;