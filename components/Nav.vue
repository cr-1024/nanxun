<!-- 首页的职位分类模块 -->
<template>
	<div class="nav">
		<div class="contains">
				<div class="nav-left" >
				
				<ul class="nav-left-main">
					<li v-for="(workNames,index) in wName" :key="index" >
						
							<span>{{workNames.wName_main_head}}</span><nuxt-link class="nav-left-main-det" v-for="(work,index) in workNames.wName_main_list" :key="index"  :to="{name:'workName-name',params:{name:work}}">{{work}}</nuxt-link><small class="gt">&gt;</small>
						
						<ul class="nav-left-all">
							<li v-for="(workName,index) in workNames.wName_all" :key="index" class="nav-left-all-det"><span class="nav-left-all-list">{{workName.wName_all_head}}</span><br><nuxt-link v-for="(work,index) in workName.wName_all_list" :key="index" :to="{name:'workName-name',params:{name:work}}" class="nav-left-all-work">{{work}}</nuxt-link></li>					
						</ul>
					</li>
				</ul>
				
			</div>
			<div class="nav-right">
				<el-carousel height="400px">
			      <el-carousel-item v-for="(image ,index) in imglist" :key="index" >
			        <img :src="image" >
			      </el-carousel-item>
			    </el-carousel>
			</div>
		</div>
	</div>
</template>

<script  >
import axios from 'axios';
	export default{
		data(){
			return {
				name:'hello',
				wName:[],
				overList:false,
				outList:true,
				imglist:["https://i1.mifile.cn/f/i/17/hr/hr_banner_20180310.png","http://zhaopin.jd.com/htmlPages/JD/picLink/16F265F8D9DBD37B.jpg","http://sf-express.zhaopin.com/images/banner.jpg"]
			}
		},
		created:function(){
			// 职业分类和职业缩略列表 
			// https://api.myjson.com/bins/15s9gr
			// https://api.myjson.com/bins/dzbij
			axios.get('https://api.myjson.com/bins/dzbij')
			.then(res=>{
				this.wName=res.data.reverse();
			})
		},
		
	}
</script>

<style lang="scss">
$nx-color:#449EFE;
$all-padding:0;
	
	.nav{
		width: 100%;
		height: 29rem;
		.contains{
			position: relative;
			width: 76.25rem;
			margin:0 auto;
			.nav-left{
				margin-top: 1rem;
				.nav-left-main{
					>li{
						position: relative;
						display: block;
						width: 19.5rem;
						height:4rem;
						line-height: 4rem;
						padding:0 1rem;
						border:2px solid #fff;
						background-color: #fff;
							
						
						>span{
							font-size: 1rem;
						}
						&:hover ,&:hover ul{
							display: block;
							border:2px solid #eee;
							border-radius: 4px;
							z-index: 10;
						}
						
						.nav-left-main-det{
							font-size: 0.8rem;
							color: #666;
							padding:0 0.6rem;
							&:hover{
								text-decoration: underline;
								color: $nx-color;
							}
						}
						.nav-left-all{
							display: none;
							position: absolute;
							width: 50rem;
							left: 19rem;
							top: -2px;
							padding: 1rem;
							padding-right: 0.5rem;
							padding-top: 0.2rem;
							z-index: 1;
							background: #fff;
							.nav-left-all-det{
								width: 100%;
								margin-top: 1rem;
								line-height: 2rem;
								.nav-left-all-list{
									padding: 0 0.8rem;
								}	
								.nav-left-all-work{
									display: inline-block;
									line-height: 2rem;
									padding: 0 0.8rem;
									font-size: 0.9rem;
									color: #777;
									&:hover{
										text-decoration: underline;
										color: $nx-color;
									}
								}
							}

						}
					

					}
					.gt{
						float:right;
						padding-left: 0.5rem;
						color: #666;
					}
					
				}
			}
			.nav-right{
				position: absolute;
				right: 0;
				top:1.4rem;
				width: 56rem;
				height: 27rem;
				img{
					height: 100%;
				}
				
				
			}
		}
		
	}
</style>