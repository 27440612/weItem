<template>
<div class="about">
    <elmheader>
        <template v-slot:left>
            <router-link to="/">&lt;</router-link>
        </template>
        <template v-slot:center>订单列表</template>
    </elmheader>
    <elmfooter :num="3"></elmfooter>
</div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
components:{
    elmheader:Header,
    elmfooter:Footer,
},
created(){
    console.log(this.$store.state.user)
}
}
</script>
<style scoped>
</style>