<template>
<div>
  <h1>当前求和为:{{sum}}</h1>
  <h3>放大10倍后的和为:{{bigSum}}</h3>
  <h3>我在{{school}}学习{{subject}}</h3>
  <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
  <select v-model="n">
  <option :value="1">1</option>
  <option :value="2">2</option>
  <option :value="3">3</option>
  </select>
  <button @click="increment(n)">+</button>
  <button @click="decrement(n)">-</button>
  <button @click="incrementOdd(n)">当前求和为奇数再加</button>
  <button @click="incrementWait(n)">等一等再加</button>
</div>
</template>

<script>
//mapState用于生成属性对应的代码
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:"Count",
    data() {
        return {
            n:1,//用户选择的数字
        }
    },
    computed:{
      //第一种借助mapState生成计算属性，从state中读取数据（对象写法）
      //...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),//...代表把mapstate里面返回的对象一步步展开，放入computed中
      //第二种借助mapState生成计算属性，从state中读取数据（数组写法）
      ...mapState('countAbout',['sum','school','subject']),
      ...mapState('personAbout',['personList']),
      /*********************mapGetters*****************************/
      //借助mapGetters生成计算属性，从getters读取数据（对象写法）
      ...mapGetters('countAbout',['bigSum'])
      },
    methods: {
        // increment(){
        //  this.$store.commit('JIA',this.n)
        // },
        // decrement(){
        // this.$store.commit('JIAN',this.n)
        // },
        //借助mapMutations生成对应的方法，方法会调用commit联系mutations(对象的写法)
        ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
        //数组写法...mapMutations(['JIA','JIAN']),
        /***********************************/
        // incrementOdd(){
        // this.$store.dispatch('jiaOdd',this.n)
        // },
        // incrementWait(){
        //  this.$store.dispatch('jiaWait',this.n)
        // }
        /***************************************/
        //利用mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
        ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
        //数组写法 ...mapActions(['jiaOdd','jiaWait'])
    },
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>