<template>
  <div class="student">
      <h2 >学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
name :"Student",
data:function(){
    return{
        name:"张三",
        sex:"男"
    }
},
methods: {
    sendStudentName(){
    pubsub.publish('hello',666)
    }
},
}
</script>
<style lang="less" scoped>
.student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
}
</style>
