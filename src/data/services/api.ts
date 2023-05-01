import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://api-correios-request.vercel.app'
// })

//DEV REQUEST

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export default api
