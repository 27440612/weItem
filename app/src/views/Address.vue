<template>
  <div style="background:#f5f5f5;height:100%">
    <elmheader>
      <template v-slot:left>
        <router-link to="/usermsg">&lt;</router-link>
      </template>
      <template v-slot:center>编辑地址</template>
      <template v-slot:right>
        <div @click="delete_type=!delete_type" style="float:right">
          <span v-if="delete_type">完成</span>
          <span v-else>编辑</span>
        </div>
      </template>
    </elmheader>
    <div class="address">
      <div v-for="(i,$index) in list" :key="$index">
        <p>{{i.address}}</p>
        <p>{{i.phone}}</p>
        <span class="right" v-if="delete_type" @click="delete_ress(i.id)">X</span>
      </div>
    </div>
    <router-link to="/add_address" style="color:#333">
      <div class="add_ress">
        新增地址
        <span style="float:right">&gt;</span>
      </div>
    </router-link>
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
      list: "",
      delete_type: false
    };
  },
  created() {
    this.hq_ress();
  },
  methods: {
    hq_ress() {
      this.$http
        .get(
          "https://elm.cangdu.org/v1/users/" +
            this.$store.state.user.userId +
            "/addresses"
        )
        .then(data => {
          console.log(data);
          this.list = data.data;
        });
    },
    delete_ress(id) {
      this.$http
        .delete(
          "https://elm.cangdu.org/v1/users/" +
            this.$store.state.user.userId +
            "/addresses/" +
            id
        )
        .then(data => {
          console.log(data);
          this.hq_ress();
        });
    }
  }
};
</script>
<style scoped>
.address {
  margin-top: 0.3125rem;
  background: #fff;
}
.address > div {
  width: 10rem;
  height: 1.5625rem;
  box-sizing: border-box;
  border-bottom: 0.0156rem solid #d9d9d9;
  padding: 0.3125rem;
  font-size: 0.375rem;
  line-height: 0.4688rem;
  position: relative;
}
.address > div:first-of-type {
  border-top: 0.0156rem solid #d9d9d9;
  background: #fff8c3;
}
.right {
  position: absolute;
  right: 0.375rem;
  top: 0.4688rem;
}
.add_ress {
  width: 10rem;
  height: 1.1563rem;
  line-height: 1.1563rem;
  box-sizing: border-box;
  padding: 0 0.4688rem;
  margin-top: 0.4688rem;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  background: #fff;
}
</style>