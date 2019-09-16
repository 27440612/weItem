<template>
  <div class="confirmOrder" style="height:100%">
    <elmheader>
        <template v-slot:left>
            <router-link to="/shopping">&lt;</router-link>
        </template>
        <template v-slot:center>确认订单</template>
        <template v-slot:right v-if="login_success">
          <router-link to="/personal">
          <div class="iconfont icon-wode1"></div>
          </router-link>
        </template>
        <template v-slot:right v-else>
          <router-link to="/login?in">登录</router-link>/
          <router-link to="/login?up">注册</router-link>
        </template>
    </elmheader>
    <div style="padding:0.46875rem;background-color:#fff;" v-if="inshow">
      <router-link style="color:#000" :to="{path:'chooseaddress'}">
        <div>
          <span style="font-size:0.546875rem;font-weight:800;margin:0rem 0.234375rem;">{{this.$route.params.name.name}}</span>
          <span style="font-size:0.46875rem;margin:0rem 0.10937500000000001rem;">{{sex==this.$route.params.name.sex?'先生':'女士'}}</span>
          <span style="font-size:0.46875rem;">{{this.$route.params.name.phone}}</span>
        </div>
        <div style="width:100%;height:0.78125rem;">
          <span class="tag">{{this.$route.params.name.tag}}</span>
          <span style="font-size:0.46875rem;float: left;">{{this.$route.params.name.address_detail}}</span>
          <div style="float:right;position: relative;top:-0.46875rem;color:#ccc;font-size:0.78125rem;">></div>
        </div>
      </router-link>
    </div>
    <div class="add_address" v-else>
      <router-link :to="{path:'chooseaddress'}">
        <p style="color:#000">
          请添加一个收货地址
          <span class="fr">&gt;</span>
        </p>
      </router-link>
    </div>
    <div class="deliveryTime">
      <p>送达时间</p>
      <div class="quickly">
        <p>尽快送达 | 预计 19:09</p>
        <p>蜂鸟专送</p>
      </div>
    </div>
    <div class="PayWay">
      <div class="PayWay_top clearfix" @click="PayWay_top($event)">
        <span class="fl">支付方式</span>
        <span class="fr ccc">在线支付&nbsp;&nbsp; &gt;</span>
      </div>
      <div class="PayWay_bottom clearfix">
        <span class="fl ccc">红包</span>
        <span class="fr ccc">暂时只在饿了么APP中支持</span>
      </div>
    </div>
    <div class="detail">
      <div class="detail_one">
        <img src="http://elm.cangdu.org/img/164ad0b6a3917599.jpg">
        <span>效果演示</span>
      </div>
      <div class="detail_two clearfix">
        <span class="detail_two_l fl">123</span>
        <span class="detail_two_c fr">￥20</span>
        <span class="detail_two_r fr red cuo">×</span>
      </div>
      <div class="detail_five">
        <p>
          订单
          <span>￥7687</span>
        </p>
        <p class="fr">
          待支付
          <span>￥7687</span>
        </p>
      </div>
    </div>
    <div class="beizhu">
      <router-link to="/kouwei">
        <p class="beizhu1">
          <span>定单备注</span>
          <span class="fr">
              <span v-for="(i,index) in list" :key="index" v-show="txttype">{{i}} </span>
              <span v-show="!txttype">口味、偏好等</span> &gt;
          </span>
        </p>
      </router-link>

      <router-link to="/invoice">
        <p class="beizhu2">
          <span>发票抬头</span>
          <span class="fr">不需要开发票 &gt;</span>
        </p>
      </router-link>
    </div>
    <div v-show="show">
      <div class="cover" @click="notShow"></div>
      <div class="payToTop">
        <div class="pay">
          <p>支付方式</p>
          <ul>
            <li>
              <span>货到付款(商家不支持货到付款)</span>
              <input type="checkbox" disabled class="fr">
            </li>
            <li>
              <span>在线支付</span>
              <input type="checkbox" checked='true' class="fr">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="alet_container" v-show="isconfirm">
      <section class="tip_text_container">
        <div class="tip_icon">
          <span></span>
          <span></span>
        </div>
        <p class="tip_text">请添加一个收货地址</p>
        <p class="con" @click="confimInformation()">确认</p>
      </section>
    </div>
    <router-view></router-view>
    <div class="foot">
      <div class="fl">待支付 ￥7687 </div>
      <div class="fr">
        <router-link to="/payment">确认下单</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
	components:{
		elmheader: Header,
	},
  data() {
    return {
      login_success: false, //有没有登陆成功
      // ff: '',
      covers: "", // cover
      payWay: "", // 支付方式
      show: false,
      isconfirm: false,
      inshow: false,
      data: "",
      sex: 0,
      list:'',
      txttype:false
    };
  },
  created() {
    console.log(this.$route.params)
    if(sessionStorage.userName){
      this.login_success=true
    }else{
      this.login_success=false
    }
    if(this.$route.params.name==undefined){
      this.inshow = false;
    }else{
      this.inshow = true;
    }
    info:{
      this.$axios.get('https://elm.cangdu.org/v1/users/'+localStorage.uid+'/addresses').then(data=>{
        // console.log(data);
        
      })
    }
  },
  methods: {
    PayWay_top(e) {
      this.show = !this.show;

      // console.log(this.PayWay_top)  不会报错，会打印出一个function
      // ƒ PayWay_top() { console.log(this.PayWay_top); }
    },
    notShow() {
      this.show = !this.show;
    },
    confimInformation() {
      this.isconfirm = !this.isconfirm;
    }
  },
  mounted() {
    // this.f = document.querySelector('#foot')
    // this.f.style.zIndex = '2000'
    // this.f.style.display = 'block'
  }
};
</script>
<style scoped>
.foot{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  font-size: 0.46875rem;
  line-height: 1.25rem;
  color: #fff;
}
.foot>div:nth-of-type(1){
  flex: 3;
  background-color: #3c3c3c;
  padding-left: 0.46875rem;
  box-sizing: border-box;
}
.foot>div:nth-of-type(2){
  flex: 1;
  text-align: center;
  background-color: #56d176;
}
.detail_two .red {
  color: #f60;
  margin-right: 0.46875rem;
  font-weight: 400;
  line-height: 1.25rem;
}
.ccc {
  color: #aaa;
}
* {
  margin: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}

