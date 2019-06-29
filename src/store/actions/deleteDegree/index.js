import config from '../index.js'

const deleteDegree = id => new Promise((resolve, reject) => {
  config.delete(`degrees/${id}`).then(res => {
    resolve(res)
  })
    .catch(err => {
      reject(err)
    })
}
)

export default deleteDegree
