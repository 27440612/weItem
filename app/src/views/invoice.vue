<template>
  <div class="invoice">
    <elmheader>
        <template v-slot:left>
            <router-link to="/confirmOrder">&lt;</router-link>
        </template>
        <template v-slot:center>选择发票抬头</template>
    </elmheader>
    <section class="choose_invoice">
      <span>不需要开发票</span>
      <input type="checkbox" checked='true'>

    </section>

    <router-link to="/confirmOrder">
      <div class="determine">确定</div>
    </router-link>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
	components:{
		elmheader: Header,
	}
}
</script>
<style scoped>
.circle {
}
.fl {
  float: left;
}
.fr {
  float: right;
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
.invoice {
  width: 100%;
  min-height: 23.4375rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 111;
}
.order {
  margin-left: 35%;
}
.determine {
  background-color: #4cd964;
  font-size: 0.46875rem;
  color: #fff;
  text-align: center;
  margin: 0.3125rem 0.625rem 0 0.625rem;
  line-height: 1.25rem;
  border-radius: 0.3125rem;
}
.choose_invoice {
  padding-left: 0.3125rem;
  vertical-align: middle;
  background: #fff;
  line-height: 1.5625rem;
  margin: 0.3125rem 0;
}
.choose_invoice span {
  vertical-align: bottom;
  font-size: 0.375rem;
  color: #333;
}
.choose_invoice input {
  width: 0.625rem;
  height: 0.625rem;
  margin-left: 5.9375rem;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
