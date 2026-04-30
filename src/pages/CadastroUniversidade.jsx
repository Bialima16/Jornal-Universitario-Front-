import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost"; 
import "../styles/form.css";

const CadastroUniversidade = () => {
  const navigate = useNavigate();

  // 🟢 DEIXE APENAS UMA DECLARAÇÃO DO USEPOST AQUI:
  const { postData, loading, error: apiError } = usePost("/universidades");

  const [form, setForm] = useState({
    nome: "",
    sigla: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nome: form.nome,
      sigla: form.sigla,
      cidade: form.cidade,
      estado: form.estado,
    };

    try {
      // Aqui chamamos a função declarada lá em cima
      const result = await postData(payload);
      if (result) {
        alert("Universidade cadastrada com sucesso!");
        navigate("/acesso-aluno");
      }
    } catch (err) {
      console.error("Erro na submissão:", err);
    }
  };

  return (
    <div className="form-container">
      <div className="form-left">
        <h2>Cadastrar sua Universidade</h2>
        <p>Publique conteúdos e conecte seus alunos.</p>
      </div>

      <div className="form-right">
        <h3>Registro de Instituição</h3>

        {apiError && (
          <p style={{ color: "red" }}>Erro ao salvar. Verifique a conexão.</p>
        )}

        <form onSubmit={handleSubmit}>
          <input name="nome" placeholder="Nome" onChange={handleChange} required />
          <input name="sigla" placeholder="Sigla" onChange={handleChange} required />
          <input name="cidade" placeholder="Cidade" onChange={handleChange} required />
          <input name="estado" placeholder="Estado (UF)" onChange={handleChange} required />

          <button type="submit" disabled={loading}>
            {loading ? "Salvando..." : "Finalizar Cadastro"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroUniversidade;