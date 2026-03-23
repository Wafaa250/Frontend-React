import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);


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
            border: "none"
          }}
        >
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              border: "1px solid #ddd",
              padding: "10px"
            }}
          >
            {item}

            <button
              onClick={() => handleDelete(index)}
              style={{
                background: "#e74c3c",
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

export default TodoList;