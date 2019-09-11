<template>
  <div>
      <elmheader>
      <template v-slot:left>
        <router-link to="/personal">&lt;</router-link>
      </template>
      <template v-slot:center>我的余额</template>
      <template v-slot:right></template>
    </elmheader>
    <userdata>
      <template v-slot:tit-left>当前余额</template>
      <template v-slot:tit-right>
        <router-link to="/balancelink"
                     style="float:right;color:#3190e8">
                     <span class="iconfont icon-ziyuan"></span>
                     余额说明</router-link>
      </template>
      <template v-slot:num>{{parseInt($store.state.user.userBalance)}}.00</template>
      <template v-slot:units>元</template>
      <template v-slot:btn>提交</template>
      <template v-slot:loding-tit>交易明细</template>
      <template v-slot:loding-info>
        <p>暂无明细记录</p>
      </template>
    </userdata>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "../components/Header";
import userdata from '../components/user_data'
export default {
  components: {
    elmheader: Header,
    userdata: userdata,
    name: 'contain'
  },
  created(){
      console.log('----------------',this.$store.state.user);
  }
}
</script>
<style scoped>
*{
	margin: 0;
	box-sizing: border-box
}
#contain{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 203;
	min-height: 42.1875rem;
	background-color: #fff;
}
.header{
	background-color: #3190e8;
    position: fixed;
    z-index: 100;
	left: 0;
	line-height: 1.5625rem;
	text-align: center;
    top: 0;
    width: 100%;
    height: 1.5625rem;
}
.nav{
	padding: 0.3125rem;
    background-color: #3190e8;
}
.price{
	padding: 0.1563rem;
	background: white;
	border-radius: 0.0938rem
}
.btns{
	width: 100%;
	height: 1.5625rem;
	line-height: 1.5625rem;
	background: #ccc;
	color: white;
	border-radius: 0.0938rem;
	text-align: center;
}
.jy{
	font-size: 0.4688rem;
    color: #999;
    line-height: 1.5625rem;
    padding-left: 0.1563rem
}
.no_log{
	text-align: center;
    margin-top: 0.9375rem
}
.no_log p{
	margin-top: 0.3125rem;
    font-size: 0.625rem;
    color: #666;
}
</style>