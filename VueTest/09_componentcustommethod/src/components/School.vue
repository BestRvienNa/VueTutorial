<template>
  <div class="school">
      <h2 >学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
name :"School",
props:["getSchoolName"],
data:function(){
    return{
        name:"山东大学",
        address:"青岛"
    }
},
methods: {
    sendSchoolName(){
        this.getSchoolName(this.name)
    }
},
}
</script>
<style lang="less" scoped>
.school{
    background-color: skyblue;
    padding: 5px;
}
</style>
