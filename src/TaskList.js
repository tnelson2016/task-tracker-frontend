function TaskList({ tasks, onToggle, onDelete }) {
  // ✅ Sort: incomplete tasks first, completed at the bottom
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {sortedTasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
            borderBottom: "1px solid #ddd"
          }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            style={{ marginRight: "0.5rem" }}
          />

          <span
            style={{
              flex: 1,
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {task.title}
          </span>

          <button
            onClick={() => onDelete(task.id)}
            style={{
              marginLeft: "1rem",
              backgroundColor: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "0.25rem 0.75rem",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}


export default TaskList;
