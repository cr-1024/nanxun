<!-- 职位详情页的主体部分 -->
<template>
	<div class="workBodycontain">
		<div class="wbContain">
			<toTop />
			<div class="body">
				<workBody />
				<workBodyface />
			</div>
			<div class="aside">
				<workaside />
			</div>
		</div>
	</div>
</template>

<script >
import workBody from '~/components/workBody.vue'
import workBodyface from '~/components/workBodyface.vue'
import workaside from '~/components/workaside.vue'
import toTop from '~/components/scrollTop.vue'
export default{
	data(){
		return {

		}
	},
	components:{
		workBody,
		workBodyface,
		workaside,
		toTop,
	}
}	
</script>

<style lang="scss">
$nx-width:68rem;
	.workBodycontain{
		width:100%;
		.wbContain{
			position: relative;
			width: $nx-width;
			margin:0 auto;
			.body{
				display: inline-block;
				padding-right: 1rem;
				width: 45.25rem;
				border-right: 2px solid #ddd;
				box-shadow: 4px 0px 4px -4px #999; 
			}
			.aside{
				display: inline-block;
				position: absolute;
			}
		}
		
	}
</style>