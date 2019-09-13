<template>
  <div class="head">
    <span class="left">
      <slot name="left"></slot>
    </span>
    <span class="center">
      <slot name="center"></slot>
    </span>
    <span class="right">
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
export default {
  created(){
    console.log()
  }
};
</script>

<style>
* {
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: #fff;
}
.head {
  width: 10rem;
  height: 1.5625rem;
  background-color: #3190e8;
  color: white;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  padding: 0 0.3125rem;
  box-sizing: border-box;
  display: flex;
  border-bottom: 0.0234rem solid rgb(0, 229, 255);
}
.head span {
  font-size: 0.375rem;
  flex: 1;
  float: left;
}
.head .center {
  font-size: 0.4688rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  flex: 2;
}
.left{
  font-weight: 700;
  color: #fff;
}
.right {
  text-align: right;
}
</style>
