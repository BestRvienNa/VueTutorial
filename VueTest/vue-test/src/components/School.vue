//组件的结构
<template>
 <div class="demo">
			<h2>学校名称：{{schoolName}}</h2>
            <h2>学校地址：{{address}}</h2>
			<button @click="showName">点我提示学校名</button>
			</div>
</template>

//组件交互相关的代码（数据 方法 等等）
<script>
export default {
	        name:"School",
			data:function(){
				return{
					schoolName:"山东大学",
					address:"青岛"
				}
			},
			methods: {
			   showName(){
				console.log(this.schoolName)
			}	
			},
		}

</script>
//组件的样式
<style>
.demo{
    background-color: orange;
}
</style>