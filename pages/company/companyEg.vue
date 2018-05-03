<template>
	<div>
		<Top  :isNow="2"/>
		<Company />
		<Footer />
	</div>
</template>

<script>
import Top from '~/components/index.vue'
import Company from '~/components/companyDetail.vue'
import Footer from '~/components/footer.vue'
	export default{
		// 公司详情数据：https://api.myjson.com/bins/16punm
		data(){
			return {

			}
		},
		components:{
			Top,
			Company,
			Footer,
		}
	}
</script>

<style lang="scss">
	
</style>