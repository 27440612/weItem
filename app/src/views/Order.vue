<template>
  <div class="theorderlist" style="background:#f1f1f1;">
    <elmheader>
      <template v-slot:left>
        <router-link to="/personal">&lt;</router-link>
      </template>
      <template v-slot:center>订单列表</template>
    </elmheader>
    <elmfooter :num="3"></elmfooter>
    <ul class="order_list_ul">
      <li class="order_list_li" v-for="(i,$index) in order_list_li" :key="$index">
        <router-link
          tag="div"
          style="width:100%;height:100%;padding:0.3125rem 0.4688rem" :to="{name:'pay',params:{shop:i}}"
        >
          <img class="restaurant_image" :src="'http://elm.cangdu.org/img/'+i.restaurant_image_url" />
          <div class="order_item_right" style="float:right">
            <div class="order_detail">
              <div class="order_top">
                <div class="order_top_left">
                  <div class="order_yanshi">
                    <p style="display:inline-block;font-size:0.44rem;">{{i.restaurant_name}}</p>
                    <span
                      style="float:right;margin-right:0.1rem;margin-top:0.2rem;"
                    >{{i.status_bar.title}}</span>
                  </div>
                  <div class="order_shjian">
                    <span style="font-size: .25rem;color: #999;">{{i.formatted_created_at}}</span>
                  </div>
                </div>
              </div>
              <div class="order_bottom">
                <div class="order_bottom_left">
                  <p
                    style="display:inline-block;font-size: .35rem;color: #666;height: 0.9994rem;line-height:0.9994rem;"
                  >{{i.basket.group[0][0].name}}</p>
                  <span
                    style="float:right;margin-right:0.1rem;margin-top:0.2rem;color:#f60;font-size: .35rem;font-weight: 700;"
                  >&yen;{{i.total_amount}}</span>
                </div>
              </div>
            </div>
            <div class="order_again">
              <router-link to="/shopping">
                <span class="buy_again">再来一单</span>
              </router-link>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    elmheader: Header,
    elmfooter: Footer
  },
  data() {
    return {
      order_list_li: ""
    };
  },
  created() {
    console.log(this.$router);
    this.axios
      .get("https://elm.cangdu.org/bos/v2/users/12/orders?limit=10&offset=0")
      .then(data => {
        this.order_list_li = data.data;
        console.log(data.data);
      });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  text-decoration: none;
  outline: none;
  font-size: 0.3rem;
  list-style-type: none;
}
span{
  font-family: Helvetica Neue,Tahoma,Arial;
}
header {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0.01rem;
  width: 100%;
  height: 1.2rem;
}
header span {
  color: aliceblue;
  float: left;
  font-size: 0.8rem;
  height: 1.2rem;
  line-height: 1.2rem;
  margin-left: 0.3125rem;
}
h4 {
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  color: aliceblue;
  font-size: 0.5rem;
}
.order_list_ul{
    /* padding-top: 1.95rem; */
}
.order_list_li{
    background: #fff;
    display: flex;
    margin-bottom: .5rem;
}
.restaurant_image{
    width: 2rem;
    height: 2rem;
    margin-right: .4rem;
}
.order_item_right{
    width: 70%;
}
.order_detail{
    width:100%;
} 
.order_top{
    border-bottom: 0.0156rem solid #e5dada;
    background-color: #fff;
    width: 100%;
    height: 1.2rem;
    /* padding-bottom: 0.0313rem; */

}
.order_bottom{
    border-bottom: 0.0156rem solid#e5dada;
    background-color: #fff;
     width: 100%;
    height: 0.9994rem;
    /* padding-bottom: 0.0313rem; */
}
.order_again{
    text-align: right;
    line-height: 1.2rem;
}
.buy_again{
    font-size: .35rem;
    color: #3190e8;
    border: .025rem solid #3190e8;
    padding: .1rem .2rem;
    /* margin-top:0.1781rem; */
    border-radius: .15rem;
}
</style>