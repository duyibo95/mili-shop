import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { serverUrl } from "./utils/tools"
Vue.use(Vant);
Vue.config.productionTip = false
Vue.filter('dalImg', str => {
  if (str) {
    if (str.startsWith('http')) {
      return str;
    } else {
      return serverUrl + str;
    }
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
