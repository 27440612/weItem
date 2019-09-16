<template>
	<div class="l-box">
		<elmheader>
			<template v-slot:left>
				<router-link to="/food">&lt;</router-link>
			</template>
			<template v-slot:center>{{$route.params.title}}</template>
			<template v-slot:right></template>
		</elmheader>
		<div style="width: 100%;height: 12.6953125rem;position:fixed;top:1.25rem;left: 0.03125rem;background:rgba(0,0,0,0) !important" id="oBox"></div>
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
							<li class="filter_li" v-for="i in xuanList" @click="niao(i)" :class="isChoose?'blueBtns':''">
								<i class="iconfont icon-fengniao"></i>{{i.text}}</li>
						</ul>
						<div class="filter_header_style">商家属性(可以多选)</div>
						<ul class="filter_ul filter_ulOne">
							   <li class="filter_li" v-for="(i,$index) in filterText" @click="allBlue(i.id,$index)" :style="{'color':blueIndex[$index+1]?'#3190E8':''}">
								<span class="iconName" :style="{'color':blueIndex[$index+1]?'#3190E8':''}">{{blueIndex[$index+1]?'√':i.icon_name}}</span>{{i.name}}</li>
						</ul>
						<div class="confirm_filter">
							<button @click="qingkong">清空</button>
							<button @click="sure" id="blueBtn">确定({{totalNum}})</button>
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
import Header from "../components/Header";
export default {
	components: {
		elmheader: Header,
	},
	data() {
		return {
			ssNum: '',
			category: '',
			actives: '',
			clickNum: '',
			filterText: '',
			shopList: '',
			xuanList: '',
			isChoose: false,
			blueIndex: [0, 0, 0, 0, 0, 0, 0],

			last: [],
			elivery:'',
			totalNum:0,

			sorts_title: [{
					name: '智能排序',
					img: 'icon-paixu',
					ev: 'paixu',
					num: 0,
				},
				{
					name: '距离最近',
					img: 'icon-juli',
					ev: 'juli',
					num: 1,
				},
				{
					name: '销量最高',
					img: 'icon-huomiao',
					ev: 'xiaoliang',
					num: 2,
				},
				{
					name: '起送价最低',
					img: 'icon-price',
					ev: 'qisongjia',
					num: 3,
				},
				{
					name: '配送速度最快',
					img: 'icon-juli',
					ev: 'sudu',
					num: 4,
				},
				{
					name: '评分最高',
					img: 'icon-xingzhuang60kaobei2',
					ev: 'pingfen',
					num: 5,
				},
			]
		}
	},
	methods: {
		niao(i){
			
			this.isChoose=!this.isChoose
			if(this.isChoose){
				this.totalNum++
				this.elivery=i.id
			}else{
				this.totalNum--
				this.elivery=null
			}

		},
		
		qingkong() {
			this.blueIndex = [0, 0, 0, 0, 0, 0, 0]
		},
		allBlue(i, e) {
//			console.log(i)
			console.log(this.blueIndex)
			if(!this.blueIndex[e + 1]) {
				this.last.push(i)
				this.totalNum++
				this.$set(this.blueIndex, e + 1, this.filterText[e].id)
			} else {
				this.totalNum--
				this.$set(this.blueIndex, e + 1, 0)
				for(var r = 0; r < this.last.length; r++) {
					if(this.last.indexOf(i) > -1) {
						this.last.splice(this.last.indexOf(i), 1)
					}
				}
			}
			console.log(this.last)
		},
		sure() {
			console.log(this.xuanList[0].id)
			this.ssNum = -1
			var oBox = document.getElementById('oBox')
			oBox.style.background = 'none'
			//console.log(this.blueIndex)
             var a=''
            this.last.forEach(item=>{
                a+="&support_ids[]="+item
            })
            a=a.slice(1)
            console.log(a)
			
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=32.0415&longitude=118.79505&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=null&delivery_mode[]='+this.elivery_mode+'&'+a).then((data) => {
				//	console.log(data)
				this.shopList = data.data
			})
		},
		juti(a) {
			console.log(a)
			this.ssNum = -1
			var oBox = document.getElementById('oBox')
			oBox.style.background = 'none'
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.924351&longitude=116.417491&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=' + a + '&order_by=null&delivery_mode[]=null').then((data) => {
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
			} else {
				this.ssNum = -1
				oBox.style.background = 'none'
			}
		},
		showtwo() {
			var oBox = document.getElementById('oBox')
			if(this.ssNum != 2) {
				this.ssNum = 2
			} else {
				this.ssNum = -1
				oBox.style.background = 'none'
			}
		},
		showthree() {
			var oBox = document.getElementById('oBox')
			if(this.ssNum != 3) {
				this.ssNum = 3
			} else {
				this.ssNum = -1
				oBox.style.background = 'none'
			}
		},
		reSort(a, b) {
			this.clickNum = b
			this[a]()
			var oBox = document.getElementById('oBox')
			oBox.style.background = 'none'
			this.ssNum = -1
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
		this.axios.get('http://elm.cangdu.org/shopping/v1/restaurants/delivery_modes?latitude=39.924351&longitude=116.417491&kw=').then((data) => {
			//			console.log(data)
			this.xuanList = data.data
			console.log(this.xuanList)
		})
		this.axios.get('http://elm.cangdu.org/shopping/v1/restaurants/activity_attributes?latitude=39.924351&longitude=116.417491&kw=').then((data) => {
			console.log(data)
			this.filterText = data.data
			console.log(this.filterText)
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
}
</script>
<style scoped>
<style scoped>
* {
	margin: 0;
	color: #4f4f4f;
}
a{
	color: #fff;
}
.blueBtns{
	color: #3190E8;
}
.confirm_filter{
	padding: 0.1171875rem;
}
.confirm_filter button{
	width: 45%;
	height: 0.68359375rem;
	background: none;
	border:none;
	border-radius: 7%;
	background: white;
	font-size: 0.29296875rem;
	border:0.015625rem solid #eee;
	outline:none;
}
.confirm_filter button:nth-of-type(1){
	margin-right: 3%;
}
.confirm_filter button:nth-of-type(2){
	background: #56d176;
	color:white;
}
.icon-fengniao{
	font-size: 0.29296875rem;
	color:#0079ce;
}
.iconName{
	display: inline-block;
	width: 0.35546875rem;
    height: 0.35546875rem;
    font-size: 0.23046875rem;
    border: 0.015625rem solid #e4e4e4;
    border-radius: 0.09375rem;
    margin-right: 0.15625rem;
    line-height: 0.35546875rem;
    text-align: center;
}
.filter_ulOne li:nth-of-type(1) span{
	color: #77cbd5;
	border: 0.015625rem solid #77cbd5;
}
.filter_ulOne li:nth-of-type(2) span{
	color: #a4a4a4;
	 border: 0.015625rem solid #a4a4a4;
}
.filter_ulOne li:nth-of-type(3) span{
	color: #77cbd5;
	 border: 0.015625rem solid #77cbd5;
}
.filter_ulOne li:nth-of-type(4) span{
	color: #dc9d6b;
	border: 0.015625rem solid #dc9d6b;
}
.filter_ulOne li:nth-of-type(5) span{
	color: #dc9d6b;
	 border: 0.015625rem solid #dc9d6b;
}
.filter_ulOne li:nth-of-type(6) span{
	color: #a4a4a4;
	 border: 0.015625rem solid #a4a4a4;
}
.filter_ul{
}
.filter_ul i{
	font-size: 0.29296875rem;
	margin-left: 0.1796875rem;
	margin-right: 0.048828125rem;
}
.filter_li{
	padding:0.0625rem 0;
	display: inline-block;
	line-height: 0.4375rem;
    border: 0.015625rem solid #eee;
    width:27.5%;
    height: 0.4375rem;
    border-radius: 0.078125rem;
    font-size: 0.17578125rem;
    margin-bottom: 0.29296875rem;
    margin-right: 0.29296875rem;
    text-align: center;
}
.backgWhite{
	background: white;
	margin-top:0.08203125rem;
}
.filter_header_style{
	line-height: 0.5859375rem;
	font-size: 0.1953125rem;
	color:#424242;
}
.dui{
	float: right;
	margin-right: 0.1953125rem;
	font-size: 0.1953125rem;
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
	position: relative;
}

.iconfont {
	margin: 0 0.1875rem 0 0.5rem;
}

.iName {
	-ms-flex: auto;
	flex: auto;
	text-align: left;
	text-indent: 0.15625rem;
}

.sort_list_li {
	line-height: 0.732421875rem;
}

.shopshow {
	width: 100%;
	background: white;
	position: absolute;
	top: 0.078125rem;
	left: 0;
	margin-top: 1rem;
}

.shop_img {
	float: left;
	width: 1.6875rem;
	background: gold;
	height: 1.6875rem;
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
	border-bottom: 0.015625rem solid #f1f1f1;
	padding: 0.25rem 0.125rem;
}

.shoplist_container {
	width: 100%;
	padding: 0;
	list-style: none;
	font-style: normal;
}

.listcount {
	float: right;
	font-size: 0.1953125rem;
}

.category_right_li {
	justify-content: space-between;
	height: 0.732421875rem;
	line-height: 0.732421875rem;
	padding-right: 0.3125rem;
	border-bottom: 0.015625rem solid #e4e4e4;
	list-style: none;
	margin-left: 0.1953125rem;
	font-size: 0.1953125rem;
}

.active {
	background: white;
}

.l-box {
	width: 100%;
	/*height: 11.083333125rem;*/
	/*overflow: hidden;*/
	background: #eee;
}

.l-back {
	width: 5%;
	line-height: 0.732421875rem;
	font-size: 0.3125rem;
	padding-left: 0.1953125rem;
	color: white;
}

.l-title {
	width: 90%;
	line-height: 0.732421875rem;
	font-size: 0.3125rem;
	color: white;
	text-align: center;
}

.ss-listUl {
	width: 100%;
	height: 1rem;
	display: flex;
	/* position: fixed;
	top: 1.5625rem;
	left: 0rem; */
	border-bottom: 0.025rem solid #eee;
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
	padding: 0.1953125rem 0.1953125rem;
	background: white;
	height: 4.728515625rem;
}

.category_left {
	width: 40%;
	float: left;
	background: #f1f1f1;
}

.category_right {
	width: 60%;
	float: right;
	height: 6.25rem;
	position: absolute;
	right: 0;
	top: 0;
	overflow: auto;
}

.category_left_li {
	height: 0.732421875rem;
	padding: 0 0.125rem;
}

.category_img {
	width: 0.29296875rem;
	height: 0.29296875rem;
	vertical-align: middle;
	margin-right: 0.1328125rem;
}

.category_left_li span {
	line-height: 0.732421875rem;
}

.category_count {
	background: #ccc;
	font-size: 0.0625rem;
	color: #fff;
	padding: 0 0.0625rem;
	border: 0.015625rem solid #ccc;
	border-radius: 0.5rem;
	vertical-align: middle;
	margin-right: 0.15625rem;
	position: relative;
	left: 0.28515625rem;
	top: 0;
}

.shops{
	width: 100%;
	height: 3.125rem;
	padding:0.28125rem ;
	box-sizing: border-box;
	border-bottom: 0.015625rem #ccc solid;
}
.shops>.shopimg{
	width: 2.34375rem;
	height: 2.34375rem;
	float: left;
}
.shops>.shopimg>img{
	width: 100%;
	height: 100%;
}
.shops>.shoptext{
	width: 72%;
	height: 2.34375rem;
	text-align: left;
	float: right;
}
.shops>.shoptext>div{
	height: 0.78125rem;
}
.shops>.shoptext>.name>.shopname{
	width: 50%;
	height: 0.46875rem;
	line-height: 0.46875rem;
	float: left;
	text-overflow: ellipsis;
	white-space: normal;
	overflow: hidden;
}
.shops>.shoptext>.name span{
	display: inline-block;
	font-size: 0.25rem;
	float: left;
	padding: 0.015625rem 0.0625rem;
	background: yellow;
	margin-right: 0.0625rem;
	border-radius: 0.0625rem;
}
.shops>.shoptext>.talk>.song{
	float: right;
	
}
.shops>.shoptext>.talk>.song>span{
	display: inline-block;
	font-size: 0.21875rem;
	padding: 0.015625rem 0.046875rem;
	color: #fff;
	margin-right: 0.03125rem;
	border-radius: 0.0625rem;
	background: #3190e8;
}

</style>