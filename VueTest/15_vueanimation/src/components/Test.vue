<template>
  <div>
  <button @click="isShow=!isShow">显示/隐藏</button>
  <!--需要动画的元素使用transition一包裹,如果写了名字，下面使用hello-enter-active hello-leave-active,否则使用默认v-enter-active V-leave-active-->
  <transition name='hello' :appear="true"><h1 v-show="isShow">你好啊</h1></transition>
  </div>
</template>

<script>
export default {
name:"Test",
data() {
    return {
        isShow:true
    }
},
}
</script>

<style scoped>
h1{
    background-color: orange;
}
/* vue中固定的名字，来的方向 */
.hello-enter-active{
    animation: sdu 0.5s ;
}
/* vue中固定的名字，去的方向 */
.hello-leave-active{
    animation: sdu 0.5s reverse;
}
/* 使用keyframe规定动画，且起名为sdu */
@keyframes sdu {
    from{
        transform: translateX(-100%)
    }
    to{
        transform: translateX(0px)

    }
}
</style>