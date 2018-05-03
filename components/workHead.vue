<template>
	<div class="workHead">
		<div class="workHeadContain">
			<div class="h_left">
				<span class="sendad">{{work.sendAddress}}</span>
				<h1 class="workname">{{work.work}}</h1>
				<p class="tagsWork"><span class="money">{{work.money}}</span><span class="workertags" v-for="(tag,index) in work.address" :key="index"> / {{tag}}</span></p>
				<span class="workTags" v-for="(tag,index) in work.workTags" :key="index">{{tag}}</span>
				<p class="time">{{work.time}}&nbsp;&nbsp;发布于南寻网</p>
			</div>
			<div class="h_right">
				<div class="btn">
					<div class="left_btn"><i class="iconfont icon-iconfontxingxing"></i>收藏</div>
					<div class="right_btn">投个简历</div>
				</div>
				<div class="resume">
					<div class="left_res"><span><i class="iconfont icon-iconfontmingpian"></i>完成在线简历</span></div>
					<div class="right_res"><span><i class="iconfont icon-attachment"></i>上传附件简历</span></div>
				</div>
				<div class="golink">
					<i class="iconfont icon-jubao" title="举报"></i>
					<i class="iconfont icon-wechatshare" title="分享到微信"></i>
					<i class="iconfont icon-xiaochengxu" title="微信扫一扫，打开小程序分享"></i>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		data(){
			return {
				work:[]
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
@import url("//at.alicdn.com/t/font_631781_4y9vw3re3wmf5hfr.css");
$nx-width:68rem;
$nx-color2:#0470B8;
	.workHead{
		width: 100%;
		zoom:1;
		&:before{
			content: '';
			display: block;
			line-height: 0;
			clear: both;
		}
		background-color: rgba(226,229,255,.5);
		.workHeadContain{
			position: relative;
			width: $nx-width;
			margin:0rem auto;
			padding:1rem 0 2rem;
			.h_left{
				.sendad{
					color: #444;
				}
				.workname{
					line-height: 3.5rem;
					font-weight: 400;
				}
				.tagsWork{
					font-size:1.1rem;

					.money{
						font-size: 1.2rem;
						color: #fd5f39;
					}
				}
				.workTags{
					display: inline-block;
					font-size: 0.8rem;
					padding:0.2rem 0.8rem;
					margin-right: 0.5rem;
					margin-top: 0.4rem;
					background-color: #fff;
					border-radius: 0.8rem;
					color: #777;
				}
				.time{
					margin-top: 0.8rem;
					color: #999;
				}

			}
			.h_right{
				position: absolute;
				top: 0;
				right:0;
				.btn{
					margin-top: 2rem;
					>div{
						display: inline-block;
						border:1px solid $nx-color2;
						padding:0.8rem 2rem;
						border-radius: 0.2rem;
						cursor: pointer;
					}
					.left_btn{
						position: relative;
						margin-right:1rem;
						padding-left: 3.4rem;
						font-size: 0.9rem;
						line-height: 1.8rem;
						color: $nx-color2;
						.iconfont{
							position: absolute;
							left: 1.8rem;
							top: 0.6rem;
							font-size: 1.4rem;
							color: $nx-color2;
						}
					}
					.right_btn{
						vertical-align: top;
						font-size: 1.2rem;
						background-color: $nx-color2;
						color:#fff;
					}
				}
				.resume{
					margin-top: 1rem;
					>div{
						display: inline-block;
						font-size: 0.9rem;
						color: #555;
						text-decoration: underline;
						cursor: pointer;
						.iconfont{
							margin-top: -0.3rem;
							font-size: 1.4rem;
							color: #999;
							padding-right: 0.2rem;
						}
					}
					.right_res{
						float: right;
					}
				}
				.golink{
					margin-top: 0.6rem;
					float: right;
					.iconfont{
						color: #999;
						font-size: 1.4rem;
						line-height: 0.5rem;
						padding:0.6rem;
						border-right: 1px solid #ddd;
						cursor: pointer;
						&:last-of-type{
							padding-right: 0;
							border-right: none;
						} 
					}
				}
			}
		}
	}
</style>