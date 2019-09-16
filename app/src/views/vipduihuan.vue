<template>
	<div id="contain">
        <elmheader>
            <template v-slot:left>
                <router-link to="/elmvip">&lt;</router-link>
            </template>
            <template v-slot:center>兑换会员</template>
        </elmheader>
		<div class="contain">
			<p class="buy_for">成功兑换后将关联到当前帐号： <span>{{this.$store.state.user.userName}}</span></p>
			<form class="form_style">
				<input type="text" name="cartNumber" placeholder="请输入10位卡号"> 
				<input type="text" name="passWord" placeholder="请输入6位卡密">
			</form>
			<p class="determine">兑换</p>
			<footer class="Binding">
				<h3 >——温馨提示——</h3> 
				<p >新兑换的会员服务，权益以「会员说明」为准。</p> 
				<p >月卡：
					<b>30次</b>
					减免配送费。
				</p> 
				<p>季卡：
					<b>90次</b>
					减免配送费。
				</p> 
				<p>年卡：
					<b>360</b>
					次减免配送费。
				</p> 
				<p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p></footer>
		</div>
	</div>
</template>
<style scoped>	
	*{
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		font-weight: 400;
		font-family: Microsoft Yahei;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
	}
	.buy_for span {
		font-weight: 700;
	}
	.buy_for {
		font-size: 0.46875rem;
		color: #666;
		line-height: 1.5625rem;
		padding-left: 0.546875rem;
	}
	.form_style input {
		border-bottom: 0.015625rem solid #f5f5f5;
		height: 1.5625rem;
		font-size: 0.46875rem;
		color: #999;
		padding-left: 0.546875rem;
        outline: none;
	}
	.form_style {
		display: flex;
		flex-direction: column;
	}
	.determine {
		background-color: #ccc;
		font-size: 0.546875rem;
		color: #fff;
		text-align: center;
		margin: 0 0.546875rem;
		line-height: 1.40625rem;
		border-radius: 0.15625rem;
		margin-top: 0.546875rem;
		font-weight: 700;
	}
	footer p{
		padding-left: 0.78125rem;
	}
	footer p,footer b{
		font-size: 0.390625rem;
		color: #aaa;
		line-height: 0.625rem;
	}
	footer h3{
		text-align: center;
		font-weight: 400;
		font-size: 0.390625rem;
		color: #aaa;
		margin-bottom: 0.46875rem;
	}
	footer{
		margin-top: 0.78125rem;
		padding: 0 0.3125rem;
	}
</style>
<script>
import Header from "../components/Header";
export default {
  components: {
     elmheader: Header,
  }
}
</script>