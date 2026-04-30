import { useState } from "react";
import "../styles/modal.css";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, senha });

    // depois você conecta com backend aqui
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Nome de usuário ou Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Manter conectado
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="btn-primary">
            Entrar
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