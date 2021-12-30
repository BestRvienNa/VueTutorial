<template>
  <div class="school">
      <h2 >学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
name :"School",
data:function(){
    return{
        name:"山东大学",
        address:"青岛"
    }
},
mounted() {
  //console.log("School",this.x) 
  this.$bus.$on("test",(data)=>{
    console.log("我是school组件，我获得了",data)
  })
},
beforeDestroy(){
  this.$bus.$off('hello')
}
}
</script>
<style lang="less" scoped>
.school{
    background-color: skyblue;
    padding: 5px;
}
</style>
