import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    isLoggedIn: !!localStorage.getItem('user-token')
  },
  mutations: {
    logUser (state, user) {
      state.user = user
    }
  },
  plugins: [createPersistedState()]
})
