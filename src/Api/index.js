import axios from 'axios'

const api = axios.create({
    baseURL: 'http://cgr-system.herokuapp.com/',
    headers: {
      'Accept': 'application/json'
    }
})

export default api