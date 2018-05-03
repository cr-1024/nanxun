<template>
	<div>
		<!-- {{this.$route}} -->
		<companyHead @whichclick="sendGet" />
		<companyBodycontain :isType="isNow" />
	</div>
</template>

<script>
import axios from 'axios'
import companyHead from '~/components/companyHead.vue' 
import companyBodycontain from '~/components/companyBodycontain.vue'
	export default{
		// 数据：https://api.myjson.com/bins/6jkpm
		data(){
			return{
				isNow:'1',
			}
		},
		components:{
			companyHead,
			companyBodycontain,
		},
		methods:{
			sendGet(num){
				this.isNow=num;
				console.log(this.isNow);
			}
		}
	}
</script>