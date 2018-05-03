<template>
	<div class="hotCompany">
		<ul class="companyContain">
			<li v-for="(company,index) in companys" :key="index" class="companylist">
				<div>
					<div class="hotCompany_Up " >
						<nuxt-link :to="{name:'company-companyEg'}"><img :src="company.companyImg" alt=""></nuxt-link>
						<nuxt-link :to="{name:'company-companyEg'}" class="companyName">{{company.companyName}}</nuxt-link>
						<span v-for="(tags,index) in company.companyTags" :key="index" class="tags">{{tags}}<i v-if="index!=company.companyTags.length-1"> / </i></span>
						<p class="ref">{{company.companyRef}}</p>
					</div>
					<div class="hotCompany_Down">
						<nuxt-link :to="{name:'company-companyEg'}"  class="dataCompany" v-for="(data,index) in company.companyData.data" :key="index">	
							<p><span>{{data.dataCount}}</span></p>
							<p>{{data.dataName}}</p>
						</nuxt-link>
					</div>
				</div>
			</li>
		</ul>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:['companys']
	}
</script>

<style lang="scss">
$nx-width:76.25rem;
$nx-color2:#0470B8;
.word{
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.hotCompany	{
	width: 100%;
	.companyContain{
		width: 76rem;
		margin:1rem auto;
		zoom:1;
		&:after{
            display: block;
            content: '.';
            clear: both;
            line-height: 0;
            visibility: hidden;
        }
		.companylist{
			float: left;
			width: 17.8rem;
			height: 16.75rem;
			border:1px solid #eee;
			margin: 1rem 1rem 0 0;
			>div{
				width: 100%;
				height:100%;
				padding:  1rem;
				overflow: hidden;
				text-align: center;
				.hotCompany_Up{
					padding-bottom: 1rem;
					border-bottom: 1px dashed #ddd;
					img{
						display: block;
						width: 5rem;
						margin: 0 auto;
					}
					.companyName{
						display: block;
						margin-top: 1rem;
						line-height: 1rem;
						&:hover{
							color:$nx-color2; 
						}
					}
					.tags{
						line-height: 2rem;
						font-size: 0.8rem;
						color: #999;
					}
					.ref{
						width: 100%;
						line-height: 1rem;
						font-size: 0.8rem;
						color: #444;
						@extend .word;
					}
				}
				.hotCompany_Down{
					margin-top: 1rem;
					.dataCompany{
						float: left;
						width: 5.2rem;
						border-right: 1px solid #ddd;
						&:hover p{
							color: $nx-color2;
						}
						&:last-of-type{
							border-color: #fff;
						}
						p{
							font-size: 0.6rem;
							color: #aaa;
							span{
								font-size: 1rem;
								color: $nx-color2;
							}
						}
					}
				}
			}
		}

	}
}
</style>