<template>
    <div class="slide-arrow-box">
        <div class="slide-arrow">
            <img class="slide-arrow-img-clon" src="~public/img/titleBar/go.png" />             
            <div class="slide-arrow-text"><slot></slot></div>
            <img class="slide-arrow-img" src="~public/img/titleBar/go.png" />            
        </div>
    </div>
</template>

<script>
export default {
    name:'slideArrow'                       
}
</script>

<style>
.slide-arrow-box{
    position: absolute;
}
.slide-arrow-img{
    transition: all 1s ease;
    transform: translateX(0px);
}
.slide-arrow-img-clon{
    position: absolute;
    left:-31px;
    transition: all 1s ease;
    transform: translateX(0);
}
.slide-arrow:hover .slide-arrow-img-clon {
    transform: translateX(31px);
}
.slide-arrow:hover .slide-arrow-img{
    transform: translateX(31px);
}
.slide-arrow:hover .slide-arrow-text{
    transform: translateX(31px);
}
.slide-arrow-text{
    transition: all 1s ease;
    transform: translateX(0);
    font-size: 17px;
}

.slide-arrow{
    position: relative;
    display:inline-flex;
    overflow: hidden;
    align-items: center;
    width: auto;

}

</style>