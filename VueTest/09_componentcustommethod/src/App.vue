<template>
  <div class="app">
    <h2>{{msg}}学生姓名:{{studnetName}}</h2>
    <!--通过父组件给子组件传递函数类型的props,子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
      <!--通过父组件给子组件通过绑定一个自定义事件,子给父传递数据（第一种写法 v-on）-->
    <!-- <Student v-on:atguigu="getStudentName" @demo="m1"/> -->
    <!--通过父组件给子组件通过绑定一个自定义事件,子给父传递数据（第二种写法 ref）-->
    <Student ref="student" @click.native="show"/>

  </div>
</template>

<script>
//引入School组件
import School  from './components/School.vue'
import Student from './components/Student.vue'
export default {
name:"App",
data() {
  return {
    msg:"你好啊",
    studnetName:''
  }
},
components:{
Student,
School
},
methods:{
  getSchoolName(name){
  console.log("app收到了名字",name)
  },
  getStudentName(name,...params){
     this.studnetName=name
    console.log(name,params)
  },
  m1(){
    console.log("我是m1")
  },
  show(){
    alert(123)
  }
},
mounted() {
 this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件
 //this.$refs.student.$once('atguigu',this.getSchoolName)//绑定自定义事件第一次
},
}
</script>
<style>
.app{
  background-color: gray;
  padding: 5px;
}
</style>
