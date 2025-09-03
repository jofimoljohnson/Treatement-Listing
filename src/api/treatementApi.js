import axios from 'axios'


const api = axios.create({
baseURL: '/api', // CHANGE THIS to your backend base path
headers: {
'Content-Type': 'application/json',
},
})


export default api