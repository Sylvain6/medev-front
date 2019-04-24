import axios from 'axios'
import login from './login'
import register from './register'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
const token = localStorage.getItem('user-token')
if (token) {
  instance.defaults.headers.common['Authorization'] = token
}

export default instance
export {
  login,
  register
}
