<template>
  <div style="background:#f5f5f5;height:100%">
    <elmheader>
      <template v-slot:left>
        <router-link to="/usermsg">&lt;</router-link>
      </template>
      <template v-slot:center>修改用户名</template>
      <template v-slot:right></template>
    </elmheader>
    <input type="text" placeholder="输入用户名" v-model="username" @input="input()" 
    :style="{'outline-color':username.length<5?color:''}"> 
    <p :style="{'color':username.length<5?color:''}">{{msg}}</p>
    <button class="btn" @click="changename()">确认修改</button>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
    components: {
        elmheader: Header
    },
    data(){
        return{
            username:'',
            msg:'用户名只能修改一次（5-24字符之间）',
            color:'',
        }
    },
    methods:{
        input(){
            if(this.username.length<5){
                this.msg='用户名长度在5到24位之间'
                this.color='red'
            }else{
                this.msg='用户名只能修改一次（5-24字符之间）'
                this.color=''
            }
        },
        changename(){
            this.$store.commit('setUsername',this.username)
            this.$router.push('/usermsg')
        }
    }
}
</script>
<style scoped>
input:nth-of-type(1){
    width: 96%;
    margin: 0.3125rem 2% 0;
    background: none;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 2px;
    padding: .2rem 0.3125rem;
    line-height: 0.6875rem;
    font-size: 0.4688rem;
    display: block;
}
p:nth-of-type(1){
    width: 100%;
    font-size: 0.4rem;
    color: #666;
    padding: .4rem 0.3125rem 0.625rem;
    box-sizing: border-box;
}
.btn{
    width: 96%;
    background: #3199e8;
    height: 1.25rem;
    text-align: center;
    line-height: 1.25rem;
    border: none;
    color: #fff;
    margin: 0 2%;
    border-radius: 0.0625rem;
    outline: none;
}
</style>