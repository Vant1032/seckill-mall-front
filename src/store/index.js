import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: false
    },
    mutations: {
        setIsLogin (state, bool) {
            state.isLogin = bool;
        }
    }
});

export default store
