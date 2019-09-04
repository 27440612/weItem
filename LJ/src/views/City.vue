<template>
  <div class="about">
    <div class="header">
      <span>
        <router-link to="/">
          <i class="iconfont icon-iconfontleft"></i>
        </router-link>
      </span>
      {{city}}
      <span>
        <router-link to="/">切换城市</router-link>
      </span>
    </div>
    <div class="con">
      <div class="no1">
        <div class="intbox">
          <input type="text" placeholder="输入学校、商务楼、地址" v-model="txt"  @keyup.enter="tijiao"/>
          <button @click="tijiao">提交</button>
        </div>
      </div>
      <div class="list">
        <ul>
          <li v-for="(i,$index) in list" :key="$index">
            <router-link to="/page1">
              {{i.name}}
              <br />
              <span>{{i.address}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt: "",
      list: "",
      city:""
    }
  },
  created(){
    fetch('http://elm.cangdu.org/v1/cities/'+this.$route.params.id).then(response=>response.json()).then(res=>{
this.city=res.name
console.log(this.city)
})
  },
  methods: {
    tijiao() {
      fetch(
        "http://elm.cangdu.org/v1/pois?type=search&city_id=" +
          this.$route.params.id +
          "&keyword=" +
          this.txt
      )
        .then(response => response.json())
        .then(res => {
          // console.log(res)
          this.list = res
        })
    }
  }
};
</script>
<style scoped>
.header {
  text-align: center;
  color: #fff;
  font-size: 0.5625rem;
  background: #3190e8;
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 0.25rem;
  line-height: 1.25rem;
}
.header span {
  font-size: 0.4063rem;
  color: #fff;
  display: block;
  /* float: left; */
  position: absolute;
  left: 0.25rem;
}
.header span:nth-of-type(2) {
  /* float: right; */
  position: absolute;
  right: 0.25rem;
  left: auto;
  top:0;
}
.no1 {
  border-bottom: 0.0313rem solid #e4e4e4;
  border-top: 0.0156rem solid #e4e4e4;
}
.intbox {
  width: 80%;
  margin: 0 auto;
  padding-top: 1.25rem;
  overflow: hidden;
  padding-bottom: 0.3125rem;
}
.intbox input {
  width: 100%;
  height: 0.7813rem;
  border: 0.0156rem solid #ccc;
  outline: none;
  float: left;
  margin: 0 auto;
  margin: 0.3125rem 0;
  text-indent: 0.25rem;
}
.intbox button {
  width: 100%;
  height: 0.7813rem;
  background-color: #3190e8;
  font-size: 0.4688rem;
  border: none;
  float: left;
  outline: none;
}
.list p {
  font-size: 0.2813rem;
  line-height: 0.625rem;
  text-indent: 0.25rem;
  border-bottom: #eee solid 0.0313rem;
}
ul {
  overflow: hidden;
}
.list ul li {
  line-height: 0.625rem;
  border-bottom: 0.0156rem solid #ccc;
  font-size: 0.4375rem;
  padding: 0.25rem;
}
.list ul li span {
  color: #999;
  font-size: 0.3594rem;
}
.list ul li a {
  text-decoration: none;
  color: #333;
}
button {
  color: white;
}
.icon-iconfontleft {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.header a {
  text-decoration: none;
  color: white;
}
</style>
