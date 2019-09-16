<template>
  <div class="amend">
    <elmheader>
      <template v-slot:left>
        <router-link to="/usermsg">&lt;</router-link>
      </template>
      <template v-slot:center>重置密码</template>
    </elmheader>
    <form class="restForm">
      <section class="input_container phone_number">
        <input type="text" placeholder="账号" name="phone" maxlength="11" v-model="user" />
      </section>
      <section class="input_container">
        <input type="text" placeholder="旧密码" name="oldPassWord" v-model="oldpassword" />
      </section>
      <section class="input_container">
        <input type="text" placeholder="请输入新密码" name="newPassWord" v-model="newpassword" />
      </section>
      <section class="input_container">
        <input type="text" placeholder="请确认密码" name="confirmPassWord" v-model="confirmpassword" />
      </section>
      <section class="input_container captcha_code_container" style="padding: 0.2rem 0.6rem;">
        <input
          type="text"
          placeholder="验证码"
          name="mobileCode"
          maxlength="6"
          v-model.number="Verify"
        />
        <div class="img_change_img">
          <img :src="yanUrl" />
          <div class="change_img">
            <p class="huan" @click="random">换一张</p>
          </div>
        </div>
      </section>
    </form>
    <div class="login_container" @click="confirms(),openMask()">确认修改</div>
    <dialog-bar v-model="sendVal" type="confirm" :content="texts"></dialog-bar>
  </div>
</template>
<script>
import Header from "../components/Header";
import dialogBar from "../components/alert";
var md5 = require("md5");
export default {
  components: {
    elmheader: Header,
    "dialog-bar": dialogBar
  },
  data() {
    return {
      user: "" /*用户账号*/,
      oldpassword: "" /*旧密码*/,
      newpassword: "" /*新密码*/,
      confirmpassword: "" /*确认密码*/,
      Verify: "" /*验证码的双向绑定*/,
      yanUrl: "" /*验证码 */,
      sendVal: false,
      texts:''
    };
  },
  created() {
    this.random();
    // console.log(this.Verify)
  },
  methods: {
    openMask(index) {
      this.sendVal = true;
    },
    confirms() {
      this.axios
        .post("https://elm.cangdu.org/v2/changepassword", {
          username: this.user,
          oldpassWord: md5(this.oldpassword),
          newpassword: md5(this.newpassword),
          confirmpassword: md5(this.confirmpassword),
          captcha_code: this.Verify
        })
        .then(data => {
          console.log(data);
          if (!this.user) {
            this.texts='请输入账号'
          } else if (!this.oldpassword) {
            this.texts='请输入旧密码'
          } else if (!this.newpassword) {
            this.texts='请输入新密码'
          } else if (!this.confirmpassword) {
            this.texts='请输入确认密码'
          } else if (this.newpassword != this.confirmpassword) {
            this.texts='两次输入的密码不一致'
          } else if (!this.Verify) {
            this.texts='请输入验证码'
          } else if (data.data.status != 0) {
            this.texts=data.data.success
            setTimeout(()=>{this.$router.push('/login?in')},800)
            // this.$router.push({ path: "/login?in" });
          } else {
            this.texts=data.data.message
          }
        });
    },
    random() {
      this.axios.post("http://elm.cangdu.org/v1/captchas", {}).then(data => {
        this.yanUrl = data.data.code;
      });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  text-decoration: none;
  outline: none;
  font-size: 0.3rem;
  z-index: 1;
}
input {
  border: none;
  outline: none;
  text-indent: 0.3rem;
  font-size: 0.35rem;
  display: inline-block;
  vertical-align: middle;
}
.amend {
  width: 100%;
  /* overflow: hidden; */
}
.restForm {
  background-color: #fff;
}
.restForm .phone_number {
  padding: 0.3rem 0.8rem;
}
.restForm .input_container {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0.6rem;
  border-bottom: 0.01rem solid #ccc;
}
.restForm .input_container input {
  font-size: 0.35rem;
  color: #666;
}
.restForm .captcha_code_container .img_change_img {
  display: flex;
  align-items: center;
}
.restForm .captcha_code_container .img_change_img img {
  width: 2.5rem;
  margin-right: 0.2rem;
}
.captcha_code_container .img_change_img .change_img {
  display: flex;
  flex-wrap: wrap;
  width: 2rem;
  justify-content: center;
}
.restForm .captcha_code_container .img_change_img .change_img .huan {
  color: #3b95e9;
  font-size: 0.4rem;
}
.login_container {
  margin: 0.2rem;
  font-size: 0.5rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.4rem 0;
  border: 0.01rem;
  border-radius: 0.15rem;
  text-align: center;
}
</style>