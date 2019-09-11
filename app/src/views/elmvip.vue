<template>
  <div>
    <elmheader>
      <template v-slot:left>
        <router-link to="/personal">&lt;</router-link>
      </template>
      <template v-slot:center>会员中心</template>
    </elmheader>
    <div>
      <div class="contain">
        <p style="padding:0.15625rem">为账户 <span style="font-weight: 700;font-size:0.390625rem">222222</span> 购买会员</p>
        <div class="vip-item">
          <div class="tits"
               style="border-bottom: 0.64px solid gainsboro">
            <router-link to><span style="float:right;color:gray;font-size:0.46875rem">会员说明 > </span></router-link>
            <p> 会员特权</p>
          </div>
          <div class="vip-logo">
            <dl>
              <dt><img src="../assets/sheng.jpg"
                     alt=""> </dt>
              <dd>
                <h5>减免配送费</h5>
                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                <p>蜂鸟专送专享</p>
              </dd>
            </dl>
          </div>
          <div class="vip-logo">
            <dl>
              <dt><img src="../assets/jian.jpg"
                     alt=""> </dt>
              <dd>
                <h5>减免配送费</h5>
                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                <p>蜂鸟专送专享</p>
              </dd>
            </dl>
          </div>
        </div>
        <div class="vip-item">
          <div class="tits">
            <p style=" border-bottom: 0.01rem solid gainsboro">开通会员</p>
            <router-link to>
              <div class="btn">购买</div>
            </router-link>
            <p>1个月
              <span style="color:#f60">￥20</span>
            </p>
          </div>
        </div>
        <div class="vip-item">
          <div class="tits">
            <router-link to>
              <p>兑换会员<span style="float:right">使用卡号卡密 ></span></p>
            </router-link>
          </div>
        </div>
        <div class="vip-item">
          <div class="tits">
            <router-link to>
              <p>购买记录<span style="float:right">开发票 ></span></p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
     elmheader: Header,
  }
}
</script>
<style scoped>
p{
	font-size: 0.46875rem;
	color: black
}
.vip-item{
	background: #fff;
	padding: 0.15625rem;
	margin-bottom: 0.3125rem;
}
.tits *{
	font-size: 0.46875rem;
	line-height: 1.25rem;
}
.vip-logo dl{
	display: flex;
	margin: 0.15625rem 0;
}
.vip-logo  dt{
	padding: 0 0.3125rem
}
.vip-logo dd p{
	font-size: 0.3125rem
}

.vip-logo dd h5{
	font-size: 0.390625rem
}
.btn{
	border: 0.0390625rem solid #f60;
	border-radius: 0.3125rem;
	line-height: 0.9375rem;
	height: 0.9375rem;
	float: right;
	width: 2.03125rem;
	margin: 0.234375rem;
    text-align: center;
    font-size: 0.46875rem;
    color: #f60;
}
.tits p span{
	color: gainsboro
}
</style>