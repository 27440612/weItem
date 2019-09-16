<template>
  <div class="about" style="background:#f5f5f5;height:100%">
    <elmheader>
      <template v-slot:left>
        <router-link to="/">&lt;</router-link>
      </template>
      <template v-slot:center>我的</template>
      <template v-slot:right></template>
    </elmheader>
    <elmfooter :num="4"></elmfooter>
    <router-link to="/usermsg" v-if="login_success">
      <div class="person_zl">
        <div class="person_img">
          <img :src="'http://elm.cangdu.org/img/'+this.$store.state.user.userImg" />
        </div>
        <h3>{{this.$store.state.user.userName}}</h3>
        <p>
          <span class="iconfont icon-shoujihao" style="font-size:0.5625rem;vertical-align: middle"></span> 暂无绑定手机号
        </p>
        <span class="person_right">&gt;</span>
      </div>
    </router-link>
    <router-link to="/login?in" v-else>
      <div class="person_zl">
        <div class="person_img">
          <img src="../assets/img/1.png" />
        </div>
        <h3>{{this.$store.state.user.userName}}</h3>
        <p>
          <span class="iconfont icon-shoujihao" style="font-size:0.5625rem;vertical-align: middle"></span> 暂无绑定手机号
        </p>
        <span class="person_right">&gt;</span>
      </div>
    </router-link>
    <div class="youhui">
      <router-link to="/balance" tag="div">
        <div>
          <p>
            <span style="color:#f90">{{parseInt(this.$store.state.user.userBalance)}}.00</span>元
          </p>
          <p>我的余额</p>
        </div>
      </router-link>
      <router-link to="/benefit" tag="div">
        <div>
          <p>
            <span style="color:#ff5f3e">{{this.$store.state.user.userGift}}</span>个
          </p>
          <p>我的优惠</p>
        </div>
      </router-link>
      <router-link to="/myjifen" tag="div">
          <div>
          <p>
            <span style="color:#6ac20b">{{this.$store.state.user.userPoint}}</span>分
          </p>
          <p>我的积分</p>
        </div>
      </router-link>
    </div>
    <div class="dingdan">
      <router-link to="/order" tag="div">
        <div>
          <span class="iconfont icon-dingdan1" style="color:rgb(60, 171, 255)"></span> 我的订单
          <span>&gt;</span>
        </div>
      </router-link>
      <router-link to="/jfshopping" tag="div">
        <div>
          <span class="iconfont icon-shangchengjifenshangcheng_xuanzhong" style="color:orange"></span> 积分商城
          <span>&gt;</span>
        </div>
      </router-link>
      <!-- ------------------------------ -->
      <router-link to="/elmvip" tag="div">
        <div style="margin-bottom:0.3125rem">
            <span class="iconfont icon-huangguan" style="color:gold"></span> 饿了么会员卡
            <span>&gt;</span>
        </div>
      </router-link>
      <router-link tag="div" to="/serve">
        <div>
          <span class="iconfont icon-fuwuzhongxin" style="color:#6ac20b"></span> 服务中心
          <span>&gt;</span>
        </div>
      </router-link>
      <router-link tag="div" to="/updownApp">
        <div>
          <span class="iconfont icon-eliaomo" style="color:rgb(60, 171, 255)"></span> 下载饿了么APP
          <span>&gt;</span>
        </div>
      </router-link>
      </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    elmheader: Header,
    elmfooter: Footer
  },
  data() {
    return {
      login_success: false
    };
  },
  created() {
    // console.log('----------------',this.$store.state.user);
    // this.hqzl();

    if (sessionStorage.userName) {
      this.login_success = true;
    } else {
      this.login_success = false;
    }
  },
  methods: {
    // hqzl() {
    //   this.$http.get("https://elm.cangdu.org/v1/user", {}).then(data => {
    //     console.log(data);
    //   });
    // }
  }
};
</script>
<style scoped>
.person_zl {
  width: 10rem;
  height: 2.5rem;
  background-color: #3190e8;
  color: white;
  box-sizing: border-box;
  padding: 0.375rem;
  line-height: 0.75rem;
  position: relative;
}
.person_img {
  width: 1.5625rem;
  height: 1.5625rem;
  float: left;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 0.3125rem;
}
.person_img > img {
  width: 100%;
  height: 100%;
}
.person_right {
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
  font-size: 0.4688rem;
  font-weight: 800;
}
.youhui {
  width: 10rem;
  height: 2.1875rem;
  background: #fff;
  display: flex;
}
.youhui > div {
  flex: 1;
  height: 100%;
  border-right: 0.0156rem solid #f5f5f5;
  text-align: center;
  padding: 0.3125rem 0;
  line-height: 0.7813rem;
}
.youhui > div p:nth-of-type(2) {
  color: #999;
}
.youhui > div p:nth-of-type(1) span {
  font-size: 0.625rem;
  margin: 0 0.0625rem;
  font-weight: 800;
}
.dingdan {
  margin-top: 0.3125rem;
}
.dingdan > div {
  width: 10rem;
  height: 1.1563rem;
  border-bottom: 0.0156rem solid #f5f5f5;
  line-height: 1.1563rem;
  padding: 0 0.625rem;
  font-size: 0.48rem;
  color: #333;
  background: #fff;
}
.dingdan > div span:nth-of-type(2) {
  float: right;
  font-size: 0.4688rem;
  color: #999;
}
</style>