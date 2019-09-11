<template>
  <div style="background:#f5f5f5;height:100%">
    <elmheader>
      <template v-slot:left>
        <router-link to="/add_address">&lt;</router-link>
      </template>
      <template v-slot:center>搜索地址</template>
    </elmheader>
    <div class="content">
      <div class="add-detail">
        <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="search_s" />
        <button @click="search">确认</button>
      </div>
      <div class="warnpart">为了满足商家的送餐要求，建议您从列表中选择地址</div>
      <div class="point" v-show="!poisdata">
        <p>找不到地址？</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍后输入哦。</p>
      </div>
      <div class="list_data">
        <ul>
          <li v-for="(i,index) in poisdata" @click="adds(i)" :key="index">
            <!-- <router-link :to="{name: 'adds'}"> -->
            <p>{{i.name}}</p>
            <p>{{i.address}}</p>
            <!-- </router-link> -->
          </li>
        </ul>
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
      poisdata: "",
      search_s: ""
    };
  },
  created(){
  },
  methods: {
    adds(a) {
      console.log(a);
      this.$router.push({ name: "add_address", params: { name: a.name,geohash:a.geohash } });
    },
    search() {
      this.$axios
        .get("http://elm.cangdu.org/v1/pois?type=nearby", {
          params: {
            keyword: this.search_s
          }
        })
        .then(data => {
            console.log(data)
          this.poisdata = data.data;
        });
    }
  }
};
</script>
<style scoped>
.add-detail {
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background: #fff;
  padding: 0.3125rem;
}
.add-detail input {
  display: block;
  width: 7.8125rem;
  padding: 0.2656rem;
  background: #f2f2f2;
  border: 0.64px solid #ddd;
  border-radius: 0.0781rem;
  font-size: 0.3906rem;
}
.add-detail button {
  display: block;
  width: 1.875rem;
  background: #3199e8;
  font-size: 0.4375rem;
  color: #fff;
  border-radius: 0.0781rem;
  border: none;
  margin-left: 0.0781rem;
}
.warnpart {
  background: #fff6e4;
  font-size: 0.3906rem;
  color: #ff883f;
  text-align: center;
  padding: 0.1563rem 0;
}
.point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.point p {
  width: 100%;
  text-align: center;
  font-size: 0.4688rem;
  color: #969696;
  margin-bottom: 0.1563rem;
}
.list_data li {
  padding: 0.2344rem;
  border-bottom: 0.0156rem solid #ccc;
}
.list_data li p {
  font-size: 0.4219rem;
  color: #969696;
}
</style>