<template>
    <div class="swiper-second-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'swiperSecond'
}
</script>

<style>
.swiper-second-box{
    display: flex;
    padding: .9895833rem 0 .4895833rem 0;
    overflow: hidden;
}
</style>