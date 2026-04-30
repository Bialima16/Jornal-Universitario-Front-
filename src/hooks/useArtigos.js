import { useFetch } from "./useFetch";

export function useArtigos() {
  return useFetch("/artigos");
}
