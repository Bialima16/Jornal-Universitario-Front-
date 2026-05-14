import "../styles/validacaoEmail.css";

export default function ValidacaoForm() {
  return (
    <div className="validation-page">
      <div className="validation-container">
        <h1 className="validation-title">
          Valide o seu Email Institucional
        </h1>

        <div className="validation-icon">
          <i className="bi bi-arrow-clockwise"></i>
        </div>

        <p className="validation-text">
          Preencha abaixo com o código que foi enviado para seu email
          institucional exemplo@exemplo.com
        </p>

        <input
          type="text"
          className="validation-input"
          placeholder="Digite o código"
        />

        <p className="validation-link-text">
          Não recebeu o código?{" "}
          <a href="/" className="validation-link">
            reenviar código
          </a>
        </p>

        <div className="validation-button-wrapper">
          <button className="validation-button">
            Criar Conta Acadêmica
          </button>
        </div>
      </div>
    </div>
  );
}