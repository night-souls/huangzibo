<template>
	<div>
		<womenbanner></womenbanner>
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check = "false" infinite-scroll-distance="0">
			<li v-for="data in datalist" @click="handleClick(data.eventId)" :key="data.eventId">
				<span class="chineseName">{{data.chineseName}}</span>
				<span class="englishName">{{data.englishName}}</span>
				<span class="discountText">{{data.discountText}}</span>
				<img :src="data.imageUrl"/>
			</li>
		</ul>
	</div>
</template>

<script >
	import womenbanner from "./womenbanner"
	import axios from "axios"
	export default {
			data(){
				return {
					datalist:[],
					loading:false,
					current:1,
					pageIndex:0
				}
			},
			components:{
				womenbanner
			},

		mounted(){
			axios({
				url:"http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1545822511216&summary=85e53dbf106f9aa8dfa00ee04524c6f1&platform_code=H5",
				method: 'get'
			}).then(res=>{
				console.log(res.data) 
			
				this.datalist= res.data.eventList
				this.pageIndex  = res.data.pageIndex
			})
		},

		methods:{
			handleClick(id){	
				this.$router.push(`/productlist/${id}`);
			},

			loadMore(){
				console.log("到底了")				
				if(this.pageIndex ==this.current){
					this.loading =true
					return;
				}
				this.current++;
				axios({
					url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=${this.current}&timestamp=1545822511216&summary=85e53dbf106f9aa8dfa00ee04524c6f1&platform_code=H5`,
					method: 'get'
					
				}).then(res=>{
					console.log(res.data) 
					this.datalist= [...this.datalist,...res.data.eventList]
				})
			} 
		}
	}
</script>

<style scoped lang="scss">

	ul{
		li{
			padding:5px 10px 5px 10px;
			img{
				display: block;
				width:100%;
			}
			.englishName{
				position: absolute;
				margin-top: 140px;
				margin-left: 5px;
				color:white;
				font-weight: bold;
				padding-top: 5px;
			}
			.chineseName {
				position: absolute;
				margin-top: 160px;
				margin-left: 5px;
				color:white;
				font-weight: bold;
				padding-top: 5px;
			}
			.discountText{
				position: absolute;
				margin-top: 180px;
				margin-left: 5px;
				color:white;
				font-weight: bold;
				padding-top: 5px;
			}
		}
	}
</style>
