// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import interfaces from './assets/js/interface'
import router from './router'
import {
  Button,
  Cell,
  Tabbar,
  TabItem,
  Swipe,
  SwipeItem
} from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false
Vue.prototype.api = interfaces

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
