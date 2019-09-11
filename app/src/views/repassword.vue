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
    <div class="login_container" @click="confirm">确认修改</div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
    elmheader: Header
  },
  data() {
    return {
      user: "" /*用户账号*/,
      oldpassword: "" /*旧密码*/,
      newpassword: "" /*新密码*/,
      confirmpassword: "" /*确认密码*/,
      Verify: "" /*验证码的双向绑定*/,
      yanUrl: "" /*验证码 */
    };
  },
  created() {
    this.random();
    // console.log(this.Verify)
  },
  methods: {
    confirm() {
      this.axios
        .post("https://elm.cangdu.org/v2/changepassword", {
          username: this.user,
          oldpassWord: this.oldpassword,
          newpassword: this.newpassword,
          confirmpassword: this.confirmpassword,
          captcha_code: this.Verify
        })
        .then(data => {
          console.log(data);
          if (!this.user) {
            alert("请输入账号");
          } else if (!this.oldpassword) {
            alert("请输入旧密码");
          } else if (!this.newpassword) {
            alert("请输入新密码");
          } else if (!this.confirmpassword) {
            alert("请输入确认密码");
          } else if (this.newpassword != this.confirmpassword) {
            alert("两次输入的密码不一致");
          } else if (!this.Verify) {
            alert("请输入验证码");
          } else if (data.data.status != 0) {
            alert(data.data.success);
            this.$router.push({ path: "/login?in" });
          } else {
            alert(data.data.message);
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