<template>
	<div class="box">

		<!--返回图标-->
		<router-link to="/food">
			<div class="returnbtn">&lt;</div>
		</router-link>

		<header :style="{backgroundImage: 'url('+shophttp + this.$route.params.image+')'}">
			<div class="aaa">
				<div class="h_img">
					<img :src="shophttp + this.$route.params.image" />
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

		<div class="shangpin" v-show="type">
			<div class="content clearfix">
				<!-- 左侧菜单 -->
				<div class='product'>
					<div @click='xianshi(index),num=index' v-for='item,index in arr' :class="[num==index ? 'blue' : '']">
						{{item.name}}
					</div>

					<div @click='xianshi(index)' v-for='(item,index) in arr' :key="index">
						{{item.type}}
					</div>
				</div>
				<!-- 右侧具体信息 -->
				<div class='information'>
					<!-- 右侧商品列表 -->
					<div class='item-box clearfix' v-for='item,index in arr[idx].foods'>

						<div class="img">
							<img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">
						</div>
						<div class="text">
							<p style="font-size: 0.4rem;">{{item.specfoods[0].name}}</p>
							<p style="font-size: 0.4rem;">{{item.specfoods[0].tips}}</p>
							<div class='bt'>

								<span class='price' style="font-size: 0.4rem;">￥ {{item.specfoods[0].price}} 起</span>
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

		<div class="pingjia" v-show="!type">
			<div class="zonghe">
				<div class="left">
					<p style="font-size: 1rem;line-height:1rem;margin-bottom: 0.09375rem;color: orangered;">{{ping_fen.overall_score | numFilter}}</p>
					<p style="color: #333;font-size: 0.375rem;">综合评价</p>
					<p style="color: #A4A4A4;font-size: 0.28125rem;">高于周边商家</p>
				</div>
				<div class="right" style="font-size: 0.4rem;color: #424242;line-height: 0.7rem;">
					<p>
						<span style="float: left;">服务态度 </span>
						<el-rate v-model="(ping_fen.food_score).toFixed(1)" disabled show-score text-color="#ff9900" score-template="{value}" style="float: left;line-height: 0.5625rem;">
						</el-rate>
					</p>
					<p>
						<span style="float: left;">菜品评价 </span>
						<el-rate v-model="(ping_fen.food_score).toFixed(1)" disabled show-score text-color="#ff9900" score-template="{value}" style="float: left;line-height: 0.5625rem;">
						</el-rate>
					</p>
					<p>送达时间 <span style="color: orangered;"> {{ping_fen.deliver_time }} </span> 分钟</p>
				</div>
			</div>
			<!--评价分类-->
			<div class="ping_type">
				<span v-for="i,index in ping_type" @click="tags_idx=index" :class='tags_idx==index?"active":index==2?"gray":""'>{{i.name}}({{i.count}})</span>
			</div>
			<!--评价内容-->
			<div class="ping_main">
				<div class="main" v-for="i in ping">
				<!--左侧头像-->
					<div style="width: 20%;height:1.71875rem;float: left;">

						<div style="width: 0.9375rem;height:0.9375rem;border-radius: 50%;background: red;">

							<img v-show="i.avatar.length>0" :src="'https://fuss10.elemecdn.com/'+ i.avatar.charAt(0)+'/'+i.avatar.charAt(1)+i.avatar.charAt(2)+'/'+i.avatar.substring(3)+'.jpeg'" style="width: 100%;height: 100%;" />
							<img v-show="i.avatar.length<=0" src="//elm.cangdu.org/img/default.jpg" style="width: 100%;height: 100%;" />

						</div>
					</div>
					
					<!--右侧内容-->
					<div style="width: 76%;height: 1.71875rem;float: left;margin-left: 0.15625rem;font-size: 0.21875rem;">
						<p style="line-height: 0.375rem;">{{i.username}}<span style="float: right;">{{i.rated_at}}</span></p>

						<div style="height: 0.625rem;">
							<el-rate v-model="i.rating_star" disabled show-score text-color="#ff9900" score-template="{value}" style="float: left;margin-right: 0.3125rem;">
							</el-rate>
							{{i.time_spent_desc}}
						</div>
						<div class="users_scores_img">
							<div v-if="i.item_ratings.length!=0" v-for="(food_users,foodCount) in i.item_ratings" :key="foodCount">
								<img v-if="food_users.image_hash!=''" :src="'https://fuss10.elemecdn.com/'+ food_users.image_hash.charAt(0)+'/'+food_users.image_hash.charAt(1)+food_users.image_hash.charAt(2)+'/'+food_users.image_hash.substring(3)+'.jpeg'" />
								<p style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" v-if="food_users.food_name!=''">{{food_users.food_name}}</p>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tags_idx: 0,
				fen_type: true,
				type: true,
				stype: true,
				currentCategory: 0,
				arr: [],
				list: [],
				i: 0,
				idx: 0,
				addArr: [],
				num: 0,

				ping: '',
				ping_fen: '',
				ping_type: []
			}
		},
		created() {
			this.shophttp='//elm.cangdu.org/img/'
			this.food()
			this.pingjia()
			this.pingjia_fen()
			this.pingjia_type()
		},
		filters: {
			numFilter:function(values) {
				// 截取当前数据到小数点后两位
				let realVal = parseFloat(values).toFixed(1)
				return realVal
			}
		},
		methods: {
			//			评价
			pingjia() {
				this.$http.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings', {
					params: {
						offset: 0,
						limit: 10
					}
				}).then((data) => {
					this.ping = data.data
					console.log(this.ping)
				})
			},
			//			评价分数
			pingjia_fen() {
				this.$http.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores').then((data) => {
					this.ping_fen = data.data
					console.log('--------------------',this.ping_fen)
				})
			},
			//			评价分类
			pingjia_type() {
				this.$http.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags').then((data) => {
					this.ping_type = data.data
					//                  console.log(this.ping_type)
				})
			},

			//			商品展示
			food() {
				this.$http.get('https://elm.cangdu.org/shopping/v2/menu', {
					params: {
						restaurant_id: 1
					}
				}).then((data) => {
					//                  console.log(data.data[this.idx].foods)
					this.arr = data.data
				})
			},
			xianshi(index) {
				this.idx = index;
			},
			del(item) {
				if(item.num) {
					if(item.num == 0) return;
					if(it.food_id == item.food_id) {
						it.num--
					}
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
				return array;
			},
			total() { //计算商品总价
				var n = 0;
				if(this.addArr.length) {
					this.addArr.forEach(element => {
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
	
	.box {
		overflow-x: hidden;
	}
	
	.a {
		color: dodgerblue;
	}
	
	.s {
		background: #fff;
	}
	
	.header {
		height: 1.5625rem;
		overflow: hidden;
		line-height: 1.5625rem;
		border-bottom: 0.015625rem #E4E4E4 solid;
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
		font-size: 0.11249999999999999rem;
	}
	
	.nav {
		width: 100%;
		height: 0.4375rem;
		line-height: 0.4375rem;
		text-align: center;
		border-bottom: 0.015625rem solid #ccc;
	}
	
	.list {
		display: flex;
		justify-content: space-between;
	}
	
	.list li {
		width: 25%;
		float: left;
	}
	
	.blue {
		background-color: #fff !important;
		border-left: solid 0.046875rem #2a8cef !important;
	}
	
	.hot {
		border-right: 0.015625rem #ccc solid;
	}
	
	.active {
		background-size: 0.03125rem 0.15625rem;
	}
	
	.content {
		width: 100%;
		height: auto;
	}
	
	.product {
		width: 25%;
		border: 0.015625rem #ccc solid;
		text-align: center;
		float: left;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.product div {
		width: 100%;
		height: 1.40625rem;
		background: #F5F5F5;
		font-size: 0.40625rem;
		line-height: 1.40625rem;
		box-sizing: border-box;
		border-bottom: 0.015625rem #ccc solid;
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
		height: 3.28125rem;
		padding: 0.3125rem 0.1875rem;
		border-bottom: 0.015625rem #ccc solid;
		box-sizing: border-box;
	}
	
	.img {
		width: 1.5625rem;
		height: 1.5625rem;
		margin-right: 0.15625rem;
		float: left;
	}
	
	.img img {
		width: 100%;
		height: 100%;
	}
	
	.text {
		width: 70%;
		margin-left: 0.15625rem;
		float: left;
		position: relative;
	}
	
	.text .bt {
		margin-top: 1.53125rem;
	}
	
	.price {
		color: orange;
	}
	
	.text .bt p {
		float: right;
	}
	
	.jian,
	.jia {
		width: 0.53125rem;
		height: 0.53125rem;
		text-align: center;
		line-height: 0.53125rem;
		display: inline-block;
		border: 0.015625rem solid #ccc;
		border-radius: 50%;
		margin: 0 0.3125rem;
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
		background-color: #666666;
	}
	
	.pingjia .zonghe {
		height: 4.6875rem;
		padding: 0.46875rem;
		box-sizing: border-box;
		border-bottom: 0.015625rem #CCCCCC solid;
	}
	
	.pingjia .zonghe .left {
		width: 40%;
		height: 3.75rem;
		padding-top: 0.9375rem;
		box-sizing: border-box;
		line-height: 0.625rem;
		text-align: center;
		float: left;
	}
	.pingjia .zonghe .left p{
		text-align: center;
	}
	.pingjia .zonghe .right {
		width: 60%;
		height: 3.75rem;
		padding: 0.3125rem;
		box-sizing: border-box;
		float: right;
	}
	
	.pingjia .zonghe .right p {
		width: 100%;
		float: left;
	}
	
	.pingjia .zonghe .right p span {
		margin-right: 0.15625rem;
	}
	
	.ping_type span {
		display: inline-block;
		padding: 0.125rem 0.15625rem;
		margin: 0.1875rem;
		margin-left: 0.3125rem;
		border-radius: 0.0625rem;
		background: #ebf5ff;
		color: #6d7885;
	}
	.gray{
		background-color: #f5f5f5 !important;
		color: #aaa;
	}
	
	.ping_type .active {
		background: #3190e8;
		color: #fff;
	}
	
	.ping_main .main {
		height: 5.3125rem;
		padding: 0.3125rem;
		margin-right: 0.25rem;
		box-sizing: border-box;
		margin-bottom: 0.09375rem;
	}
	
	.users_scores_img>div {
		width: 2.8125rem;
		height: 2.34375rem;
		float: left;
		margin: 0.0625rem 0.15625rem;
	}
	
	.users_scores_img>div img {
		width: 100%;
		height: 100%;
	}
</style>