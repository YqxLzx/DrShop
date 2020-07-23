<template>
    <div class="section-more">
        <div class="section-more-div-img"></div>
    </div>
</template>

<script>
export default {
    name:'swiperMore'
}
</script>

<style>
.section-more{
    flex:1;
    position: relative;
}
.section-more-div-img::after{
    position: absolute;
    bottom: 14.8%;
    left: 15.33%;
    content: '';
    display: block;
    width: 80px;
    height: 82px;
    background: url("~public/img/home/section/sectionright.png") no-repeat center center/cover;       
}
</style>