<!-- 职位详情页主体中间部分（包括侧边栏） -->
<template>
	<div>
		<workHead />
		<workBodycontain />
	</div>
</template>

<script >
import workHead from '~/components/workHead.vue' 
import workBodycontain from '~/components/workBodycontain.vue' 
	export default{
		// 职位详情信息：https://api.myjson.com/bins/ml5wv
		data(){
			return {
				 
			}
		},
		components:{
			workHead,
			workBodycontain,
		},
		created(){
			
		}
	}
</script>

<style lang="scss">
	
</style>