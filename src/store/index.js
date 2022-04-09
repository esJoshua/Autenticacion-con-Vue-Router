import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  mutations: {
    SET_LOG(state, payload) {
      state.loggedIn = payload;
    },
  },
  actions: {
    async loginWithFirebase({ commit }, payload) {
      const user = payload.user;
      const password = payload.password;
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          user,
          password
        );
        // Signed in
        commit("SET_LOG", true);
        localStorage.setItem("loggedIn", "true");
        router.push("/");
        console.log({ userCredential });
      } catch (error) {
        console.error(error);
      }
    },
    logout({ commit }) {
      commit("SET_LOG", false);
      localStorage.removeItem("loggedIn");
      router.push("/login");
    },
  },
});
