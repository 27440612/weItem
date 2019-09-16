<template>
	<div id="contain">
        <elmheader>
            <template v-slot:left>
            <span @click="$router.back(-1)">&lt;</span>
            </template>
            <template v-slot:center>在线支付</template>
        </elmheader>
		<div class="contain">
			<div class="date" style="text-align:center;padding:0.9375rem;background:white">
				<p>支付剩余时间</p>
				<h2 style="font-size:0.9375rem">
					<span>00</span> : <span>{{minute}}</span> : <span>{{second}}</span>
				</h2>
			</div>
			<p style="padding:0.3125rem">选择支付方式</p>
			<ul class="payment">
				<li>
					<div class="zf-img"><img src="../assets/img/zfb.png" alt=""></div>
					<span>支付宝</span>
					<div class="zf-btn" @click="num=0" :class="{active:num==0}">√</div>
				</li>
				<li>
					<div class="zf-img"><img src="../assets/img/wx.png" alt=""></div>
					<span>微信</span>
					<div class="zf-btn" @click="num=1" :class="{active:num==1}">√</div>
				</li>
			</ul>
			<div class="determine" @click="sure()">确定支付</div>
            <dialog-bar @confirm="confirm" v-model="sendVal" type="confirm" :content="texts"></dialog-bar>
		</div>
	</div>
</template>
<style scoped>
*{
    z-index: 1;
}
	.determine{
		width: 90%;
		height: 1.5625rem;
		text-align: center;
		color: white;
		background: #4cd964;
		margin: 0 auto;
		line-height: 1.5625rem;
		border-radius: 0.09375rem;
	}
	.payment{
		background: white
	}
	.payment li{
		padding: 0.3125rem;
		box-shadow: 0.015625rem 0 0.015625rem gainsboro
	}
	.payment .zf-img{
		margin-right:0.46875rem 
	}
	.payment .zf-img img{
		width: 1.5625rem;
		height: 1.5625rem;
	}
	.payment .active{
		background: #4cd964
	}
	.zf-btn{
		width: 0.9375rem;
		height: 0.9375rem;
		border-radius: 50%;
		background: #ccc;
		color: white;
		text-align: center;
		line-height: 0.9375rem;
		float: right;
		margin-top: 0.46875rem
	}
	.payment span{
		font-size: 0.625rem;
		font-weight: 400
	}
	.payment li>*{
		display: inline-block;
		vertical-align: middle
	}
</style>
<script>
import Header from "../components/Header";
import dialogBar from '../components/alert';
export default {
  components: {
     'elmheader': Header,
     'dialog-bar': dialogBar,
  },
	data(){
		return{
			num:0,
			minute:15,
			second:'00',
            tid:'',
            sendVal: false,
            texts:'暂不开放支付功能',
		}
	},
	created() {
		var str = 60
		this.tid=setInterval(()=>{
			str--
			this.$nextTick(()=>{
				if(this.second=='00'){
					this.minute--
					str=59
				}
				this.second=add(str)
			})
		},1000)
		function add(str){
			return str < 10 ? '0'+str:str
        }
        this.openMask()
    },
    methods:{
        sure(){
            this.texts='当前环境无法支付，请打开官方APP进行付款'
            this.openMask()
        },
        confirm(){
            this.texts='暂不开放支付功能'
        },
        openMask(index){
            this.sendVal = true;
        },
    },
	beforeDestroy() {
		clearInterval(this.tid)
	},
}
</script>