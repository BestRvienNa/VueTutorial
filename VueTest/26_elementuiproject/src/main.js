import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//完整引入
//引入element UI的组件库
//import ElementUI from 'element-ui';
//引入element UI的全部样式
//import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(ElementUI);
//按需引入
import { Button,Row,DatePicker } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name,DatePicker);
new Vue({
  render: h => h(App),
}).$mount('#app')
