<template>
  <div>
      <h2>学校名称：{{name|mySplice}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="hello">点我测试全局hello方法</button>
  </div>
</template>

<script>
export default {
name :"School",
data:function(){
    return{
        name:"山东大学SDUQD",
        address:"青岛"
    }
}
}
</script>
