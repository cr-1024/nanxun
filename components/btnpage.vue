<!-- 分页模块，每次对多显示10条信息 -->
<!-- 一共传入两个参数，allPage和showBtn -->
<!-- allPage:所有数据 -->
<!-- showBtn：是否显示分页模块 值：false/true -->
<template>
	<div class="btnPage" >
		<ul v-if="showBtn" id="showBtn">
			<li id="lt" @click="cutPage">&lt;</li>
			<li v-for="item in allPage" :key="item" @click="turnPage(item)">{{item}}</li>
			<li id="gt" @click="addPage">&gt;</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			nowPage:'1',
			show:false,
		}
	},
	props:['allPage','showBtn'],
	methods:{
		turnPage(item){			
			this.nowPage=item;
			let all=document.getElementById('showBtn').getElementsByTagName('li');
			for(let i=1;i<all.length-1;i++){
				all[i].className="";
			}
			all[this.nowPage].className='graycolor';
			if(item==1){
				all[0].className='disbtn';
			}else{
				all[0].className='';
			}
			if(item==all.length-2){
				all[item+1].className="disbtn";
			}else{
				all[all.length-1].className="";
			}
			this.$emit('btnPage',item);
		},
		cutPage(){
			if(this.nowPage>1){
				this.turnPage(this.nowPage-1);
			}
		},
		addPage(){
			if(this.nowPage<this.allPage){
				this.turnPage(this.nowPage+1);
			}
		}
	},
	mounted(){
		let all=document.getElementById('showBtn').getElementsByTagName('li');
		all[this.nowPage].className="graycolor";
		if(this.nowPage=='1'){
			all[0].className="disbtn";
		}
	}
	
}	
</script>

<style lang="scss">
$nx-color3:#62b7f3;
.btnPage{
	width: 60rem;
	ul{
		float: right;
		border:1px solid $nx-color3;
		li{
			display: inline-block;
			padding:0.3rem 0.5rem;
			text-align: center;
			line-height: 0.8rem;
			margin:0.3rem;
			cursor: pointer;
			color:$nx-color3;
			&.graycolor{
				background-color: $nx-color3;
				color:#fff;
			}
			&:hover{
				background-color:$nx-color3;
				color: #fff;
			}
			&.disbtn{
				color: #ddd;
				background-color: #f4f4f4;
				cursor: text;
			}
		}
	} 
	
}	
</style>