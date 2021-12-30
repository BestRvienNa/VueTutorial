<template>
<!--数据都是同一个数据，结构是由使用者决定的-->
 <div class="container">
<Category title="游戏">
  <!--slot-scope接收games-->
  <template slot-scope="sdu">
     <ul>
       <li v-for="(game,index) in sdu.games" :key="index">{{game}}</li>
   </ul>
  </template>
</Category>
<Category title="游戏">
   <template slot-scope="sdu">
     <ol>
       <li  style="color:red" v-for="(game,index) in sdu.games" :key="index">{{game}}</li>
   </ol>
  </template>
</Category>
<Category title="游戏">
     <template slot-scope="sdu">
       <h4  style="color:red" v-for="(game,index) in sdu.games" :key="index">{{game}}</h4>

  </template>
</Category>
 </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
name:"App",
components:{
  Category
},
}
</script>

<style scoped>
.container,.slot{
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>