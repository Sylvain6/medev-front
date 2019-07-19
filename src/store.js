import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    isLoggedIn: !!localStorage.getItem('user-token'),
    totalDegree: 0,
    subjectNumber: 0,
    posts: [],
    postLoad: false
  },
  mutations: {
    logUser (state, user) {
      state.user = user
    },
    setTotalDegree (state, totalDegree) {
      state.totalDegree = totalDegree
    },
    setSubjectNumber (state, subjectNumber) {
      state.subjectNumber = subjectNumber
    },
    togglePostLoad (state, postLoaded) {
      state.postLoad = postLoaded
    },
    setPosts (state, posts) {
      state.posts = posts
    },
    addPost (state, post) {
      state.posts.push(post)
    }
  },
  plugins: [createPersistedState({
    paths: ['user', 'isLoggedIn', 'totalDegree', 'subjectNumber']
  })]
})
