import config from '../index.js'

const register = data => new Promise((resolve, reject) => {
  config.post('users', data).then(res => {
    resolve(res)
  })
    .catch(err => {
      reject(err)
    })
})

export default register
