//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(plugins)
new Vue({
  render: h => h(App),
}).$mount('#app')
