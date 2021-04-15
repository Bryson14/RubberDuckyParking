import axios from 'axios'

const API_URL = 'http://localhost:8000/api/'

const api = axios.create({
    baseURL: API_URL
})

api.interceptors.request.use(conf => {
    const token = localStorage.getItem('token')
    if (token) {
        conf.headers['Authorization'] = `Token ${token}`
    }
    return conf
})

export default api