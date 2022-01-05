<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
name:'About',
beforeDestroy(){
  console.log('about组件即将被销毁')
},
mounted() {
  console.log(this.$route)
},
//通过路由规则进入该组件时被调用
beforeRouteEnter (to, from, next) {
   //进入之前调用beforeenter       
      if(to.meta.isAuth){//判断是否需要授权
    if(localStorage.getItem('school')==='sdu'){
      next()
   }else{
         alert('学校名不对，无权限查看！')
   }
}else{
    next()
} },
//通过路由规则离开该组件时调用
beforeRouteLeave (to, from, next) {
  // ...
  next()
}
}
</script>

