import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-correios-request.vercel.app'
})

export default api


// https://api-correios-request.vercel.app
