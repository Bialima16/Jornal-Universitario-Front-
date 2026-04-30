// src/hooks/usePost.js
import { useState } from "react";
import api from "../services/api"; // Verifique se este caminho está correto no seu projeto!

export function usePost(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err; // Lançar o erro ajuda o componente a saber que falhou
    } finally {
      setLoading(false);
    }
  };

  // CRUCIAL: postData precisa estar no retorno!
  return { postData, loading, error };
}