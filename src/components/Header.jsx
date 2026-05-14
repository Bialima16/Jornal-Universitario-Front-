import "../styles/header.css";

const Header = ({ onOpenLogin }) => {
  return (
    <header className="header">
      <div className="header-content">
      <h2>UniJornal</h2>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#proposta">Proposta</a>
        <a href="#beneficios">Para Universidades</a>
        <a href="#acesso">Cadastrar</a>
        
      </nav>

      <div className="auth">
        <button className="btn-dark" onClick={onOpenLogin}>
          Acessar
        </button>
      </div>
      </div>
    </header>
  );
};

export default Header;
