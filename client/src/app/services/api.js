import axios from 'axios';

// Instância conexão do axios.
const api = axios.create({
  baseURL: 'https://apiprodutosutalk.herokuapp.com/',
})

export default api;