<template>
  <div class="student">
      <h2 >学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生名给App</button>
      <button @click="unbind">解绑atguigu事件</button>
      <button @click="death">销毁当前student组件实例</button>
  </div>
</template>

<script>
export default {
name :"Student",
data:function(){
    return{
        name:"张三",
        sex:"男"
    }
},
methods:{
    sendStudentName(){
    //出发Student组件实例身上的atguigu事件
    this.$emit("atguigu",this.name,666,888,999)  
    this.$emit("demo")
    },
    unbind(){
    this.$off(['atguigu','demo'])
    this.$off()
    },
    death(){
        this.$destroy()//销毁了当前的student组件，销毁后所有的自定义事件不能用了
    }
}

}
</script>
<style lang="less" scoped>
.student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
}
</style>
