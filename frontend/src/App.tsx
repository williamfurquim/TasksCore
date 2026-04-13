import { useState, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";

function App() {
  const { user } = useContext(AuthContext);
  const [isRegister, setIsRegister] = useState(false);


  if (user) return <Dashboard />;

  return isRegister ? (
    <Register onSwitch={() => setIsRegister(false)} />
  ) : (
    <Login onSwitch={() => setIsRegister(true)} />
  );
}

export default App;