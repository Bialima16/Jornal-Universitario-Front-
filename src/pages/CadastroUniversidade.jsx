import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import "../styles/formUniversidade.css";

const CadastroUniversidade = () => {
  const [cor, setCor] = useState("cinza");
  const navigate = useNavigate();
  const { postData, loading, error: apiError } = usePost("/universidades");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cnpj: "",
    senha: "",
    senhaConfirmacao: "",
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

    if (form.senha !== form.senhaConfirmacao) {
      alert("As senhas não coincidem!");
      return;
    }

    const payload = {
      nome: form.nome,
      sigla: form.sigla, // adicione esse campo no formulário
      cidade: form.cidade, // adicione esse campo no formulário
      estado: form.estado, // adicione esse campo no formulário
      cnpj: form.cnpj,
      email: form.email,
      senha: form.senha,
      cor: cor,
    };

    try {
      await postData(payload);
      alert("Universidade cadastrada com sucesso!");
      navigate("/acesso-universidade");
    } catch (err) {
      console.error("Erro na submissão:", err);
    }
  };

  return (
    <div className="form-container">
      <div className={`form-left ${cor}`}>
        <h2>Acesso Institucional</h2>
        <h1>Cadastre sua Universidade</h1>
        <p>
          Conecte sua universidade para publicar conteúdos, divulgar eventos e
          se comunicar com seus estudantes de forma simples e organizada.
        </p>
        <img
          src="/imgs/universidade.jpg"
          alt="Cadastro de Universidade"
          className="form-img"
        />
      </div>
      <div className="form-right">
        <h3>Registro de Universidade</h3>
        <p>
          Preencha o formulário abaixo com os dados institucionais para
          cadastrar sua universidade e começar a publicar conteúdos na
          plataforma.
        </p>
        {apiError && (
          <p style={{ color: "red" }}>Erro ao salvar. Verifique a conexão.</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            name="nome"
            placeholder="Nome da Instituição"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email do Administrador"
            onChange={handleChange}
            required
          />
          <input
            name="cnpj"
            placeholder="CNPJ / Id institucional"
            onChange={handleChange}
            required
          />
          <input
            name="senha"
            type="password"
            placeholder="Criar Senha"
            onChange={handleChange}
            required
          />
          <input
            name="senhaConfirmacao"
            type="password"
            placeholder="Confirmar senha"
            onChange={handleChange}
            required
          />

          <div className="color-buttons">
            <button type="button" onClick={() => setCor("cinza")}></button>
            <button type="button" onClick={() => setCor("azul")}></button>
            <button type="button" onClick={() => setCor("roxo")}></button>
            <button type="button" onClick={() => setCor("verde")}></button>
            <button type="button" onClick={() => setCor("preto")}></button>
            <button type="button" onClick={() => setCor("amarelo")}></button>
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
