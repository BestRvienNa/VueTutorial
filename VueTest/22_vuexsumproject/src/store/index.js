//该文件用于创建Vuex中最为核心的store
//引入了Vuex
import Vuex from 'vuex'
import Vue  from 'vue'
Vue.use(Vuex) //use以后新建vue实例对象以后就可以有store配置项了,
const actions={
//  jia(context,value){
//     context.commit('JIA',value)
//     }, 
// jian(context,value){
//         context.commit('JIAN',value)
//         },
jiaOdd(context,value){
        if(context.state.sum%2){
        context.commit('JIAODD',value)
        }       
       },
jiaWait(context,value){
        setTimeout(() => {
        context.commit('JIAWAIT',value)
        }, 500);
       
      }  
    
}//准备actions对象,用于响应组件中的动作
const mutations={
JIA(state,value){
   state.sum+=value
},
JIAN(state,value){
    state.sum-=value
 },
 JIAODD(state,value){
     state.sum+=value 
 },
 JIAWAIT(state,value){
    state.sum+=value 
 }

}//准备mutations对象,用于操作数据（state）
const state={
    sum:0,  //当前的和
    school:'山东大学',
    subject:'前端' 
}//用于存储数据
//准备getters用于将state中的数据进行加工(类似于vue中的计算属性)
const getters={
    bigSum(state){
    return state.sum*10
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})//创建Store

