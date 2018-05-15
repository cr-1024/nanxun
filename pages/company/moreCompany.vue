<!-- 点击公司推荐模块下的更多或者首页旁边的公司进入该页面 -->
<!-- 用来展示公司信息 -->
<template>
	<div class="moreCompany">
		<ScrollTop />
		<Top :isnow="2" />
		<div class="nav">
			<companyNav />
		</div>
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
import companyNav from '~/components/companyNav.vue'
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
			companyNav,
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
$nx-color:#449EFE;
$nx-color2:#0470B8;
	.moreCompany{
		.nav{
			width: 100%;
			box-shadow: 0 -1px 0 0px $nx-color2;
			background-color: $nx-color2;
		}
		.ad{
			width: 60rem;
			margin:0 auto;
		}
		.Companybottom{
			height: 2rem;
		}
	}
</style>