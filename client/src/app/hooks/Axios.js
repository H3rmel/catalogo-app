import api from "../services/api";

// Método geral via GET
export async function getInfo(url, setData, setLoading) {
  const response = await api.get(url);
  setData(response.data);
  setLoading(true);
}

// Método geral via POST
export async function postInfo(url, Data) {
  const response = await api.post(url, Data);
  return response;
}