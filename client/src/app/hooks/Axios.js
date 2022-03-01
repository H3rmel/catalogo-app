import api from '../services/api'

// Método geral para chamar os endpoints da API
export async function getInfo(url, setData, setLoading) {
  const response = await api.get(url);
  setData(response.data);
  setLoading(true);
}