//configurações do axios
import axios from 'axios'

export const api = axios.create({
    baseURL: "https://notes-movie-web-service.onrender.com"
})

