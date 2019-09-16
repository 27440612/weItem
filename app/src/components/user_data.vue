<template>
	<div class="contain">
		<div class="nav">
			<div class="price">
				<span style="font-size:0.3125rem"><slot name="tit-left"></slot></span>
				
				<slot name="tit-right"></slot>
				<p>
					<span style="font-size:0.9375rem;line-height:1.875rem"><slot name="num"></slot></span>
					<span style="font-size:0.4688rem"><slot name="units"></slot></span>
				</p>
					<div class="btns">
						<slot name="btn"></slot>
					</div>
			</div>
		</div>
		<p class="jy"><slot name="loding-tit"></slot></p>
		<div class="no_log">
			<img src="../assets/img/kong.png" alt="">
			<slot name="loding-info"></slot>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>
*{
	margin: 0;
	box-sizing: border-box
}
#contain{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 203;
	min-height: 42.1875rem;
	background-color: #fff;
}
.header{
	background-color: #3190e8;
    position: fixed;
    z-index: 100;
	left: 0;
	line-height: 1.5625rem;
	text-align: center;
    top: 0;
    width: 100%;
    height: 1.5625rem;
}
.nav{
	padding: 0.3125rem;
    background-color: #3190e8;
}
.price{
	padding: 0.1563rem;
	background: white;
	border-radius: 0.0938rem
}
.btns{
	width: 100%;
	height: 1.5625rem;
	line-height: 1.5625rem;
	background: #ccc;
	color: white;
	border-radius: 0.0938rem;
	text-align: center;
}
.jy{
	font-size: 0.4688rem;
    color: #999;
    line-height: 1.5625rem;
    padding-left: 0.1563rem
}
.no_log{
	text-align: center;
    margin-top: 0.9375rem
}
.no_log p{
	margin-top: 0.3125rem;
    font-size: 0.625rem;
    color: #666;
}
</style>