<template>
    <div>
        <titleBar/>
        <shoppingBagMain v-if="addMerchandises.length>0">
            <shopLeftBox/>
            <shopRightBox/>
        </shoppingBagMain>
        <div v-else class="no-shop-bag">
            <h1>您的购物袋空空如也</h1>
        </div>
        <bottomMainBar/>
    </div>
</template>

<script>
import titleBar from 'common/titleBar/titleBar'
import bottomMainBar from 'common/bottomBar/bottomMainBar'
import shoppingBagMain from './shoppingBagMain'
import shopLeftBox from './shoppingBagChildren/shopLeftBox'
import shopRightBox from './shoppingBagChildren/shopRightBox'
export default {
    name:'shoppingBag',
    components:{
        titleBar,
        bottomMainBar,
        shoppingBagMain,
        shopLeftBox,
        shopRightBox
    },
    computed:{
        addMerchandises(){
            return  this.$store.state.shoppingBag.addMerchandises
        },
    }
}
</script>

<style>
.no-shop-bag{
    text-align: center;
    width: 2.6041667rem;
    margin: 0 auto;
    padding: 100px 0;
}
</style>