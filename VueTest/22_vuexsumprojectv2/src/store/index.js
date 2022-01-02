//该文件用于创建Vuex中最为核心的store
//引入了Vuex
import Vuex from 'vuex'
import Vue  from 'vue'
import  countOptions from  './count'
import personOptions from   './person'
Vue.use(Vuex) //use以后新建vue实例对象以后就可以有store配置项了
//创建并暴露store
export default new Vuex.Store({
   modules:{
       countAbout:countOptions,
       personAbout:personOptions
   }
})//创建Store

