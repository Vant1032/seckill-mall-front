import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store";
import router from "./router";
import axios from "./utils/net";

Vue.use(ElementUI);

Vue.config.productionTip = true;

const vue = new Vue({
  router,
  store,
  render: h => h(App),
});

// 配置全局的axios在响应错误(http状态码非2xx系列)时的处理,也许不该这样
axios.interceptors.response.use(function(response) {
  return response;
}, function (error) {
  console.log("以下是错误：")
  console.log(error.response);
  if (error.response) {
    let rsp = error.response;
    if (rsp.code !== 0) {
      vue.$message(rsp.msg);
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    vue.$message("未收到响应");
  } else {
    vue.$message("出错了：" + error.message)
  }
  return Promise.reject(error);
});

vue.$store.backendBaseUrl='http://' + process.env.VUE_APP_BACKEND_URL + ':' + process.env.VUE_APP_BACKEND_PORT;


vue.$mount('#app');
