import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext";
import { Dashboard } from "./pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Dashboard />
  </AuthProvider>
);