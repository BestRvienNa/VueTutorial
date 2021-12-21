/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/
/*改文件是整个项目的入口文件 */
//引入Vue
import Vue from 'vue'
//引入App组件，他是所有组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建Vue的实例对象vm
new Vue({
  //将App组件放入容器app中
  render: h => h(App),
}).$mount('#app')
// new Vue({
//  el:"#app",
//  //完整写法
//  /*render(createelement){
//  return createelement('h1',"你好大")
//  }*/
//  //没用到this可以写成箭头函数
//  render:(createelement)=>{
//  return createelement('h1',"你好大")
//  }
//  //只有一个参数，可以省略括号
//  /*render:createelement=>{
//  return createelement('h1',"你好大")
//  }*/
//  //箭头函数只有一句返回值
//  //render:createelement=>createelement('h1',"你好大")
//  //最后演变
//  //render:q=>q('h1',"你好大") 
// })


