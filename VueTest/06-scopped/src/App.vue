<template>
  <div>
    <School/>
    <hr>
    <Student/>
  </div>
</template>

<script>
//引入School组件
import School  from './components/School.vue'
import Student from './components/Student.vue'
export default {
name:"App",

components:{
Student,
School
}
}
</script>
<style>
.title{
  background-color: red;
}
</style>
