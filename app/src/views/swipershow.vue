<template>
	<div class="l-box">
		<div class="l-header">
			<div class="l-back"><router-link to="./login" style="text-decoration: none;color:white"><</router-link></div>
			<div class="l-title">safdds</div>
		</div>
		<div style="width: 100%;height: 20.3125rem;position:fixed;top:2rem;left: 2px;" id="oBox"></div>
		<div class="sscontent">
			<ul class="ss-listUl">
				<li @click="showone">商家便利</li>
				<li @click="showtwo">排序</li>
				<li @click="showthree">筛选</li>
			</ul>
			<ul class="shopshow">
				<div class="listshow" v-if="ssNum==1">
						<ul class="category_left">
							<li class="category_left_li" v-for="(i,$index) in category" :class="actives==$index?'active':''" @click="addActive($index)">
								<img :src="'https://fuss10.elemecdn.com/'+i.image_url+'.png'" class="category_img" />
								<span>{{i.name}}</span>
								<span class="category_count">{{i.count}}</span>
								<ul class="category_right" v-if="actives==$index">
									<li class="category_right_li" v-for="(j,$inx) in i.sub_categories" @click="juti(j.id)"><span>{{j.name}}</span> <span class="listcount">{{j.count}}</span></li>
								</ul>
							</li>
						</ul>
                    </div>
					<ul class="listshow1" v-if="ssNum==2">
						<li class="sort_list_li" v-for="(i,$index) in sorts_title" @click="reSort(i.ev,$index)" >
							<i  :class="i.img" class="iconfont"></i>
							<span class="iName" :class="clickNum==i.num?'blueColor':''">{{i.name}}</span>
							<span class="dui" :class="clickNum==i.num?'showDui':''">√</span>
						</li>
					</ul>
					<div class="listshow2" v-if="ssNum==3">
						<div class="filter_header_style">配送方式</div>
						<ul class="filter_ul">
							<li class="filter_li" v-for="i in xuanList">
								<i class="iconfont icon-fengniao"></i>{{i.text}}</li>
						</ul>
						<div class="filter_header_style">商家属性(可以多选)</div>
						<ul class="filter_ul filter_ulOne">
							   <li class="filter_li" v-for="i in filterText">
								<span class="iconName">{{i.icon_name}}</span>{{i.name}}</li>
						</ul>
						<div class="confirm_filter">
							<button>清空</button>
							<button>确定</button>
						</div>
					</div>
			</ul>
			<ul class="shoplist_container backgWhite">
				<div class="shops" v-for="i,key in shopList">
				<div class="shopimg"><img :src="'//elm.cangdu.org/img/'+i.image_path"></div>
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
						<div style="float: right;"><span class="time" >{{i.distance}}</span> / <span style="color: #3190e8;">{{i.order_lead_time}}</span></div>
					</div>
				</div>
			</div>
			</ul>
		</div>
			

		</div>
		
		