.confirmOrder {
  background-color: #f5f5f5;
  padding-bottom: 1.5625rem;
}
header {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  background: #3190e8;
  color: #fff;
}
.headIcon {
  margin-right: 0.3125rem;
  font-size: 0.46875rem;
}
.h_left {
  margin-left: 0.3125rem;
}
.h_center {
  font-size: 0.46875rem;
  margin-left: 36%;
}
.add_address {
  width: 100%;
  height: 1.5625rem;
  border-bottom: 1.28px dashed #f5f5f5;
  background: #fff;
}
.add_address p {
  height: 1.5625rem;
  line-height: 1.5625rem;
  padding-left: 0.3125rem;
  box-sizing: border-box;
}
.add_address p span {
  margin-right: 0.3125rem;
  color: #999;
}
.deliveryTime {
  background-color: white;
  margin-top: 0.46875rem;
  border-left: 0.15625rem solid #3190e8;
  min-height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.3125rem;
}
.deliveryTime p {
  font-size: 0.46875rem;
  color: #333;
  font-weight: 700;
  padding-left: 0.46875rem;
}
.quickly {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.quickly p:first-of-type {
  font-size: 0.40625rem;
  color: #3190e8;
  margin-right: 0.15625rem;
  font-weight: 400;
}
.quickly p:nth-of-type(2) {
  font-size: 0.3125rem;
  color: #fff;
  background-color: #3190e8;
  width: 1.875rem;
  margin-top: 0.078125rem;
  margin-right: 0.46875rem;
  text-align: center;
  padding: 0rem;
}
.PayWay {
  margin-top: 0.3125rem;
  background-color: white;
}
.PayWay_top,
.PayWay_bottom {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  padding: 0 0.3125rem;
  border-bottom: 0.64px solid #f5f5f5;
}
.PayWay_top span,
.PayWay_bottom span {
  font-size: 0.40625rem;
}
.detail {
  background-color: white;
  margin-top: 0.3125rem;
}
.detail_one,
.detail_two,
.detail_three,
.detail_four,
.detail_five {
  border-bottom: 0.64px solid #f5f5f5;
}
.detail_one {
  height: 1.875rem;
  padding-top: 0.3125rem;
  padding-left: 0.3125rem;
}
.detail_one img {
  width: 0.9375rem;
  height: 0.9375rem;
  vertical-align: middle;
}
.detail_one span {
  font-size: 0.46875rem;
  vertical-align: middle;
  margin-left: 0.3125rem;
  color: #333;
}
.detail_two {
  padding: 0 0.3125rem;
  vertical-align: middle;
  height: 1.25rem;
  line-height: 1.25rem;
  margin-bottom: 0.15625rem;
  font-size: 0.375rem;
}
.detail_two span {
  font-size: 0.375rem;
  color: #666;
}
/* .cuo {
  margin-top: -0.15625rem;
} */
.detail_two_l,
.detail_two_c,
.detail_two_r {
  font-size: 0.46875rem;
}
.detail_three {
  background-color: white;
  height: 1.5625rem;
  padding: 0.3125rem;
  margin-top: -0.125rem;
}
.detail_three span {
  font-size: 0.46875rem;
}
.detail_four {
  background-color: white;
  height: 1.5625rem;
  line-height: 1.5625rem;
  padding: 0 0.3125rem;
}
.detail_four span {
  font-size: 0.46875rem;
}
.detail_five {
  background-color: white;
  height: 1.5625rem;
  line-height: 1.5625rem;
  padding: 0 0.3125rem;
}
.detail_five > p {
  font-size: 0.375rem;
  display: inline-block;
  line-height: 1.5625rem;
  color: #666;
}
.detail_five > p > span {
  font-size: 0.375rem;
  color: #666;
}
.detail_five > p:first-of-type span {
  margin-left: 0.3125rem;
}
.detail_five > p:last-of-type {
  color: #f60;
}
.detail_five > p:last-of-type span {
  color: #f60;
  margin-left: 0.3125rem;
}
.toPay {
  height: 1.875rem;
  line-height: 0.46875rem;
  position: relative;
}
.toPay span {
  font-size: 0.46875rem;
}
.yuan {
  position: absolute;
  top: 0.625rem;
  right: 0.125rem;
}
.beizhu {
  height: 3.125rem;
  background-color: #fff;
  margin-top: 0.46875rem;
}
.beizhu1,
.beizhu2 {
  height: 1.5625rem;
  line-height: 1.5625rem;
  padding: 0 0.3125rem;
  border-bottom: 0.64px solid #f5f5f5;
  color: #666;
}
.beizhu1 span,
.beizhu2 span {
  font-size: 0.375rem;
}
.beizhu1 span:last-of-type,
.beizhu2 span:last-of-type {
  color: #aaa;
}
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 203;
}
.pay {
  min-height: 6.25rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 204;
}
.pay p {
  background-color: #fafafa;
  font-size: 0.46875rem;
  color: #333;
  text-align: center;
  line-height: 1.25rem;
}
.pay ul li {
  line-height: 1.5625rem;
  position: relative;
  padding-left: 0.3125rem;
}
.pay ul li input {
  width: 0.46875rem;
  height: 0.46875rem;
  position: absolute;
  right: 0.46875rem;
  top: 0.46875rem;
}
.pay ul li:first-of-type span {
  color: #ccc;
  font-size: 0.46875rem;
}
.pay ul li:last-of-type span {
  font-size: 0.46875rem;
}
.alet_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}
.tip_text_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 7.8125rem;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-top: -2.34375rem;
  margin-left: -9.375rem;
  width: 18.75rem;
  padding-top: 0.9375rem;
  border: 0.64px;
  border-radius: 0.390625rem;
  background-color: rgba(0, 0, 0, 0.2);
}
.tip_text_container .tip_icon {
  width: 3.125rem;
  height: 3.125rem;
  border: 0.234375rem solid #f8cb86;
  border-radius: 50%;
}
.tip_text_container .tip_icon span:first-of-type {
  width: 0.1875rem;
  height: 1.40625rem;
  display: inline-block;
  background-color: #f8cb86;
  position: relative;
  left: 1.25rem;
  top: 0.3125rem;
}
.tip_text_container .tip_icon span:nth-of-type(2) {
  width: 0.3125rem;
  height: 0.3125rem;
  border: 0.64px;
  border-radius: 50%;
  margin-top: 0.3125rem;
  background-color: #f8cb86;
  display: inline-block;
  position: relative;
  left: 1rem;
  top: 0.9375rem;
}
.tip_text {
  color: orangered;
  margin-top: 0.46875rem;
}
.con {
  height: 1.5625rem;
  margin-top: 0.46875rem;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: bolder;
  display: inline-block;
}
.con:hover {
  color: #ccc;
  cursor: pointer;
}

.footer {
  width: 100%;
  height: 1.5625rem;
  line-height: 1.5625rem;
  z-index: 200;
}
.footer_l {
  width: 70%;
  height: 1.5625rem;
  color: #fff;
  font-size: 0.46875rem;
  background-color: #3c3c3c;
}
.footer_r {
  width: 30%;
  height: 1.5625rem;
  color: #fff;
  font-size: 0.46875rem;
  background-color: #56d176;
}
.tag {
  width: 0.78125rem;
  height: 0.46875rem;
  float: left;
  text-align: center;
  background-color: rgb(76, 217, 100);
  font-size: 0.3125rem;
  color: #fff;
  margin: 0.125rem 0.3125rem;
}
</style>
