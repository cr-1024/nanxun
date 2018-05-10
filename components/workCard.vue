<!-- 职位列表页的职位卡片模块 -->
<!-- 用于显示经过筛选后的职位 -->
<template>
	<div class="workCards">		
		<div class="nodata" v-if="worklist=='暂无数据'">
			<p>{{worklist}}</p>
		</div>
		<div class="workCard" v-for="(work,index) in worklist" :key="index" v-if="worklist!='暂无数据'&&(index<=nowPage*max)&&((nowPage-1)*max<index)" >
				<div class="card_Up">
					<div class="crad_left">
						<div>
							<nuxt-link :to="{name:'workName-workEg'}"><span class="bluec">{{work.wName}}</span></nuxt-link>
							<span class="redc">{{work.wMoney}}</span>
							<span class="grayc">{{work.wTime}}</span>
						</div>
						<p class="blackc">{{work.wTags}}</p>
					</div>
					<div class="crad_right">
						<nuxt-link :to="{name:'company-companyEg'}"><p class="bluec">{{work.cName}}</p></nuxt-link>
						<p class="blackc">{{work.cTags}}</p>
						<img :src="work.cImg">
					</div>
				</div>
				<div class="card_Down">
					<ul>
						<li v-for="(tag,index) in work.mTags" :key="index" class="blackc">{{tag}}</li>
					</ul>
					<span class="blackc"><a :href="work.cWeb">{{work.cWeb}}</a></span>
				</div>
		</div>	
	</div>
</template>

<script type="">
import axios from 'axios';
	export default{
		data(){
			return {
				filterV:this.filterValue,
				worklist:[],
				max:10,
			}
		},
		props:['filterValue','nowPage'],
		created(){
			let v='';
			if(this.filterV!='all'){
				this.filterV=this.filterV.replace(/[\.]/g,'\\.');
				this.filterV=this.filterV.replace(/[\+]/g,'\\+');
				v=new RegExp(this.filterV);
			}	
			// 所有职位数据：https://api.myjson.com/bins/twhun
			axios.get('https://api.myjson.com/bins/twhun')
			.then(res=>{
				this.worklist=res.data.filter(work=>{
					return  work.wName.match(v);
				});
				if(this.worklist.length==0){
					this.worklist="暂无数据";
				}
				this.allindex=this.worklist.length;
				this.$emit('cardNum',this.allindex);
			});
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
$nx-color2:#0470B8;
	.workCards{
		width: 100%;
		min-height: 30rem;
		.workCard{
			width: 60rem;
			height: 8rem;
			margin-top: 2rem;
			padding-top:1rem; 
			border:1px solid #ddd;
			.card_Up{
				position: relative;
				width: 100%;
				height: 70%;
				padding: 0 1rem;
				.crad_left{
					span{
						display: inline-block;
						padding-right: 1rem;
					}
					p{
						padding-top: 0.5rem;
					}
				}
				.crad_right{
					position: absolute;
					width: 40%;
					top: 0;
					right: 0;
					p:last-of-type{
						padding-top: 0.5rem;
					}
					img{
						position: absolute;
						width: 3.75rem;
						top: 0;
						right: 1rem;
					}
				}
			}
			.card_Down{
				position: relative;
				width: 100%;
				height: 30%;
				padding:0 1rem;
				background-color: #c8c8c8;
				ul{
					height: 100%;
					li{
						display: inline-block;
						padding: 0.1rem 0.5rem;
						margin-right: 1rem;
						margin-top: 0.3rem;
						font-size: 0.7rem;
						color: #fff;
						border: 1px solid #fff;
						border-radius: 0.8rem;
					}
				}
				span{
					position: absolute;
					top: 0.3rem;
					left: 60%;
					font-size: 0.9rem;
					a{
						color: #fff;
					}
				}
			}
			.bluec{
				font-size: 1rem;
				color: $nx-color2;
			}
			.redc{
				font-size: 1rem;
				color: #FA606B;
			}
			.grayc{
				font-size: 0.8rem;
				color: #999;
			}
			.blackc{
				font-size: 0.9rem;
				color: #444;
			}
		}
		.nodata{
			width: 60rem;
			p{
				height: 20rem;
				margin-top: 4rem;
				text-align: center;
				font-size: 2rem;
				color: #ddd;
			}
		}
	}
</style>