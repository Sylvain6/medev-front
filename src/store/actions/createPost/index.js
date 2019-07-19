import config from '../index.js'
import store from '@/store'

const createPost = data => new Promise((resolve, reject) => {
  config.post('posts', data).then(res => {
    store.commit('addPost', res.data)
    resolve(res)
  })
    .catch(err => {
      reject(err)
    })
}
)

export default createPost
