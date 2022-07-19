import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getProjects() {
      fetch("http://localhost:3000/projects")
        .then((response) => response.json())
        .then((json) => console.log(json));
    },

    getProject() {
      fetch("http://localhost:3000/projects" + id)
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
  modules: {},
});
