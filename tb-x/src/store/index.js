import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabShow: true,
    // quantity: "",
    count: 0
  },
  getters: {
    getQuantity(state) {
      return state.count
    },
  },
  mutations: {
    HideMaizuoTab(state, data) {
      state.isTabShow = data
    },
    // AddQuantity(state, data) {
    //   state.quantity = data
    // },
    getCardCount(state, payload) {
      state.count = state.count + payload
    }
  },
  actions: {
  },
  modules: {
  }
})
