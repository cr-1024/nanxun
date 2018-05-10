<!-- 职位详情页的侧边栏上部分 -->
<template>
	<div class="workaside">
		<div class="asideTop">
			<nuxt-link :to="{name:'company-companyEg'}">
			<span><img :src="workdata.companyimage"></span></nuxt-link>
			<nuxt-link :to="{name:'company-companyEg'}"><span>{{workdata.companyname}}</span></nuxt-link>
		</div>
		<ul >
			<li v-for="(work,index) in workdata.companymore" :key="index">
				<i class="iconfont icon-all" title="领域" v-if="index==0"></i>
				<i class="iconfont icon-wxbbaobiao" title="发展阶段" v-if="index==1"></i>
				<i class="iconfont icon-trade" title="投资机构" v-if="index==2"></i>
				<i class="iconfont icon-account" title="规模" v-if="index==3"></i>
				<i class="iconfont icon-home" title="公司主页" v-if="index==4"></i>
				{{work}}
			</li>
		</ul>
		<div>
			<workasidemore />
		</div>
	</div>
</template>

<script>
import workasidemore from '~/components/workasidemore.vue'
import axios from 'axios'
	export default{
		data(){
			return {
				workdata:[],
			}
		},
		components:{
			workasidemore,
		},
		created(){
			axios.get('https://api.myjson.com/bins/ml5wv')
			.then(res=>{
				this.workdata=res.data;
			})
		}
	}
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_631781_uzwcwz6vcmcxr.css');
	.workaside{
		padding-top:5rem;
		padding-left:1.4rem; 
		.asideTop{
			span{
				font-size: 1.2rem;
				vertical-align: bottom;
				img{
					display: inline-block;
					width:6rem; 
					border:1px solid #ddd;
					margin-right: 1rem;
				}
			}
		}
		ul{
			margin: 2rem 0 4rem;
			li{
				font-size: 0.9rem;
				color: #999;
				i{
					float: none;
					padding-right: 1rem;
					font-size: 1rem;
					color: #999;
				}
			}
		}
	}
</style>