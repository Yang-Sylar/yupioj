import { StoreOptions } from "vuex";

export default {
  namespaced: true,

  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notLogin",
    },
  }),

  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "yzl" });
    },
  },

  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
