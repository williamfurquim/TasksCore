import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

function App() {
  const token = localStorage.getItem("token");

  return token ? <Dashboard /> : <Login />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);