<template>
    <div>
        <div class="shop-main-cart">
            <div class="shop-cart-will">
                <span>有一点心动?但还不确定？</span>
            </div>
            <div @click="clickGoShopCart" class="shop-cart-go">
                <p>加至心愿单</p>
                <img v-if="ifloveImg" src="~public/img/titleBar/love.svg" />
            </div>
        </div>
        <div class="text-dr-box">
            <div class="share-svg">
                <img src="~public/img/other/share.svg" />
                <span>分享</span>
            </div>
            <div class="call-DR">
                <SPAN>联系我们</SPAN>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'shopCart',
    data(){
        return{
            ifloveImg:false
        }
    },
    props:{

        },
    methods:{
        clickGoShopCart(){
            this.ifloveImg = ! this.ifloveImg;
            this.$bus.$emit('shopCart')
        }
    }
}
</script>

<style>
.call-DR{
    cursor: pointer;
}
.text-dr-box{
    width: 80%;
    display: flex;
    justify-content: space-between;
}
.share-svg{
    width: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.shop-main-cart{
    width: 80%;
    height: 80px;
    display: flex;
    border: solid 1px gray;
    margin: 40px 0 10px 0;
    cursor: pointer;
}
.shop-cart-will span{
    text-align: center;
    display:table-cell; 
    vertical-align:middle;
    font-size: 17px;
}
.shop-cart-will{
    display:table;
    width: 65%;
    height: 80px;
    background-image: url('~public/img/other/4081c50.png');
    background-repeat:no-repeat;
}
.shop-cart-go{
    white-space: nowrap;
    width:35%;
    line-height:80px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    font-size: 21px;
}
</style>