<!-- 职位详情页 -->
<template>
	<div>
		<Top :isNow="0" />
		<Work />
		<Footer />
	</div>
</template>

<script >
import Top from '~/components/index.vue'
import Work from '~/components/workDetail.vue'
import Footer from '~/components/footer.vue'
export default{
	data(){
		return {

		}
	},
	components:{
		Top,
		Work,
		Footer,
	}
}
</script>

<style lang="scss">
	
</style>