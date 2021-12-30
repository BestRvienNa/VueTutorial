<template>
 <div class="container">
  <Category title="美食" :listData='foods'>
  <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
  <a  slot="footer" href="https//www.baidu.com">更多美食</a>
  </Category>
  <Category title="游戏">
    <ul slot="center">
       <li v-for="(game,index) in games" :key="index">{{game}}</li>
   </ul>
   <div class="slot" slot="footer">
   <a  href="https//www.baidu.com">单机游戏</a>
   <a  href="https//www.baidu.com">网络游戏</a>
   </div>
  </Category>
  <Category title="电影">
   <video controls slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video><!--通过slot属性来决定放在哪个具名插槽里面-->
   <template v-slot:footer><!--最新的具名插槽的写法-->
   <div class="slot">
   <a   href="https//www.baidu.com">经典</a>
   <a   href="https//www.baidu.com">热门</a>
   <a   href="https//www.baidu.com">推荐</a>
   </div>
   <h4 slot="footer">欢迎前来观影</h4>
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
data() {
  return {
    foods:['火锅','烧烤','小龙虾','牛排'],
		games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
		films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
  }
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