<template>
  <div>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onRefresh">
      <ul>
        <li style="line-height:50px" v-for="(item,index) in downdata">{{item._id}}</li>
      </ul>
    </v-scroll>
  </div>
</template>
<script>
import Scroll from "../components/scroll";

export default {
  data() {
    return {
      counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num : 5,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 3, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: []  // 上拉更多的数据存放数组
    };
  },
  mounted: function() {
    this.getList();
  },
  methods: {
    getList() {
      let vm = this;
      vm.$http
        .get(
          "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10"
        )
        .then(
          response => {
            console.log('|||||||||||||||||||||||||||||',response);
            var arr=response.data
            for(var i=0;i<arr.length;i++){
                // console.log(arr[i])
                this.downdata.push(arr[i]);
            }
            console.log(this.downdata)
          },
          response => {
            console.log("error");
          }
        );
    },
    onRefresh(done) {
      this.getList();

      done(); // call done
    },
    onInfinite(done) {
      let vm = this;
      vm.$http
        .get(
          "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10"
        )
        .then(
          response => {
            console.log('----------------------',response);
            vm.counter++;
              vm.pageEnd = vm.num * vm.counter;
              vm.pageStart = vm.pageEnd - vm.num;
              let arr = response.data;
              let i = vm.pageStart;
              let end = vm.pageEnd;
              for (; i < end; i++) {
                        let obj = {};
                        obj["id"] = arr[i]._id;
                        vm.downdata.push(obj["id"]);
                        if (i + 1 >= response.data.length) {
                        this.$el.querySelector(".load-more").style.display = "none";
                        return;
                        }
                }
                },
          response => {
            console.log("error");
          }
        );
      done();
      //   let vm = this;
      //   vm.$http
      //     .get(
      //       "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10"
      //     )
      //     .then(
      //       response => {
      //         vm.counter++;
      //         vm.pageEnd = vm.num * vm.counter;
      //         vm.pageStart = vm.pageEnd - vm.num;
      //         let arr = response.data;
      //         let i = vm.pageStart;
      //         let end = vm.pageEnd;
      //         for (; i < end; i++) {
      //           let obj = {};
      //           obj["name"] = arr[i];
      //           vm.downdata.push(obj);
      //           if (i + 1 >= response.data.length) {
      //             this.$el.querySelector(".load-more").style.display = "none";
      //             return;
      //           }
      //         }
      //         done(); // call done
      //       },
      //       response => {
      //         console.log("error");
      //       }
      //     );
    }
  },
  components: {
    "v-scroll": Scroll
  }
};
</script>