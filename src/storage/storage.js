import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    acess_token: '',
    tableNumber: 0,
  },
  getters: {
    getAcessToken: (state) => {
      return state.acess_token;
    },
    getTableNumber(state) {
      return state.tableNumber;
    }
  },
  mutations: {
    setTokken(state, token) {
      state.acess_token = token
    },
    setTableNumber(state, tableNumber) {
      state.tableNumber = tableNumber;
    }
  },
  actions: {
    setTokken({ commit }, token) {
      commit('setTokken', token);
    },
    setTableNumber({ commit }, tableNumber) {
      commit('setTableNumber', tableNumber);
    }
  }
});

export default store;