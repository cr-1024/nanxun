<template>
	<div class="workList">
		<ul class="work_list">
			<li v-for="(work,index) in workSort" :key="index" class="cardWork">
				<div>
					<div class="cardWork_Up">
						<div>
							<strong class="card_workNT"><nuxt-link :to="{name:'workName-workEg'}" class="card_workName">{{work.workName}}</nuxt-link><span v-html="work.workTime" class="card_workTime"></span></strong>
							<span class="card_workMoney">{{work.workMoney}}</span>
						</div>
						<span v-for="(exp,index) in work.workExp" :key="index" class="card_workExp" >{{exp}}<i v-if="index<1"> / </i></span>
						<ul>
							<li v-for="(tags,index) in work.workTags" :key="index" class="card_workTags">{{tags}}</li>
						</ul>
					</div>
					<div class="cardWork_Down">
						<nuxt-link :to="{name:'index'}" class="card_workImg"><img :src="work.workImg"></nuxt-link>
						<div>
							<span><nuxt-link :to="{name:'company-companyEg'}" class="card_workInc">{{work.workInc}}</nuxt-link></span>
							<ul>
								<li v-for="(incTags,index) in work.workIncTags" :key="index" class="card_workIncTags">{{incTags}}<i v-if="index!=work.workIncTags.length-1"> / </i></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="">
	export default{
		data(){
			return{

			}
		},
		props:['workSort'],

	}
</script>

<style lang="scss">
$nx-color2:#0470B8;
$nx-width:75rem;
	.workList{
		width: 100%;
		.work_list{
			width: $nx-width;		
			margin: 1rem auto;
			zoom:1;
			&:after{
	            display: block;
	            content: '.';
	            clear: both;
	            line-height: 0;
	            visibility: hidden;
	        }
			.cardWork{
				float: left;
				width: 24rem;
				height: 12.5rem;
				margin-right:1rem;
				margin-top: 1rem;
				padding: 1rem 0.8rem;
				border:1px solid #eee;
				&:nth-of-type(3n+0){
					margin-right:0; 
				}
				&:hover{
					box-shadow: 2px -2px 4px #ddd;
				}
				.cardWork_Up{
					color: #999;
					.card_workNT{
						display: inline-block;					
						font-weight: 400;
						.card_workName{
							float: left;
							max-width: 12rem;
							font-size: 1rem;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							&:hover{
								color:$nx-color2; 
							}
						}
						.card_workTime{
							font-size: 0.8rem;
						}
					}					
					.card_workMoney{
						float: right;
						color: #FA606B;
					}
					.card_workExp{
						font-size:0.8rem;
						color: #888;
					}
					ul{
						height:4rem;
						border-bottom: 1px dashed #ddd;
						.card_workTags{
							float: left;
							font-size: 0.6rem;
							border:1px solid #eee;
							padding: 0.2rem 0.3rem;
							margin:0.6rem 0.6rem 2rem 0; 
						}
					}
				}
				.cardWork_Down{
					float: left;
					width: 100%;
					height: 2.5rem;
					margin-top: 0.5rem;
					.card_workImg img{	
						width: 2.5rem;
						margin-right: 1rem;
					}
					div{
						display: inline-block;
						span{
							font-size: 0.9rem;
						}
						ul .card_workIncTags{
							float: left;
							font-size: 0.8rem;
							color: #aaa;
						}
					}
				}
			}
		}
		
	}
</style>