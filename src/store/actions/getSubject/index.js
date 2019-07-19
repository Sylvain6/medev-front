import config from '../index.js'

const getSubject = id => new Promise((resolve, reject) => {
  config.get(`subjects/${id}`).then(res => {
    resolve(res.data)
  })
    .catch(err => reject(err))
})

export default getSubject
