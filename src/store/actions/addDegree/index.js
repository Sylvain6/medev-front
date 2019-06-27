import config, { getDegree, deleteDegree } from '../index.js'

const addDegree = data => new Promise((resolve, reject) => {
  let thePositive = 'positive'
  if (data.positive === 'positive') {
    thePositive = 'negative'
  }
  getDegree(data.user_id, data.post_id, thePositive).then(res => {
    if (res.data.length > 0) {
      deleteDegree(res.data[0].id).then(() => {}).catch(err => console.log(err))
    }
    config.post('degrees', data).then(res => {
      resolve(res)
    })
      .catch(err => {
        reject(err)
      })
  }).catch(err => console.log(err))
}
)

export default addDegree
