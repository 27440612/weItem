<template>
	<div id="contain">
        <elmheader>
            <template v-slot:left>
                <router-link to="/serve">&lt;</router-link>
            </template>
            <template v-slot:center>
                {{$route.params.tit}}
                </template>
        </elmheader>
		<div v-if="datas.img!=''" class="contain">
			<div v-for="(i,$index) in datas.img" :key="$index" >
			<img :src="i" alt="" style="width:100%">
			<p style="padding:0.3125rem;font-size:0.4688rem" v-html="datas.info[$index]"></p>
			</div>
		</div>
		<div v-else class="contain">
			<p  style="padding:0.3125rem;font-size:0.4688rem" v-html="$route.params.info"></p>
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
			datas:{}
		}
	},
	created(){
		var arr=this.$route.params.info.split('![](')
		var Img=[],Info=[]
		arr.forEach(element => {
			Img.push(element.split(') ##')[0])
			Info.push(element.split(') ##')[1])
		});
		this.datas.img=Img.slice(1)
		this.datas.info=Info.slice(1)
	}
}
</script>