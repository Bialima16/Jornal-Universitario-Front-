import { useState } from "react";
import api from "../services/api"; // importa a instância com baseURL

export function usePost(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err) {
      setError(err);
      console.error("Status do Erro:", err.response?.status);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
}