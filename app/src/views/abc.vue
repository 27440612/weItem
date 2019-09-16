<template>
  <div id="demo">
    <button @click="show = !show">click me</button>
    <transition name="fade" enter-active-class="enter" leave-active-class="leave">
      <div v-if="show" class="de">sfsf</div>
    </transition>
  </div>
</template>

<script>
export default{
  data(){
      return{
          show: true
      }
    
  }
};
</script>
<style scoped>
.de {
  height: 100px;
  width: 100px;
  background: red;
}
@keyframes fontScale {
  0% {
    height: 100px;
  }
  100% {
    height: 10px;
  }
}
.leave {
  animation: fontScale 3s;
}
.enter {
  animation: fontScale 3s;
}
</style>