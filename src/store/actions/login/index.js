import config from '../index.js'

const token = localStorage.getItem('user-token')

export const login = async ({ commit }, data) => {
  if (!token) {
    commit('auth_request')
    config.post('auth/login/', data).then(res => {
      let { token } = res.data
      localStorage.setItem('user-token', token)
      this.$http.defaults.headers.common['Authorization'] = token
      commit('auth_success', token, data)
    })
      .catch(err => {
        localStorage.removeItem('user-token')
        console.log(err)
      })
  }
  throw new Error('Already connected')
}

export const logout = async ({ commit }) => {
  commit('logout')
  localStorage.removeItem('user-token')
  delete this.$http.defaults.headers.common['Authorization']
}
