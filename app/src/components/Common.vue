<template>
  <div class="logif">
      <img src="../../img/20140128102341_SAyMy.thumb.224_0.gif">
    </div>
</template>

<script>
export default {
    data () {
        return {
            titgif:''
        }
    },
    created () {
        setTimeout(function(){
      this.titgif = document.querySelector('.logif')
      this.titgif.style.display = 'none'
    },3500)
    }
}
</script>

<style scoped>
.logif{
      width: 400px;
      height: 400px;
      position: fixed;
      top: 50%;
      left: 0;
      margin-top: -200px;
      border-radius: 50%;
      left: 50%;
      margin-left: -200px;
    }
    .logif img{
      width: 400px;
      height: 400px;
      border-radius: 50%;
    }
</style>