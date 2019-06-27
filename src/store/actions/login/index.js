import config from '../index.js'
import store from '@/store'

const token = localStorage.getItem('user-token')

const login = data => new Promise((resolve, reject) => {
  if (!token) {
    config.post('auth/login/', data).then(res => {
      const token = res.data.token
      localStorage.removeItem('user-token')
      localStorage.setItem('user-token', token)
      store.commit('logUser', res.data.user)
      resolve(res)
    })
      .catch(err => {
        localStorage.removeItem('user-token')
        reject(err)
      })
  }
})

export default login
