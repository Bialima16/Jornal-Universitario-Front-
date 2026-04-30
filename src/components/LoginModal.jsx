import { useState } from "react";
import axios from "axios"; // Importação do Axios
import "../styles/modal.css";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      // O Axios simplifica a chamada: não precisa de JSON.stringify nem headers manuais na maioria das vezes
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        senha,
      });

      // No Axios, os dados vêm dentro de .data
      const { token, usuario } = response.data;

      localStorage.setItem("token", token);
      if (usuario) localStorage.setItem("usuario", JSON.stringify(usuario));

      console.log("Login realizado com sucesso!");
      onClose();
      window.location.reload();

    } catch (err) {
      // O Axios coloca o erro do servidor em err.response
      console.error("Erro detalhado:", err);

      if (err.response) {
        // O servidor respondeu com um status fora do range 2xx
        const mensagem = err.response.data?.message || "Email ou senha inválidos.";
        setErro(mensagem);
      } else if (err.request) {
        // A requisição foi feita mas não houve resposta (servidor fora do ar ou CORS)
        setErro("Não foi possível conectar ao servidor. Verifique o CORS.");
      } else {
        setErro("Ocorreu um erro inesperado.");
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Login</h2>

        {erro && (
          <p className="error-message" style={{ color: "red", fontSize: "0.9rem", marginBottom: "10px" }}>
            {erro}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={carregando}
          />

          <label>Senha</label>
          <input
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={carregando}
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Manter conectado
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="btn-primary" disabled={carregando}>
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="register">
          Não tem uma conta? <a href="#">Inscreva-se</a>
        </p>

        <button className="close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default LoginModal;