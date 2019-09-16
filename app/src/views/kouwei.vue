<template>
  <div class="kouwei">
    <elmheader>
        <template v-slot:left>
            <router-link to="/confirmOrder">&lt;</router-link>
        </template>
        <template v-slot:center>订单备注</template>
    </elmheader>
    <div class="quickly_beizhu">
      <p>快速备注</p>
      <ul class="clearfix"
          id="list">
        <li v-for="(i, index) in arr[0]"
            :key="index"
            @click="orderbei(index)" :style="{'margin':index==0?'0.3125rem 0 0.3125rem 0.3125rem':'0.3125rem 0','background':arrfirst==index?'#3190e8':'','color':arrfirst==index?'#fff':''}">
          {{i}}
        </li>
        <li @click="toChange($event)">{{arr2}} </li>
        <li @click="toChange($event)">{{arr3}}</li>
        <li @click="toChange($event)">{{arr4}}</li>
        <li @click="toChange($event)">{{arr5}}</li>
        <li v-for="(r,index) in arr[5]" :key="index+'h'" @click="orderbei1(index)" :style="{'margin':index==0?'0.3125rem 0 0.3125rem 0.3125rem':'0.3125rem 0','background':arrlast==index?'#3190e8':'','color':arrlast==index?'#fff':''}">{{r}}</li>
      </ul>
    </div>
    <div class="other_beizhu">
      <p>其他备注</p>
      <input type="text"  class="input_text" v-model="ordertxt" placeholder="请输入备注内容(可不填)">
      <!-- <textarea placeholder="请输入备注内容(可不填)"
                class="input_text" v-model="kk"></textarea> -->
      <div class="determine"
           @click="sure">确定</div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
	components:{
		elmheader: Header,
	},
  data () {
    return {
      arr:'',
      arr1: '',
      arrfirst:-1,
      arr2: '',
      arr3: '',
      arr4:'',
      arr5:'',
      arrlast:-1,
      alllist:[],
      alllist1:[],
      aLi: '',
      ordertxt:''
    }
  },
  created(){
    this.$axios.get('https://elm.cangdu.org/v1/carts/'+localStorage.uid+'/remarks').then(data=>{
        console.log(data.data);
        this.arr=data.data.remarks
        this.arr2=data.data.remarks[1][0]
        this.arr3=data.data.remarks[2][0]
        this.arr4=data.data.remarks[3][0]
        this.arr5=data.data.remarks[4][0]
        
      })
  },
  methods: {
    toChange (e) {
      if (e.target.style.background === '') {
        e.target.style.background = '#3190e8'
        e.target.style.color = '#fff'
        this.alllist.push(e.target.outerText)
        // console.log(this.alllist)
      } else {
        e.target.style.background = ''
        e.target.style.color = '#000'
        for(var r=0;r<this.alllist.length;r++){
            if(this.alllist.indexOf(e.target.outerText)>-1){
                this.alllist.splice(this.alllist.indexOf(e.target.outerText), 1)
            }
        }
        // console.log(this.alllist)
      }
    },
    sure(){
      this.alllist1.push(this.ordertxt)
      this.alllist = this.alllist.concat(this.alllist1)
      this.$router.push({name: 'confirmOrder',params:{list:this.alllist}})
    },
    orderbei(idx){
      this.arrfirst=idx
      this.alllist=[this.arr[0][idx]]
    },
    orderbei1(idx){
      this.arrlast=idx
      this.alllist1=[this.arr[5][idx]]
    }
  }
}
</script>
<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
.kouwei {
  background-color: #f5f5f5;
}
header {
  height: 1.5625rem;
  line-height: 1.5625rem;
  background-color: #3190e8;
  padding-left: 0.3125rem;
  font-size: 0.375rem;
}
header span {
  color: #fff;
  font-weight: 500;
}
.kouwei {
  width: 100%;
  min-height: 23.4375rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 110;
}
.order {
  margin-left: 35%;
}
.quickly_beizhu {
  background: #fff;
  margin-top: 0.3125rem;
  padding-bottom: 0.78125rem;
}
.quickly_beizhu p {
  padding-left: 0.3125rem;
  font-size: 0.46875rem;
}
.other_beizhu {
  background: #fff;
  margin-top: 0.3125rem;
  padding-bottom: 0.78125rem;
}
.other_beizhu p {
  padding-left: 0.3125rem;
  font-size: 0.46875rem;
}
.input_text {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  background-color: #f9f9f9;
  border: 0.0390625rem solid #eee;
  resize: none;
  min-height: 3.125rem;
  border-radius: 0.3125rem;
  font-size: 0.46875rem;
  color: #666;
  outline: none;
  padding: 0.78125rem;
}
.determine {
  background-color: #4cd964;
  font-size: 0.46875rem;
  color: #fff;
  text-align: center;
  margin: 0.3125rem 1.09375rem 0 1.09375rem;
  line-height: 1.25rem;
  border-radius: 0.3125rem;
}
.quickly_beizhu #list li {
  float: left;
  border-radius: 0.15625rem;
  font-size: 0.46875rem;
  padding: 0.15625rem 0.3125rem;
  margin: 0.3125rem;
  border: 0.03125rem solid #3190e8;
}

.list li:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  border-style: solid;
  border-width: 16.64px 16.64px 0 0;
  border-color: transparent #f00 transparent transparent;
  display: none;
}

.list li:before {
  content: "";
  width: 5.12px;
  height: 2.56px;
  border-left: solid 1.28px #fff;
  border-bottom: solid 1.28px #fff;
  position: absolute;
  right: 2.56px;
  bottom: 3.84px;
  z-index: 2;
  transform: rotate(-45deg);
  display: none;
}

.list li:hover {
  border-color: red;
}

.list .active {
  border-color: #f00;
}

.list .active:after,
.list .active:before {
  display: block;
}
</style>
