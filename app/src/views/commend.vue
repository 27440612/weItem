<template>
  <div class="lyj_box">
    <elmheader>
      <template v-slot:left>
        <router-link to="/benefit">&lt;</router-link>
      </template>
      <template v-slot:center>推荐有奖</template>
    </elmheader>
    <div class="recommend_center">
      <img src="../assets/img/active.png" />
    </div>
    <div class="invite_firend">
      <div @click="openMask">
        <img src="../assets/img/three.png" />
        <p>邀请微信好友</p>
      </div>
      <dialog-bar v-model="sendVal" type="confirm" content="请在饿了么APP中打开"></dialog-bar>
      <div @click="openMask">
        <img src="../assets/img/twopng.png" />
        <p>邀请QQ好友</p>
      </div>
      <dialog-bar v-model="sendVal" type="confirm" content="请在饿了么APP中打开"></dialog-bar>
      <div @click="openMask">
        <img src="../assets/img/one.png" />
        <p>面对面邀请</p>
      </div>
      <dialog-bar v-model="sendVal" type="confirm" content="请在饿了么APP中打开"></dialog-bar>
    </div>
    <div class="invite_people">
      <div>
        <p>
          累计收益
          <br />
          <span class="zero">0</span>元
        </p>
      </div>
      <div>
        <p>
          成功邀请
          <br />
          <span class="zeros">0</span>人
        </p>
      </div>
    </div>
    <p class="income_detail">-收益明细-</p>
    <div class="income_tips">
      <img src="../assets/img/down.png" class="down_img" />
      <p>还不赶紧去邀请好友</p>
    </div>
  </div>
</template>
<script>
import dialogBar from "../components/alert";
import Header from "../components/Header";
export default {
  components: {
    elmheader: Header,
    "dialog-bar": dialogBar
  },
  data() {
    return {
      sendVal: false
    };
  },
  methods: {
    openMask(index) {
      this.sendVal = true;
    }
  }
};
</script>
<style scoped>
* {
  z-index: 1;
  margin: 0;
}
.down_img {
  width: 0.765625rem;
  height: 1rem;
  margin-left: 45%;
  margin-bottom: 0.234375rem;
}
.income_tips {
  margin-top: 0.671875rem;
}
.income_tips p {
  text-align: center;
}
.income_detail {
}
.income_detail {
  margin-top: 0.65625rem;
  text-align: center;
  font-size: 0.34375rem;
  color: #787878;
}
.zero {
  font-size: 0.590625rem;
  color: #fb4c31;
}
.zeros {
  font-size: 0.590625rem;
  color: #595959;
}
.lyj_box {
  height: 20rem;
  background: #f5f5f5;
}
.recommend_center {
  height: 7.8125rem;
  background: red;
  margin-bottom: 0.15625rem;
}
.recommend_center img {
  width: 100%;
  height: 100%;
}
.invite_firend {
  height: 3.390625rem;
  background: white;
  display: flex;
}
.invite_firend div {
  flex: 1;
}
.invite_firend div img {
  width: 1.5625rem;
  height: 1.5625rem;
  margin: 0.625rem 0 0.21875rem 0.8525rem;
}
.invite_firend div p {
  text-align: center;
  font-size: 0.3125rem;
}
.invite_people {
  height: 1.09375rem;
  margin-top: 0.625rem;
  display: flex;
}
.invite_people div {
  flex: 1;
}
.invite_people div p {
  text-align: center;
  font-size: 0.34375rem;
  color: #808080;
}
.invite_people div:nth-of-type(1) {
  border-right: 2px #e4e4e4 solid;
}
</style>