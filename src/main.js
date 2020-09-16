import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入rem适配
import 'amfe-flexible';

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 清除默认样式
import 'normalize.css'

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
