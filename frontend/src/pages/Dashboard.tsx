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
  const [loading, setLoading] = useState(true);

  async function loadTasks() {
    setLoading(true);
    const response = await api.get("/tasks");
    setTasks(response.data);
    setLoading(false);
  }

  async function createTask(e: any) {
    e.preventDefault();
    if (!title.trim()) return;

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

  async function deleteTask(id: string) {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen flex justify-center px-4">
      <div className="w-full max-w-xl mt-16">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">
            Tasks
          </h1>

          <button
            onClick={logout}
            className="text-sm text-neutral-400 hover:text-white transition"
          >
            Sair
          </button>
        </div>

        {/* Input */}
        <form
          onSubmit={createTask}
          className="flex items-center gap-2 mb-8 bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 focus-within:border-neutral-600 transition"
        >
          <input
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-neutral-500"
            placeholder="Adicionar tarefa..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="text-sm bg-white text-black px-3 py-1 rounded-lg hover:opacity-90 transition">
            Add
          </button>
        </form>

        {/* Conteúdo */}
        {loading ? (
          <p className="text-center text-neutral-500 text-sm">
            Carregando...
          </p>
        ) : tasks.length === 0 ? (
          <p className="text-center text-neutral-500 text-sm">
            Nenhuma tarefa ainda
          </p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="group flex items-center justify-between bg-neutral-900 border border-neutral-800 px-4 py-3 rounded-xl hover:border-neutral-700 transition"
              >
                <span
                  onClick={() =>
                    toggleTask(task.id, task.completed)
                  }
                  className={`text-sm cursor-pointer transition ${
                    task.completed
                      ? "line-through text-neutral-500"
                      : "text-neutral-200"
                  }`}
                >
                  {task.title}
                </span>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="opacity-0 group-hover:opacity-100 text-neutral-500 hover:text-red-500 transition"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}