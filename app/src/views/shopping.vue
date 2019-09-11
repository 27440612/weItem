<template>
	<div class="box">
		
		<!--返回图标-->
		<router-link to="/food">
			<div class="returnbtn">&lt;</div>
		</router-link>
		
		
		<header :style="{backgroundImage: 'url('+shophttp + this.$route.params.image+')'}">
			<div class="aaa">
				<div class="h_img">
					<img :src="shophttp + this.$route.params.image"/>
				</div>
				<div class="h_left">
					<h3>{{this.$route.params.LoginName}}</h3>
				</div>
				<div class="h_span">
					<span>商家配送</span><span>/ 分钟送达</span><span>/ {{this.$route.params.tips}}</span>
				</div>
				<div class="h_xx">
					<span>公告:</span><span>{{this.$route.params.Sky}}</span>
				</div>
			</div>
		</header>
		
		
		<div class="header" style="position: relative;">
			<p @click="type=true" :class='type?"a":""'>
				商品
				<span :class='type?"span":""'></span>
			</p>
			<p @click="type=false" :class='type?"":"a"'>
				评价
				<span :class='type?"":"span"'></span>
			</p>
			
			
		</div>

		<div class="content clearfix">
			<!-- 左侧菜单 -->
			<div class='product'>
				<div @click='xianshi(index),num=index' v-for='(item,index) in arr' :class="[num==index ? 'blue' : '']" :key="index">
					{{item.name}}
				</div>

				<div @click='xianshi(index)' v-for='(item,index) in arr'  :key="index">
					{{item.type}}
				</div>
			</div>
			<!-- 右侧具体信息 -->
			<div class='information'>
				<!-- 右侧商品列表 -->
				<div class='item-box clearfix' v-for='(item,index) in arr[idx].foods' :key="index">

					<div class="img">
						<img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">
					</div>
					<div class="text">
						<p style="font-size: 0.4375rem;">{{item.specfoods[0].name}}</p>
						<div class='bt'>
							<span class='price' style="font-size: 0.375rem;">￥ {{item.specfoods[0].price}} 起</span>
							<p>
								<span class='jian' @click='del(item.specfoods[0])'>-</span> {{item.specfoods[0].num || 0}}
								<span class='jia' @click='add(item.specfoods[0])'>+</span>
							</p>
						</div>
					</div>
				</div>

			</div>
			<footer class='footer'>
				总价 : {{total}} 元
				<router-link :to="{name:'/',params:{selectList}}">
					去结算
				</router-link>
			</footer>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				type: true,
				stype:true,
				currentCategory: 0,
				arr: [],
				list: [],
				i: 0,
				idx: 0,
				addArr: [],
				num:0
			}
		},
		created() {
			this.shophttp='//elm.cangdu.org/img/'
			this.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((res) => {
				this.arr = res.data
				// console.log(res.data)
				// console.log(this.arr[this.idx].foods)
			})
			// console.log(this.$route)

		},
		methods: {
			xianshi(index) {
				// this.list = this.arr[index].code;
				this.idx = index;
			},
			del(item) {
				if(item.num) {
					if(item.num == 0) return;
					item.num--;
				}
			},
			add(item) {
				if(item.num) {
					this.addArr.forEach(it => {
						if(it.food_id == item.food_id) {
							it.num++
						}
					})
				} else {
					item.num = 1;
					this.addArr.push(item)
					// Vue.set(item, 'num', 1);
				}
				console.log(this.addArr)
			}
		},
		computed: {
			selectList() {
				var array = [];
				this.arr.forEach(element => {
					element.foods.forEach(el => {
						if(el.specfoods[0].num) {
							array.push(el.specfoods[0]);
						}
					});
				});
				console.log(array)
				return array;
			},
			total() { //计算商品总价
				var n = 0;
				// console.log(this.selectList)
				if(this.addArr.length) {
					this.addArr.forEach(element => {
						// console.log((element.price).split('￥')[1]);
						n += element.price * element.num;
					});
				}
				this.selectList.forEach(element => {
					n += (element.price).split('￥')[1] * element.num;
				});
				return n.toFixed(2);
			}
		}
	}
	
