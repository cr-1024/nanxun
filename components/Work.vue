<!-- 首页职位推荐模块 -->
<template>
	<div class="work">
		<div class="contains">
			<el-tabs v-model="activeWork" class="post">
				<el-tab-pane name="commend" >
					<span slot="label" :class="{'fontSize':true}">推荐职位 </span>
					<WorkList  :workSort="work.commendWork" />
				</el-tab-pane >
				<el-tab-pane name="hot" >
					<span slot="label" :class="{'fontSize':true}">热门职位 </span>
					<WorkList  :workSort="work.hotWork" />
				</el-tab-pane >
				<el-tab-pane name="latest" >
					<span slot="label" :class="{'fontSize':true}">最新职位 </span>
					<WorkList  :workSort="work.lasterWork" />
				</el-tab-pane >
				
			</el-tabs>
			<div class="lookMore"><nuxt-link :to="{name:'workName-name',params:{name:'all'}}" ><span>查看更多</span></nuxt-link></div>
		</div>
	</div>
</template>

<script type="">
import axios from 'axios';
import WorkList from '~/components/WorkList.vue'

	export default{
		components:{
			WorkList,
		},
		data(){
			return {
				activeWork:'commend',
				work:[],
			}
		},
		methods:{
			handleEvent(){
				bus.$emit('w-search','false');
			}
		},
		created:function(){
			// 职位 work
			// https://api.myjson.com/bins/rgm6z
			axios.get('https://api.myjson.com/bins/rgm6z')
			.then(res=>{
				res.data.lasterWork.reverse();
				this.work=res.data;
			})
		}
	}
</script>

<style lang="scss">
$nx-width:76.25rem;
$nx-color2:#0470B8;
	.fontSize{
		font-size: 1rem;
	}
	.work{
		width: 100%;
		.contains{
			width: $nx-width;
			margin:0 auto ;
			.post{
				padding:1rem;
			}
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