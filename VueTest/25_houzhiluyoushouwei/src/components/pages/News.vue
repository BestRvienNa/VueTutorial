<template>
      <ul>        <li :style="{opacity}">欢迎学习Vue</li>
                  <li>news001<input/></li>
                  <li>news002<input/></li>
                  <li>news003<input/></li>
                </ul>
</template>

<script>
export default {
name:'News',
data() {
  return {
    opacity:1
  }
},
/*
beforeDestroy(){
  console.log('news被销毁了')
  clearInterval(this.timer)
},
 mounted() {
   this.timer=setInterval(()=>{
    this.opacity-=0.01
    if(this.opacity<=0) this.opacity=1
                   },16)
            },*/
//激活（就是看news组件时）
activated(){
  console.log('news组件被激活了')
  this.timer=setInterval(()=>{
    this.opacity-=0.01
    if(this.opacity<=0) this.opacity=1
                   },16)
},
//失活生命周期函数
deactivated(){
 console.log('news组件失活了')
 clearInterval(this.timer)
}
}


</script>

<style>

</style>