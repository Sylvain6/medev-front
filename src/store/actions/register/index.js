import config from '../index.js'

const register = async ({ commit }, data) => {
  commit('auth_request')
  await config.post('/users', data).then(res => {
    let { user, token } = res.data
    localStorage.setItem('token', token)
    this.$http.defaults.headers.common['Authorization'] = token
    commit('auth_success', token, user)
  })
    .catch(err => {
      commit('auth_error')
      localStorage.removeItem('token')
      console.log(err)
    })
}

export default register
