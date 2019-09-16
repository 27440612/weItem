<template>
	<div id="contain">
        <elmheader>
            <template v-slot:left>
                <router-link to="/benefit">&lt;</router-link>
            </template>
            <template v-slot:center>兑换红包</template>
        </elmheader>
		<div class="contain">
			<div class="exchange_code">
				<input type="text" placeholder="请输入兑换码" class="exchange_input" v-model="duihma" @input="green()">
				<div class="input_container captcha_code_container">
					<input type="text" placeholder="验证码" maxlength="4" v-model="yzm">
					<div class="img_change_img">
						<img :src="Img" style=""> 
						<div class="change_img" @click="btn">
						<p>看不清</p> 
						<p style="color: #3b95e9;">换一张</p>
						</div>	
					</div>
				</div>
			</div>
			<div @click="clicks(),openMask()" class="determine">兑换</div>
			<dialog-bar v-model="sendVal" type="confirm" :content="texts"></dialog-bar>
		</div>
	</div>
</template>
<style scoped>
*{
	z-index: 1;
}
#contain{
	background: #f5f5f5;
}
.captcha_code_container .img_change_img img {
    width: 2.65625rem;
    height: 1.09375rem;
    margin-right: 0.15625rem;
}
.exchange_code .exchange_input {
    width: 100%;
    font-size: 0.390625rem;
    color: #666;
    padding: 0.46875rem 0.15625rem;
	border-radius: 0.234375rem;
	border: none;
	outline: none;
}
.captcha_code_container input {
    font-size: 0.390625rem;
    color: #666;
    padding: 0.15625rem;
    border-radius: 0.234375rem;
	flex: 3;
	border: none;
	outline: none;
}
.change_img p{
	width: 0.9375rem;
	font-size: 0.3125rem;
    color: #666;
}
.change_img{
	width: 0.9375rem !important;
}
	.captcha_code_container .img_change_img .change_img {
		display: -ms-flexbox;
		/* display: flex; */
		flex-direction: "column";
		flex-wrap: wrap;
		width: 3.125rem;
		justify-content: center;
	}
	.captcha_code_container .img_change_img {
		display: flex;
		align-items: center;
		flex: 2;
		margin-left: 0.234375rem;
		background-color: #fff;
		padding-left: 0.15625rem;
		border-radius: 0.234375rem;
	}
	.captcha_code_container {
		height: 1.7187500000000002rem;
		display: flex;
		margin-top: 0.546875rem;
	}
	.exchange_code {
		margin-top: 0.546875rem;
		padding: 0 0.390625rem;
	}
	.determine {
    background-color: #ccc;
    font-size: 0.546875rem;
    color: #fff;
    text-align: center;
    margin: 0 0.546875rem;
    line-height: 1.40625rem;
    border-radius: 0.3125rem;
    margin-top: 0.546875rem;
}
</style>
<script>
import Header from "../components/Header";
import dialogBar from '../components/alert'
export default {
	components:{
		'elmheader': Header,
		'dialog-bar': dialogBar,
	},
	data() {
		return {
			duihma:'',
			Img:'',
			yzm:'',
			sendVal: false,
			texts:''
		}
	},
	created() {
		this.btn()
	},
	methods: {
		openMask(index){
            this.sendVal = true;
        },
		clicks(){
			if(this.duihma.length==0){
				this.texts='请输入兑换码'
			}else if(this.yzm.length==0){
				this.texts='请输入验证码'
			}else{
				this.texts='无效的兑换码'
			}
		},
		green(){
			var determine=document.querySelector('.determine')
			if(this.duihma.length==0){
				determine.style.background="#ccc"
				
			}else{
				determine.style.background="#4cd964"
			}
		},
		btn(){
			this.$axios.post('https://elm.cangdu.org/v1/captchas').then(res=>{
				this.Img=res.data.code
				console.log(res)
			})
		}
	},
}
</script>