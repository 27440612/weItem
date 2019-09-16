<template>
  <div class="loading"></div>
</template>
<script>
export default {
  name: "Loading" // 定义的组件名称 使用时写法：loading
};
</script>

<style scoped>
html,body{
    height: 100%;
    width: 100%;
}
.loading{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url('../assets/loading.gif') center center no-repeat;
  background-size: 8rem 6rem;
  z-index: 99;
  opacity: 0.4;
}
</style>