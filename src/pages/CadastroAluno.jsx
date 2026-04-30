import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import "../styles/formAluno.css";

const CadastroAluno = () => {
  const navigate = useNavigate();
  // Como seu baseURL já tem "/api", passamos apenas o restante
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

  // Verificação manual antes de enviar
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
    const result = await postData(payload);
    if (result) navigate("/acesso-aluno");
  } catch (err) {
    // Se der 400 aqui, olhe o terminal do IntelliJ (abaixo)
    console.error("Erro 400: Dados inválidos");
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