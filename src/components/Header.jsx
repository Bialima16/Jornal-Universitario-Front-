import "../styles/header.css";

const Header = ({ onOpenLogin }) => {
  return (
    <header className="header">
      <h2>UniJornal</h2>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#beneficios">Proposta</a>
        <a href="#sobre">Sobre</a>
        <a href="#acesso">Para Universidades</a>
      </nav>

      <div className="auth">
        <button className="btn-dark" onClick={onOpenLogin}>
          Acessar
        </button>
        <span>Login</span>
      </div>
    </header>
  );
};

export default Header;
