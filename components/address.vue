<template>
	<div class="address">
		<div class="addressContain" id="list" >{{searchwork}}
			<div v-for="(List,index1) in addressList" :key="index1" class="listSort" >
				<strong>{{List.list}}:</strong>
				<span @click="add($event)"  v-for="(ad,index2) in List.main" :key="index2" ref="listsort"  >{{ad}}</span>
			</div>	
		</div>
	</div>
</template>

<script type="">
import axios from 'axios'
export default{
	data(){
		return {
			addressList:[],				
			bgColor:false
		}

	},
	props:['web','searchwork'],
	created(){
			
			axios.get(this.web)
			.then(res=>{
				this.addressList=res.data;
			});
			
		},
	methods:{
			add(event){
				let el= event.target;
				let parentel=el.parentNode.childNodes[1];
				if(el==parentel){
					for(let i of el.parentNode.children){
						if(i!=el.parentNode.children[0]){
							i.className="";
							i.style.backgroundColor="#fff";
							i.style.color='#000';
						}
					}
					el.className="blueBg";
					el.style.backgroundColor="#0470B8";
					el.style.color='#fff';
				}else{
					if( el.className=="blueBg"){
						el.className="";
						el.style.backgroundColor="#fff";
						el.style.color='#000';
						
					}else{
						parentel.className="";
						parentel.style.backgroundColor="#fff";
						parentel.style.color='#000';
						el.className="blueBg";
						el.style.backgroundColor="#0470B8";
						el.style.color='#fff';
					}
				}	
			}
		},
		mounted(){
			// document.getElementsTagName('span')[0].className='blueBg';
			// this.$refs.listsort.style.backgroundColor='#0470B8';
			// this.$refs.listsort.className='blueBg';
		}

	}
</script>

<style lang="scss">
	$nx-color:#449EFE;
	$nx-color2:#0470B8;

	.address{
		width: 100%;
		clear: both;
		.addressContain{
			width:60rem;
			margin-top: 2rem;
			border:1px solid #ddd; 
			padding: 0.5rem 1rem;
			.listSort{
				width: 100%;
				color: #777;
				
				strong{
					float: left;
					padding: 0.2rem 0.5rem;
				}
				span{
					display: inline-block;
					cursor: pointer;
					padding:0.2rem 0.5rem;
					margin-right: 0.5rem;
					margin-bottom:1rem;
					color: #444;
					&:hover,&:first-of-type{
						background-color: $nx-color2;
						color: #fff;
					}
					
				}
				.blueBg{
					color: #fff;
					background-color: $nx-color2;
				}
			}
		}
	}
</style>