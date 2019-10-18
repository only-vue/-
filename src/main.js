
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.less'
import 'lib-flexible/flexible'
import Util from './utils/util'
Vue.use(Util)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
