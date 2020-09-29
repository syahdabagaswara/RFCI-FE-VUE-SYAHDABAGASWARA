import Vuex from "vuex";
import Vue from "vue";
// import { SET_DATA } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: null
  },

  getters: {
    getData: (state) => {
      return state.list;
    },
    getCountData: (state) => {
        return state.list;
    }
  },

  mutations: {
    SET_DATA(state, data) {
      state.list = data
    },
  },

  actions: {
    setData({ commit }, data) {
      commit('SET_DATA', data);
    },
  },
});
