import axios from 'axios';

const api = axios.create({
    baseURL: 'https://zenviahackathon.herokuapp.com',
});

export default api;