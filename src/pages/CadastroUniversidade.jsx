import "../styles/form.css";

const CadastroUniversidade = () => {
  return (
    <div className="form-container">

      <div className="form-left">
        <h2>Cadastrar sua Universidade</h2>
        <p>
          Publique conteúdos, divulgue eventos e conecte seus alunos.
        </p>
      </div>

      <div className="form-right">
        <h3>Registro de Universidade</h3>

        <input placeholder="Nome da instituição" />
        <input placeholder="Email do administrador" />
        <input placeholder="CNPJ / ID institucional" />
        <input type="password" placeholder="Criar senha" />

        <button>Criar Conta Acadêmica</button>
      </div>

    </div>
  );
};

export default CadastroUniversidade;