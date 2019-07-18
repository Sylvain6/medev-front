import store from '@/store'

const token = localStorage.getItem('user-token')

const logout = () => {
  if (token) {
    localStorage.removeItem('user-token')
    store.commit('logout')
  }
}

export default logout
