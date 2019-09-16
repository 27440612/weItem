<template>
  <div class="addAddress">
    <elmheader>
        <template v-slot:left>
            <router-link to="/chooseaddress">&lt;</router-link>
        </template>
        <template v-slot:center>添加地址</template>
    </elmheader>
    <section class="page_text_container">
      <section class="section_list section_list1 clearfix">
        <span class="section_left fl lianxiren" style="position:raletive;top:0.5rem">联系人</span>
        <div class="fr" style="width: 7rem;">
          <section class="section_right fr">
            <input type="text" name="name" placeholder="你的名字" class="input_style fr" v-model="user.username">
            <div class="choose_sex fr">
              <span class="choose_option fr">
                <input type="radio" name="myChoose" value="2" v-model="user.sex" >
                <span>女士</span>
              </span>
              <span class="choose_option fr">
                <input type="radio" name="myChoose"  value="1" v-model="user.sex">
                <span>先生</span>
              </span>
            </div>
          </section>
        </div>
      </section>
      <section class="section_list section_list2 clearfix">
        <span class="section_left phone fl">联系电话</span>
        <section class="section_right fr">
          <div class="phone_add">
            <input type="text" name="phone" placeholder="你的手机号" class="input_style" v-model='user.iphone'>
            
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAHRJREFUSA1jZCAT8E59/R+m9XO2KCOMTQrNRIpiaqsdtZzaIUqUeaPBTlQwUVvRaLBTO0SJMm802IkKJmorYkSunahtOCHzRm6ck9UIAAUncnSNNiYIJTB0+ZGb4EZ9jp4W6MIfDXa6BDO6JaPBjh4idOEDAOTZCsiDM8JjAAAAAElFTkSuQmCC"
              height="20"
              width="20"
              @click="user.type=true"
            >
            
          </div>
        </section>
        <section class="section_right fr" v-show="user.type">
          <input type="text" class="input_style" placeholder="备注电话" v-model="user.oiphone">
        </section>
      </section>
      <section class="section_list section_list3">
        <span class="section_left songcanAddress fl">送餐地址</span>
        <section class="section_right fr">
          <div class="choose_address" @click="cun()" contenteditable>
            <router-link to="/select_address2">
              <input
                type="text"
                placeholder="小区/写字楼/学校等"
                v-model="user.address"
                class="input_style"
              >
            </router-link>
          </div>
          <input
            type="text"
            name="address_detail"
            placeholder="详细地址（如门牌号等）"
            class="input_style input_style1"
            v-model="user.eatress"
          >
        </section>
      </section>
      <section class="section_list section_list4 clearfix">
        <span class="section_left">标签</span>
        <section class="section_right fr">
          <input type="text" name="tag" placeholder="无/家/学校/公司" class="input_style" v-model="user.tag">
        </section>
      </section>
    </section>
    <div class="determine" @click="determine">确定</div>
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
      user: {
        username: "",
        address: "",
        eatress: "",
        iphone: "",
        oiphone: "",
        sex:'',
        tag: "",
        type:false,
        geohash:''
      },
    };
  },
  created() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
      this.user.address = this.$route.params.name;
      this.user.geohash = this.$route.params.geohash;
      this.user.eatress=this.$route.params.address
    }
  },
  methods: {
    cun() {
      localStorage.user = JSON.stringify(this.user);
    },
    determine() {
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
            sex: this.user.sex,
            tag: this.user.tag,
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
            this.$router.push("/chooseaddress");
          }
        });
    }
  }
};
</script>
<style scoped>
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
.addAddress {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 101;
}
.section_list1 {
  position: relative;
}
.lianxiren {
  position: absolute;
  left: 0.15625rem;
  top: 1.7187500000000002rem;
}
.section_list2 {
  position: relative;
  padding-top: 0.3125rem;
  padding-right: 0.3125rem;
}
.phone {
  position: absolute;
  left: 0.15625rem;
  top: 0.15625rem;
}
.section_list3 {
  position: relative;
  margin-top: -0.3125rem;
  overflow: hidden;
}
.songcanAddress {
  position: absolute;
  left: 0.15625rem;
  top: 0.15625rem;
}
.section_list4 {
  position: relative;
  padding-top: 0.3125rem;
  overflow: hidden;
  vertical-align: middle;
  padding-left: 0.3125rem;
}

.section_list {
  background-color: #fff;
  border-bottom: 0.0390625rem solid #f5f5f5;
  padding-bottom: 0.3125rem;
}
.section_list .section_left {
  width: 20%;
  font-size: 0.46875rem;
  color: #333;
  line-height: 1.5625rem;
  text-align: center;
}
.section_list .section_right .input_style {
  width: 90%;
  height: 1.25rem;
  font-size: 0.46875rem;
  color: #999;
  border: none;
  outline: none;
}
.input_style1 {
  width: 90%;
}
.choose_sex{
  width: 90%;
  line-height: 1.5625rem;
  border-top: 0.0390625rem solid #f5f5f5;
}
.section_list .section_right .choose_sex .choose_option {
  font-size: 0.46875rem;
  color: #333;
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
}
.section_list .section_right .phone_add {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.section_list .section_right .choose_address a {
  font-size: 0.46875rem;
  color: #999;
  line-height: 1.5625rem;
  border-bottom: 0.0390625rem solid #f5f5f5;
  outline: none;
}
.address_page input,
.address_page p,
.address_page span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.determine {
  background-color: #4cd964;
  font-size: 0.625rem;
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin: 0 1.09375rem;
  line-height: 1.5625rem;
  border-radius: 0.3125rem;
  margin-top: 0.9375rem;
}
</style>
