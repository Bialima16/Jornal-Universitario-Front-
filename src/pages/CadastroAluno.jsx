import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost"; 
import "../styles/form.css";

const CadastroAluno = () => {
  const navigate = useNavigate();

  // Inicializa o hook com o endpoint de registro
  const { postData, loading, error: apiError } = usePost("/usuarios/registro");

  // O estado deve ter as chaves EXATAS que você quer manipular
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    universidadeId: "", // Usaremos ID conforme sua última tentativa
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // name deve ser igual a 'nome', 'email', 'senha' ou 'universidadeId'
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Monta o JSON para enviar ao Java
    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      // Se o campo estiver vazio, envia null para evitar erro de formato UUID
      universidadeId: form.universidadeId.trim() || null, 
    };

    try {
      const result = await postData(payload);
      
      if (result) {
        // Se o back-end responder 200/201, redireciona
        navigate("/acesso-aluno");
      }
    } catch (err) {
      console.error("Erro ao cadastrar aluno:", err);
    }
  };

  return (
    <div className="form-container">
      <div className="form-left">
        <h2>Crie sua conta de estudante</h2>
        <p>Conecte suas credenciais universitárias para acompanhar tudo.</p>
      </div>

      <div className="form-right">
        <h3>Cadastro de Aluno</h3>

        {/* Exibe erro caso o e-mail já exista ou o servidor falhe */}
        {apiError && (
          <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
            {apiError.response?.data?.message || "Erro: Verifique os dados ou se o e-mail já existe."}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input 
            name="nome" 
            placeholder="Nome completo" 
            value={form.nome} 
            onChange={handleChange} 
            required 
          />
          
          <input 
            name="email" 
            type="email" 
            placeholder="Email da universidade" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />
          
          <input 
            name="universidadeId" // 🚨 IMPORTANTE: Igual ao nome no useState
            placeholder="ID da Instituição (UUID)" 
            value={form.universidadeId} 
            onChange={handleChange} 
          />
          
          <input 
            name="senha" 
            type="password" 
            placeholder="Criar senha" 
            value={form.senha} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Criar Conta Acadêmica →"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroAluno;