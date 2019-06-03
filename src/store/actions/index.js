import axios from 'axios'
import { login, logout } from './login'
import register from './register'
import post from './post'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PROXY,
  headers: { 'content-type': 'application/json' }
})

export default instance
export {
  login,
  logout,
  register,
  post
}
