<template>
	<div class="companyBody2">
		<div class="companyWorkList">
			<span>在招职位</span>
			<ul>
				<li v-for="(work,index) in nowWork" :key="index" v-if="index<num">
					<h5>{{work.wName}}</h5><span class="time">{{work.wTime}}</span>
					<em>{{work.wMoney}}</em><span>{{work.wTags}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	// 数据：https://api.myjson.com/bins/twhun
import axios from 'axios'
	export default{
		data(){
			return {
				nowWork:[],
				num:10,
			}
		},
		created(){
			axios.get('https://api.myjson.com/bins/twhun')
			.then(res=>{
				this.nowWork=res.data;
			})
		}
	}
</script>
<style lang="scss">
$nx-color2:#0470B8;
.companyBody2{
	width: 100%;
	min-height: 50rem;
	padding:3rem 2rem 3rem 1.4rem;
	.companyWorkList{
		position: relative;
		border-top: 1px solid #aaa;
		>span{
			position: absolute;
			top: -0.9rem;
			padding-right: 1rem;
			background-color: #fff;
			font-size: 1.2rem;
		}
		ul{
			padding-top:3rem;
			li{
				position: relative;
				padding:1rem;
				border:1px solid #ddd;
				border-left:4px solid $nx-color2;
				margin-bottom: 1.6rem;
				h5{
					font-weight: 400;
					font-size: 1.1rem;
					color: $nx-color2;
					padding-bottom: 0.5rem;
				}
				.time{
					position: absolute;
					top:1rem;
					right:1rem;
					vertical-align: text-top;
					font-size: 0.9rem;
					color: #999;
				}
				em{
					font-size: 1rem;
					padding-right: 2rem;
					color: #fd5f39;
				}
				span:last-of-type{
					font-size: 0.9rem;
					color: #444;
				}
			}
		}
	}
}	
</style>
