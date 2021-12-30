<template>
  <ul class="todo-main">
  <transition-group name="todo" appear><MyItem v-for="todoObj in todos" :key="todoObj.id"  :todo="todoObj"/></transition-group>  
      </ul>
</template>

<script scoped>
import MyItem from './MyItem.vue'
export default {
name:"MyList",
components:{
  MyItem
},
props:['todos']
}
</script>
<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
/* vue中固定的名字，来的方向 */
.todo-enter-active{
    animation: sdu 0.5s ;
}
/* vue中固定的名字，去的方向 */
.todo-leave-active{
    animation: sdu 0.5s reverse;
}
/* 使用keyframe规定动画，且起名为sdu */
@keyframes sdu {
    from{
        transform: translateX(100%)
    }
    to{
        transform: translateX(0px)

    }
}
</style>