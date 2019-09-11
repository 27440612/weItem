<template>
	<div class="app">
         <elmheader>
            <template v-slot:left>
                <router-link to="/personal">&lt;</router-link>
            </template>
            <template v-slot:center>下载</template>
        </elmheader>
		<div class="contain">
			<div class="app-img">
				<img src="../assets/img/elmapp.jpg" alt="">
			</div>
			<p>下载饿了么APP</p>
			<div class="xz-btn">下载</div>
		</div>
	</div>
</template>
<style scoped>
	.app-img{
		margin-top: 0.625rem;
		border-radius: 0.625rem;
		display: inline-block;
		overflow: hidden;
	}
	.app-img img{
		width: 100%;
		height: 100%;
	}
	.contain{
		text-align: center;
		background: #fff;
	}
	.xz-btn{
		    background-color: #4cd964;
    font-size: 0.46875rem;
    color: #fff;
    text-align: center;
    margin: 0 1.09375rem;
    line-height: 1.25rem;
    border-radius: 0.3125rem;
    margin-top: 0.390625rem;
	}
</style>
<script>
import Header from "../components/Header";
export default {
	components:{
		elmheader: Header,
		name:'app'
	}
}
</script>