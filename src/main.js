import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store";
import router from "./router";
import axios from "./utils/net";

Vue.use(ElementUI);

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  render: h => h(App),
});

// 配置全局的axios在响应错误(http状态码非2xx系列)时的处理,也许不该这样
axios.interceptors.response.use(function(response) {
  return response;
}, function (error) {
  vue.$message("网络异常");
  return Promise.reject(error);
});

vue.$mount('#app');
