<template>
	<div>
	    <header>
		  	<i class="icon iconfont icon-sousuo" style="font-size: 18px;float: left;line-height: 50px;margin-left: 10px;color: #fff;" @click="search"></i>
		  	<p style="text-align: center;">{{this.$route.query.address}}</p>
			<i class="icon iconfont icon-rentou Login-i" style="font-size: 17px;float: right;line-height:49px;margin-right:10px;color: #fff;" v-show="true"></i>
			<router-link to="./logon" class="j-router"></p>
		  		<span v-show="false">登录|注册</span>
		  	</router-link>
			
		</header>
		
		<div class="nav">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<div class="all" v-if="key<=7" v-for="i,key in alltype">
			        		<div class="icon"><img :src="typehttp + i.image_url"/></div>
			        		<div class="title">{{i.title}}</div>
			        	
			        	</div>
			        </div>
			        <div class="swiper-slide">
			        	<div class="all" v-if="key>7&&key<=15" v-for="i,key in alltype">
			        		<div class="icon"><img :src="typehttp + i.image_url"/></div>
			        		<div>{{i.title}}</div>
			        	
			        	</div>
			        </div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div> 
			</div>
		</div>
		
		<div class="main">
			<div class="top">
				<i class="icon iconfont icon-shangdian" style="font-size: 17px;margin-right:4px;"></i>
				附近商家
			</div>
			
			<router-link :to="{name:'shopping_xiang',params:{image:i.image_path,LoginName:i.name,Sky:i.promotion_info,tips:i.piecewise_agent_fee.tips}}" v-for="(i,key) in allshop" :key="key">
				<div class="shops">
					<div class="shopimg"><img :src="shophttp + i.image_path"/></div>
					<div class="shoptext">
						<div class="name" style="font-weight: 600;"><span>品牌</span>
							<div class="shopname">{{i.name}}</div>
						</div>
						
						<div class="talk">
							评分
							<div class="song" style="float: right;"><span>蜂鸟专送</span> <span style="color: #3190e8;border: 1px #3190e8 solid;background: #fff;">准时送</span></div>
						</div>
						<div class="xian">
							￥{{i.float_minimum_order_amount}}起送 / 配送费约 ￥{{i.float_delivery_fee}}
							<div style="float: right;font-size: 12px;"><span class="time" >{{i.distance}}</span> / <span style="color: #3190e8;">{{i.order_lead_time}}</span></div>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		
		
		<comm></comm>
		
	</div>
</template>





<script>
import comm from '../components/Common.vue'
	import Swiper from 'swiper';
	export default{
		components: {
    		comm
  		},
		data(){
			return {
				type:true,
				id:'',
				city:'',
				typehttp:'',
				alltype:{},
				allshop:{},
				allres:{},
			}
		},
		methods:{
//      搜索餐馆
		search(){
			}
		},
		mounted(){
		    new Swiper ('.swiper-container', {
			    direction: 'horizontal', // 垂直切换选项
			    loop: false, // 循环模式选项
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    }
			  })            
		},
		created(){
			this.shophttp='//elm.cangdu.org/img/'
			this.typehttp = 'https://fuss10.elemecdn.com';
			// console.log(this.$route)
			
//		分类
			fetch('https://elm.cangdu.org/v2/index_entry')
			.then(response=>response.json())
				.then(response=>{
				this.alltype = response;
			})
			
//		附近商家
			fetch('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762')
			.then(response=>response.json())
			.then(response=>{
				this.allshop = response;
				// console.log(this.$route)
				console.log(response)
			})
			console.log(this.city)
		}
		
	}
	
	
</script>
<style scoped>
*{padding: 0;margin: 0;}
a{
	color:#666;
}
header{
	width: 100%;
	height: 100px;
	background: #3190e8;
}
header p{
	width: 51%;
	height: 100px;
	color: #fff;
	font-size: 30px;
	line-height: 100px;
	padding: 5px 8px 0 8px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	box-sizing: border-box;
	text-algin: center;
	margin-left: 26%;
}
header span{
	display: block;
	float: right;
}
 .swiper-container {
    width: 100%;
    height: 380px;
    margin: 20px auto;
}
.all{
	width: 25%;
	height: 160px;
	padding: 6px;
	margin-top: 12px;
	text-align: center;
	box-sizing: border-box;
	margin-bottom: 14px;
	float: left;
}
.icon{
	width: 100px;
	height: 100px;
	margin-left: 20%;
}
.icon img{
	width: 100%;
	height: 100%;
}
.Login-i{
	position: absolute;
	right: -40px;
	top: 10px;
}
.icon-sousuo{
	padding-left: 20px;
	padding-top: 6px;
}
.main{
	width: 100%;
	height: auto;
	margin-top: 30px;
}
.top{
	height: 80px;
	line-height: 80px;
	padding-left: 1em;
	text-align: left;
	border-top: 1px #ccc solid;
	border-bottom: 1px #ccc solid;
}
.icon-shangdian{
	margin-left: 0;
}
.shops{
	width: 100%;
	height: 200px;
	padding:18px ;
	box-sizing: border-box;
	border-bottom: 1px #ccc solid;
}
.shopimg{
	width: 150px;
	height: 150px;
	float: left;
}
.shopimg>img{
	width: 100%;
	height: 100%;
}
.shoptext{
	width: 76%;
	height: 150px;
	text-align: left;
	float: right;
}
.shoptext>div{
	height: 50px;
}
.shopname{
	width: 50%;
	height: 30px;
	line-height: 30px;
	float: left;
	text-overflow: ellipsis;
	white-space: normal;
	overflow: hidden;
	color: #333;
	font-weight: bold;
	font-size: 0.45rem;
}
.name span{
	color: #333;
	display: inline-block;
	font-size: 16px;
	float: left;
	padding: 1px 4px;
	background: yellow;
	margin-right: 4px;
	border-radius: 4px;
}
.song{
	float: right;
	
}
.song span{
	display: inline-block;
	font-size: 14px;
	padding: 1px 3px;
	color: #fff;
	margin-right: 2px;
	border-radius: 4px;
	background: #3190e8;
}

</style>
