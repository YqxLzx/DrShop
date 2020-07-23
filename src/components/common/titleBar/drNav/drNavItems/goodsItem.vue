<template>
    <div class="dr-nav-goods-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'drWorldGoodsItem',
    components:{

    }
}
</script>

<style>
.dr-nav-goods-item{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 4.7708333rem;
    background-color: #fff;
    position: absolute; 
    left:0;
    transition:all 0.5s ease-in;
    box-shadow: inset 0 2px 8px 0 rgba(0,0,0,.03);
    min-width: 1360px;
    min-height: 230px;
    padding: 0.2916667rem 0;
    height: 250px;
    visibility:hidden;
    font-size:13px; 
    opacity: 0;
}
</style>