</template>
<script>//elm.cangdu.org/img/16cc2b9d7ec51817.png
export default {
	data() {
		return {
			ssNum: '',
			category: '',
			actives: '',
			clickNum:'',
            filterText:'',
			shopList: '',
			xuanList:'',

			sorts_title: [{
					name: '智能排序',
					img: 'icon-paixu',
					ev: 'paixu',
					num:0,
				},
				{
					name: '距离最近',
					img: 'icon-juli',
					ev: 'juli',
					num:1,
				},
				{
					name: '销量最高',
					img: 'icon-huomiao',
					ev: 'xiaoliang',
					num:2,
				},
				{
					name: '起送价最低',
					img: 'icon-price',
					ev: 'qisongjia',
					num:3,
				},
				{
					name: '配送速度最快',
					img: 'icon-juli',
					ev: 'sudu',
					num:4,
				},
				{
					name: '评分最高',
					img: 'icon-xingzhuang60kaobei2',
					ev: 'pingfen',
					num:5,
				},
			]
		}
	},
	methods: {
		juti(a){
			console.log(a)
			this.ssNum=-1
			var oBox = document.getElementById('oBox')
			oBox.style.background='none'
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.924351&longitude=116.417491&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]='+a+'&order_by=null&delivery_mode[]=null').then((data) => {
				//	console.log(data)
				this.shopList = data.data
			})
		},
		addActive(a) {
			this.actives = a
		},
		showone() {
			var oBox = document.getElementById('oBox')
			console.log(this.ssNum)
			if(this.ssNum != 1) {
				this.ssNum = 1
				oBox.style.background = 'rgba(0,0,0,.5)'
			} else {
				this.ssNum = -1
				oBox.style.background = 'none'
			}
		},
		showtwo() {
			var oBox = document.getElementById('oBox')
			if(this.ssNum != 2) {
				this.ssNum = 2
				oBox.style.background = 'rgba(0,0,0,.5)'
			} else {
				this.ssNum = -1
				oBox.style.background = 'none'
			}
		},
		showthree() {
			var oBox = document.getElementById('oBox')
			if(this.ssNum != 3) {
				this.ssNum = 3
				oBox.style.background = 'rgba(0,0,0,.5)'
			} else {
				this.ssNum = -1
				oBox.style.background = 'none'
			}
		},
		reSort(a,b) {
			this.clickNum=b
			this[a]()
			var oBox = document.getElementById('oBox')
			 oBox.style.background='none'
			this.ssNum=-1
		},
		paixu() {
			console.log('paixu')
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.924351&longitude=116.417491&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=0&delivery_mode[]=null').then((data) => {
				//	console.log(data)
				this.shopList = data.data
			})
		},
		juli() {
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.924351&longitude=116.417491&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=5&delivery_mode[]=null').then((data) => {
				//	console.log(data)
				this.shopList = data.data
			 })
		},
		xiaoliang() {
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.924351&longitude=116.417491&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=6&delivery_mode[]=null').then((data) => {
				//	console.log(data)
				this.shopList = data.data
			})
		},
		qisongjia() {
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.924351&longitude=116.417491&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=1&delivery_mode[]=null').then((data) => {
				//	console.log(data)
				this.shopList = data.data
			})
		},
		sudu() {
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.924351&longitude=116.417491&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=2&delivery_mode[]=null').then((data) => {
				//	console.log(data)
				this.shopList = data.data
			})
		},
		pingfen() {
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.924351&longitude=116.417491&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=3&delivery_mode[]=null').then((data) => {
				//	console.log(data)
				this.shopList = data.data
			})
		}

	},
	created() {
		//筛选
		this.axios.get('http://elm.cangdu.org/shopping/v1/restaurants/delivery_modes?latitude=39.924351&longitude=116.417491&kw=').then((data)=>{
			console.log(data)
			this.xuanList=data.data
			console.log(this.xuanList)
		})
		this.axios.get('http://elm.cangdu.org/shopping/v1/restaurants/activity_attributes?latitude=39.924351&longitude=116.417491&kw=').then((data)=>{
			console.log(data)
			this.filterText=data.data
//			console.log(this.filterText)
		})
		//美食
		this.axios.get('http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=39.73204&longitude=116.14265').then((data) => {
//			console.log(data.data)
			this.category = data.data
		})
		//展示
		this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.73204&longitude=116.14265&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=252&restaurant_category_ids[]=&order_by=&delivery_mode[]=').then((data) => {
			this.shopList = data.data
		})
	},
}</script>
<style scoped>* {
	margin: 0;
	padding: 0;
	color: #4f4f4f;
}
.confirm_filter{
	padding: 0.1875rem;
}
.confirm_filter button{
	width: 45%;
	height: 1.09375rem;
	background: none;
	border:none;
	border-radius: 7%;
	background: white;
	font-size: 0.46875rem;
	border:.025rem solid #eee;
}
.confirm_filter button:nth-of-type(1){
	margin-right: 3%;
}
.confirm_filter button:nth-of-type(2){
	background: #56d176;
	color:white;
}
.icon-fengniao{
	font-size: 0.46875rem;
	color:#0079ce;
}
.iconName{
	display: inline-block;
	width: 0.56875rem;
    height: 0.56875rem;
    font-size: 0.36875rem;
    border: .025rem solid #e4e4e4;
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: 0.56875rem;
    text-align: center;
}
.filter_ulOne li:nth-of-type(1) span{
	color: #77cbd5;
	border: .025rem solid #77cbd5;
}
.filter_ulOne li:nth-of-type(2) span{
	color: #a4a4a4;
	 border: .025rem solid #a4a4a4;
}
.filter_ulOne li:nth-of-type(3) span{
	color: #77cbd5;
	 border: .025rem solid #77cbd5;
}
.filter_ulOne li:nth-of-type(4) span{
	color: #dc9d6b;
	border: .025rem solid #dc9d6b;
}
.filter_ulOne li:nth-of-type(5) span{
	color: #dc9d6b;
	 border: .025rem solid #dc9d6b;
}
.filter_ulOne li:nth-of-type(6) span{
	color: #a4a4a4;
	 border: .025rem solid #a4a4a4;
}
.filter_ul{
}
.filter_ul i{
	font-size: 0.46875rem;
	margin-left: 0.2875rem;
	margin-right: 0.078125rem;
}
.filter_li{
	padding:0.1rem 0;
	display: inline-block;
	line-height: 0.7rem;
    border: .025rem solid #eee;
    width:27.5%;
    height: 0.7rem;
    border-radius: .125rem;
    font-size: 0.28125rem;
    margin-bottom: 0.46875rem;
    margin-right: 0.46875rem;
    text-align: center;
}
.backgWhite{
	background: white;
	margin-top:0.13125rem;
}
.filter_header_style{
	line-height: 0.9375rem;
	font-size: 0.3125rem;
	color:#424242;
}
.dui{
	float: right;
	margin-right: 0.3125rem;
	font-size: 0.3125rem;
	display: none;
}
.blueColor{
	color: #3190e8;
}
.showDui{
	display: inline-block;
	color: #3190e8;
}
.sscontent {
	width: 100%;
}

