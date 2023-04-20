import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://pablo-studio.vercel.app/'
// })

// export default api

//DEV API

const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

export default api
