<!-- 职位详情页的主体部分的面试评价（没有面试评价时） -->
<template>
	<div class="workBodyface">
		<div class="faceTitle">
			<span>面试评价</span>
		</div>
		<div v-if="face.length==0" class="facemain">			
			<p><i class="iconfont icon-meiyoushuju"></i>该职位尚未收到面试评价，看看该公司<span class="bluecolor">其他职位的面试评价</span></p>
		</div>
	</div>
</template>
<script >
	export default{
		data(){
			return {
				face:[]
			}
		}
	}
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_631781_uzwcwz6vcmcxr.css');
$nx-color2:#0470B8;
	.workBodyface{
		width: 100%;
		padding-bottom: 1rem;
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
			p{
				margin: 6rem 0 5rem;
				text-align: center;
				i{
					vertical-align: middle;
					float: none;
					font-size: 3rem;
					color: #ddd;
					padding-right:1rem;
				}
				.bluecolor{
					color: $nx-color2;
				}
			}
			
		}
	}
</style>