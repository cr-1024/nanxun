<!-- 公司详情页的主体的头部模块 -->
<!-- 主要用于概括介绍公司情况 -->
<template>
	<div class="companyHead">
		<div class="companyHeadContain">
			<div class="chTop">
				<span><img :src="companyData.cImg"></span>
				<div class="chtopRight">
					<div class="rTop">
						<h2 :title="companyData.cNameTitle">{{companyData.cName}}</h2>
						<span><i class="iconfont icon-vip00"></i>南寻认证</span>
						<p>{{companyData.cSync}}</p>
					</div>
					<div class="rDown">
						<div v-for="(cdeal,index) in companyData.deal" :key="index">
							<span>{{cdeal}}</span>
							<p v-if="index==0">招聘职位<i class="iconfont icon-help" title="该公司的在招职位数量"></i></p>
							<p v-if="index==1">简历及时处理率<i class="iconfont icon-help" title="该公司7日内处理简历数占收取简历比例"></i></p>
							<p v-if="index==2">简历处理用时<i class="iconfont icon-help" title="该公司7日内从简历收取到最终处理的平均用时"></i></p>
							<p v-if="index==3">面试评价<i class="iconfont icon-help" title="该公司收到的面试评价数量"></i></p>
							<p v-if="index==4">企业最近登录<i class="iconfont icon-help" title="该公司职位管理者最近一次登录时间"></i></p>
							<em v-if="index!=4"></em>
						</div>
					</div>
				</div>
			</div>
			<div class="chNav" id="chNav">
				<ul>
					<li :class="{now:'isNow==1'}" @click="send('1',$event)">公司主页</li>
					<li @click="send('2',$event)">招聘职位</li>
					<!-- <li @click="send('3',$event)">校招职位</li>
					<li @click="send('4',$event)">公司问答</li> -->
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		data(){
			return {
				isNow:'1',
				companyData:[],
			}
		},
		created(){
			// 数据：https://api.myjson.com/bins/6jkpm
			axios.get('https://api.myjson.com/bins/6jkpm')
			.then(res=>{
				this.companyData=res.data;
			})
		},
		methods:{
			send(num,event){
				this.isNow=num;
				let allli=document.getElementById('chNav').getElementsByTagName('li');
				for(let i=0;i<allli.length;i++){
					allli[i].className='';
				}
				let li=event.target;
				li.className="now";
				this.$emit('whichclick',num);
			}
		}
	}
</script>

<style lang="scss">
@import url("//at.alicdn.com/t/font_631781_uzwcwz6vcmcxr.css");
$nx-width:68rem;
$nx-color2:#0470B8;
.companyHead{
	width: 100%;
	zoom:1;
	&:before{
		content: '';
		display: block;
		line-height: 0;
		clear: both;
	}
	background-color: rgba(226,229,255,.5);
	.companyHeadContain{
		width: $nx-width;
		margin: 0 auto;
		padding-top: 2rem;
		.chTop{
			width: 100%;
			border:1px solid #ddd;
			background-color: #fff;
			>span{
				img{
					width:10rem;
				}
			}
			.chtopRight{
				display: inline-block;
				width:calc(100% - 10rem);
				border-left:1px solid #ddd;
				.rTop{
					padding:1.4rem 1.6rem 0.8rem;
					h2{
						display: inline-block;
						font-weight: 400;
						color: #777;
						vertical-align: middle;
					}
					span{
						position: relative;
						padding:0.5rem 1rem 0.5rem 2.5rem;
						margin-left:1rem;
						border:1px solid $nx-color2;
						background-color: $nx-color2;
						border-radius: 1rem;
						font-size: 0.8rem;
						line-height: 1rem;
						color: #fff;
						.iconfont{
							position: absolute;
							font-size: 1.2rem;
							top:0.5rem;
							left: 0.8rem;
							font-weight: 700;
						}
					}
					p{
						padding-top: 0.5rem;
					}
				}
				.rDown{
					border-top:1px solid #f9f9f9;
					background-color: #f9f9f9;
					div{
						position: relative;
						display: inline-block;
						padding:0.2rem 1.4rem 0.4rem;
						text-align: center;
						span{
							font-size: 1.2rem;
							color: #777;
							font-weight: 100;
						}
						p{
							font-size: 0.8rem;
							color: #999;
							i{
								font-size: 0.8rem;
								padding-left: 0.3rem;
								border:0.2rem solid rgba(0,0,0,0);
							}
						}
						em{
							position: absolute;
							width: 1px;
							height:2.6rem;
							top:0.5rem;
							right: 0;
							background-color: #ddd;
						}
					}
				}
			}
		}
		.chNav{
			ul{
				li{
					display: inline-block;
					margin-left:2.5rem;
					padding: 1rem 0;
					cursor: pointer;
					font-size: 1.2rem;
					color:#999;
					&:first-of-type{
						margin-left: 0;
					}
				}
				.now{
					color: #444;
					border-bottom: 2px solid $nx-color2;
				}
			}
		}
	}
}	
</style>