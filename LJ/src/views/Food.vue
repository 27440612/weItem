<template>
  <div class="about">
    <elmheader>
      <template v-slot:left>搜索</template>
      <template v-slot:center>北京市房山区</template>
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
    <elmfooter :num="1"></elmfooter>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  data(){
    return{
      login_success:false,
    }
  },
  components: {
    elmheader: Header,
    elmfooter: Footer
  },
  created(){
    if(localStorage.userName){
      this.login_success=true
    }else{
      this.login_success=false
    }
  }
};
</script>
<style scoped>
</style>