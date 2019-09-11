<template>
	<div>
        <elmheader>
            <template v-slot:left>
                <router-link to="/personal">&lt;</router-link>
            </template>
            <template v-slot:center>
                服务中心
                </template>
        </elmheader>
		<div class="contain">
		<div class="tit">
			<div class="items">
				<dl>
					<dt style="margin-bottom:0.3906rem;font-size:0.7031rem;color:rgb(255, 123, 82)" class="iconfont icon-icon05"></dt>
					<dd><span style="font-size:0.4688rem">在线客服</span></dd>
				</dl>
			</div>
			<div class="items">
				<dl>
					<dt style="margin-bottom:0.3906rem;font-size:0.7031rem;color:rgb(106, 194, 11)" class="iconfont icon-dianhua"></dt>
					<dd><span style="font-size:0.4688rem">在线客服</span></dd>
				</dl>
			</div>
		</div>
		<h3 style="padding-left:0.3125rem">热门问题</h3>
		<div class="list">
			<router-link v-for=" (i,$index) in data.tit" :key="$index" :to="{name:'servelink',params:{tit:i,info:data.info[$index]}}">
				<li>{{i}} 
					<span style="float:right;font-size:0.4688rem">></span> 
				</li>
			</router-link>
		</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
import Header from '../components/Header'
export default {
    components:{
        elmheader:Header,
    },
    data(){
		return{
			data:{
				tit:[],
				info:[]
			},
		}
	},
	created(){
		this.serve()
	},
	methods:{
		serve(){
			this.$http.get('https://elm.cangdu.org/v3/profile/explain').then(res=>{
				for(var i in res.data){
					if(i.charAt(i.length-1)=='n'){
						this.data.tit.push(res.data[i])
					}
					if(i.charAt(i.length-1)=='t'){
						this.data.info.push(res.data[i])
					}
				}	
			})
		}
	}
}
</script>
<style scoped>
.tit{
	display: flex
}
.items{
	width: 50%;
	text-align: center;
	padding: 0.3125rem;
	border-bottom: 0.0156rem solid gainsboro
}
.items:nth-of-type(1){
	border-right: 0.0156rem solid gainsboro
}
.items dl img{
	width: 0.9375rem;
	height: 0.9375rem;
}
h3{
	line-height: 1.5625rem;
}
.list li{
	line-height: 1.5625rem;
	border-top: 0.0156rem solid gainsboro;
	font-size: 0.3906rem;
	padding: 0 0.3125rem;
    color: #000;
}
</style>