<template>
  <div>
      <h2 @click="showName">学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import {hunhe, hunhe2} from "../mixin"
export default {
name :"School",
data:function(){
    return{
        name:"山东大学",
        address:"青岛"
    }
},
mixins:[hunhe,hunhe2]
}
</script>
