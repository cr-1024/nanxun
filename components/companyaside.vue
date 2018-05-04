<template>
	<div class="companyaside">
		<div class="caside">
			<div class="companyTitle cTitle">
				<span>公司基本信息</span>
				<ul>
					<li v-for="(info,index) in asideData.companyInfo" :key="index">
						<i class="iconfont icon-all" v-if="index==0"></i>
						<i class="iconfont icon-wxbbaobiao" v-if="index==1"></i>
						<i class="iconfont icon-account" v-if="index==2"></i>
						<i class="iconfont icon-didian" v-if="index==3"></i>
					{{info}}</li>
				</ul>
			</div>
			<div class="teamTitle cTitle">
				<span>管理团队</span>
				<div class="team">
					  <el-carousel indicator-position="none" height="14rem" trigger="click" :interval="4000" arrow="never">
					    <el-carousel-item v-for="(tImg,index) in asideData.teamImg" :key="index" class="teamlist">
					      <img :src="tImg">
					      <p>{{asideData.teamName1[index]}}</p>
					      <p>{{asideData.teamName2[index]}}</p>
					    </el-carousel-item>
					    <!-- <em @click="prev">&gt;</em>
					    <em @click="next">&lt;</em> -->
					  </el-carousel>
				</div>
			</div>
			<div class="tagsTitle cTitle">
				<span>公司标签</span>
				<div class="Tags">
					<p v-for="(tag,index) in asideData.workTags" :key="index">{{tag}}</p>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
import axios from "axios"
	export default{
		data(){
			return{
				asideData:[]
			}
		},
		created(){
			axios.get('https://api.myjson.com/bins/6jkpm')
			.then(res=>{
				this.asideData=res.data;
			})
		}

	}
</script>
<style lang="scss">
@import url("//at.alicdn.com/t/font_631781_uzwcwz6vcmcxr.css");
.companyaside{
	width:100%;
	.caside{
		width:100%;
		padding-top:3rem;
		padding-left:1.4rem;
		.cTitle{
			position: relative;
			border-top: 1px solid #aaa;
			>span{
				position: absolute;
				top: -0.9rem;
				padding-right: 1rem;
				background-color: #fff;
				font-size: 1.2rem;
			}
		}
		.companyTitle{
			padding:2rem 0;
			ul{
				padding-left: 1rem;
				li{
					padding-bottom: 1rem;
					color: #777;
					i{
						padding-right:1rem;
					}
				}
			}
		}
		.teamTitle{
			.team{
				margin: 2rem 0;
				text-align: center;
				.teamlist{
					img{
						width: 10rem;
					}
					p{
						font-size: 1.4rem;
						&:last-of-type{
							font-size: 0.9rem;
							color:#999;
						}
					}
				}
				>span{
					padding-top: 2rem;
				}		
			}
		}
		.tagsTitle{
			.Tags{
				margin-top: 3rem;
				>p{
					float: left;
					padding:0.2rem 1rem;
					border:1px solid #ddd;
					border-radius: 0.8rem;
					color: #555;
					font-size: 0.8rem;
					margin-right: 1rem;
					margin-bottom: 1rem;
				}
			}
		}
	}
	
}	
</style>