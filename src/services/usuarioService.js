import api from "./api";

export const cadastrarUsuario = async (dados) => {
  try {
    const response = await api.post("/usuarios/registro", dados);
    return response.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};