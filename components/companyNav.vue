<template>
	<div class="companyNav">
		<div class="cnContain">
			<p class="topw">什么值得投</p>
			<div class="centerimage">
				<div v-for="(data ,index) in dataAll" :key="index" class="listimg">
					<img :src="data.img">
					<p class="titlew">{{data.title}}</p>
					<div class="disshow">
						<p class="hoverTitlew">{{data.hoverTitle}}</p>
						<span>进入公司主页</span>
					</div>
				</div>
			</div>
			<div class="timew">
				<div></div>
			</div>
		</div>
	</div>
</template>
<script >
export default{
	data(){
		return {
			dataAll:[
				{
					img:"https://www.lagou.com/image1/M00/28/3A/CgYXBlVepmWAMVNfAABjOox8MkE216.png",
					title:"世界没有边界，未来就在眼前",
					hoverTitle:"VR全景相机解决方案研发和生产商",
					time:"05/03"
				},{
					img:"https://www.lagou.com/i/image3/M00/2E/5C/Cgq2xlqf0AyAcByoAABAZwKbKWY021.png",
					title:"机会好 薪酬福利好 氛围好 双休",
					hoverTitle:"专注于手机游戏联合运营和推广渠道拓展的游戏公司",
					time:"05/02"
				},
				{
					img:"https://www.lagou.com/i/image/M00/3C/DE/CgqKkVdw2syAJ007AABUeG4-AGQ754.jpg",
					title:"南寻认证 大头视频制作神器",
					hoverTitle:"逗拍是一款娱乐短视频应用，团队有多年视频行业经验",
					time:"04/27"
				},{
					img:"https://www.lagou.com/i/image3/M00/06/BB/Cgq2xlpgFsCAENJrAAAKRdA4fbI222.png",
					title:"数据洞察世界 品牌融入生活",
					hoverTitle:"致力于提升营销智能化的水平，提升品牌企业在DT时代的竞争力",
					time:"04/26"
				},{
					img:"https://www.lagou.com/i/image/M00/02/CC/CgqKkVac5WmANKXqAAAt9YDd4Nw281.png",
					title:"AR基础设施服务平台",
					hoverTitle:"致力于增强现实的核心技术开发和应用推广",
					time:"04/25"
				},
			]
		}
	}
}
</script>

<style lang="scss">
$nx-color:#449EFE;
$nx-color2:#0470B8;
.companyNav{
	width: 100%;
	.cnContain{
		width: 70rem;
		margin: 0 auto;
		.topw{
			font-size:2rem;
			color: #fff;
			padding:2rem;
			text-align: center;
		}
		.centerimage{
			width: 100%;
			padding-bottom:2rem;
			.listimg{
				vertical-align: text-top;
				position: relative;
				display: inline-block;
				width: 10rem;
				height: 13.75rem;
				margin-right: 4rem;
				padding:0.6rem 0.8rem;
				background-color: rgba(255,255,255,0.8);
				img{
					width: 8.875rem;
				}
				.titlew{
					text-align: center;
					font-size: 0.9rem;
					margin-top:1rem;
				}
				.disshow{
					display: none;
					position: absolute;
					top:0rem;
					left:0rem;
					width: 10rem;
					height: 13.75rem;
					padding:1.4rem;
					background-color: rgba(255,255,255,0.9);
					.hoverTitlew{
						font-size: 0.7rem;
						color: #666;
					}
					span{
						position: absolute;
						bottom: 2rem;
						width: 6rem;
						height: 2rem;
						left: 2rem;
						text-align: center;
						line-height: 2rem;
						color:#fff;
						background-color: $nx-color2;
						font-size: 0.8rem;
						cursor: pointer;
					}
				}
				&:hover .disshow{
					display: block;
					border:2px solid $nx-color;
					animation: scaleHover 1s both;
					-webkit-animation:  scaleHover 1s both;
				}
				&:first-of-type{
					margin-left: 2rem;
				}
				&:last-of-type{
					margin-right: 0;
				}
			}
		}
	}
}
@keyframes	scaleHover{
	0%{transform:scale(0.9,0.8)}
	100%{transform:scale(1.15,1.1)}
}
@-webkit-keyframes	scaleHover{
	0%{-webkit-transform:scale(0.9,0.8)}
	100%{-webkit-transform:scale(1.15,1.1)}
}
</style>