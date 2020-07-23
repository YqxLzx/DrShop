<template>
    <div class="bottomBar-third-item">
        <div class="bottomBar-third-item-box">
            <div class="bottomBar-third-item-title">扫码关注我们吧</div>
            <p class="bottomBar-third-item-vxHref-box">
                <span   @mouseenter="enterHref"  class="bottomBar-third-item-vx"></span>
                <span  @mouseenter="enterVx" class="bottomBar-third-item-herf"></span>
            </p>
            <p class="bottomBar-third-item-text">
                抢先了解最新设计，特别活
                <br/>动，新店开张等更多消息
            </p>
        </div>
        <div v-if="showVx"  class="show-big-img-vx"></div>
        <div v-if="showHref" class="show-big-img-href"></div>
    </div>
</template>

<script>
export default {
    name:'bottomBarThirdItem',
    data(){
        return{
            showVx:true,
            showHref:false,
        }
    },
    methods:{
        enterVx(){
            this.showHref = false;
            this.showVx = true;
        },
        enterHref(){
            this.showHref = true;
            this.showVx = false;
        },
    }
}
</script>

<style>
.bottomBar-third-item-box{
    margin-right:.0520833rem;
}
.bottomBar-third-item-vx{
    width: 18px;
    height: 16px;
    position: absolute;
    right:22px;
}
.show-big-img-vx{
    background: url("~public/img/bottomBar/drVx.png") no-repeat 50%;
    width:.609375rem;
    height: .5052083rem;
    
}
.show-big-img-href{
    background: url("~public/img/bottomBar/drHref.png") no-repeat 50%;
    width:.609375rem;
    height: .5052083rem;
    
}
.bottomBar-third-item-herf{
    width: 18px;
    height: 16px;
    position: absolute;
    right:0px;
}
.bottomBar-third-item-vx::after{
    content: '';
    width: 18px;
    height: 16px;
    display: block;
    background: url("~public/img/bottomBar/vx.svg") no-repeat center center/cover;
}
.bottomBar-third-item-herf::after{
    content: '';
    display: block;
    width: 18px;
    height: 16px;
    position: absolute;
    right:0px;
    background: url("~public/img/bottomBar/href.svg") no-repeat center center/cover;
}
.bottomBar-third-item-vxHref-box{
    padding:10px 0;
    height: 1em;
    position: relative;
}
.bottomBar-third-item{
    text-align: right;
    display: flex;
}
.bottomBar-third-item-title{
    font-size: 17px;
}
.bottomBar-third-item-text{
    font-size: 12px;
   
}
</style>