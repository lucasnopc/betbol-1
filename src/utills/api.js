import axios from 'axios'

const api = axios.create({baseURL: "https://v3.football.api-sports.io"})
api.defaults.headers.get['x-apisports-key'] = '88a709a92b95f1d7df37d06e03d13bec'
export default api