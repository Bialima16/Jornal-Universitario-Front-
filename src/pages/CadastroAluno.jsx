import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import "../styles/formAluno.css";

const CadastroAluno = () => {
  const navigate = useNavigate();
  const { postData, loading, error: apiError } = usePost("/usuarios/registro");

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    nomeUniversidade: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.nome || !form.email || !form.senha || !form.nomeUniversidade) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const payload = {
    nome: form.nome.trim(),
    email: form.email.trim(),
    senha: form.senha,
    nomeUniversidade: form.nomeUniversidade.trim()
  };

  try {
    await postData(payload);
    navigate("/acesso-aluno"); // navega independente do conteúdo da resposta
  } catch (err) {
    console.error("Erro ao cadastrar:", err.response?.status);
  }
};

  return (
    <div className="form-container">
      <div className="form-left">
        <h2>Jornal Universitário</h2>
        <h1>Crie sua conta</h1>
        <img src="/imgs/biblioteca.jpg" alt="Biblioteca" className="form-img" />
      </div>

      <div className="form-right">
        <form onSubmit={handleSubmit} className="cadastro-form">
          <h3>Cadastro de Aluno</h3>
          {apiError && <div className="error-box">Erro 403: Verifique o console do Spring.</div>}
          
          <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="nomeUniversidade" placeholder="Universidade" value={form.nomeUniversidade} onChange={handleChange} required />
          <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} required />
          
          <button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroAluno;