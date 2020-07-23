<template>
    <div id="home-swiper">
        <swiper ref="mySwiper" :options="swiperOptions" >
            <swiper-slide v-for="(item,index) in homeShowSwiperImgs" :key="index">
                <img class="home-swiper-imgs" :src="item.home_swiperImg.img" />
                <div class="swiper-mask">
                    <p>{{item.home_swiperImg.name}}</p>
                </div>
            </swiper-slide>      
        </swiper>
        <div class="swiper-button-next"></div>
        <slot></slot>                   
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name:'homeSwiper',
    props:{
        homeShowSwiperImgs:{
            type:Array
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data(){
        return{
            swiperOptions: {
                //width:500,
                slidesPerView:3.2,
                //slidesPerGroup:3,
                grabCursor : true,
                centeredSlides : true,
                spaceBetween : 80,
                /*breakpoints: {
                    1024: {
                        width: 500,
                    },
                    768: {
                        width:300,//取消width，恢复自适应
                    },
                    465:{
                        width:250,
                    }
                },*/
                loop : true,
                loopAdditionalSlides :3,
                navigation: {
                    nextEl: '.swiper-button-next',
                },
                pagination: {
                    el: '.swiper-pagination'
                    },       
                }
            }
        }
 }
</script>

<style>
.swiper-slide:hover .swiper-mask{
    opacity: 1;
}
#home-swiper .swiper-slide:hover{
    transform: translateY(-20px)
}
#home-swiper p{
    display:table-cell;
    vertical-align:middle;
    font-size:.2083333rem;
    font-weight: 700;
}
.swiper-mask{
    position: absolute;
    left:0;
    top:0;
    opacity: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display:table;
    background-color: rgba(255,255,255,0.7);
}

#home-swiper .swiper-button-next{
  position: absolute;
  top:0;
  height: 2.3958333rem;
  right:.6770833rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: none;
  outline: none;

  background-color: #fff;
}
#home-swiper .swiper-slide{
    cursor: pointer ;
    height:2.3958333rem;
    transition : transform 0.8s ease;  
    transform: translateY(0px);     
}

#home-swiper .home-swiper-imgs{
    width: 100%;
    height: 100%;
    opacity: 1;

}
#home-swiper .swiper-container{
    position: absolute;
    width:85%;
    left: 0;
}
#home-swiper .swiper-wrapper {
    left:-2.7604167rem;
}
#home-swiper{
    position: relative;
    min-height:2.3958333rem;
    padding-bottom: .7291667rem;
}
#home-swiper .swiper-button-next::after{
    content: '';
    transform: rotate(180deg);
    width: 70px;
    height: 70px;
    background: url("~public/img/home/Swiperarrow.png") no-repeat center center/cover;  
}


</style>