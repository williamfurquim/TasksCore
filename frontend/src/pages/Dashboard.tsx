import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  async function loadTasks() {
    const response = await api.get("/tasks");
    setTasks(response.data);
  }

  async function createTask(e: any) {
    e.preventDefault();

    await api.post("/tasks", { title });

    setTitle("");
    loadTasks();
  }

  async function toggleTask(id: string, completed: boolean) {
    await api.put(`/tasks/${id}`, {
      completed: !completed,
    });

    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>

      <form onSubmit={createTask}>
        <input
          placeholder="Nova tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Criar</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id, task.completed)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}