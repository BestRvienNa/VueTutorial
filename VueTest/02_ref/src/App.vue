<template>
  <div>
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showDom" ref="btn">点我输出上方的DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
//引入School组件
import School from "./components/School.vue"
export default {
name:"App",
data() {
  return {
    msg:"欢迎学习Vue"
  }
},
components:{
  School
},
methods: {
  showDom(){
    //console.log(this.$refs.title)//输出的dom元素
    //console.log(this.$refs.btn)//输出的是dom元素
    console.log(this.$refs.sch)//输出的是School组件的实例对象（vc）
  }
},
}
</script>
