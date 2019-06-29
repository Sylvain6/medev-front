import config from '../index.js'

const getDegree = (userId, postId, positive) => new Promise((resolve, reject) => {
  config.get(`degrees/${postId}/${userId}/${positive}`).then(res => {
    resolve(res)
  })
    .catch(err => {
      reject(err)
    })
}
)

export default getDegree
