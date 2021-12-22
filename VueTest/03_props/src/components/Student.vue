<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{myage}}</h2>
      <button @click="updateName">尝试修改props中的年龄</button>
  </div>
</template>

<script>
export default {
name :"Student",
data:function(){
    return{
        msg:"我是一个学生",
        myage:this.age
    }
},
methods: {
    updateName(){
        this.myage++
    }
},
//props:["name","sex","age"]//第一种简单接收
//第二种接收的同时对数据进行类型限制
// props:{
//     name:String,
//     age:Number,
//     sex:String
// }
//第三种：接收的同时对类型进行限制，并且制定默认值，再加上必要性的限制
props:{
  name:{
      type:String,//name的类型是字符串
      required:true //name是必传的
  },
  age:{
      type:Number,
      default:99//默认值
  },
  sex:{
      type:String,
      required:true
  }

}

}
</script>
