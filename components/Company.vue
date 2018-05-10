<!-- 首页的公司推荐模块 -->
<template>
	<div class="company">
		<el-tabs v-model="activeCompany" class="companyList"  >
			<el-tab-pane name="hotCompany">
				<span slot="label" :class="{'fontSize':true,'cur':true}">热门公司</span>
				<CompanyList :companys="companyList" />
			</el-tab-pane>
		</el-tabs>
		<div class="lookMore"><nuxt-link :to="{name:'company-moreCompany'}"><span>查看更多</span></nuxt-link></div>
	</div>
</template>

<script type="">
import axios from 'axios'
import CompanyList from '~/components/CompanyList.vue'
	export default{
		components:{
			CompanyList,
		},
		data(){
			return {
				activeCompany:'hotCompany',
				companyList:[],
			}
		},
		created(){
			// 公司列表 https://api.myjson.com/bins/df8ir
			axios.get('https://api.myjson.com/bins/df8ir')
			.then(res=>{
				this.companyList=res.data;
			})
		}
	}
</script>

<style lang="scss">
	$nx-color2:#0470B8;
	$nx-width:76.25rem;
	.fontSize{
		font-size: 1rem;
	}
	.cur{
		cursor: text;
	}
	.company{
		width: 100%;
		.companyList{
			width:$nx-width;
			margin:1.5rem auto;
			padding: 0 1rem 1rem;
		}
		.lookMore{
			width: 24rem;	
			margin:1rem auto;	
			span{
				display: inline-block;
				width:100%;
				height: 2.65rem;				
				border:1px solid $nx-color2;
				color:$nx-color2;
				text-align: center;
				font-size: 1rem;
				line-height: 2.65rem;
				&:hover{
					background-color: $nx-color2;
					color:#fff;
				}
			}
		}

	}
</style>