import config from '../index.js'

const subjects = id => new Promise((resolve, reject) => {
  config.get(`subjects`).then(res => resolve(res.data))
    .catch(err => reject(err))
})

export default subjects
