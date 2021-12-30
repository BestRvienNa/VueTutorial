//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
// const Demo=Vue.extend({})
// const d=new Demo()
// Vue.prototype.x=d
new Vue({
  render: h => h(App),
}).$mount('#app')
