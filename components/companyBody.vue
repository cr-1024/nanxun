<template>
	<div class="companyBody">
		<div v-if="isNav==1">
			<companyBody1 />
			<companyBodyface />
			<!-- <companyMap /> -->
		</div>	
		<div v-if="isNav==2">
			<companyBody2 />
		</div>
		<!-- <div v-if="isNav==3">
			<companyBody3 />
		</div>
		<div v-if="isNav==4">
			<companyBody4 />
		</div> -->
	</div>
</template>
<script >
import companyBodyface from '~/components/company/companyBodyface.vue'
import companyBody1 from '~/components/company/companyBody1.vue'
import companyBody2 from '~/components/company/companyBody2.vue'
import companyBody3 from '~/components/company/companyBody3.vue'
import companyBody4 from '~/components/company/companyBody4.vue'
import companyMap from '~/components/company/companyMap.vue'
export default{
	data(){
		return {
		}
	},
	components:{
		companyBodyface,
		companyBody1,
		companyBody2,
		companyBody3,
		companyBody4,
		companyMap
	},
	props:['isNav'],
	
}
</script>

<style lang="scss">
	
</style>