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
        <p style="padding:0.3rem;font-size: 0.4rem;">为账户 <span style="font-weight: 700;font-size:0.390625rem">222222</span> 购买会员</p>
        <div class="vip-item">
          <div class="tits"
               style="border-bottom: 0.64px solid gainsboro">
            <router-link to><span style="float:right;color:gray;font-size:0.42rem">会员说明 > </span></router-link>
            <p style="font-size: 0.4rem;"> 会员特权</p>
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
            <p style=" border-bottom: 0.01rem solid gainsboro;font-size: 0.4rem;">开通会员</p>
            <router-link to>
              <div class="btn">购买</div>
            </router-link>
            <p style="font-size: 0.44rem;">1个月
              <span style="color:#f60">￥20</span>
            </p>
          </div>
        </div>
        <div class="vip-item">
          <div class="tits">
            <router-link to>
              <p style="font-size: 0.42rem;">兑换会员<span style="float:right;font-size: 0.44rem;">使用卡号卡密 ></span></p>
            </router-link>
          </div>
        </div>
        <div class="vip-item">
          <div class="tits">
            <router-link to>
              <p style="font-size: 0.42rem;">购买记录<span style="float:right;font-size: 0.44rem;">开发票 ></span></p>
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
	box-sizing: border-box;
}
.tits *{
	font-size: 0.46875rem;
	line-height: 1.24rem;
}
.vip-logo dl{
	display: flex;
	padding:0.09375rem;
	margin-top: 0.0625rem;
	box-sizing: border-box;
}
.vip-logo  dt{
	width: 26%;
	margin-right: 0.15625rem;
	padding: 0 0.3125rem;
	box-sizing: border-box;
}
.vip-logo  dt img{
	width: 94%;
	height: 94%;
}
.vip-logo dd p{
	font-size: 0.3125rem;
}

.vip-logo dd h5{
	font-size: 0.390625rem;
	margin-bottom: 0.09375rem;
}
.btn{
	border: 0.0390625rem solid #f60;
	border-radius: 0.3125rem;
	line-height: 0.8rem;
	padding: 0 0.5rem;
	height:0.8rem;
	float: right;
	margin-top: 0.1rem;
	margin-right: 0.234375rem;
    text-align: center;
    font-size: 0.4rem;
    color: #f60;
}
.tits p span{
	color: gainsboro
}
</style>