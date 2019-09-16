<template>
  <div class="choose">
    <elmheader>
            <template v-slot:left>
                <router-link to="/confirmOrder">&lt;</router-link>
            </template>
            <template v-slot:center>选择地址</template>
        </elmheader>
    <div class="add">
      <ul>
        <li v-for="(i,index) in arrdata" @click="btn(i)" :key="index" >
          <div style="float:left;height:1.5625rem;line-height:1.5625rem;margin-right:0.3125rem;" v-show='type'>
            <span >✔</span>
          </div>
          <div>
            <span style="font-size:0.546875rem;font-weight:800;">{{i.name}}</span>
            <span style="font-size:0.46875rem;margin:0rem 0.234375rem;">{{i.sex==1?'先生':'女士'}}</span>
            <span style="font-size:0.46875rem;">{{i.phone}}</span>
          </div>
          <div style="width:100%;height:0.78125rem;">
            <span class="tag">{{i.tag}}</span>
            <span style="width:100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:0.46875rem;float: left;">{{i.address_detail}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="newAddress">
      <span @click="toNewAddress()">新增收货地址</span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
	components:{
		elmheader: Header,
	},
  data() {
    return {
      f: "",
      arrdata: "",
      type:false
    };
  },
  // beforeMount() {
  //   this.info();
  // },
  created(){
    this.info()
  },
   beforeRouteUpdate(to,from, next) {
      this.info()
      next()
  },
  methods: {
    toNewAddress() {
      this.$router.push({
        path: "/addaddress"
      });
    },
    btn(a){
      this.type=true
      this.$router.push({name: 'confirmOrder',params:{name:a}})
      this.$store.commit('setorderName',a.name)
      this.$store.commit('setorderSex',a.sex)
      this.$store.commit('setorderPhone',a.phone)
      this.$store.commit('setorderAddress_detail',a.address_detail)
      this.$store.commit('setorderTag',a.tag)
    },
    info(){
      this.$http
        .get(
          "https://elm.cangdu.org/v1/users/" +
            this.$store.state.user.userId +
            "/addresses"
        )
        .then(data => {
          console.log(data);
          this.arrdata = data.data;
        });
    }
  },
};
</script>

<style scoped>
.add {
  background: #fff;
  height: 14rem;
  overflow-y: scroll;
}
.add li {
  padding: 0.546875rem;
  border-bottom: 0.64px solid #ccc;
}
.tag {
  width: 0.78125rem;
  height: 0.46875rem;
  float: left;
  text-align: center;
  background-color: rgb(76, 217, 100);
  font-size: 0.3125rem;
  color: #fff;
  margin-top: 0.125rem;
  margin-right: 0.3125rem;
}
.choose {
  width: 100%;
  height: 17.5rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
}
.zuo {
  margin-left: 0.3125rem;
}
header {
  background-color: #3190e8;
  position: fixed;
  width: 100%;
  height: 1.5625rem;
  line-height: 1.5625rem;
  color: #fff;
  z-index: 100;
}
.newAddress {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0rem;
  height: 2.15625rem;
  line-height: 2.15625rem;
  background: #fff;
}

.newAddress span {
  color: #3190e8;
  text-align: center;
  display: block;
}
</style>

<style>
* {
  margin: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.fc {
  margin-left: 30%;
}
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
</style>
