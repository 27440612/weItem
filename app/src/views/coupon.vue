<template>
	<div id="contain">
        <elmheader>
            <template v-slot:left>
                <router-link to="/benefit">&lt;</router-link>
            </template>
            <template v-slot:center>代金券说明</template>
        </elmheader>
		<div class="contain">
			<div style="padding:0.3125rem">
				<h3>Q1: 什么是商家代金券？</h3>
				<p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
				<h3>Q2: 怎么获得商家代金券？</h3>
				<ul>
					<li>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</li>
					<li>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</li>
				</ul>
				<h3>Q3: 商家代金券使用条件</h3>
				<ul>
					<li>商家代金券仅限在指定商家使用</li>
					<li>商家代金券仅限在线支付使用</li>
					<li>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style scoped>
	h3{
		line-height: 1.5625rem;
	}
	p,li{
		font-size: 0.46875rem;
		color: #666;
		line-height: 0.78125rem;
	}
</style>
<script>
import Header from "../components/Header";
export default {
	components:{
		elmheader: Header,
	}
}
</script>