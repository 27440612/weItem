export default{
    state:{
        userName:'登录/注册',
        userId:'',//ID
        userPoint:'0',//积分
        userGift:'0',//优惠券
        userCity:'',//城市
        userImg:'',//头像
        userBalance:'0'//余额
    },
    mutations:{
        setUserid(state,value){
            state.userId=value
        },
        setUsername(state,value){
            state.userName=value
        },
        setUserpoint(state,value){
            state.userPoint=value
        },
        setUsergift(state,value){
            state.userGift=value
        },
        setUsercity(state,value){
            state.userCity=value
        },
        setUserimg(state,value){
            state.userImg=value
        },
        setUserblce(state,value){
            state.userBalance=value
        },
    },
    actions:{
        // addUserid(context,value){
        //     context.commit('setUserid',value)
        // }
    }
}