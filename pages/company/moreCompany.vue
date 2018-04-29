<template>
	<div class="moreCompany">
		<ScrollTop />
		<Top :isnow="2" />
		<div class="ad">
			<Address :web="dataAddressWeb"  />
		</div>
		<Company :companys="dataCompany"  />
		<div class="Companybottom"></div>
		<Footer />
	</div>
</template>

<script >
import ScrollTop from '~/components/scrollTop.vue'
import Top from '~/components/index.vue'
import Footer from '~/components/footer.vue'
import Address from '~/components/address.vue'
import Company from '~/components/CompanyList.vue'
import axios from 'axios'
	export default{
		data(){
			return {
				// 公司数据：https://api.myjson.com/bins/xkrfb
				dataCompanyWeb:'https://api.myjson.com/bins/xkrfb',
				dataCompany:'',
				// 公司address数据：https://api.myjson.com/bins/160whz
				dataAddressWeb:'https://api.myjson.com/bins/160whz',
				// 公司
				num:"2",
			}
		},
		components:{
			ScrollTop,
			Top,
			Footer,
			Address,
			Company,
		},
		created(){
			axios.get(this.dataCompanyWeb)
			.then(res=>{
				this.dataCompany=res.data;
			})
		}

	}
</script>

<style lang="scss">
	.moreCompany{
		.ad{
			width: 60rem;
			margin:0 auto;
		}
		.Companybottom{
			height: 2rem;
		}
	}
</style>