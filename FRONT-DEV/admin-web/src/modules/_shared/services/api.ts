import axios from 'axios';

const api = axios.create({
  // baseURL: window.location.origin //para ambiente de produção
  baseURL: 'http://localhost:3001' //para ambiente de desenvolvimento
});

export default api;
