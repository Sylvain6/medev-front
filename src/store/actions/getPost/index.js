import config from '../index.js'

const post = id => new Promise((resolve, reject) => {
  config.get(`posts/${id}`).then(res => resolve(res.data))
    .catch(err => reject(err))
})

export default post
