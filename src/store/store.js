import Vue from "vue";
import Vuex from "vuex";
import router from "../routes";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        isLoggedIn:false,
    },
    getters:{
        loginState:(state)=>{
            return state.isLoggedIn;
        },
    },
    mutations:{
        login(state){
            state.isLoggedIn = true;
            if(router.currentRoute.name !== "Home")
            router.push("/dashboard");
        },
        logout(state){
            state.isLoggedIn = false;
            localStorage.removeItem("token");
            localStorage.removeItem("expires");

            router.push("/signin");
        },
    },
    actions: {
        login({ commit }, expires) {
          setTimeout(() => {
            commit("logout");
          }, expires);
          commit("login");
        },
        logout({ commit }) {
          commit("logout");
        },
      },
    });