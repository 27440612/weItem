<template>
  <div class="home">
    <!-- <div class="header">
      <span>ele.me</span>
      <span>登录/注册</span>
    </div>-->
    <elmheader>
      <template v-slot:left>ele.me</template>
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
    <div class="con">
      <div class="no1">
        <div>
          <span>当前定位城市：</span>
          <span>定位不准时，请在城市列表中选择</span>
        </div>
        <div>
          <span class="city">
            <router-link
              :to="/city/+city.id"
              style="color:#3190e8;font-size:0.3594rem"
            >{{city.name}}</router-link>
          </span>
          <span>></span>
        </div>
      </div>
      <div class="grey"></div>
      <div class="wrapper blue">
        <div class="no2">
          <h6>热门城市</h6>
        </div>
        <div class="hotbox">
          <ul>
            <li v-for="i in hot_city" :key="i.id">
              <router-link :to="/city/+i.id">{{i.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper" v-for="(i , $key) in group_s" :key="$key">
        <div class="no2">
          <h6>{{$key}}</h6>
        </div>
        <div class="hotbox">
          <ul>
            <li v-for="j in i" :key="j.id">
              <router-link :to="/city/+j.id">{{j.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
      hot_city: "",
      city: "",
      all: "",
      login_success: false, //有没有登陆成功
    };
  },
  created() {
    //当前城市
    fetch("http://elm.cangdu.org/v1/cities?type=guess")
      .then(response => response.json())
      .then(res => {
        this.city = res;
        console.log(this.city);
      });
    //热门城市
    fetch("http://elm.cangdu.org/v1/cities?type=hot")
      .then(response => response.json())
      .then(res => {
        this.hot_city = res;
      });
    //所有城市
    fetch("http://elm.cangdu.org/v1/cities?type=group")
      .then(response => response.json())
      .then(res => {
        this.all = res;
        // console.log(this.all)
      });
    console.log(this.$store.state.user);

    if(sessionStorage.userName){
      this.login_success=true
    }else{
      this.login_success=false
    }
  },
  computed: {
    //排序
    group_s() {
      var keys = Object.keys(this.all).sort();
      var newObj = {};
      for (var i = 0; i < keys.length; i++) {
        var index = keys[i];
        newObj[index] = this.all[index];
      }
      return newObj;
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
.city a {
  text-decoration: none;
}
.home {
  width: 10rem;
  height: auto;
  background: #ccc;
}
.header {
  background: #3190e8;
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 10rem;
  padding: 0 0.25rem;
  line-height: 1.25rem;
}
.header span {
  font-size: 0.4063rem;
  color: #fff;
  float: left;
}
.header span:nth-of-type(2) {
  float: right;
}
.con {
  border-top: 0.0156rem solid #e4e4e4;
  background-color: #fff;
}
.grey {
  background: #f5f5f5;
  height: 0.1563rem;
}
.con .no1 div {
  line-height: 1.25rem;
  height: 1.25rem;
  padding: 0 0.25rem;
}
.con .no1 div:nth-of-type(1) {
  border-bottom: 0.0156rem solid #ccc;
}
.con .no1 div:nth-of-type(2) {
  border-bottom: 0.0313rem solid #e4e4e4;
}
.con .no1 div span {
  font-size: 0.3125rem;
  float: left;
}
.con .no1 div span:nth-of-type(2) {
  float: right;
}
.no2 {
  margin-bottom: 0.1563rem;
}
.no2 h6 {
  font-size: 0.3594rem;
  line-height: 0.9375rem;
  padding: 0 0.25rem;
  font-weight: 400;
}
.wrapper {
  border-top: 0.0313rem solid #e4e4e4;
  border-bottom: 0.2969rem solid #f5f5f5;
}
.hotbox ul {
  overflow: hidden;
}
.hotbox ul li {
  width: 2.5rem;
  height: 1.25rem;
  line-height: 1.25rem;
  text-align: center;
  border: 0.0156rem solid #ccc;
  font-size: 0.4375rem;
  float: left;
  list-style: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.wrapper .hotbox ul li a {
  text-decoration: none;
  font-size: 0.3594rem;
  color: #727272;
}
.blue .hotbox ul li a {
  color: #3190e8;
}
</style>