<template>
  <div style="background:#f5f5f5;height:100%">
    <elmheader>
      <template v-slot:left>
        <router-link to="/address">&lt;</router-link>
      </template>
      <template v-slot:center>新增地址</template>
    </elmheader>
    <div class="content">
      <div>
        <input type="text" placeholder="请填写你的姓名" v-model="user.username" value="user.username" />
      </div>
      <div @click="cun()">
        <router-link to="/select_address">
          <input type="text" placeholder="小区/写字楼/学校等" v-model="user.address" />
        </router-link>
      </div>
      <div>
        <input type="text" placeholder="请填写详细送餐地址" v-model="user.eatress" />
      </div>
      <div>
        <input type="text" placeholder="请填写能够联系到您的手机号" v-model="user.iphone" />
      </div>
      <div>
        <input type="text" placeholder="备用联系电话（选填）" v-model="user.oiphone" />
      </div>
    </div>
    <button @click="add">新增地址</button>
    <router-view></router-view>
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
      user: {
        username: "",
        address: "",
        eatress: "",
        iphone: "",
        oiphone: "",
        geohash: ""
      }
    };
  },
  created() {
    //   console.log(this.$route.params.name)
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
      this.user.address = this.$route.params.name;
      this.user.geohash = this.$route.params.geohash;
    }
  },
  methods: {
    cun() {
      localStorage.user = JSON.stringify(this.user);
    },
    add() {
      console.log(this.user.geohash);
      this.$axios
        .post(
          "https://elm.cangdu.org/v1/users/" +
            this.$store.state.user.userId +
            "/addresses",
          {
            user_id: Number(this.$store.state.user.userId),
            address: this.user.address,
            address_detail: this.user.eatress,
            name: this.user.username,
            phone: this.user.iphone,
            phone_bk: this.user.oiphone,
            geohash: this.user.geohash,
            sex: 1,
            tag: this.user.username,
            tag_type: 2,
            poi_type: 0
          }
        )
        .then(data => {
          console.log(data);
          if (data.data.status == 0) {
            alert(data.data.message);
          } else {
            localStorage.removeItem("user");
            alert(data.data.success);
            this.$router.push("/address");
          }
        });
    }
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  background-color: #fff;
  padding-top: 0.2344rem;
}
.content div {
  width: 100%;
  padding-bottom: 0.2344rem;
}
.content div input {
  display: block;
  width: 9.375rem;
  font-size: 0.3125rem;
  margin: 0 auto;
  padding: 0.2344rem;
  background: #f2f2f2;
  border: 0.64px solid #ddd;
  border-radius: 0.1094rem;
}
button {
  width: 95%;
  height: 0.9375rem;
  margin: 0.4688rem 0.25rem;
  background: #4cd964;
  border-radius: 0.0781rem;
  border: none;
  color: #fff;
  font-size: 0.4688rem;
}
</style>