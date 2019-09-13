<template> 
<!-- ----------------------------------------------------搜索 -->
    <div class="Search">
        <!-- 头部 -->
        <elmheader>
            <template v-slot:left>
                <router-link to="/personal">&lt;</router-link>
            </template>
            <template v-slot:center>搜索</template>
            <template v-slot:right></template>
        </elmheader>
        <elmfooter :num="2"></elmfooter>
        <!-- 提交  搜索 -->
        <div class="SearchBtn">
            <input type="search" id="myfrom" placeholder="请输入商家或者美食名称" v-model="City" value="" @input="change" @keydown.enter="SearchBtn()">
            <button @click="SearchBtn()">提交</button>
        </div>
        <!-- 搜索 -->
        <div>
            <div class="History_Search" v-if="type"> 
                <span>{{Sousu}}</span>
            </div>
            <div class="Histroy_By" v-if="shoptype">
                <div class="Histroy_Sj">
                    <span>商家</span>
                </div>
                <div class="Histroy_Div" v-for="(i,$index) in MnArr" :key="$index">
                    <div class="Histroy_Img">
                        <img :src='"http://elm.cangdu.org/img/"+i.image_path'>
                    </div>
                    <div class="Histroy_p">
                        <p>{{i.name}}</p>
                        <p>月售{{i.recent_order_num}}单</p>
                        <p>{{i.float_minimum_order_amount}}元起送 / 距离{{i.distance}}</p>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="order" v-if="soutype">
            <span>搜索历史</span>
        </div>
        <div class="content" v-if="soutype">
            <ul v-for="(i,index) in hisrecords" :key="index+'i'">
                <li @click="clicks(i)"><span>{{i}}</span></li>
            </ul>
        </div>
        <div class="Clear" @click="ClearBtn" v-if="soutype">
            <span>清除搜索历史</span>
        </div>

    </div>
    
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    elmheader: Header,
    elmfooter: Footer
  },
    data () {
        return {
            // 双向绑定
            City:'',
            // 数据
            Vague: [],
            // 本地存储 hisrecords
            hisrecords: [],
            type: false,
            typetwo: true,
            Sousu:'',
            soutype:true,
            shoptype:false,
            MnArr:[
                // {
                //     img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568287108842&di=51c8069ad8214d7eadae1603b7d99e06&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
                //     name: 'nihao',
                //     name_p:'月售 407 单',
                //     name_tree:'20 元起送/距离1171.4公里'
                // },
                // {
                //     img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568287108842&di=51c8069ad8214d7eadae1603b7d99e06&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
                //     name: 'niubileasd',
                //     name_p:'月售 997 单',
                //     name_tree:'20 元起送/距离1904公里'
                // },
                // {
                //     img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568287108842&di=51c8069ad8214d7eadae1603b7d99e06&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
                //     name: 'nibao1',
                //     name_p:'月售 407 单',
                //     name_tree:'20 元起送/距离1658.1公里'
                // }
            ]
        }
    },
    created () {
        console.log(this.$route)
        if(localStorage.hisrecords){
            //  localStorage.hisrecords = JSON.parse(this.hisrecords)
            this.hisrecords = JSON.parse(localStorage.hisrecords)
        }else{
            this.hisrecords = []
        }
    },
    methods: {
        clicks(i){
            this.City=i
            this.SearchBtn()
            this.soutype=false
        },
        change(){
            if(this.City.length == 0){
                this.type = false
                this.soutype = true
                this.shoptype=false
            }else{
                this.soutype = false
            }
        },
        SearchBtn(){
            this.$http.get("https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword="+this.City)
            .then(res=>{
                this.Vague = res.data
                console.log(res)
                if(res.data.length == 0){
                    this.Sousu = '很抱歉！无搜索结果'
                    this.type = true
                }else if(res.data.length>=0){
                    this.MnArr=res.data
                    this.shoptype=true
                    this.type = false
                }
            }).catch(error=>{
                console.log(error)
            })
            if(this.City !==''){
                this.hisrecords.push(this.City)
                localStorage.hisrecords = JSON.stringify(this.hisrecords)
            }
            if(this.hisrecords != []){
                this.typetwo = true
            }
            
        },
        ClearBtn(){
            localStorage.clear()
            this.hisrecords= []
            if(this.hisrecords= []){
                this.typetwo = false
            }
        }
    }
}
</script>
<style scoped>
    *{
        margin:0;
        text-decoration: none;
    }
    body{
        background: #f5f5f5;
    }
    .Search{
        background: #f5f5f5;
    }
    
    .SearchBtn{
        width: 10rem;
        height: 1.5rem;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        background: #fff;
    }
    .SearchBtn input{
        width: 7rem;
        height: 1rem;
        margin-top: 0.3rem;
        border: 1px solid #e4e4e4;
        outline: none;
        margin-left: 0.3125rem;
        padding-left:0.3125rem;
        background: #e4e4e4;
        float: left;
    }
    .History_Search{
        width: 10rem;
        height: 1.5rem;
        text-align: center;
        background: #fff;
    }
    .History_Search span{
        line-height: 1.5rem;
        font-size: 0.4rem
    }
    .SearchBtn button{
        width: 2rem;
        height: 0.9rem;
        background: #3190e8;
        border: none;
        border-radius: 0.1rem;
        color: #fff;
        font-size: 0.5rem;
        margin-left: 0.3125rem;
        float: left;
        margin-top: 0.3406rem;
    }
    .History{
        background: #fff;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
    }
    .History ul li{
        height: 2rem;
        border-bottom: 1px solid #e4e4e4;
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
        text-align: center;
        background: #fff;
    }
    .Clear span{
        font-size: 0.5125rem;
        line-height: 1rem;
        color: #3190E8;
    }
    .order{
        width: 10rem;
        height: 1rem;
        background: #e4e4e4;
        margin-top: 10px;
    }
    .order span{
        padding-left: 0.3125rem;
        line-height: 1rem;
        font-size: 0.4rem;
        color: #666;
    }
    .content{
        width: 10rem;
        min-height: auto;
    }
    .content ul li{
        width: 10rem;
        font-size: 0.4125rem;
        line-height: 2rem;
        height: 2rem;
        border-bottom: 1px solid #e4e4e4;
        background: #fff;
        border-top: 1px solid #e4e4e4;
    }
    .content ul li span{
        padding-left: 0.3125rem;
    }
    .Histroy_Sj{
         width: 10rem;
        height: 1.5rem;
        background: #e4e4e4;
    }
    .Histroy_Sj span{
        padding-left: 0.3125rem;
        line-height: 1.5rem;
        font-size: 0.4125rem;
    }
    .Histroy_Div{
        width: 10rem;
        height: 3rem;
        padding: 0.5rem 0.5rem;
        box-sizing: border-box;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
    }
    .Histroy_Img{
        width: 2rem;
        height: 2rem;
        float: left;
    }
    .Histroy_Img img{
        width: 100%;
        height: 100%;
    }
    .Histroy_p{
        width: 6rem;
        height: 2.5rem;
        float: left;
        margin-left: 0.3125rem;
    }
    .Histroy_p p{
        line-height: 0.8rem;
        font-size: 0.4rem;
    }
</style>