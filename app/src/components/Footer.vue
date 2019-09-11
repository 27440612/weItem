<template>
  <div class="foot">
    <router-link to="/food">
      <dl>
        <dt class="iconfont icon-SSS" :class="{active:num==1}"></dt>
        <dd>外卖</dd>
      </dl>
    </router-link>
    <router-link to="/search">
      <dl>
        <dt class="iconfont icon-zhinanzhen" :class="{active:num==2}"></dt>
        <dd>搜索</dd>
      </dl>
    </router-link>
    <router-link to="/order">
      <dl>
        <dt class="iconfont icon-dingdan" :class="{active:num==3}"></dt>
        <dd>订单</dd>
      </dl>
    </router-link>
    <router-link to="/personal">
      <dl>
        <dt class="iconfont icon-wode" :class="{active:num==4}"></dt>
        <dd>我的</dd>
      </dl>
    </router-link>
  </div>
</template>
<script>
export default {
  props:['num'],
  };
</script>
<style>
* {
  margin: 0;
}
.foot {
  width: 10rem;
  height: 1.25rem;
  display: flex;
  box-shadow: 0 -0.0417rem 0.0833rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
}
.foot>a{
    flex: 1;
}
.foot  dl {
    width: 100%;
  height: 1.25rem;
  text-align: center;
  flex-direction: column;
  color: #666;
}
.foot dt {
  font-size: 0.625rem;
  line-height: 0.7813rem;
}
.active{
  color: #3190e8;
}
</style>