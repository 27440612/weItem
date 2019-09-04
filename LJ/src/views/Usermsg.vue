<template>
  <div style="background:#f5f5f5;height:100%">
    <elmheader>
      <template v-slot:left>
        <router-link to="/personal">&lt;</router-link>
      </template>
      <template v-slot:center>账户信息</template>
      <template v-slot:right></template>
    </elmheader>
    <div
      class="msg"
      style="position: relative;margin-top:0.3125rem;height:1.875rem;line-height: 1.875rem;"
    >
      <input type="file" id="imgfile" @change="changeimg()" />
      <span>头像</span>
      <span>&gt;</span>
      <div class="imgurl">
        <img :src="'http://elm.cangdu.org/img/'+this.$store.state.user.userImg" />
      </div>
    </div>
    <router-link to="/changename" style="color:#000">
      <div class="msg">
        <span>用户名</span>
        <span style="float:right">&gt;</span>
        <div class="username">{{this.$store.state.user.userName}}</div>
      </div>
    </router-link>
    <router-link to="/address" style="color:#000">
      <div class="msg">
        <span>收货地址</span>
        <span>&gt;</span>
      </div>
    </router-link>
    <h3>账号绑定</h3>
    <div class="msg border_t" @click="iphone()">
      <span>
        <img style="vertical-align: middle;margin:0 0.0625rem" src="../assets/img/iphone.png" />手机
      </span>
      <span>&gt;</span>
    </div>
    <h3>安全设置</h3>
    <div class="msg border_t">
      <span>登录密码</span>
      <span>&gt;</span>
      <div class="username">修改</div>
    </div>
    <button class="exit" @click="exit()">退出登录</button>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
    elmheader: Header
  },
  methods: {
    exit() {
      this.$store.dispatch("addUserid", '');
      this.$store.commit("setUsername", '登录/注册');
      this.$store.commit("setUserpoint", 0);
      this.$store.commit("setUsergift",0);
      this.$store.commit("setUsercity", '');
      this.$store.commit("setUserimg", '');
      this.$store.commit("setUserblce", 0);
      localStorage.clear();
      sessionStorage.clear();
      this.$router.push("/personal");
    },
    changeimg() {
      var f = imgfile.files[0];
      var d = new FormData();
      d.append("img", f);
      // console.log(f,d)
      // this.$http.post("https://h5.ele.me/restapi/eus/v1/users/5492247818/avatar", {data:d},{
      //   emulateJSON:true
      // }).then(data => {
      //   console.log(data);
      // });
      alert("上传失败");
    },
    iphone() {
      alert("请在手机APP中设置");
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
}
.msg {
  background: #fff;
  width: 10rem;
  height: 1.25rem;
  box-sizing: border-box;
  border-bottom: 0.0156rem solid #ddd;
  line-height: 1.25rem;
  padding: 0 0.4688rem;
}
.border_t {
  border-top: 0.0156rem solid #ddd;
}
.imgurl {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0.3125rem;
}
.imgurl img {
  width: 100%;
  height: 100%;
}
.msg div:last-of-type {
  float: right;
}
.msg span:last-of-type {
  margin: 0 0.1563rem;
  float: right;
}
h3 {
  height: 0.9375rem;
  font-size: 0.3125rem;
  color: #666;
  line-height: 0.9375rem;
  box-sizing: border-box;
  padding: 0 0.4688rem;
}
.exit {
  width: 96%;
  height: 0.9375rem;
  margin: 0.8rem 2% 0;
  line-height: 0.9375rem;
  border-radius: 5px;
  text-align: center;
  background: #d8584a;
  font-size: 0.4rem;
  color: #fff;
  border: none;
}
#imgfile {
  background: #d8584a;
  width: 10rem;
  height: 1.875rem;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
</style>