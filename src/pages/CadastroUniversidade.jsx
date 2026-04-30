import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost"; 
import "../styles/formUniversidade.css";

const CadastroUniversidade = () => {
   const [cor, setCor] = useState("cinza");
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
      <div className={`form-left ${cor}`}>
        <h2>Acesso Institucional</h2>
        <h1>Cadastre sua Universidade</h1>
        <p>Conecte sua universidade para publicar conteúdos, divulgar eventos e se comunicar com seus estudantes de forma simples e organizada.</p>
        <img src="/imgs/universidade.jpg" alt="Cadastro de Universidade" className="form-img" />
      </div>

      <div className="form-right">
        <h3>Registro de Universidade</h3>
        <p>Preencha o formulário abaixo com os dados institucionais para cadastrar sua universidade e começar a publicar conteúdos na plataforma.</p>

        {apiError && (
          <p style={{ color: "red" }}>Erro ao salvar. Verifique a conexão.</p>
        )}

        <form onSubmit={handleSubmit}>
          <input name="nome" placeholder="Nome da Instituição" onChange={handleChange} required />
          <input name="email" placeholder="Email do Administrador" onChange={handleChange} required />
          <input name="CNPJ" placeholder="CNPJ / Id institucional" onChange={handleChange} required />
          <input name="senha" placeholder="Criar Senha" onChange={handleChange} required />
          <input name="senhaC" placeholder="Confirmar senha" onChange={handleChange} required />
          
          <div className="color-buttons">
          <button onClick={() => setCor("cinza")}></button>
          <button onClick={() => setCor("azul")}></button>
          <button onClick={() => setCor("roxo")}></button>
          <button onClick={() => setCor("verde")}></button>
          <button onClick={() => setCor("preto")}></button>
          <button onClick={() => setCor("amarelo")}></button>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Salvando..." : "Finalizar Cadastro"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroUniversidade;