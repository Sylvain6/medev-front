import config from '../index.js'
import store from '@/store'

const subjects = id => new Promise((resolve, reject) => {
  config.get(`subjects`).then(res => {
    let degreeTotal = 0
    res.data.forEach(subject => {
      degreeTotal += subject.degree_total
    })
    store.commit('setTotalDegree', degreeTotal)
    store.commit('setSubjectNumber', res.data.length)
    resolve(res.data)
  })
    .catch(err => reject(err))
})

export default subjects
