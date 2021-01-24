import Vue from "vue";
import Vuex from "vuex";
import { auth, projects, tasks } from "./store-modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth,
    projects,
    tasks
  }
});
