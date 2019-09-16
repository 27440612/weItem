<template>
  <div style="background:#f5f5f5;height:100%;width:10rem;">
    <elmheader>
      <template v-slot:left>
        <router-link v-if="login_success" to="/personal">&lt;</router-link>
        <router-link v-else to="/">&lt;</router-link>
      </template>
      <template v-slot:center v-if="login_type">密码登录</template>
      <template v-slot:center v-else>账号注册</template>
    </elmheader>
    <div class="container">
      <div>
        <input type="text" v-model="user" placeholder="账号" />
      </div>
      <div>
        <input type="password" placeholder="密码" v-model="password" />
      </div>
      <div>
        <input type="text" placeholder="验证码" v-model="Verify" />
        <img :src="yanUrl" class="img" />
        <span @click="imgUrl()" style="cursor:pointer;margin-left:0.1rem">换一个</span>
      </div>
    </div>
    <p class="p">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="p">注册过的用户可凭账号密码登录</p>
    <button v-if="login_type" class="login" @click="login(),openMask()">登录</button>
    <button v-else class="login" @click="login(),openMask()">注册</button>
    <dialog-bar v-model="sendVal" type="confirm" :content="texts"></dialog-bar>

    <div class="chong">
      <router-link to="/repassword" class="chong">重置密码?</router-link>
    </div>
  </div>
</template>

<script>
import dialogBar from '../components/alert'
import Header from "../components/Header";
var md5 = require('md5');
// import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  components: {
    'elmheader': Header,
    'dialog-bar': dialogBar,
  },
  data() {
    return {
      login_type: "", //判断登录注册
      login_success: false, //有没有登陆成功
      user: "",
      password: "",
      Verify: "",
      randoms: "",
      yanUrl: "",
      texts:'',
      sendVal: false,
    };
  },
  created() {
    var href = location.href.split("?")[1];
    if (href == "in") {
      this.login_type = true;
    } else if (href == "up") {
      this.login_type = false;
    }
    this.imgUrl();

    if(sessionStorage.userName){
      this.login_success=true
    }else{
      this.login_success=false
    }
    // console.log(this.$store.state)
  },
  // computed:{
  //   userId(){
  //     return this.$store.state.user.userId
  //   }
  // },
  methods: {
    // ...mapActions(['getUser']),
    openMask(index){
      setTimeout(()=>{
        this.sendVal = true;
      },500)
    },
    imgUrl() {
      this.$http.post("http://elm.cangdu.org/v1/captchas", {}).then(data => {
        this.yanUrl = data.data.code;
      });
    },
    login(){
      console.log(md5(this.password))
      this.$http.post(
          "https://elm.cangdu.org/v2/login",
          {
            username: this.user,
            password: md5(this.password),
            captcha_code: this.Verify
          },
        )
        .then(data => {
          if(!this.user){
            this.texts='请输入账号'
          }else if(!this.password){
            this.texts='请输入密码'
          }else if(!this.Verify){
            this.texts='请输入验证码'
          }else if(this.user = data.data.username){
            this.$store.commit('setUserid',data.data.user_id)
            // this.$store.dispatch('addUserid',data.data.user_id)
            this.$store.commit('setUsername',data.data.username)
            this.$store.commit('setUserpoint',data.data.point)
            this.$store.commit('setUsergift',data.data.gift_amount)
            this.$store.commit('setUsercity',data.data.city)
            this.$store.commit('setUserimg',data.data.avatar)
            this.$store.commit('setUserblce',data.data.balance)
            // this.$store.dispatch('getUser')
            sessionStorage.userName=data.data.username
            this.texts='登录成功'
            setTimeout(()=>{this.$router.push('/personal')},800)
          }else{
            this.texts=data.data.message
            this.imgUrl()
          }
          console.log(data);
        });
    },
    }
};
</script>

<style scoped>
* {
  margin: 0;
  z-index: 1;
  text-decoration: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
input {
  border: none;
  outline: none;
  text-indent: 0.3rem;
  color: #666;
  display: inline-block;
  vertical-align: middle;
}
.container {
  height: auto;
  margin-top: 0.6rem;
  background: #fff;
}
.container div {
  width: 100%;
  height: 1.25rem;
  border-bottom: 0.01rem solid #ccc;
  padding: 0.375rem 0.5rem;
  box-sizing: border-box;
}
.img {
  display: inline-block;
  vertical-align: middle;
  margin-top: -0.1rem;
  margin-right: 0.3rem;
}
.p {
  color: red;
  font-size: 0.3125rem;
  padding: 0.2rem 0.2rem;
  line-height: 0.4688rem;
}
.login {
  outline: none;
  background-color: #4cd964;
  border: 0.01rem;
  width: 95%;
  height: 1.25rem;
  margin: 0 0.15rem;
  color: #fff;
  border-radius: 0.05rem;
  font-size: 0.4375rem;
}
.chong {
  float: right;
  margin-right: 0.2rem;
  font-size: 0.3rem;
  color: #3b95e9;
  margin-top: 0.1rem;
}
</style>