import axios from 'axios'

const API_URL = 'http://localhost:8000/api/'

const api = axios.create({
    baseURL: API_URL
})
// headers: {'Authorization': `Token ${token}`}

export default api