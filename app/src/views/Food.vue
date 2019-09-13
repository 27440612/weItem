<template>
  <div style="height:100%;background:#f5f5f5">
    <elmheader>
      <template v-slot:left>
        <router-link to="/search"><span class="iconfont icon-sosuo" style="font-size:0.4688rem"></span></router-link>
      </template>
      <template v-slot:center>{{ads_name}}</template>
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

    <div class="nav" style="background:#fff;border-bottom: .025rem solid #e4e4e4;">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="all" v-for="i,key in alltype" :key="key" v-if="key<=7">
              <router-link :to="{name:'swipershow',params:{title:i.title}}" style="color:#000">
                <div class="icon">
                  <img :src="typehttp + i.image_url" />
                </div>
                <div class="title">{{i.title}}</div>
              </router-link>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="all" v-for="(i,key) in alltype" :key="key" v-if="key>7&&key<=15">
              <router-link :to="{name:'swipershow',params:{title:i.title}}" style="color:#000">
                  <div class="icon">
                    <img :src="typehttp + i.image_url" />
                  </div>
                  <div>{{i.title}}</div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="main" style="background:#fff;">
      <div class="top">
        <i
          class="icon iconfont icon-shangdian"
          style="font-size: 0.2656rem;margin-right:0.0625rem;"
        ></i>
        附近商家
      </div>

      <router-link
        :to="{name:'shopping',params:{image:i.image_path,LoginName:i.name,Sky:i.promotion_info,tips:i.piecewise_agent_fee.tips}}"
        v-for="(i,key) in allshop"
        :key="key"
      >
        <div class="shops">
          <div class="shopimg">
            <img :src="shophttp + i.image_path" />
          </div>
          <div class="shoptext">
            <div class="name" style="font-weight: 600;">
              <span>品牌</span>
              <div class="shopname">{{i.name}}</div>
            </div>

            <div class="talk">
              <el-rate v-model="i.rating" disabled show-score text-color="#ff9a0d" disabled-void-color="#d1d1d1" score-template="{value}" style="font-size:0.21875rem;float: left;"></el-rate> 
              <div class="song" style="float: right;">
                <span>蜂鸟专送</span>
                <span style="color: #3190e8;border: 0.0156rem #3190e8 solid;background: #fff;">准时送</span>
              </div>
            </div>
            <div class="xian">
              ￥{{i.float_minimum_order_amount}}起送 / 配送费约 ￥{{i.float_delivery_fee}}
              <div style="float: right;font-size: 0.1875rem;">
                <span class="time">{{i.distance}}</span> /
                <span style="color: #3190e8;">{{i.order_lead_time}}</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <elmfooter :num="1"></elmfooter>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swiper from "swiper";
export default {
  components: {
    elmheader: Header,
    elmfooter: Footer
  },
  data() {
    return {
      type: true,
      id: "",
      city: "",
	  typehttp: "",
	  ads_name:'',
      alltype: {},
      allshop: {},
      allres: {}
    };
  },
  methods: {
    //      搜索餐馆
    search() {}
  },
  mounted() {
    new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: false, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  created() {
    if (localStorage.userName) {
      this.login_success = true;
    } else {
      this.login_success = false;
    }

    this.shophttp = "//elm.cangdu.org/img/";
    this.typehttp = "https://fuss10.elemecdn.com";
	// console.log(this.$route)
	
	fetch('https://elm.cangdu.org/v2/pois/' + this.$route.query.geohash).then(response => response.json()).then(res => {
      this.ads_name = res.name
    })

    //		分类
    fetch("https://elm.cangdu.org/v2/index_entry")
      .then(response => response.json())
      .then(response => {
        this.alltype = response;
      });

    //		附近商家
    fetch(
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
    )
      .then(response => response.json())
      .then(response => {
        this.allshop = response;
        // console.log(this.$route)
        console.log(response);
      });
    console.log(this.city);
  }
};
</script>
<style>
.el-rate__icon{
 font-size: 0.375rem !important;
 margin-right: 0 !important;
}
</style>
<style scoped>
* {
  margin: 0;
}

.swiper-container {
  width: 100%;
  height: 5.9375rem;
}
.all {
  width: 25%;
  height: 2.5rem;
  padding: 0.0938rem;
  margin-top: 0.1875rem;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 0.2188rem;
  float: left;
}
.icon {
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.2344rem 18%;
}
.icon img {
  width: 100%;
  height: 100%;
}
.Login-i {
  position: absolute;
  right: -0.625rem;
  top: 0.1563rem;
}
.icon-sousuo {
  padding-left: 0.3125rem;
  padding-top: 0.0938rem;
}
.main {
  width: 100%;
  height: auto;
  margin-top: 0.4688rem;
}
.top {
  height: 1.25rem;
  line-height: 1.25rem;
  padding-left: 1em;
  text-align: left;
  border-top: 0.0156rem #ccc solid;
  border-bottom: 0.0156rem #ccc solid;
}
.icon-shangdian {
  margin-left: 0;
}
.shops {
  width: 100%;
  height: 2.6rem;
  padding: 0.2813rem;
  box-sizing: border-box;
  border-bottom: 0.0156rem #ccc solid;
}
.shopimg {
  width: 1.875rem;
  height: 1.875rem;
  float: left;
}
.shopimg > img {
  width: 100%;
  height: 100%;
}
.shoptext {
  width: 78%;
  height: 2.3438rem;
  text-align: left;
  float: right;
  color: #666;
}
.shoptext > div {
  height: 0.66rem;
  font-size: 0.25rem;
}
.shopname {
  width: 50%;
  height: 0.4688rem;
  line-height: 0.4688rem;
  float: left;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  color: #333;
  font-weight: bold;
  font-size: 0.45rem;
}
.name span {
  color: #333;
  display: inline-block;
  font-size: 0.25rem;
  float: left;
  padding: 0.0156rem 0.0625rem;
  background: yellow;
  margin-right: 0.0625rem;
  border-radius: 0.0625rem;
}
.song {
  float: right;
}
.song span {
  display: inline-block;
  font-size: 0.2188rem;
  padding: 0.0156rem 0.0469rem;
  color: #fff;
  margin-right: 0.0313rem;
  border-radius: 0.0625rem;
  background: #3190e8;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0px;
}
</style>