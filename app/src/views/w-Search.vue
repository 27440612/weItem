<template> 
<!-- ----------------------------------------------------搜索 -->
    <div class="Search">
        <!-- 头部 -->
        <div class="header">
            <router-link to="w-Hmpage">
                <span><</span>
                <!-- 城市  BtnCity-->
                <div class="BtnCity"> 
                    <span>{{this.$route.query.City}}</span>
                </div>
                <span>切换城市</span>
            </router-link>
        </div>
        <!-- 提交  搜索 -->
        <div class="SearchBtn">
            <input type="text" placeholder="输入学校、商务楼、地址" v-model="City">
            <button @click="SearchBtn">提交</button>
        </div>
        <!-- 搜索 -->
        <div class="History">
            <ul>
                <!-- <router-link  > -->
                    <li @click="historyBtn(i)" v-for="(i,index) in Vague" :key="index+'History'">
                        <span class="placename">{{i.name}}</span>
                        <p class="location">{{i.address}}</p>
                    </li>
                <!-- </router-link> -->
            </ul>
        </div>
        <span style="padding-left: 0.3125rem;">搜索历史</span>
        <!-- 搜索历史 -->
        <div class="History" v-if="hisrecords">
            <ul>
                <li v-for="(i,index) in hisrecords" :key="index">
                    <span class="placename">{{i.name}}</span>
                    <p class="location">{{i.address}}</p> 
                </li>
            </ul>
        </div>
        <div class="Clear" @click="ClearBtn">
            <span>清除所有</span>
        </div>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            // 双向绑定
            City:'',
            // 数据
            Vague: [],
            // 传过来的id
            Cityid:this.$route.query.id,
            // 本地存储 hisrecords
            hisrecords: [],
            // dataName:[]
        }
    },
    created () {
        if(localStorage.hisrecords){
            //  localStorage.hisrecords = JSON.parse(this.hisrecords)
            this.hisrecords = JSON.parse(localStorage.hisrecords)
        }else{
            this.hisrecords = []
        }
    },
    methods: {
        SearchBtn(){
            this.$http.get('https://elm.cangdu.org/v1/pois?city_id='+this.Cityid+'&keyword=' + this.City + '&type=search')
            .then(res=>{
                this.Vague = res.data
            }).catch(error=>{
                console.log(error)
            })
        },
        historyBtn(i){
            this.hisrecords.push(i)
            localStorage.hisrecords = JSON.stringify(this.hisrecords)
        },
        ClearBtn(){
            localStorage.clear()
            this.hisrecords= []
        }
    }
}
</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
        text-decoration: none;
    }
    .Search{
        background: #f5f5f5;
    }
    .header{
        width: 10rem;
        height: 1.25rem;
        background: #3190e8;
    }
    .header span{
      text-align: center;
      color: #fff;
      float: left;
      line-height: 1.25rem;
      padding-left: 0.3125rem;
      font-size: .4rem;
    }
    .header span{
      font-weight: 500;
    }
    .header span:nth-child(3){
        float: right;
        font-size: .36rem;
        padding-right: 0.3125rem;
    }
    .BtnCity{
        width: 2rem;
        margin: 0 auto;
    }
    .BtnCity span{
        font-weight: bold;
        font-size: 0.5125rem;
    }
    .SearchBtn{
        width: 10rem;
        height: 2.9rem;
        margin-top: 0.3125rem;
        border-top: 0.001rem solid #e4e4e4;
        border-bottom: 0.001rem solid #e4e4e4;
        background: #fff;
        text-align: center;
    }
    .SearchBtn input{
        width: 9rem;
        height: 1rem;
        margin-top: 0.3rem;
        border: 0.001rem solid #e4e4e4;
        padding-left: 0.3125rem;
        outline: none;
    }
    .SearchBtn button{
        margin-top: 0.3125rem;
        width: 9.3rem;
        height: 0.9rem;
        background: #3190e8;
        border: none;
        border-radius: 0.1rem;
        color: #fff;
        font-size: 0.5rem
    }
    .History{
        background: #fff;
        border-top: 0.001rem solid #e4e4e4;
        border-bottom: 0.001rem solid #e4e4e4;
    }
    .History ul li{
        padding-left: 0.3125rem;
        height: 2rem;
        border-bottom: 0.001rem solid #e4e4e4;
    }
    .placename{
        line-height: 1.3rem;
        font-size: 0.4125rem;
        color: #000;
    }
    .History ul li p{
        color: #999;
    }
    .Clear{
        width: 10rem;
        height: 1rem;
        margin-top: 0.3125rem;
        text-align: center;
        background: #fff;
    }
    .Clear span{
        font-size: 0.5125rem;
        line-height: 1rem;
        color: #666;
    }
</style>