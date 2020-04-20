import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: false,
        isUserLogin: false,
    },
    mutations: {
        setIsLogin (state, bool) {
            state.isLogin = bool;
        },
        setIsUserLogin (state, bool) {
            state.isUserLogin = bool;
        }
    }
});

export default store
