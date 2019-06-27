import config from '../index.js'

const createPost = data => new Promise((resolve, reject) => {
  config.post('posts', data).then(res => {
    resolve(res)
  })
    .catch(err => {
      reject(err)
    })
}
)

export default createPost
