import config from '../index.js'

const posts = () => new Promise((resolve, reject) => {
  config.get('posts').then(res => resolve(res.data))
    .catch(err => reject(err))
})

export default posts
