<!-- 职位详情页的主体部分的职位描述模块 -->
<template>
	<div class="workBody">
		<div class="bodyContain">
			<div>
				<h4>职位诱惑</h4>
				<p>{{work.fuli}}</p>
			</div>
			<div>
				<h4>职位描述</h4>
				<div v-for="(detail,index) in work.workdet" :key="index">
					<span class="detTitle" :class="(index==0)?firstspan:''">{{detail.duty}}</span>
					<p v-for="(duty,index) in detail.dutydet" :key="index" >{{index+1}}、{{duty}}</p>
				</div>
			</div>
			<div>
				<h4>工作地址</h4>
				<p>{{work.workAdress}}</p>
			</div>
			<div class="man">
				<h4>职位发布者：</h4>
				<div class="mancontain">
					<div class="manleft">
						<img :src="work.manimage">
						<div><span>{{work.manname}}</span><p>职位发布者</p></div>
					</div>
					<div class="manright">
						<div v-for="(manDeal,index) in work.deal" :key="index">

							<p class="rtop"><span v-if="index==0">聊天意愿<i class="iconfont icon-help" title="1个月内职位发布者回复聊天的占比"></i></span><span v-else-if="index==1">简历处理<i class="iconfont icon-help" title="7日内职位发布者简历处理的效率"></i></span><span v-else>活跃时段<i class="iconfont icon-help" title="1个月内职位发布者最活跃时段统计"></i></span></p>
							<p class="rmiddle">{{manDeal.up}}</p>
							<p class="rdown">
								<span v-if="index==0">回复率</span>
								<span v-if="index==1">处理率</span>
								<span  :class="(index!=2)?redcolor:''">{{manDeal.down[0]}}</span>
								
								<span v-if="index!=2">用时</span>
								<span  class="redcolor">{{manDeal.down[1]}}</span>

								<span v-if="index==0">小时</span>
								<span v-if="index==1">天</span>
								<span v-if="index==2">点最活跃</span>
															
							</p>
							<em v-if="index!=2"></em>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script >
import axios from 'axios'
	export default{
		data(){
			return {
				work:[],
				redcolor:'redcolor',
				firstspan:'firstspan'
			}
		},
		created(){
			axios.get('https://api.myjson.com/bins/ml5wv')
			.then(res=>{
				this.work=res.data;
			})

			
		}
	}
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_631781_4v61w1yz6y74x6r.css');
$nx-width:46.25rem;
	.workBody{
		width:100%;
		.bodyContain{
			width:$nx-width;
			padding-right: 1rem;
			>div{
				margin-top: 2rem;
				line-height: 1.8rem;
				.detTitle{
					display: inline-block;
					margin:2rem 0 0.6rem;
					font-size: 0.9rem;
				}
				p{
					font-size: 0.9rem;
					
				}
				>div{
					.firstspan{
						margin-top: 0.6rem;
					}
				}

			}
			.man{
				margin-bottom: 3rem;
				.mancontain{
					position: relative;
					margin-top: 1rem;
					.manleft{
						img{
							width:3.8rem;
							border-radius: 1.9rem;
						}
						div{
							display: inline-block;
							padding-left: 0.5rem;
							padding-top: 0.6rem;
							p{
								color: #999;
							}
						}
					}
					.manright{
						position: absolute;
						top:0;
						right: 0;
						div{
							position: relative;
							display: inline-block;
							padding:0 1.2rem;
							margin-top: -0.4rem;
							font-size: 0.9rem;
							text-align: center;
							p{
								.iconfont{
									float: none;
									font-size: 0.9rem;
									font-weight: 700;
									padding-left: 0.4rem;
									color: #777;
									cursor: pointer;
									border:4rem solid rbga(0,0,0,1);

								}
							}
							.rmiddle{
								font-size:1.1rem;

							}
							.rdown{
								color: #777;
								.redcolor{
									color:#fd5f39;
								}
							}
							em{
								position: absolute;
								top:1rem;
								right: 0;
								width:1px;
								height: 3.8rem;
								background-color: #f3f3f3;

							}
						}
					}
				}
			}
		}
	}
</style>