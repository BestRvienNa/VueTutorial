<template>
  <div>
  <h1>人员列表</h1>
  <h3>Count组件的求和为：{{sum}}</h3>
  <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
  <input tepe="text" placeholder="请输入名字" v-model="name">
  <button @click='add'>添加</button>
  <button @click='addWang'>添加一个姓王的人</button>
  <button @click="addPersonServer">添加一个人随机的名字</button>
  <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
  </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'
export default {
    name:"Person",
    data() {
        return {
            name:''
        }
    },
    computed: {
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods: {
        add(){
           const personobj={id:nanoid(),name:this.name}
           this.$store.commit('personAbout/ADD_PERSON',personobj)
           this.name=''
        },
        addWang(){
            const personobj={id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',personobj)
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    },
}
</script>

<style>

</style>