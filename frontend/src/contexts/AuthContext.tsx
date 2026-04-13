import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  // 🔥 mantém login após refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // simples (pode melhorar depois com /me)
      setUser({ id: "persist", name: "User", email: "" });
    }
  }, []);

  async function signIn(email: string, password: string) {
    const response = await api.post("/sessions", { email, password });

    const { token, user } = response.data;

    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(user); // 🔥 atualiza tela sem refresh
  }

  async function signUp(name: string, email: string, password: string) {
    await api.post("/users", { name, email, password });
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}