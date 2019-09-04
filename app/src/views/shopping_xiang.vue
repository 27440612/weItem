<template>
	<div>
		<header>
			<p>商品</p>
			<p>评价</p>
		</header>
		
		<aside>
			<ul>
				<li></li>
			</ul>
		</aside>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				type:true,
				shop_x:''
			}
		},
		created(){
			fetch('https://elm.cangdu.org/shopping/restaurant/:shopid')
			.then(response=>response.json())
			.then(response=>{
				this.shop_x = response;
			})
			console.log(this.shop_x)
		}
	}
</script>
	
<style>
</style>