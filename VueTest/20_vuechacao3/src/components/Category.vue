<template>
  <div class="category">
   <h3>{{title}}</h3>
   <slot :games="games">我是默认的内容</slot><!--把games传给了插槽的使用者-->
   </div>
</template>

<script>
export default {
    name:"Category",
    props:['title'],
    data() {
      return {
    	games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
  }
},

}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>