<template>
	<div class="companybody1">
		<div class="proTitle ctitle">
			<span>公司产品</span>
			<div class="pro">
				<img :src="companydata.pImg">
				<div class="proRight">
					<h2>{{companydata.pName}}</h2>
					<span>{{companydata.pTags}}</span>
					<p>{{companydata.pRef}}</p>
				</div>
			</div>
		</div>
		<div class="refTitle ctitle" >
			<span>公司介绍</span>
			<div class="ref">
				<div class="nosee" id="refTop">
					<span v-for="(word,index) in companydata.rword" :key="index">{{word}}</span>
				</div>
				<span class="bluecolor" v-if="more" @click="show" >展开</span>
				<span class="bluecolor" v-else  @click="show">收起</span>
				<div class="refDown">
					<el-carousel indicator-position="outside" height="20rem" :interval="4000" arrow="always" trigger="click" >  
					    <el-carousel-item   v-for="(imgs,index) in companydata.rImg" :key="index">
					      <img :src="imgs" class="refImg">
					    </el-carousel-item>
					  </el-carousel>
				</div>
			</div>
		</div>
		<div class="devTitle ctitle" >
			<span>发展历程</span>
			<ul>
				<li v-for="(dev,index) in companydata.develop" :key="index">
					<div class="devLefet"><span>{{dev[0]}}</span><span>{{dev[1]}}</span></div>
					<div class="devCenter">
						<i class="iconfont icon-wxbbaobiao" v-if="index==0"></i>
						<i class="iconfont icon-trade" v-if="index==1||index==2"></i>
						<i class="iconfont icon-rocket" v-if="index==3"></i>
						<i class="iconfont icon-qizhi0" v-if="index==4"></i>
						<em v-if="index!=4"></em>
					</div>
					<div class="devRight"><span>{{dev[2]}}</span><p v-if="dev.length>3">{{dev[3]}}</p></div>
				</li>
			</ul>	
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default{
	data(){
		return{
			companydata:[],
			more:true,
		}
	},
	created(){
		// 公司详情数据：https://api.myjson.com/bins/6jkpm
		axios.get('https://api.myjson.com/bins/6jkpm')
		.then(res=>{
			this.companydata=res.data;
		})
		
	},
	methods:{
		show(){
			this.more=!this.more;
			
			if(!this.more){
				document.getElementById('refTop').className='see';
				document.getElementById('refTop').style.maxHeight="20rem";
			}else{
				document.getElementById('refTop').className='nosee';
				document.getElementById('refTop').style.maxHeight="14rem";
			
			}
		}
	}
}
</script>
<style lang="scss">
@import url('//at.alicdn.com/t/font_631781_4v61w1yz6y74x6r.css');

$nx-color2:#0470B8;
.companybody1{
	width: 100%;
	margin-top:3rem;
	padding-bottom: 1rem;
	.ctitle{
		position: relative;
		width: 100%;
		margin-top: 1rem;
		border-top: 1px solid #aaa;
		>span{
			position: absolute;
			top: -0.9rem;
			padding-right: 1rem;
			background-color: #fff;
			font-size: 1.2rem;
		}
		>div{
			width: 100%;
			margin:3rem 0; 
		}
	}
	.proTitle{	
		.pro{	
			img{
				width: 18.75rem;
			}
			.proRight{
				display: inline-block;
				width: calc(100% - 18.75rem);
				padding-left:1rem;
				h2{
					font-weight: 400;
					color: #444;
				}
				span{
					font-size: 0.7rem;
					color: #999;
					border:1px solid #ddd;
					border-radius: 1rem;
					padding: 0.2rem 0.8rem;
				}
				p{
					color: #555;
					margin-top: 0.6rem;
					font-size: 0.9rem;
				}
			}
		}
	}
	.refTitle{
		.ref{
			#refTop{
				max-height: 14rem;
				position: relative;
				line-height: 2rem;
				overflow: hidden;
				span{
					display: block;
					font-size: 1rem;
					color:#777;
					margin-bottom: 1rem;
				}
				&.nosee:after{
					content:"...";
					position: absolute;
					bottom: 0;
					right: 0; 
					color:#777;
					padding-right: 22.2rem;
					background-color: #fff;
				}
				&.see:after{
					content:"";
					position: absolute;
					bottom: 0;
					right: 0; 
					background-color: #fff;
				}
			}
			.bluecolor{
				color:$nx-color2;
				text-decoration: underline;
				cursor: pointer;
			}
			.refDown{
				margin-top: 3rem;
				text-align: center;
				.refImg{
					height: 100%;
				}
			}
		}
	}
	.devTitle{
		ul{
			padding:3rem;
			li{
				color:#777;
				>div{
					display: inline-block;
				}
				.devLefet{
					width: 6rem;
					span{
						display: block;
						text-align: right;
						font-size: 0.9rem;
						&:first-of-type{
							font-size: 1.2rem;
						}
					}
				}
				.devCenter{
					position: relative;
					padding:0 1rem 1.6rem;
					vertical-align: top;
					i{
						display: block;
						font-size: 1.6rem;
						width: 3rem;
						height: 3rem;
						line-height: 3rem;
						text-align: center;
						border:1px solid #ddd;
						border-radius: 2.4rem;
					}
					em{
						position: absolute;
						width: 1px;
						height: 1.6rem;
						left:2.5rem;
						background-color: #ddd;
					}
				}
				.devRight{
					width: 24.1rem;
					vertical-align: top;
					p{
						font-size: 0.9rem;
						color: #999;
					}
				}
			}
		}
	}
}
</style>