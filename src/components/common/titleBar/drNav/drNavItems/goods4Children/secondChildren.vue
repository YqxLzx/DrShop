<template>
    <div class="love-shop-goods4-second">
        <div class="goods-second-box">
            <img v-for="(item,index) in loveShopImgs" :key="index" :src="item.loveshopimg" />
            <findAndArroBtn>
                <span>查看全部体验店</span>
            </findAndArroBtn>
        </div>
    </div>
</template>

<script>
import findAndArroBtn from '../../../../somebtn/findAndArrowBtn/findAndArrowBtn'
export default {
    name:'loveShopGoods4Second',
    data(){
        return{}
    },
    components:{
        findAndArroBtn
    },
    props:{
        loveShopImgs:{
            type:Array
        }
    },
}
</script>

<style>
.xxx{
    position: relative;
}
.goods-second-box .find-and-arrow-btn{
    width: 91px;
    height: 17px;
    margin-top:24px;
    
}
.love-shop-goods4-second{
    height: auto;
    width: 50%;
    padding-left:.296875rem;
    position: relative;
}
.goods-second-box{
    position: absolute;
    top:0;
    left:0.4322917rem;
    height: 342px;
    line-height:40px;
}
.love-shop-goods4-second img{
    width: 278px;
    height: 248px;
}
</style>