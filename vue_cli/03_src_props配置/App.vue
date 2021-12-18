<template>
	<div>
		<School name="测试" sex="男" :age="89"></School>
    <hr>
	</div>
</template>

<script>
	//引入组件
	import School from './components/Student'

	export default {
		name:'App',
		components:{
			School
    }
	}
</script>
