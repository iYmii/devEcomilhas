import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dev-ecomilhas-server.herokuapp.com'
})

export default api;