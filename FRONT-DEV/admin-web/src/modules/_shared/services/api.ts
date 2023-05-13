import axios from 'axios';

const api = axios.create({
  baseURL: 'https://e-stok.onrender.com/static/SVG/'
});

export default api;
