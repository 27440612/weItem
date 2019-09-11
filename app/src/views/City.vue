<template>
  <div class="about">
    <elmheader>
      <template v-slot:left>
        <router-link to="/">&lt;</router-link>
      </template>
      <template v-slot:right>
        <router-link to="/">切换城市</router-link>
      </template>
    </elmheader>
    <div class="con">
      <div class="no1">
        <div class="intbox">
          <input type="text" placeholder="输入学校、商务楼、地址" v-model="txt" />
          <button @click="tijiao">提交</button>
        </div>
      </div>
      <div class="list">
        <!--        搜索历史-->
        <div v-if="!list" class="his_tory">
          <div class="search_hsr">搜索历史</div>
          <div
            v-for="(item,idx) in unique22(arr)"
            :key="idx"
            class="list_ars"
            @click="search_his(idx)"
          >
            <router-link
              :to="{path:'/food', query: {geohash: item.split(',')[2]+','+item.split(',')[3]}}"
            >
              <div>{{item.split(',')[0]}}</div>
              <div style="color: #999;font-size: 0.3125rem">{{item.split(',')[1]}}</div>
            </router-link>
          </div>
          <p @click="clear" v-show="type">清空所有</p>
        </div>
        <ul>
          <li v-for="(i,$index) in list" :key="$index">
            <router-link :to="{path:'/food',query:{geohash: i.latitude+','+i.longitude}}" @click.native="search_list(i.name,i.address,i.latitude,i.longitude,$index)">
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
import Header from "../components/Header";
export default {
  components: {
    elmheader: Header
  },
  data() {
    return {
      city: "",
      txt: "",
      list: "",
      search_history: [],
      arr: "",
      type: true,
      name: ""
    };
  },
  created() {
    fetch("http://elm.cangdu.org/v1/cities/" + this.$route.params.id)
      .then(response => response.json())
      .then(res => {
        this.city = res.name;
      });
    //搜索历史显示
    if (localStorage.keyword) {
      this.arr = localStorage.keyword.split("&");
      this.arr.pop();
      this.type = true;
    } else {
      this.arr = [];
      this.type = false;
    }
  },
  methods: {
    //历史记录去重
    unique22(arr) {
      var hash = [];
      for (var i = 0; i < arr.length; i++) {
        if (hash.indexOf(arr[i]) == -1) {
          hash.push(arr[i]);
        }
      }
      return hash;
    },
    // 清空历史
    clear() {
      localStorage.removeItem("keyword");
      this.arr = [];
      this.type = false;
    },
    // 搜索
    search_list(name, address, latitude, longitude, index) {
      this.search_history.push([name, address, latitude, longitude, "&"]);
      if (localStorage.keyword) {
        localStorage.keyword += this.search_history;
      } else {
        localStorage.keyword = this.search_history;
        localStorage.geohash =
          this.list[index].latitude + "," + this.list[index].longitude;
      }
      console.log(localStorage.keyword);
    },
    // 历史中搜索
    search_his(index) {
      localStorage.geohash =
        this.arr[index].split(",")[2] + "," + this.arr[index].split(",")[3];
    },
    // 跳转城市搜索
    tijiao() {
      if (this.txt) {
        fetch(
          "http://elm.cangdu.org/v1/pois?type=search&city_id=" +
            this.$route.params.id +
            "&keyword=" +
            this.txt
        )
          .then(response => response.json())
          .then(res => {
            this.list = res;
          });
      } else {
        alert("请输入字段");
      }
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
.no1 {
  border-bottom: 0.0313rem solid #e4e4e4;
  border-top: 0.0156rem solid #e4e4e4;
}
.intbox {
  width: 80%;
  margin: 0 auto;
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
  font-size: 0.375rem;
}
.intbox button {
  width: 100%;
  height: 0.7813rem;
  background-color: #3190e8;
  font-size: 0.4688rem;
  border: none;
  float: left;
  outline: none;
  color:#fff;
}
.his_tory p {
  background: #fff;
  text-align: center;
  font-size: 0.4063rem;
  line-height: 0.625rem;
}
.search_hsr {
  height: 0.625rem;
  line-height: 0.625rem;
  font-size: 0.3125rem;
  border-bottom: 0.0156rem solid #e4e4e4;
  padding-left: 0.625rem;
  background-color: #f5f5f5;
}
.list .list_ars div {
  font-size: 0.4063rem;
  line-height: 0.625rem;
  padding-left: 0.625rem;
  padding-top: 0.1563rem;
  color: #333;
}
.list_ars {
  border-bottom: #eee solid 0.0313rem;
  padding: 0.1563rem 0;
  background: #fff;
}
.list ul li {
  /* height: 1.25rem; */
  line-height: 0.625rem;
  border-bottom: 0.0156rem solid #ccc;
  font-size: 0.4375rem;
  padding: 0.25rem;
  background: #fff;
}
.list ul li span {
  color: #999;
  font-size: 0.3594rem;
}
.list ul li a {
  text-decoration: none;
  color: #333;
}
</style>
