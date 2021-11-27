import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    acess_token: ''
  },
  getters: {
    getAcessToken: (state) => {
      return state.acess_token;
    }
  },
  mutations: {
    setTokken(state, token) {
      state.acess_token = token
    }
  },
  actions: {
    setTokken({ commit }, token) {
      commit('setTokken', token);
    }
  }
});

export default store;