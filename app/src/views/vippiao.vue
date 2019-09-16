<template>
	<div id="contain">
        <elmheader>
            <template v-slot:left>
                <router-link to="/elmvip">&lt;</router-link>
            </template>
            <template v-slot:center>购买记录</template>
        </elmheader>
		<div class="contain" style="text-align:center">
			<img src="../assets/img/kong.png" alt="">
			<p>没有购买记录</p>
		</div>
	</div>
</template>
<style scoped>
	img{
		margin-top: 3.125rem;
	}
	p{
		font-size: 0.46875rem;
		color: #999;
		margin-top: 0.625rem;
	}
</style>
<script>
import Header from "../components/Header";
export default {
  components: {
     elmheader: Header,
  }
}
</script>