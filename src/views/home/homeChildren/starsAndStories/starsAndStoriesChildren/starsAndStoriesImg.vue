<template>
    <div class="stars-and-stories-img" v-if="propsStarsStoriesImg.length!=0">
        <div class="stars-and-stories-img-1" >
            <div class="chilideren-1-frist"></div>
            <div class="chilideren-1-second">
                <img v-lazy="propsStarsStoriesImg[0].starsStoriesImg" />
            </div>
            <div class="chilideren-1-third">
                <img v-lazy="propsStarsStoriesImg[2].starsStoriesImg" />
            </div>
            <div class="chilideren-1-fourth">
                <img v-lazy="propsStarsStoriesImg[1].starsStoriesImg" />
            </div>
        </div>
        <div class="stars-and-stories-img-2">
            <div class="chilideren-2-frist"></div>
            <div class="chilideren-2-second"></div>
            <div class="chilideren-2-third">
                <img v-lazy="propsStarsStoriesImg[3].starsStoriesImg" />
            </div>
            <div class="chilideren-2-fourth"></div>
            <div class="chilideren-2-fith">
                <img v-lazy="propsStarsStoriesImg[4].starsStoriesImg" />
            </div>
            <div class="chilideren-2-sixth"></div>
        </div>        
    </div>
</template>

<script>
export default {
    name:'starsAndStoriesImg',
    props:{
        propsStarsStoriesImg:{
            type:Array
        }
    }
}
</script>

<style>
@keyframes moveOpacity
{
0% {opacity:1;}
25% {opacity:0.75;}
50%{opacity: 0.5;}
75%{opacity: 0.75;}
100%{opacity: 1;}
}
.stars-and-stories-img img{
    width: 100%;
    height: 100%;
}
.stars-and-stories-img-2 div{
    height: 11.66666667vw;
}
.stars-and-stories-img img:hover{
    animation:moveOpacity 1.5s ease-in;
}
.chilideren-2-sixth{
    width: 8.64583333vw;
    background: #9c827d;
}
.chilideren-2-fith{   
    margin-right: 11.66666667vw;
    width: 11.66666667vw;
}
.chilideren-2-fourth{
    width: 11.66666667vw;
    background: #f2eded;
}
.chilideren-2-third{
    width: 14.42708333vw;
    margin-right: 8.85416667vw;
}
.chilideren-2-second{
    background: #9c827d;
    margin-right: 11.66666667vw;
    width: 11.66666667vw;
}

.chilideren-2-frist{
    width: 4.27083333vw;
    margin-right: 2.0875vw;
    background: #f2eded;
}
.chilideren-1-second{
    margin-right: 14.42708333vw;
}
.chilideren-1-third{
    margin-right: 20.52083333vw;
}
.chilideren-1-frist{
    background-color: #f2eded;
}
.stars-and-stories-img-1 img{
    width: 100%;
    height: 100%;
}
.stars-and-stories-img-1 div{
    width: 11.66666667vw;
    height: 11.66666667vw;
}
.stars-and-stories-img-1{
    padding: 0 1.1302083rem 0 .640625rem;
    display: flex;
}
.stars-and-stories-img-2{
    padding-right:.2604167rem;
    display: flex;
}
.stars-and-stories-img{
    padding-top:.25rem;
}
</style>