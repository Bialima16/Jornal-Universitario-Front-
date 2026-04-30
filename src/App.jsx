import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import Home from "./pages/Home";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroUniversidade from "./pages/CadastroUniversidade";
import InicioAluno from "./pages/InicioAluno";
import LoginModal from "./components/LoginModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home onOpenLogin={() => setShowLogin(true)} />}
        />
        <Route path="/cadastro-aluno" element={<CadastroAluno />} />
        <Route path="/cadastro-universidade" element={<CadastroUniversidade />} />
        <Route path="/acesso-aluno" element={<InicioAluno />} />
      </Routes>

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )} criar pasta nhooks
    </>
  );
}

export default App;