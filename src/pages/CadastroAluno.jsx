import "../styles/form.css";
import { useNavigate } from "react-router-dom";

const CadastroAluno = () => {
    const navigate = useNavigate();
  return (
    <div className="form-container">

      <div className="form-left">
        <h2>Crie sua conta de estudante</h2>
        <p>
          Conecte suas credenciais universitárias para acompanhar tudo.
        </p>
      </div>

      <div className="form-right">
        <h3>Cadastro de Aluno</h3>

        <input placeholder="Nome completo" />
        <input placeholder="Matrícula" />
        <input placeholder="Instituição" />
        <input placeholder="Email da universidade" />
        <input type="password" placeholder="Criar senha" />

       <button onClick={() => navigate("/acesso-aluno")}>
            Criar Conta Acadêmica →
        </button>
        
      </div>

    </div>
  );
};

export default CadastroAluno;