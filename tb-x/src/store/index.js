import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabShow: true
  },
  mutations: {
    HideMaizuoTab(state, data) {
      state.isTabShow = data
    }
  },
  actions: {
  },
  modules: {
  }
})
