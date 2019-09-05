<template>
<!-- ----------------------------------------------------首页 -->
  <!-- home-page -> 首页 -->
  <div class="home-page">
    <!-- 头部 -->
    <div class="header">
      <!-- 头部 elm.me -->
      <span>elm.me</span>
      <div class="header-right">
        <!-- 头部 右边 -->
        <span>登陆|注册</span>
      </div>
    </div>
    <!-- 当前定位城市  Locating the City-->
    <div class="Locating">
      <div class="Locating-top">
        <span>当前定位城市 :</span>
        <span>定位不准时,请在城市列表中选择</span>
      </div>
      <!-- 定位城市  北京..... -->
      <router-link :to="{name:'w-Search',query:{id:Locating.id,City:Locating.name}}" class="Animation">
        <div class="Locating-btn">
          <span>{{Locating.name}}</span>
          <span>></span>
        </div>
      </router-link>
    </div>
    <!-- 热门城市 8个 -->
    <div class="Popular">
      <!-- span 热门城市  -->
      <div class="Popular-span">
        <span>热门城市</span>
      </div>
        <div class="Popular-add">
          <ul>
            <router-link :to="{name:'w-Search',query:{id:i.id,City:i.name}}"  v-for="(i,index) in Popular" :key="index+'Popular'">
              <li>{{i.name}}</li>
            </router-link>
          </ul>
        </div> 
    </div>
    <!-- 全部城市 -->
    <div class="Allcities">
      <!-- 24个英文字母  24个盒子 -->
      <div class="Allcities-div" v-for="(i,index) in Letters" :key="index+'div'">
        <!-- Letter 字母 -->
        <div class="Letter">
          <span>{{i}}</span>
        </div>
        <!-- 每个城市 Every-City-->
        <ul class="clearfix">
          <router-link :to="{name:'w-Search',query:{id:i.id,City:j.name}}" v-for="(j,index) in Allcities[i]" :key="index+'Each'">
              <li>{{j.name}}</li>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- <div class="logif" v-show="type">
      <img src="../../img/20140128102341_SAyMy.thumb.224_0.gif">
    </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 定位地址
      Locating:{},
      // 热门城市
      Popular: [],
      // 全部城市
      Allcities: [],
      // A-Z
      Letters:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
      // 因为I、O、U、V里面没有数据，所以arrlist里面就没有写I、O、U、V
      loading: true,
      type:true
    }
  },
  created () {
    // function con() { 
    //   var logif = document.querySelector('.logif');
    //   logif.style.display = "none"
    // }
    // setTimeout("con()",2000)
    // 定位地址   北京
    this.$http.get('https://elm.cangdu.org/v1/cities?type=guess')
      .then(res=>{
        this.Locating = res.data || {}
        // localStorage.setItem("name",this.Locating)
      }).catch(error=>{
        console.log(error)
      })
    // 热门城市 hot
    this.$http.get('https://elm.cangdu.org/v1/cities?type=hot')
     .then(res=>{
       this.Popular = res.data || {};
     }).catch(error=>{ 
        console.log(error)
      })
    // 全部城市
    this.$http.get('https://elm.cangdu.org/v1/cities?type=group')
    .then(res=>{
      this.Allcities = res.data || {};
    }).catch(error=>{
        console.log(error)
      })
  }
}
</script>

<style scoped>
    *{
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
    }
    body{
      margin: 0;
    }
    .clearfix {zoom: 1;}
    .clearfix::after,
    .clearfix::before {content: "";display: block;width: 0;height: 0;visibility: hidden;clear: both;}
    .home-page{
        background: #f5f5f5;
        overflow: hidden;
    }
    .header{
      width: 10rem;
      height: 1.25rem;
      background: #3190e8;
      position: fixed;
    }
    .header span{
      color: #fff;
      float: left;
      line-height: 1.25rem;
      padding-left: 0.3125rem;
      font-size: .4rem;
    }
    .header .header-right{
      float: right;
      padding-right: 0.3125rem;
    }
    .Locating{
      width: 10rem;
      height: 2.4rem;
      background: #fff;
    }
    .Locating-top{
      width: 10rem;
      height: 1.2rem;
      margin-top: 1.2rem;
      border-bottom: 0.001rem solid #e4e4e4;
    }
    .Animation{
      transition: all .5s;
    }
    .Locating-top span{
      line-height: 1.2rem;
      float: left;
      padding-left: 0.3125rem;
      font-size: 0.3188rem;
      color: #666;
    }
    .Locating-top span:nth-child(2){
      font-size: 0.2188rem;
      color: #9f9f9f;
      float: right;
      padding-right: 0.3125rem;
      font-weight: bold;
    }
    .Locating-btn{
       width: 10rem;
        height: 1.2rem;
        border-bottom: 0.001rem solid #e4e4e4;
    }
    .Locating-btn span{
      line-height: 1.2rem;
      font-size: 0.5188rem;
      color: #3190E8;
      padding-left: 0.3125rem;
    }
    .Locating-btn span:nth-child(2){
      line-height: 1.2rem;
      font-size: 0.5188rem;
      color: #999;
      float: right;
      padding-right: 0.3125rem;
      font-weight: bold;
    }
    .Popular{
      width: 10rem;
      height: 4.0313rem;
      margin-top: 0.3125rem;
      border-top: 0.001rem solid #e4e4e4;
      background: #fff;
    }
    .Popular-span{
      width: 10rem;
      height: 0.9rem;
      border-bottom: 0.001rem solid #e4e4e4;
      font-size: .2rem;
      color: #666;
      line-height: 0.9rem;
      padding-left: 0.3125rem;
    }
    .Popular-add ul{
      width: 10rem;
      height: 3.1313rem;
      text-align: center;
    }
    .Popular-add ul li{
      width: 2.49rem;
      float: left;
      height: 1.56565rem;
      line-height: 1.56565rem;
      font-size: 0.4188rem;
      border: 0.001rem solid #e4e4e4;
      border-left: none; 
      color: #3190E8;
    }
    .Popular-add ul li:nth-child(4){
      border-right: none;
    }
    .Popular-add ul li:nth-child(8){
      border-right: none;
    }
    .Allcities{
      width: 10rem;
      background: #e4e4e4;
    }
    .Allcities-div{
      width: 10rem;
      margin-top: 0.3125rem;
      background: #fff;
    }
    .Letter{
      width: 10rem;
      height: 0.9rem;
      border-top: 0.001rem solid #e4e4e4;
      line-height: 0.9rem;
      padding-left: 0.3125rem;
    }
    .Allcities-div ul{
      width: 10rem;
      min-height: 2rem;
      text-align: center;
    }
    .Allcities-div ul li{
      width: 2.499rem;
      height: 1.2rem;
      float: left;
      border: 0.001rem solid #e4e4e4;
      border-left: none;
      line-height: 1.2rem;
      font-size: .35rem;
      color: #666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .logif{
      width: 400px;
      height: 400px;
      position: fixed;
      top: 50%;
      left: 50%;
      margin-top: -200px;
      margin-left: -200px;
      border-radius: 50px;

    }
    .logif img{
      width: 400px;
      height: 400px;
      border-radius: 50px;
    }
</style>