<template>
    <div class="section-more">
        <a class="section-more-a-img"></a>
        <div class="section-more-div-img"></div>
    </div>
</template>

<script>
export default {
    name:'sectionmore'
}
</script>

<style>
.section-more{
    flex:1;
    position: relative;
}
.section-more-a-img::after{
    cursor: pointer;
    position: absolute;
    bottom: 42.4%;
    left: 15.33%;
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    background: url("~public/img/home/section/sectionmore.png") no-repeat center center/cover;     
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