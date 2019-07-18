import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    isLoggedIn: !!localStorage.getItem('user-token'),
    totalDegree: 0,
    subjectNumber: 0
  },
  mutations: {
    logUser (state, user) {
      state.user = user
      state.isLoggedIn = !!localStorage.getItem('user-token')
    },
    logout (state) {
      state.user = {}
      state.isLoggedIn = false
    },
    setTotalDegree (state, totalDegree) {
      state.totalDegree = totalDegree
    },
    setSubjectNumber (state, subjectNumber) {
      state.subjectNumber = subjectNumber
    }
  },
  plugins: [createPersistedState()]
})
