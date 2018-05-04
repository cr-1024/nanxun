<template>
	<div class="companyMap">
		<div class="mapTitle">
			<span>公司位置</span>
		</div>
		<div>
			<el-amap vid="amap"></el-amap>
		</div>
	</div>
</template>
<script>
import VueAMap from 'vue-amap';


VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
 export default{
 	data(){
 		return{

 		}
 	},
 	components:{
 		
 	}
 }   	
</script>

<style lang="scss">
.companyMap{
	width: 100%;
	padding-bottom: 2rem;
	.mapTitle{
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
}	
</style>
