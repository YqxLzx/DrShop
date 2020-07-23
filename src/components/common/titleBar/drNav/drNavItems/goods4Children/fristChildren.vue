<template>
    <div class="love-shop-goods4-frist">
        <div class="goods4-frist-box">
            <span class="goods4-frist-text1">热门城市</span>
            <ul class="goods4-frist-text2">
                <li>巴黎</li>
                <li>香港</li>
                <li>上海</li>
                <li>北京</li>
                <li>广州</li>
                <li>深圳</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'loveShopGoods4Frist'
}
</script>

<style>
.goods4-frist-text2 li{
    margin-right: 0.1452188rem;
}
.love-shop-goods4-frist{
    width: 50%;
    height: 100%;
    padding-right:0.296875rem;
    border-right: solid 1px gray;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.goods4-frist-text1{
    font-weight: 800;
    font-size: 16px;
    color:#202020;
    box-sizing: border-box;
    line-height: normal;
      
}
.goods4-frist-text2{
    display: flex;
    /*margin-top:0.1970833rem;*/
}
</style>