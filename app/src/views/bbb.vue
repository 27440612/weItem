<template>
    <div class="main">
        <div>231454678863535</div>
        <div @click="openMask">打开弹窗</div>
        <dialog-bar v-model="sendVal" type="confirm" content="我是XXX"></dialog-bar>
    </div>
</template>
<script>
import dialogBar from '../components/alert'
export default {
   components:{
        'dialog-bar': dialogBar,
    },
    data(){
        return{
            sendVal: false,
        }
    },
    methods:{
        openMask(index){
            this.sendVal = true;
        },
        clickConfirm(){
            console.log('点击了confirm');
        }
    }
}
</script>
<style lang="less" scoped>
*{
    z-index: 1;
}
</style>