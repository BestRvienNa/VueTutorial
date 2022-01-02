import Vue from 'vue'
import App from './App.vue'
//引入store
import store from './store'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,//组件都能看到store
}).$mount('#app')