</script>
<style scoped>
	header{
		width: 10rem;
		height: 2.8125rem;
		background-size: 120% 450%;
		color:#fff;
	}
	.aaa{
		box-sizing: border-box;
		padding: 0.3125rem 0.4688rem;
		width: 100%;
		height: 100%;
		background-color:rgba(185, 185, 185, 0.85);
	}
	.h_img{
		width: 2.1875rem;
		height: 2.1875rem;
		background: cornflowerblue;
		float: left;
		margin-right: 0.2344rem;
	}
	.h_img img{
		width: 100%;
		height: 100%;
	}
	.h_span{
		margin-top: 0.2344rem;
	}
	.h_span span{
		line-height: 0.625rem;
		padding-left: 0.3125rem;
		color: #fff;
		font-size: 0.3125rem;
	}
	.h_xx span{
		line-height:0.625rem;
		padding-left: 0.3125rem;
		font-size: 0.3125rem;
		color: #fff;
	}
	.returnbtn{
		color: #fff;
		position: fixed;
		left: 0.2188rem;
		top: 0.3125rem;
		font-size: 0.625rem;
	}
	.box{
		overflow-x: hidden;
	}
	.a {
		color: dodgerblue;
	}
	.s{
		background: #fff;
	}
	.header {
		height: 1.5625rem;
		overflow: hidden;
		line-height: 1.5625rem;
		border-bottom: 0.0156rem #E4E4E4 solid;
	}
	
	.header p {
		width: 50%;
		font-size: 0.5rem;
		position: relative;
		text-align: center;
		float: left;
	}
	
	.span {
		position: relative;
		width: 24%;
		left: 38%;
		bottom: 0.4375rem;
		display: block;
		border-bottom: 0.0625rem dodgerblue solid;
	}
	
	.box {
		width: 100%;
		height: auto;
		margin: 0 auto;
		/* font-size: 0.18rem; */
	}
	
	.nav {
		width: 100%;
		/* height: 0.7rem; */
		/* line-height: 0.7rem; */
		text-align: center;
		border-bottom: 0.0156rem solid #ccc;
	}
	
	.list {
		display: flex;
		justify-content: space-between;
	}
	
	.list li {
		width: 25%;
		float: left;
	}
	
	 .blue{
	    background-color: #fff !important;
	    border-left: solid 0.0469rem #2a8cef !important;
	  }
	
	.hot {
		border-right: 0.0156rem #ccc solid;
	}
	
	.active {
		/* background-size: 0.05rem 0.25rem; */
	}
	
	.content {
		width: 100%;
		height: auto;
	}
	
	.product {
		width: 25%;
		border: 0.0156rem #ccc solid;
		text-align: center;
		float: left;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.product div {
		width: 100%;
		height: 1.4063rem;
		background: #F5F5F5;
		font-size: 0.4063rem;
		line-height: 1.4063rem;
		box-sizing: border-box;
		border-bottom: 0.0156rem #ccc solid;
		overflow: hidden;
	}
	
	.information {
		width: 75%;
		height: auto;
		float: left;
		background: #fff;
	}
	
	.item-box,
	.jiesuan {
		width: 100%;
		height: 3.2813rem;
		padding: 0.3125rem 0.1875rem;
		border-bottom: 0.0156rem #ccc solid;
		box-sizing: border-box;
	}
	
	.img {
		width: 1.5625rem;
		height: 1.5625rem;
		margin-right: 0.1563rem;
		float: left;
	}
	
	.img img {
		width: 100%;
		height: 100%;
	}
	
	.text {
		width: 70%;
		margin-left: 0.1563rem;
		float: left;
		position: relative;
	}
	
	.text .bt {
		margin-top: 1.5313rem;
	}
	
	.price {
		color: orange;
	}
	
	.text .bt p {
		float: right;
	}
	
	.jian,
	.jia {
		width: 0.5313rem;
		height: 0.5313rem;
		text-align: center;
		line-height: 0.5313rem;
		display: inline-block;
		border: 0.0156rem solid #ccc;
		border-radius: 50%;
		margin:0 0.3125rem;
	}
	
	.footer {
		width: 100%;
		height: 1.875rem;
		background: #333;
		position: fixed;
		bottom: 0;
		color: #fff;
		line-height: 1.875rem;
		padding-left: 0.3125rem;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
		font-size: 0.4375rem;
		box-sizing: border-box;
	}
	
	.footer a {
		text-align: center;
		text-decoration: none;
		float: right;
		color: #fff;
		width: 20%;
		height: 1.875rem;
		background-color:#666666;
	}
</style>