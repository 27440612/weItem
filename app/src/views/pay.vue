<template>	
	<div class="box">
		<elmheader>
			<template v-slot:left>
				<router-link to="/order">&lt;</router-link>
			</template>
			<template v-slot:center>订单详情</template>
		</elmheader>
		<div class="times">
			<div class="head_img">
				<img :src="headUrl" alt="">
			</div>
			<p class="payout">{{json.status_bar.title}}</p>
			<router-link to="/shopping" class="too">再来一单</router-link>
		</div>
		<div class="bc"></div>
		<div class="shop">
			<div class="shopTit">
				<div class="tit_img"><img :src="headUrl" alt=""></div>
				<h3>{{json.restaurant_name}}<router-link to="/shopping" class="turn">&gt;</router-link></h3>
			</div>
			<ul class="shopList">
				<li class="clearfix" v-for="i,index in json.basket.group[0]"><span class="name">{{i.name}}</span><p><span class="count">{{i.quantity}}</span><span class="prise">{{i.price}}</span></p></li>
				<li class="clearfix" ><span class="name">{{json.basket.packing_fee.name}}</span><p><span class="count">{{json.basket.packing_fee.quantity}}</span><span class="prise">{{json.basket.packing_fee.price}}</span></p></li>
				<li class="clearfix" ><span class="name">{{json.basket.deliver_fee.name}}</span><p><span class="count">{{json.basket.deliver_fee.quantity}}</span><span class="prise">{{json.basket.deliver_fee.price}}</span></p></li>
			</ul>
			<div class="allprise clearfix"><p>实付<span>{{json.total_amount}}</span></p></div>
		</div>
		<div class="bc"></div>
		<div class="mes">
			<h3>配送信息</h3>
			<div class="mesCon">
				<p>送达时间：<span>{{json.formatted_created_at}}</span></p>
				<p>送货地址：<span></span></p>
				<p>配送方式：蜂鸟专送</p>
			</div>
		</div>
	</div>
</template>
<script>
import Header from "../components/Header";
	export default {
		components: {
		elmheader: Header,
	},
		data() {
		    return {
		     json:{},
		     headUrl:''
		    };
		},
		created(){
			this.json = this.$route.params.shop
			this.headUrl = 'http://elm.cangdu.org/img/' + this.json.restaurant_image_url
			console.log(this.json)
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.box{ 
		width:10rem;
	}
	.bc{
		margin-top: 0.4rem;
		background: #f1f1f1;
		height: 0.25rem;
	}
	header{
		background-color: blue;
		line-height: 1.25rem;
		font-size: .4rem;
		height: 1.254rem;
		text-align: center;
		color: #fff;
	}
	.tit_img{
		width:0.75rem;
		height:0.75rem;
		float:left;
		margin-top:0.17rem;
	}
	.tit_img img{
		width:100%;
		height:100%;
	}
	header p .turn{
		font-size:.6rem;
		color: #fff;
		float: left;
		margin-left: .3125rem;
	}
	.head_img{
		margin: 0 auto;
		margin-top: 0.4rem;
		border:1px solid #ccc;
		border-radius: 50%;
		width:2rem;
		height: 2rem;
	}
	.head_img img{
		border-radius:50%;
		width:100%;
		height: 100%;
	}
	.payout{
		font-size: 0.5rem;
		height: 1.3rem;
		line-height: 1.3rem;
		text-align: center;
		color: #000;
		font-weight: 700;
	}
	.too{
		display: inline-block;
		padding: 0.2rem 0.25rem;
		text-align: center;
		color: #3190e8;
		border: 1px solid #3190e8;
		border-radius: 0.1rem;
		margin-left:4.05rem;
		margin-top: 0.2rem;
		font-size: 0.35rem;
	}
	.shop{
		padding: 0.25rem;
	}
	.shopTit{
		margin-left:0.30rem;
	}
	.shopTit h3{
		font-size: 0.45rem;
		height: 1.1rem;
		line-height: 1.1rem;
		color: #333333;
		text-align: left;
		padding-left:1rem;
		border-bottom: 1px solid #ddd;
	}
	.shopTit h3 a{
		float: right;
		margin-right: .35rem;
		color: #333333;
		font-size: .6rem;
	}
	.clearfix:after,
	.clearfix:before{content: '';display: table;}
	.clearfix:after{clear: both;}
	.shopList{
		font-size: 0.4rem;
		text-align: left;
	}
	.prise{
		text-align:center;
		width:1.25rem;
	}
	.count,.prise{
		color: #b3b3b3;
		float: left;
	}
	.shopList li{
		line-height:1.25rem;
		height:1.25rem;
		margin-left:0.35rem;
		border-bottom: 1px solid #ccc;
	}
	.name{
		color:#9a9a9a;
	}
	.shopList li p{
		float: right;
	}
	.count{
		color:#e3e3e3;
		padding: 0 0.58rem;
	}
	.allprise p{
		text-align: right;
		width:99%;
		margin: 0 auto; 
		color: #fb7837;
		font-size:0.35rem;
		font-weight:600;
		line-height: 1.25rem;
		height: 1.25rem;
	}
	.mes h3{
		line-height: 1.25rem;
		height: 1.25rem;
		color: #000;
		font-size: 0.4rem;
		text-align: left;
		border-bottom: 1px solid #ccc;
		padding-left:.4rem;
	}
	.mesCon p{
		padding-left:.4rem;
		text-align: left;
		line-height: 1.25rem;
		height: 1.25rem;
		color: #808080;
		font-size: 0.35rem;
		border-bottom: 1px solid #ccc;
	}
</style>