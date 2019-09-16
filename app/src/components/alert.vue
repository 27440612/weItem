<template>
    <div class="dialog" :style="{'opacity':showMask?'1':'0','z-index':showMask?'999':'-1'}">
        <div class="dialog-container" :style="{'opacity':showMask?'1':'0'}">
            <!-- <div class="dialog-title">{{title}}</div> -->
            <div class="content">
                <img id="imgs" src="../assets/tan.png">
                <p style="width:80%;margin:0 10%" v-html="content"></p>
            </div>
            <div class="btns">
                <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">
                    {{cancelText}}
                </div>
                <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">
                    {{dangerText}}
                </div>
                <div v-if="type == 'confirm'" class="confirm-btn" @click="confirmBtn">
                    {{confirmText}}
                </div>
            </div>
            <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {},
        // 类型包括 defalut 默认， danger 危险， confirm 确认，
        type:{
            type: String,
            default: 'default'
        },
        content: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        dangerText: {
            type: String,
            default: '删除'
        },
        confirmText: {
            type: String,
            default: '确认'
        },
    },
    data(){
        return{
            showMask: false,
        }
    },
    methods:{
        closeMask(){
            this.showMask = false;
        },
        closeBtn(){
            // console.log('cancel')
            this.$emit('cancel');
            this.closeMask();
        },
        dangerBtn(){
            // console.log('danger')
            this.$emit('danger');
            this.closeMask();
        },
        confirmBtn(){
            this.$emit('confirm');
            this.closeMask();
        }
    },
    mounted(){
        this.showMask = this.value;
    },
    watch:{
        value(newVal, oldVal){
            this.showMask = newVal;
        },
        showMask(val) {
            this.$emit('input', val);
        }
    },
}
</script>
<style lang="less" scoped>
    @keyframes tan{
        0%   {}
        25%  {transform: scale(1);}
        50%  {transform: scale(1.3);}
        100% {transform: scale(1);}
    }
    .dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.2);
        transition: 1s;
        z-index: 0;
        .dialog-container{
            width: 8rem;
            height: 6rem;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 0.125rem;
            position: absolute;
            // transform: scale(1);
            // animation-name: tan;
            // animation-timing-function: ease;
            // -webkit-animation: tan 1s ease 1s reverse;
            //cubic-bezier(.73,1.84,.69,.24)
            z-index: 9999;
            .dialog-title{
                width: 100%;
                height: 0.9375rem;
                font-size: 0.28125rem;
                color: #696969;
                font-weight: 600;
                padding: 0.25rem 0.78125rem 0 0.3125rem;
                box-sizing: border-box;
            }
            .content{
                height: 4.75rem;
                box-sizing: border-box;
                #imgs{
                    width: 3rem;
                    height: 3rem;
                    margin: 0.5rem 2.5rem 0 2.5rem;
                }
                p{
                    color: #000;
                    font-size: 0.46875rem;
                    text-align: center;
                }
            }
            .inp{
                margin: 0.15625rem 0 0 0.3125rem;
                width: 3.125rem;
                height: 0.625rem;
                padding-left: 0.0625rem;
                border-radius: 0.0625rem;
                border: none;
                background: #efefef;
                outline: none;
                &:focus{
                    border: 0.015625rem solid #509EE3;
                }
            }
            .btns{
                width: 100%;
                height: 0.9375rem;
                // line-height: 0.9375rem;
                position: absolute;
                bottom: 0;
                left: 0;
                text-align: right;
                box-sizing: border-box;
                display:flex;
                & > div{
                    display: inline-block;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    text-align: center;
                    color: #ffffff;
                    background: #f1f1f1;
                    border-radius: 0.125rem;
                    cursor: pointer;
                    font-size: 0.46875rem;
                    font-weight: 700;
                    flex: 1;
                }
                .default-btn{
                    position: relative;
                    bottom:0.75rem;
                    color: #787878;
                    margin: 0.1875rem;
                    &:hover{
                        color: #509EE3; 
                    }
                }
                .danger-btn{
                    margin: 0.1875rem;
                    position: relative;
                    bottom:0.75rem;
                    background: #EF8C8C;
                    &:hover{
                        background: rgb(224, 135, 135);
                    }
                    &:active{
                        background: #EF8C8C;
                    }
                }
                .confirm-btn{
                    width: 100%;
                    height: 1.25rem;
                    position: relative;
                    bottom:0.3rem;
                    color: #ffffff;
                    background: #4cd964;
                    &:hover{
                        background: #6FB0EB;
                    }
                }
            }
            .close-btn{
                position: absolute;
                top: 0.25rem;
                right: 0.25rem;
                width: 0.46875rem;
                height: 0.46875rem;
                line-height: 0.46875rem;
                text-align: center;
                font-size: 0.28125rem;
                cursor: pointer;
                &:hover{
                    font-weight: 600;
                }
            }
        }
    }
</style>