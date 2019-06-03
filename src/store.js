import Vue from 'vue'
import Vuex from 'vuex'
import { register, login, post, logout } from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    results: []
  },
  mutations: {
    auth_request (state) {
      state.status = 'isLoading'
    },
    auth_success (state) {
      state.status = 'Success'
      state.token = this.token
      state.user = this.user
    },
    auth_error (state) {
      state.status = 'error'
    },
    fetch_posts: (state, payload) => {
      state.results = payload
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    register,
    login,
    logout,
    post
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    posts: state => state.results
  }
})
