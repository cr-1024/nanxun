<template>
	<div class="workasidemore">
		<div class="asideTitle">
			<span>相似职位</span>
		</div>
		<div v-if="asidemore.length==0" class="asidemoremain">
			<i class="iconfont icon-meiyoushuju--"></i>
			<p>暂无数据</p>
		</div>
	</div>
</template>
<script >
	export default{
		data(){
			return {
				asidemore:[]
			}
		}
	}
</script>

<style lang="scss">
$nx-color2:#0470B8;
	.workasidemore{
		width: 100%;
		padding-bottom: 1rem;
		.asideTitle{
			position: relative;
			border-top: 1px solid #aaa;
			span{
				position: absolute;
				top: -0.9rem;
				padding-right: 1rem;
				background-color: #fff;
				font-size: 1.2rem;
			}
		}
		.asidemoremain{
			padding: 6rem 0;
			text-align: center;
			i{
				float: none;
				font-size: 6rem;
				color: #ddd;
				padding-right:1rem;
			}
			p{
				color: #ddd;
				text-align: center;
			}
			
		}
	}
</style>