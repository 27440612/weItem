<template>
	<div>
        <elmheader>
            <template v-slot:left>
                <router-link to="/personal">&lt;</router-link>
            </template>
            <template v-slot:center>我的优惠</template>
        </elmheader>
		 <div class="contain" v-if="$store.state.user.userName" >
			<div class="yh-btn" style="border-bottom:1px solid #f1f1f1">
				<div class="yh-item">
					<span style="margin-right:2.34375rem" @click="Is=0" :class="{active:Is==0}">红包</span>
					<span @click="Is=1" :class="{active:Is==1}">商家代金券</span>
				</div>
			</div>
			<div v-if="Is==0" class="con">
				<header>
					<div>
						有 <span style="color:red">3</span> 个红包即将到期
					</div>
                    <div><router-link to="/hbred">
                        <span style="color:#3190e8" class="iconfont icon-ziyuan"></span>
                        红包说明</router-link> </div>
                </header>
				<!-- 优惠券 -->
				<ul>
					<li>
						<div class="list-item">
							<div  class="item-left">
								<span style="text-align: center;line-height: 1.5rem;font-size: 0.6375rem;color: #ff5340;">¥1.0</span> 
								<p>满 20 元可用</p>
							</div> 
							<div class="item-center" style="flex: 2;margin-left: 1.09375rem;">
								<h4>分享红包</h4> 
								<p >2017-05-23到期</p> 
								<p>限收货手机号为 13681711254</p>
							</div>
								<div style="font-size: 0.546875rem;color: #ff5340;">剩3日</div>
						</div> 
					</li>
					<li>
						<div class="list-item">
							<div  class="item-left">
								<span style="text-align: center;line-height: 1.5rem;font-size: 0.6375rem;color: #ff5340;">¥2.0</span>  
								<p>满 40 元可用</p>
							</div> 
							<div class="item-center" style="flex: 2;margin-left: 1.09375rem;">
								<h4>分享红包</h4> 
								<p >2017-05-23到期</p> 
								<p>限收货手机号为 13681711254</p>
							</div>
								<div style="font-size: 0.546875rem;color: #ff5340;">剩3日</div>
						</div> 
					</li>
					<li>
						<div class="list-item">
							<div  class="item-left">
								<span style="text-align: center;line-height: 1.5rem;font-size: 0.6375rem;color: #ff5340;">¥4.5</span>
								<p>满 30 元可用</p>
							</div> 
							<div class="item-center" style="flex: 2;margin-left: 1.09375rem;">
								<h4>分享红包</h4> 
								<p >2017-05-23到期</p> 
								<p>限收货手机号为 13681711254</p>
							</div>
								<div style="font-size: 0.546875rem;color: #ff5340;">剩3日</div>
						</div> 
						<footer class="list_item_footer">
							<p >限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
						</footer>
					</li>
				</ul>
				<router-link  class="history_hongbao" to="/historyhb">
					<span class="check_history">查看历史红包 &gt;</span>
				</router-link>
				<footer class="hongbao_footer">
					<router-link :to="{name:'exchange'}" class="hongbao_style" style="border-right: 0.015625rem solid rgb(245, 245, 245);">
                          兑换红包
                    </router-link>
					<router-link :to="{name:'commend'}" class="hongbao_style">推荐有奖 </router-link>
				</footer>
			</div>
			<div v-else class="con">
				<div style="line-height:1.5625rem;text-align:right">
					<router-link style="color:#3190e8" :to="{name:'coupon'}"><span class="iconfont icon-ziyuan"></span>商家代金券说明</router-link>
				</div>
				<div style="text-align:center">
					<img src="../assets/img/kong.png" alt="">
					<p>无法使用代金券</p>
					<p>非客户端或客户端版本过低</p>
					<router-link to="/updownApp">
					<div style=" background-color: #56d176;font-size: 0.5078125rem;color: #fff; padding: 0.234375rem; border-radius: 0.10937500000000001rem;"> 下载或更新客户端</div>
					</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<style scoped>
.hongbao_footer .hongbao_style{
    flex: 1;
    line-height: 1.5625rem;
    text-align: center;
    font-size: 0.546875rem;
    color: #555;
}
.hongbao_footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
}
.check_history{
	font-size: 0.390625rem;
    color: #999;
    margin-right: 0.15625rem;
}
.history_hongbao{
	padding: 0.390625rem 0 2.1875rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.list_item_footer p{
	list-style-type: disc;
    font-size: 0.3125rem;
    color: #999;
    margin-left: 0.15625rem;
}
.list_item_footer{
	background-color: #f9f9f9;
    padding: 0.234375rem;
    border-bottom-left-radius: 0.390625rem;
	border-bottom-right-radius: 0.390625rem;
}
.item-center p{
	list-style-type: disc;
    margin-left: -0.546875rem;
	line-height: 0.625rem;
    font-size: 0.3125rem;
    color: #999;
}
.item-center h4{
	font-size: 0.546875rem;
    color: #666;
    margin-left: -0.546875rem;
}
	.list-item{
		display: flex;
		justify-content: space-between;
		padding: 0.78125rem 0.390625rem 0.625rem;
	}
	.item-left p{
		font-size: 0.15625rem;
		color: #999;
	}
	.item-left{
		font-size: 0.5078125rem;
		color: #ff5340;
		font-weight: 700;
	}
	.item-left{
		font-size: 0;border-right: 0.0390625rem dotted #ccc;flex: 1;
	}
	.con ul li{
		background: #fff url('../assets/img/top_bg.png') repeat-x;
		background-size: 0.390625rem 0.15625rem;
		margin-bottom: 0.390625rem;
		border-radius: 0.1953125rem;
	}
	header a{
		color: #3190e8;
		font-size: 0.3125rem
	}
	header *{
		color: #666;
		font-size: 0.3125rem
	}
	header{
		display: flex;
		justify-content: space-between;
		font-size: 0.3125rem;
		line-height: 1.5625rem;
	}
	.con{
		padding: 0 0.3125rem;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		color: #333;
		font-weight: 400;
		font-family: Microsoft Yahei;
		box-sizing: border-box;
	}
	.yh-btn{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 1.5625rem;
		background-color: #fff;
	}
	.yh-btn span{
		text-align: center;
		font-size: 0.46875rem;
		color: #333;
		padding-bottom: 0.15625rem;
		border-bottom: 0.015625rem solid #fff;
	}
	.yh-btn .active{
		border-bottom-color: #3190e8;
   		color: #3190e8;
	}
</style>
<script>
import Header from "../components/Header";
export default {
	components: {
        elmheader: Header,
	},
	data() {
		return {
			Is:0
		}
	},
}
</script>