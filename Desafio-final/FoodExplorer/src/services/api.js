//configurações do axios
import axios from 'axios'

export const api = axios.create({
    baseURL: "https://food-explorer-web-service.onrender.com"
})