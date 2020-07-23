<template>
    <div class="swiper-left">
         <swiper  ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in swiperImgs" :key="index">
                <img :src="item.homeSwiperSecond_Img.img" />
            </swiper-slide> 
        </swiper>
        <doubleArrowBtn>
            <doucubleAoorwLeft class="swiper-button-prev" slot="left-arrow"/>
            <doucubleAoorwRight class="swiper-button-next" slot="right-arrow" />
        </doubleArrowBtn>

    </div>
</template>

<script>
import doucubleAoorwRight  from 'common/somebtn/doubleArrowBtn/docubleArrowChildren/docubleArrowRIght'
import doucubleAoorwLeft from 'common/somebtn/doubleArrowBtn/docubleArrowChildren/doubleArrowLeft'
import doubleArrowBtn from 'common/somebtn/doubleArrowBtn/doubleArrowBtn'
//import doubleArrowBtn from '../../../../../components/common/somebtn/doubleArrowBtn/doubleArrowBtn'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'swiperLeft',
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
                loopAdditionalSlides:0,
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
        doubleArrowBtn,
        doucubleAoorwLeft,
        doucubleAoorwRight
    },
    directives: {
        swiper: directive
  }
}
</script>

<style>

.swiper-left h2{
    font-size: .1666667rem;
    margin-bottom: .2083333rem;
}
.swiper-left .swiper-container{
    
    position: relative;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.swiper-left{
    width: 48%; 
    z-index: 20;
    position: relative; 
}
.swiper-left .double-arrow-btn-box{
    right:0;
    bottom:-.1188542rem;
    transform: translateX(50%);
}
.swiper-button-prev{
    margin-top:0;
    outline: none;
    top:0;   
}
.swiper-button-prev{
    left:2px;
}
.swiper-button-prev::after{
    content:'';
}
.swiper-button-next{
    margin-top:0;
    outline: none;
    top:0; 
     right:2px;
}

.swiper-button-next::after{
    content:'';
}
</style>