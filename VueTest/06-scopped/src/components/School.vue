<template>
  <div class="demo">
      <h2 class="xuexiao">学校名称：{{name}}</h2>
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
}
}
</script>
<style lang="less">
.demo{
    background-color: pink;
    .xuexiao{
        font-size: 40px;
    }
}
</style>
