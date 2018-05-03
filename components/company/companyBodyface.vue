<template>
	<div class="companyBodyface">
		<div class="faceTitle">
			<span>面试评价</span>
		</div>
		<div v-if="faces.length==0" class="facemain">			
			<p><i class="iconfont icon-meiyoushuju"></i>该公司尚未收到面试评价</p>
		</div>
		<div v-else class="facemain">
			<div class="faceTop">
				<div class="ftTop">
					<span>综合评分：</span>
					<el-rate
					v-model="faces.face[0]"
					disabled
					show-score
					text-color="#ff9900"
					score-template="{value}" class="bigface">
					</el-rate>
				</div>
				<div class="ftDown">
					<div v-for="item in 3" :key="item">
						<span v-if="item==1">描述相符</span>
						<span v-if="item==2">面试官</span>
						<span v-if="item==3">公司环境</span>
						<el-rate
						v-model="faces.face[item]"
						disabled
						show-score
						text-color="#ff9900"
						score-template="{value}" class="smallface">
						</el-rate>
					</div>
				</div>
			</div>
			<div class="faceDown">
				<div class="faceList" v-for="(flist,index) in faces.flist" :key="index">
					<img :src="flist.fImg">
					<div class="flRight">
						<p class="flrTop" >
							<span>{{flist.fName}}</span>
							<span class="graycolor">综合评分：</span>
							<el-rate
							v-model="flist.fPoint"
							disabled
							text-color="#ff9900"  class="smallface">
							</el-rate>
							<span class="graycolor">面试岗位：</span>
							<span>{{flist.fWork}}</span>
							<span class="ftime graycolor">{{flist.fTime}}</span>
						</p>
						<span v-for="(tag,index) in flist.fTags" :key="index">{{tag}}</span>
						<p class="flrDown"><span class="graycolor">[面试过程]&nbsp;&nbsp;</span>{{flist.fCourse}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		data(){
			return{
				faces:[]
			}
		},
		created(){
			// 公司详情页数据：https://api.myjson.com/bins/12n2pe
			axios.get("https://api.myjson.com/bins/12n2pe")
			.then(res=>{
				this.faces=res.data;
			})
		}
	}
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_631781_4v61w1yz6y74x6r.css');
$nx-color2:#0470B8;
	.companyBodyface{
		width: 100%;
		padding-bottom: 2rem;
		.faceTitle{
			position: relative;
			border-top: 1px solid #aaa;
			span{
				position: absolute;
				top: -0.9rem;
				padding-right: 1rem;
				background-color: #fff;
				font-size: 1.2rem;
			}
		}
		.facemain{
			margin: 2rem 0;
			.faceTop{
				padding:1rem 0 2rem;
				padding-left:0;
				border-bottom:1px dashed #ddd;
				.ftTop{
					>span{
						font-size: 0.9rem;
						color:#444;
					}
					.bigface{
						display: inline-block;
						i,span{
							font-size: 1.8rem;
						}
					}
				}
				.ftDown{
					margin-top: 2rem;
					div{
						display: inline-block;
					}
					>div{
						border-right: 1px solid #ddd;
						padding-right: 0.6rem;
						margin-right: 0.6rem;
						&:last-of-type{
							border:0;
						}
						>span{
							color:#999;
							font-size: 0.9rem;
							padding-right:0.6rem;
						}
						.smallface{
							vertical-align: text-top;
							span:last-of-type{
								vertical-align: bottom;
							}
						}
					}
				}
			}
			.faceDown{
				width: 100%;
				.faceList{
					padding: 3rem 0;
					border-bottom: 1px dashed #ddd;
					img{
						width: 3.2rem;
						border-radius:1.6rem; 
					}
					.flRight{
						display: inline-block;
						width: calc(100% - 3.2rem);
						padding-left: 1rem;
						.flrTop{
							margin-bottom: .4rem;
							>span{
								font-size: 0.9rem;
								color:#444;
								&:first-of-type{
									padding-right:3rem;
								}
							}
							.smallface{
								display: inline-block;
								padding-right: 2rem;
								vertical-align: text-top;
							}
							.ftime{
								float:right;
							}
							.graycolor{
								color:#999;
							}
						}
						>span{
							font-size: 0.7rem;
							color:#555;
							margin-right: 1rem; 
							padding:0.2rem 1rem;
							border:1px solid #ddd;
							border-radius: 1rem;
						}
						.flrDown{
							margin-top:0.5rem;
							font-size: 0.9rem;
						}
						.graycolor{
							color:#999;
						}
						
					}
				}	
			}
		}
		
	}	
</style>