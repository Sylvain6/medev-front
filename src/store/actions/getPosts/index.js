import config from '../index.js'
import store from '@/store'

const posts = () => new Promise((resolve, reject) => {
  config.get('posts').then(res => {
    store.commit('setPosts', res.data)
    store.commit('togglePostLoad', true)
    resolve(res.data)
  })
    .catch(err => reject(err))
})

export default posts
