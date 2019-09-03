<template>
	<div>
	    <header>
		  	<i class="icon iconfont icon-sousuo" style="font-size: 0.276923rem;float: left;line-height: 0.76923rem;margin-left: 0.153846rem;color: #fff;" @click="search"></i><p>上海<router-link to="./logon" class="j-router">
		  		<span v-show="false">登录|注册</span>
		  		<span v-show="true"><i class="icon iconfont icon-rentou" style="font-size: 0.276923rem;float: left;line-height: 0.76923rem;margin-right: 0.153846rem;color: #fff;"></i></span>
		  	</router-link></p>
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
				<i class="icon iconfont icon-shangdian" style="font-size: 0.261538rem;margin-right: 0.061538rem;"></i>
				附近商家
			</div>
			<div class="shops" v-for="i,key in allshop">
				<div class="shopimg"><img :src="shophttp + i.image_path"/></div>
				<div class="shoptext">
					<div class="name" style="font-weight: 600;"><span>品牌</span>
						<div class="shopname">{{i.name}}</div>
					</div>
					
					<div class="talk">
						评分
						<div class="song" style="float: right;"><span>蜂鸟专送</span> <span style="color: #3190e8;border: 0.015384rem #3190e8 solid;background: #fff;">准时送</span></div>
					</div>
					<div class="xian">
						￥{{i.float_minimum_order_amount}}起送 / 配送费约 ￥{{i.float_delivery_fee}}
						<div style="float: right;"><span class="time" >{{i.distance}}</span> / <span style="color: #3190e8;">{{i.order_lead_time}}</span></div>
					</div>
				</div>
			</div>
			
		</div>
		
		
		
		
	</div>
</template>





<script>
	import Swiper from 'swiper';
	export default{
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
			
//			if()
			
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
			})
		}
		
	}
	
	
</script>
<style>
*{padding: 0;margin: 0;}
header{
	width: 100%;
	height: 1.538461rem;
	background: #3190e8;
}
header p{
	height: 1.538461rem;
	color: #fff;
	font-size: 0.461538rem;
	line-height: 1.538461rem;
	padding: 0.076923rem 0.123076rem 0 0.123076rem;
	box-sizing: border-box;
}
header span{
	display: block;
	float: right;
}

 .swiper-container {
    width: 100%;
    height: 5.846153rem;
    margin: 0.307692rem auto;
}
.all{
	width: 25%;
	height: 2.461538rem;
	padding: 0.092307rem;
	box-sizing: border-box;
	margin-bottom: 0.215384rem;
	float: left;
}
.all>.icon{
	width: 1.538461rem;
	height: 1.538461rem;
	margin-left: 20%;
}
.all>.icon>img{
	width: 100%;
	height: 100%;
}
.main{
	width: 100%;
	height: auto;
	margin-top: 0.461538rem;
}
.main>.top{
	height: 1.230769rem;
	line-height: 1.230769rem;
	padding-left: 1em;
	text-align: left;
	border-top: 0.015384rem #ccc solid;
	border-bottom: 0.015384rem #ccc solid;
}
.main>.shops{
	width: 100%;
	height: 3.076923rem;
	padding:0.276923rem ;
	box-sizing: border-box;
	border-bottom: 0.015384rem #ccc solid;
}
.main>.shops>.shopimg{
	width: 2.307692rem;
	height: 2.307692rem;
	float: left;
}
.main>.shops>.shopimg>img{
	width: 100%;
	height: 100%;
}
.main>.shops>.shoptext{
	width: 76%;
	height: 2.307692rem;
	text-align: left;
	float: right;
}
.main>.shops>.shoptext>div{
	height: 0.76923rem;
}
.main>.shops>.shoptext>.name>.shopname{
	width: 50%;
	height: 0.461538rem;
	line-height: 0.461538rem;
	float: left;
	text-overflow: ellipsis;
	white-space: normal;
	overflow: hidden;
}
.main>.shops>.shoptext>.name span{
	display: inline-block;
	font-size: 0.246153rem;
	float: left;
	padding: 0.015384rem 0.061538rem;
	background: yellow;
	margin-right: 0.061538rem;
	border-radius: 0.061538rem;
}
.main>.shops>.shoptext>.talk>.song{
	float: right;
	
}
.main>.shops>.shoptext>.talk>.song>span{
	display: inline-block;
	font-size: 0.215384rem;
	padding: 0.015384rem 0.046153rem;
	color: #fff;
	margin-right: 0.030769rem;
	border-radius: 0.061538rem;
	background: #3190e8;
}
</style>
