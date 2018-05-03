<template>
	<div class="nameIndex">
		<ScrollTop />
		<Top :isNow="0" />
		<Search :nxw="sWidth" :slist="list" :searchValue="$route.params.name" :class="{see:wSearch}" />
		<div class="nameContains" >
			<div class="ad"  v-if="!wSearch">
				<Address :web="dataAddressWeb" :searchwork="$route.params.name" />
			</div>
			<ul class="adImg2" v-if="!wSearch" >
				<li v-for="(image,index) in imglist" :key="index"><img :src="image" ></li>
			</ul>
			<img src="https://www.lgstatic.com/www/static/recommend/modules/subscribe/img/subscribe_img_bfa3e18.jpg"  class="adImg1" v-else>
			
			<div class="wCard">
				<workCard :filterValue="$route.params.name" />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script type="">
import ScrollTop from '~/components/scrollTop.vue'
import Top from '~/components/index.vue'
import Search from '~/components/Search.vue'
import workCard from '~/components/workCard.vue'
import Address from '~/components/address.vue'
import Footer from '~/components/footer.vue'
export default{
	// jobaddress条件筛选:https://api.myjson.com/bins/bl9ir
	// 所有职位数据：https://api.myjson.com/bins/twhun
	data(){
		return {
			sWidth:'100%',
			list:'true',
			search:this.$route.params.name,
			wSearch:true,
			dataAddressWeb:'https://api.myjson.com/bins/bl9ir',
			imglist:["https://www.lgstatic.com/i/image/M00/70/F8/CgpFT1o5zBKAHJfyAABQqeBLRaU691.JPG","https://www.lgstatic.com/i/image2/M00/47/8B/CgotOVrZrHuAUyvoAABQCPKhLAY159.PNG","https://www.lgstatic.com/i/image/M00/41/7E/CgpEMllUxC2AOU7wAABZXy04ZTg283.JPG"]
		}
	},
	components:{
		Top,
		Search,
		Address,
		workCard,
		ScrollTop,
		Footer,
	},
	mounted(){
		if(this.search=="all"){
			this.wSearch=true;
		}else{
			this.wSearch=false;
		}
	}
	
}
</script>

<style lang="scss">
$nx-width:76.25rem;
	.nameIndex{
		width: 100%;
		.see{
			display: none;
		}
		.nameContains{
			position: relative;
			width: $nx-width;
			margin: 0 auto;
			.ad{
				width: 60rem;
				padding-top: 2rem;
			}
			.adImg2{
				position: absolute;
				top: 2rem;
				right: 2rem;	
				img{
					margin-bottom: 1rem;
				}
			}
			.adImg1{
				position:absolute;
				right: 2rem;
				top:2.3rem;
			}
			.wCard{
				padding-top: 2rem;
				padding-bottom: 5rem;
			}

		}	
	}
</style>