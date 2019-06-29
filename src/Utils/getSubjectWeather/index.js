import store from '@/store'

export default function getSubjectWeather (degree) {
  const { totalDegree, subjectNumber } = store.state
  const average = totalDegree / subjectNumber
  switch (true) {
    case (degree > average):
      return 'sun'
    case (degree + 50 >= average):
      return 'cloudy-sun'
    case (degree + 100 >= average):
      return 'cloud'
    case (degree + 200 >= average):
      return 'rain'
    case (degree + 500 >= average):
      return 'storm'
    case (degree + 500 <= average):
      return 'storm-hard'
  }
}
