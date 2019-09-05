<template>
	<div class="box">
		
		<header>
			<div class="h_img">
				图片
			</div>
			<div>
				
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
			
			<router-link to="/login">
				<div class="returnbtn"><i class="icon iconfont icon-fanhui1-copy" style="font-size: 16px;"></i></div>
			</router-link>
		</div>

		<div class="content clearfix">
			<!-- 左侧菜单 -->
			<div class='product'>
				<div @click='xianshi(index)' v-for='item,index in arr' :class='{"active":i==index}'>
					{{item.name}}
				</div>

				<div @click='xianshi(index)' v-for='(item,index) in arr' :class="{'active':i==index}" :key="index">
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
						<p style="font-size: 14px;">{{item.specfoods[0].name}}</p>
						<div class='bt'>
							<span class='price' style="font-size: 13px;">￥{{item.specfoods[0].price}}</span> 起
							<p>
								<span class='jian' @click='del(item.specfoods[0])'>-</span> {{item.specfoods[0].num || 0}}
								<span class='jia' @click='add(item.specfoods[0])'>+</span>
							</p>
						</div>
					</div>
				</div>

			</div>
			<footer class='footer'>
				总价:{{total}}元
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
				addArr: []
			}
		},
		created() {
			this.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((res) => {
				this.arr = res.data
				console.log(this.arr[this.idx].foods)
			})

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
		padding: 20px;
		height: 200px;
		box-sizing: border-box;
		background: red;
	}
	.h_img{
		width: 160px;
		height: 160px;
		background: cornflowerblue;
	}
	.h_img img{
		width: 100%;
		height: 100%;
	}
	.returnbtn{
		position: absolute;
		left: 14px;
		top: 3px;
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
		height: 120px;
		overflow: hidden;
		line-height: 120px;
		border-bottom: 1px #E4E4E4 solid;
	}
	
	.header p {
		width: 50%;
		font-size: 34px;
		position: relative;
		text-align: center;
		float: left;
	}
	
	.span {
		position: relative;
		width: 24%;
		left: 38%;
		bottom: 28px;
		display: block;
		border-bottom: 4px dodgerblue solid;
	}
	
	.box {
		width: 100%;
		height: auto;
		margin: 0 auto;
		font-size: 0.18rem;
	}
	
	.nav {
		width: 100%;
		height: 0.7rem;
		line-height: 0.7rem;
		text-align: center;
		border-bottom: 1px solid #ccc;
	}
	
	.list {
		display: flex;
		justify-content: space-between;
	}
	
	.list li {
		width: 25%;
		float: left;
	}
	
	.hot {
		border-right: 1px #ccc solid;
	}
	
	.active {
		background-size: 0.05rem 0.25rem;
	}
	
	.content {
		width: 100%;
		height: auto;
	}
	
	.product {
		width: 25%;
		border: 1px #ccc solid;
		text-align: center;
		float: left;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.product div {
		width: 100%;
		height: 120px;
		background: #F5F5F5;
		font-size: 26px;
		line-height: 120px;
		box-sizing: border-box;
		border-bottom: 1px #ccc solid;
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
		height: 224px;
		padding: 20px 12px;
		border-bottom: 1px #ccc solid;
		box-sizing: border-box;
	}
	
	.img {
		width: 100px;
		height: 100px;
		margin-right: 10px;
		float: left;
	}
	
	.img img {
		width: 100%;
		height: 100%;
	}
	
	.text {
		width: 70%;
		margin-left: 10px;
		float: left;
		position: relative;
	}
	
	.text .bt {
		margin-top: 98px;
	}
	
	.price {
		color: orangered;
	}
	
	.text .bt p {
		float: right;
	}
	
	.jian,
	.jia {
		width: 34px;
		height: 34px;
		text-align: center;
		line-height: 34px;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 50%;
		margin:0 20px;
	}
	
	.footer {
		width: 100%;
		height: 120px;
		background: cornflowerblue;
		opacity: .9;
		position: fixed;
		bottom: 0;
		line-height: 120px;
		padding-left: 20px;
		font-size: 28px;
		box-sizing: border-box;
	}
	
	.footer a {
		text-align: center;
		text-decoration: none;
		float: right;
		color: #fff;
		width: 20%;
		height: 120px;
		background-color: #535356;
	}
</style>