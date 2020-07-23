<template>
    <div class="swiper-right">
        <swiper  ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in swiperImgs" :key="index">
                <div class="swiper-right-box">
                    <div class="swiper-item-title">{{item.homeSwiperSecond_Img.title}}</div>
                    <div class="swiper-item-text"> {{item.homeSwiperSecond_Img.text}}</div>
                </div>
            </swiper-slide> 
        </swiper>
        <slot></slot>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'swiperRight',
    props:{
        swiperImgs:{
            type:Array
        }
    },
    data(){
        return{
            swiperOptions: {
                autoplay:true,
                effect : 'fade',
                slidesPerView:1,
                loop : true,
                loopAdditionalSlides:1,
                pagination: {
                    el: '.swiper-pagination',

                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
          // Some Swiper option/callback...
        }
        }
    },
                components: {
                    Swiper,
                    SwiperSlide,

                },
                directives: {
                    swiper: directive
            }
}
</script>

<style>
.swiper-right-box .swiper-item-text{
    font-size:.09375rem;
    line-height: .21875rem;
}
.swiper-right-box .swiper-item-title{
    font-size: 37px;
    font-weight: 200;
    margin-bottom: .2083333rem;
}
.swiper-right{
    width: 30%;
    background-color:  #f2eded;
    height: auto;
    margin-top:.8333333rem;
    padding: .7291667rem .6770833rem 0 .46875rem;
}
.swiper-right-box{
    width: auto;
    background-color: #f2eded;

}
</style>