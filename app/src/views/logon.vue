<template>
	<div class="j-box">
		<div class="j-header">
			<div class="j-headerleft"><router-link to="./login" class="j-router">&lt;</router-link></div>
			<div class="j-headerright">密码登录</div>
		</div>
		<div class="j-content">
			<div class="j-content-one"><input type="text" placeholder="账号" class="j-input j-width" v-model="logon"></div>
			<div class="j-content-two">
				<div class="j-content-two-left"><input type="password" placeholder="密码" class="j-inputs" v-model="password" id="seePassword"></div>
				<div class="j-content-two-right">
					<div class="j-see-password" id="password">
						<span id="passwordS">off...</span>
						<div class="j-see-password-move" :class="isOpen?'active':''" @click="passMove($event)" id="j-see-password-move"></div>
					</div>
				</div>
			</div>
			<div class="j-content-three">
				<div class="j-content-three-left"><input type="text" placeholder="验证码" class="j-inputss" v-model="verifyNumber"></div>
				<div class="j-content-three-center">
					<img :src="verifyImg" class="password_img" />
				</div>
				<div class="j-content-three-right">
					<p>看不清</p>
					<p @click="verifyImg_again">换一张</p>
				</div>
			</div>
		</div>
		<div class="j-content-bottom">
			温馨提示：未注册过的账号，登录时将自动注册注册过的用户可凭账号密码登录
		</div>
		<div class="j-footer">
			<button class="j-btn" @click="logon_btn">登录</button>
		</div>
		<div class="j-footer-bottom">
			重置密码?
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isOpen:false,
				logon: '',
				password: '',
				verify: '',
				verifyImg: '',
				verifyNumber: '',
			}
		},
		methods: {
			passMove(e){
				this.isOpen = !this.isOpen;
				var seePassword = document.querySelector('#seePassword')
				var password=document.querySelector('#password')
				var passwordS=document.querySelector('#passwordS')
				if(this.isOpen){
					seePassword.type = 'text'
					password.style.background='#4cd964'
					passwordS.innerHTML='off'
				}else{
					seePassword.type = 'password'
					password.style.background='#CCCCCC'
					passwordS.innerHTML='on'
				}
			},
			logon_btn(a) {
				if(this.logon == '') {
					alert('请输入账号');
					return;
				} else if (this.password == ''){
					alert('请输入密码')
					return;
				} else if (this.verifyNumber == ''){
					alert('请输入验证码')
					return;
				}else {
					this.axios.post('https://elm.cangdu.org/v2/login', {
						username: this.logon,
						password: this.password,
						captcha_code: this.verifyNumber
					}).then((data) => {
						console.log(data);
						if(data.data.message == '密码错误') {
							alert('登录失败');
						} else if (data.data.message == '验证码不正确'){
							alert('验证码错误');
						} else {
							alert('登录成功');
                            this.$router.push({path:'/login'})
						}
					})

				}
			},
			verifyImg_again() {
				this.axios.post('https://elm.cangdu.org/v1/captchas', {}).then((data) => {
					//console.log(data)
					this.verifyImg = data.data.code
				})
			}
		},
		created() {
			this.axios.post('https://elm.cangdu.org/v1/captchas', {}).then((data) => {
				//console.log(data)
				this.verifyImg = data.data.code
			})
		}
	};
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	
	.j-box {
		width: 100%;
		height: 17.733333rem;
		overflow: hidden;
		background: #eee;
	}
	
	.j-header {
		width: 100%;
		height: 1.2rem;
		background: #3190e8;
	}
	
	.j-headerleft {
		color: white;
		float: left;
		font-size: 0.466666rem;
		height: 1.2rem;
		line-height: 1.2rem;
		margin-left: 0.266666rem;
	}
	
	.j-headerright {
		color: white;
		float: left;
		line-height: 1.2rem;
		font-size: 0.466666rem;
		width: 90%;
		text-align: center;
	}
	
	.j-content {
		width: 100%;
		background: white;
		margin-top: 0.333333rem;
	}
	
	.j-content-one {
		width: 100%;

		border-bottom: 1px solid #ccc;
	}
	
	.j-content-two-left {
		width: 100%;
		float: left;

	}
	
	.j-content-two-right {
		width: 1.5rem;
		/*position:relative;
		top: -1.25rem;*/
		margin-top: -1.2rem;
		float: right;
		margin-right: 0.533333rem;
	}
	
	.j-see-password {
		width: 100%;
		height: 0.4rem;
		background: #cccccc;
		margin-top: 0.446666rem;
		position: relative;
		border-radius: 0.16rem;
		color: #fdfdfd;
		text-align: center;
		font-size: 0.266666rem;
	}
	.j-see-password-move {
		width: 0.773333rem;
		height: 0.773333rem;
		background: #f1f1f1;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: -0.19rem;
		transition: .25s;
	}
	.j-see-password .active{
		left: 0.733rem;
		top:-0.19rem;
	}
	.j-input {
		width: 6.666666rem;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.4rem;
		border: none;
		outline: none;
		border-bottom:1px solid gray;
	}
	
	.j-inputs {
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.4rem;
		border: none;
		border-bottom:1px solid gray;
		outline: none;
		padding-left: 1em;
		
	}
	
	.j-content-two {
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	
	.j-content-three {
		width: 100%;
		height: 1.333333rem;
		border-bottom: 1px solid #eee;
	}
	
	.j-content-three {
		width: 100%;
		height: 1.333333rem;
		margin-left: 0.266666rem;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	
	.j-content-three-left {
		width: 5.666666rem;
		height: 1.2rem;
		float: left;
	}
	
	.j-content-three-center {
		width: 1.733333rem;
		height: 1.333333rem;
		float: left;
	}
	
	.j-content-three-right {
		width: 1.44rem;
		height: 1.333333rem;
		float: right;
		margin-right: 0.8rem;
	}
	
	.j-content-three-right p {
		font-size: 0.333333rem;
		line-height: 0.586666rem;
	}
	
	.j-content-three-right p:nth-of-type(1) {
		margin-top: 0.2rem;
	}
	
	.j-content-three-right p:nth-of-type(2) {
		color: #3592e8;
	}
	
	.j-inputss {
		width: 6.666666rem;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.4rem;
		border: none;
		outline: none;
	}
	
	.j-content-bottom {
		width: 80%;
		height: 1.6rem;
		text-align: left;
		line-height: 0.8rem;
		margin-left: 0.2rem;
		font-size: 0.266666rem;
		color: red;
	}
	
	.j-footer {
		width:90%;
		height: 1.266666rem;
		background: #4cd964;
		border-radius: 0.133333rem;
		margin: 0 auto;
	}
	
	.j-btn {
		width: 80%;
		height: 1.266666rem;
		color: white;
		border: none;
		outline: none;
		margin: 0 auto;
		background: none;
		font-size: 0.373333rem;
	}
	
	.j-footer-bottom {
		width: 90%;
		height: 0.4rem;
		float: right;
		text-align: right;
		margin-top: 0.666666rem;
		margin-right: 0.266666rem;
		color: #95c4ef;
	}
	
	.password_img {
		width: 1.853333rem;
		height: 0.866666rem;
		margin-top: 0.24rem;
	}
	.j-width{
		width:100%;
		padding-left: 1em;
	}
	.j-router{
		text-decoration: none;
		color: white
	}
</style>