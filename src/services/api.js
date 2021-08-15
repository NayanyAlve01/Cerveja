import axios from 'axios';

const api = axios.create({
baseURL:'https://challenge-api.debtges.com:40004/'

});
export default api