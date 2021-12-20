//组件的结构
<template>
 <div>
			<h2>学生名称：{{name}}</h2>
            <h2>学生年龄：{{age}}</h2>
			<button @click="showName">点我提示学校名</button>
			</div>
</template>

//组件交互相关的代码（数据 方法 等等）
<script>
export default {
	        name:"Student",
			data:function(){
				return{
					name:"张三",
					age:17
				}
			},
			methods: {
			   showName(){
				console.log(this.name)
			}	
			},
		}

</script>

