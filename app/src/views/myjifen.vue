<template>
	<div>
		<!-- tit -->
        <elmheader>
            <template v-slot:left>
                <router-link to="/personal">&lt;</router-link>
            </template>
            <template v-slot:center>我的积分</template>
            <template v-slot:right></template>
        </elmheader>
		<!-- 余额详情 -->
		<userdata>
			<template v-slot:tit-left>当前积分</template>
			<template v-slot:tit-right><router-link :to="{name:'scoreinfo'}" style="float:right;color:#3190e8"><span style="color:#3190e8" class="iconfont icon-ziyuan"></span>积分说明</router-link></template>
			<template v-slot:num>{{score}}</template>
			<template v-slot:units>分</template>
			<template v-slot:btn><p @click="openMask()" style="background:#fe6d47;height:1.5625rem;line-height:1.5625rem;color:white;font-weight:600;border-radius:0.3125rem">积分兑换商品</p></template>
			<template v-slot:loding-tit>最近30天积分纪录</template>
			<template v-slot:loding-img><img src="" alt=""></template>
			<template v-slot:loding-info><p>最近30天无积分纪录</p></template>
		</userdata>
		<router-view></router-view>
		<dialog-bar v-model="sendVal" type="confirm" content="快去下单赚取大量积分吧"></dialog-bar>
	</div>
</template>
<script>
import Header from "../components/Header";
import userdata from '../components/user_data';
import dialogBar from '../components/alert'
export default {
	components:{
	'elmheader': Header,
	'userdata':userdata,
	'dialog-bar': dialogBar,
    name:'contain'
  },
  data() {
	  return {
		  score:0,
		  sendVal: false,
	  }
  },
  methods:{
	  openMask(index){
            this.sendVal = true;
        },
  }
}
</script>
<style scoped>
*{
	margin: 0;
	box-sizing: border-box
}
#contain{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 203;
	min-height: 27rem;
	background-color: #fff;
}
.header{
	background-color: #3190e8;
    position: fixed;
    z-index: 100;
	left: 0;
	line-height: 1rem;
	text-align: center;
    top: 0;
    width: 100%;
    height: 1rem;
}
.nav{
	padding: .2rem;
    background-color: #3190e8;
}
.price{
	padding: .1rem;
	background: white;
	border-radius: .06rem
}
.btns{
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	background: #ccc;
	color: white;
	border-radius: .06rem;
	text-align: center;
}
.jy{
	font-size: .3rem;
    color: #999;
    line-height: 1rem;
    padding-left: .1rem
}
.no_log{
	text-align: center;
    margin-top: .6rem
}
.no_log p{
	margin-top: .2rem;
    font-size: .4rem;
    color: #666;
}
</style>