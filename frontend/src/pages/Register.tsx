import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Register({ onSwitch }: any) {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: any) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signUp(name, email, password);
      onSwitch();
    } catch {
      setError("Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-sm bg-neutral-900 p-6 rounded-xl border border-neutral-800">
        <h1 className="text-xl mb-4">Criar conta</h1>

        <input
          className="w-full mb-3 p-2 rounded bg-neutral-800"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full mb-3 p-2 rounded bg-neutral-800"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 rounded bg-neutral-800"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <button
          onClick={handleRegister}
          className="w-full bg-white text-black py-2 rounded"
        >
          {loading ? "Criando..." : "Criar conta"}
        </button>

        <p className="text-sm text-neutral-400 mt-4 text-center">
          Já tem conta?{" "}
          <span
            onClick={onSwitch}
            className="cursor-pointer text-white"
          >
            Fazer login
          </span>
        </p>
      </form>
    </div>
  );
}