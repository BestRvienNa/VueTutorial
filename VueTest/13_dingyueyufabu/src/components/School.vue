<template>
  <div class="school">
      <h2 >学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
name :"School",
data:function(){
    return{
        name:"山东大学",
        address:"青岛"
    }
},
methods: {
  demo(msgName,data){
  console.log(msgName,data)
  }
},
mounted() {
this.pubid=pubsub.subscribe('hello',this.demo)
},
beforeDestroy(){
pubsub.unsubscribe(this.pubid)
}
}
</script>
<style lang="less" scoped>
.school{
    background-color: skyblue;
    padding: 5px;
}
</style>