.iconfont {
	margin: 0 .3rem 0 .8rem;
}

.iName {
	-ms-flex: auto;
	flex: auto;
	text-align: left;
	text-indent: .25rem;
}

.sort_list_li {
	line-height: 1.171875rem;
}

.shopshow {
	width: 100%;
	background: white;
	position: fixed;
	top: 0.078125rem;
	left: 0;
	margin-top: 2.025rem;
}

.shop_img {
	float: left;
	width: 2.7rem;
	background: gold;
	height: 2.7rem;
	margin-right: 3%;
}

.shop_img img {
	width: 100%;
	height: 100%;
}

.shop_right {
	float: right;
	width: 75%;
}

.shop_li {
	display: flex;
	border-bottom: .025rem solid #f1f1f1;
	padding: .4rem .2rem;
}

.shoplist_container {
	width: 100%;
	padding: 0;
	margin-top: 1.98125rem;
	list-style: none;
	font-style: normal;
}

.listcount {
	float: right;
	font-size: 0.3125rem;
}

.category_right_li {
	justify-content: space-between;
	height: 1.171875rem;
	line-height: 1.171875rem;
	padding-right: .5rem;
	border-bottom: .025rem solid #e4e4e4;
	list-style: none;
	margin-left: 0.3125rem;
	font-size: 0.3125rem;
}

.active {
	background: white;
}

.l-box {
	width: 100%;
	/*height: 17.733333rem;*/
	/*overflow: hidden;*/
	background: #eee;
}

.l-header {
	width: 100%;
	height: 1.171875rem;
	background: #3190e8;
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
}

.l-back {
	width: 5%;
	line-height: 1.171875rem;
	font-size: 0.5rem;
	padding-left: 0.3125rem;
	color: white;
}

.l-title {
	width: 90%;
	line-height: 1.171875rem;
	font-size: 0.5rem;
	color: white;
	text-align: center;
}

.ss-listUl {
	width: 100%;
	height: 1rem;
	display: flex;
	position: fixed;
	top: 1.071875rem;
	left: 0rem;
	border-bottom: .025rem solid #eee;
}

.ss-listUl li {
	flex: 1;
	line-height: 1rem;
	text-align: center;
	list-style: none;
	font-size: 0.3125rem;
	z-index: 1;
	background: white;
}

.listshow,
.listshow1,
.listshow2 {
	width: 100%;
	height: auto;
	position: relative;
}
.listshow2 {
	padding: 0.3125rem 0.3125rem;
	background: white;
	height: 7.565625rem;
}

.category_left {
	width: 40%;
	float: left;
	background: #f1f1f1;
}

.category_right {
	width: 60%;
	float: right;
	height: 10rem;
	position: absolute;
	right: 0;
	top: 0;
	overflow: auto;
}

.category_left_li {
	height: 1.171875rem;
	padding: 0 .2rem;
}

.category_img {
	width: 0.46875rem;
	height: 0.46875rem;
	vertical-align: middle;
	margin-right: 0.2125rem;
}

.category_left_li span {
	line-height: 1.171875rem;
}

.category_count {
	background: #ccc;
	font-size: 0.1rem;
	color: #fff;
	padding: 0 .1rem;
	border: .025rem solid #ccc;
	border-radius: .8rem;
	vertical-align: middle;
	margin-right: .25rem;
	position: relative;
	left: 0.45625rem;
	top: 0;
}

.shops{
	width: 100%;
	height: 200px;
	padding:18px ;
	box-sizing: border-box;
	border-bottom: 1px #ccc solid;
}
.shops>.shopimg{
	width: 150px;
	height: 150px;
	float: left;
}
.shops>.shopimg>img{
	width: 100%;
	height: 100%;
}
.shops>.shoptext{
	width: 76%;
	height: 150px;
	text-align: left;
	float: right;
}
.shops>.shoptext>div{
	height: 50px;
}
.shops>.shoptext>.name>.shopname{
	width: 50%;
	height: 30px;
	line-height: 30px;
	float: left;
	text-overflow: ellipsis;
	white-space: normal;
	overflow: hidden;
}
.shops>.shoptext>.name span{
	display: inline-block;
	font-size: 16px;
	float: left;
	padding: 1px 4px;
	background: yellow;
	margin-right: 4px;
	border-radius: 4px;
}
.shops>.shoptext>.talk>.song{
	float: right;
	
}
.shops>.shoptext>.talk>.song>span{
	display: inline-block;
	font-size: 14px;
	padding: 1px 3px;
	color: #fff;
	margin-right: 2px;
	border-radius: 4px;
	background: #3190e8;
}

</style>