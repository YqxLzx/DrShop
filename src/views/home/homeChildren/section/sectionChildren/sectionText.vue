<template>
    <div class="home-section-text">
        <p v-for="(item,index) in sectionTexts" :key="index" :class="[index==0 ? 'section-text-header' : 'section-text-p']">
            {{item}}
        </p>
        <div class="section-text-arrow"></div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name:'sectionText',

    data(){
        return{
           
        }
    },
    props:{
        sectionTexts:{
            type:Array
        },
    }
}
</script>

<style>



.section-text-arrow{
    position: absolute;
    left:1.0677083rem;
    bottom: .2083333rem;
    width: .8854167rem;
    height: 1.0416667rem;  
}
.section-text-arrow::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: url("~public/img/home/section/sectionarrow.png") no-repeat center center/cover; 
}
.home-section-text{
    width: 2.9166667rem;
    height: 2.7604167rem;
    padding:.7604167rem .4166667rem 0 1.3125rem;
    margin-top:1.3020833rem;
    background: #f2eded;
    position: relative;
    z-index: 11;
}
.section-text-header{
    font-size: .1770833rem;
    color: #22282d;
    font-weight: 500;
    margin-bottom:.2083333rem;
    font-family: alida;
}
.section-text-p{
    font-size: 0.078125rem;
    color: #22282d;
    height: 37px;
    line-height: 37px;
}
</style>