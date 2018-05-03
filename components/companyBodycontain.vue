<template>
	<div class="companyBodycontain">
		<div class="cbContain">
			<toTop />
			<div class="body">
				<companyBody :isNav='isType' />				
			</div>
			<div class="aside">
				<companyaside />
			</div>
		</div>
	</div>
</template>

<script >
import companyBody from '~/components/companyBody.vue'
import companyaside from '~/components/companyaside.vue'
import toTop from '~/components/scrollTop.vue'
export default{
	data(){
		return {
		}
	},
	components:{
		companyBody,
		companyaside,
		toTop,
	},
	props:['isType'],
}	
</script>

<style lang="scss">
$nx-width:68rem;
	.companyBodycontain{
		width:100%;
		.cbContain{
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