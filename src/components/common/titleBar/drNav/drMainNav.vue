<template>
    <ul class="dr-main-nav">        
        <li class="dr-main-nav-goods1" @mouseenter="enterGoods1">
            <!--<div :class="{add_fontWeight:ifRouter}" class="dr-main-nav-goods-text_img" @click="clickPropseRing">
                <span>求婚钻戒</span>                
            </div><!-->
            <router-link to="/proposeRing"  class="dr-main-nav-goods-text_img">
                <span>求婚钻戒</span>
            </router-link>
            <goodsItem class="dr-main-nav-Goods-item marry-goods2-item">
                <goodsChildrenSeries class="goods2-Children-item-left" :ringSeries="getGoods1BySeries" >
                    <findAndArrowBtn >
                        <div >了解更多</div>
                    </findAndArrowBtn>
                </goodsChildrenSeries> 
                <div class="goods2-Children-item">
                    <div class="goods2-Children-flex-box">
                        <goodsChildrenTextImg  class="goods-Children-marginR150" :TextImg="getGoodsBymaterial">
                        </goodsChildrenTextImg>
                        <goodsChildrenText class="goods-Children-marginR150" :goodsChildrenItemLi="getGoodsClassification.goodsPrice" />
                        <goodsChildrenText class="goods-Children-marginR150" :goodsChildrenItemLi="getGoodsClassification.goodsMode" />                
                    </div>
                    <findAndArrowBtn >
                        <div >浏览全部珠宝</div>
                    </findAndArrowBtn>
                </div>
            </goodsItem>         
        </li>

        <li class="dr-main-nav-goods2"  @mouseenter="enterGoods2">
            <div class="dr-main-nav-goods-text_img">
                <span>结婚对戒</span>                
            </div>
            <goodsItem class="dr-main-nav-Goods-item marry-goods2-item">
                <goodsChildrenSeries class="goods2-Children-item-left" :ringSeries="getGoods2BySeries" >
                    <findAndArrowBtn >
                        <div >了解更多</div>
                    </findAndArrowBtn>
                </goodsChildrenSeries> 
                <div class="goods2-Children-item">
                    <div class="goods2-Children-flex-box">
                        <goodsChildrenTextImg  class="goods-Children-marginR150" :TextImg="getGoodsBymaterial">
                        </goodsChildrenTextImg>
                        <goodsChildrenText class="goods-Children-marginR150" :goodsChildrenItemLi="getGoodsClassification.goodsPrice" />
                        <goodsChildrenText class="goods-Children-marginR150" :goodsChildrenItemLi="getGoodsClassification.goodsMode" />                
                    </div>
                    <findAndArrowBtn >
                        <div >浏览全部珠宝</div>
                    </findAndArrowBtn>
                </div>
            </goodsItem>
        </li>

        <li class="dr-main-nav-goods3">
            <div class="dr-main-nav-goods-text_img">
                <span>珠宝</span>                
            </div>
            <goodsItem class="dr-main-nav-Goods-item jewellery-goods3-item">
                <goodsChildrenText :goodsChildrenItemLi="getGoodsClassification.goodsClass">
                    <findAndArrowBtn>
                        <span class="find-and-arrow-text">浏览全部珠宝</span>
                    </findAndArrowBtn>
                </goodsChildrenText>
                <goodsChildrenTextImg  class="goods-Children-marginR150" :TextImg="getGoodsBymaterial"/>
                <goodsChildrenText :goodsChildrenItemLi="getGoodsClassification.goodsPerson"/>
                <goodsChildrenText :goodsChildrenItemLi="getGoodsClassification.goodsPrice" />
                <goodsChildrenText :goodsChildrenItemLi="getGoodsClassification.goodsMode" />
            </goodsItem>
        </li>

        <li class="dr-main-nav-goods4" @mouseenter="enterGoods4">
            <div class="dr-main-nav-goods-text_img">
                <span>真爱体验店</span>                
            </div>
            <goodsItem class="dr-main-nav-Goods-item love-shop-goods4">
                <goods4FristChildren />
                <goods4SecondChildren :loveShopImgs="getGoods4Imgs"/>
            </goodsItem>
        </li>

        <li class="dr-main-nav-goods5" @mouseenter="enterGoods5">
            <div class="dr-main-nav-goods-text_img">
                <span>DR世界</span>               
            </div>
            <goodsItem class="dr-main-nav-Goods-item dr-world-goods5" >
                <div class="goods5Fristbox"> 
                    <goodsChildrenText :goodsChildrenItemLi="getGoods5Text.goods5FristLitop"/>
                    <goodsChildrenText :goodsChildrenItemLi="getGoods5Text.goods5FristLibottom"/>
                </div>
                <goodsChildrenTextImg class="goods5-ChildrenTextImg" :TextImg="getGoods5TextAndImg"/>
                <goods5ThirdChildren :drWorldImgs="getGoods5Imgs"/>
            </goodsItem>
        </li>
    </ul>
</template>

<script>
import goodsItem from './drNavItems/goodsItem'
import findAndArrowBtn from '../../somebtn/findAndArrowBtn/findAndArrowBtn'
import goodsChildrenText from './drNavItems/goodsChildrenText'

import goodsChildrenSeries from './drNavItems/goodsChildrenSeries'

import goods4FristChildren from '../drNav/drNavItems/goods4Children/fristChildren'
import goods4SecondChildren from '../drNav/drNavItems/goods4Children/secondChildren'

import goodsChildrenTextImg from './drNavItems/goodsChildrenTextImg'
import goods5ThirdChildren from '../drNav/drNavItems/goods5Children/thirdChildren'
export default {
    name:'drNav',
    components:{
        goodsItem,
        findAndArrowBtn,
        goodsChildrenText,
        goodsChildrenSeries,
        goods4FristChildren,
        goods4SecondChildren,

        goodsChildrenTextImg,       
        goods5ThirdChildren      
    },
    computed:{
        ifRouter(){
            return this.$route.path == '/proposeRing' ? true : false ;
        }
    },
    data(){
        return{
            getGoods5Text:{
                goods5FristLitop:['关于DR','品牌文化'],
                goods5FristLibottom:['一枚DR，一个故事','明星故事','粉丝故事','DR专题']
            },
            getGoods5Imgs:[],
            getGoods5TextAndImg:{
                headText:'联系DR',
                goodsTextImg:[{
                    text:' 400-01-13520',
                    src:require('public/img/drNavGoods5/phone.svg')
                },
                {
                    text:' 在线咨询',
                    src:require('public/img/drNavGoods5/message.svg')                   
                },
                {
                    text:' 意见反馈',
                    src:require('public/img/drNavGoods5/feedback.svg')
                } ]
            },
            getGoods4Imgs:[],
            getGoodsClassification:{
                goodsPerson:['按送礼对象','浪漫女士','浪漫男士'],
                goodsPrice:['按价格区间','5K以下','5K-1W','1W-2W','2W-5W','5W以上'],
                goodsMode:['按选购方式','三绒一生','新品','热门','明星同款'],
                goodsClass:['按类别','套链/项链/吊坠','手链/手镯','耳环/耳钉/耳线','高级腕表','D+']
            },
            getGoodsBymaterial:{
                headText:'按形状',
                goodsTextImg:[{
                    text:' 心形',
                    src:require('public/img/drNavGoods3/heart.svg')
                },
                {
                    text:'圆形',
                    src:require('public/img/drNavGoods3/yuan.svg')                    
                },
                {
                    text:'方形',
                    src:require('public/img/drNavGoods3/fang.svg')
                }, 
                 ]
            },
            getGoods2BySeries:[],
            getGoods1BySeries:[]
        }
    },
    methods:{
        async enterGoods5(){
            if(this.getGoods5Imgs.length==0){
                const {data:res} =  await this.$http.get('drWorld') ;
                this.getGoods5Imgs = res.ret;
               
                }
            },
        async enterGoods4(){
            if(this.getGoods4Imgs.length==0){
                const {data:res} =  await this.$http.get('loveShop') ;
                this.getGoods4Imgs = res.ret;
              
                }
        },         
        async enterGoods2(){
            if(this.getGoods2BySeries.length == 0){
                const {data:res} = await this.$http.get('marriageRings');
                this.getGoods2BySeries = res.ret;
                
            }
        },
        async enterGoods1(){
            if(this.getGoods1BySeries.length == 0){
                const {data:res} = await this.$http.get('proposalRing');
                this.getGoods1BySeries = res.ret;                
            }
        },        
        /*clickPropseRing(){
            if(this.$route.path != '/proposeRing'){
                this.$router.push({path:'/proposeRing'});
            }
            
        }*/
        }

}
</script>

<style >
.router-link-exact-active{
    font-size: 18px;
    font-weight: 600;
}
.add_fontWeight{
    font-weight: 800;
    font-size: 17px;
}

.marry-goods2-item{
    height: auto;
}
.goods-children-frist-Mainbox .find-and-arrow-btn-children::after{
    right:8px;
}
.goods2-Children-item .find-and-arrow-btn-children::after{
    right:-25px;
}
.goods2-Children-item{
    width: 50%;
    padding:0 0.78125rem 0 0.3125rem;
    height:auto;
}
.goods2-Children-flex-box{
    display: flex;
}
.goods5-ChildrenTextImg li img{
    width: 16px;
    height: 16px;
}
.goods-Children-marginR150{
    margin-right:0.78125rem;
}
.goods5-ChildrenTextImg{
    margin-right:35px;
}
.goods5Fristbox{
    width: 163px;
    display: flex;
    flex-wrap: wrap;
}
.dr-world-goods5 .goods-children-item{
    margin-right:0.3645833rem;
}
.jewellery-goods3-item .goods-children-item{
    margin-right:0.78125rem;
    height: 1.3541667rem;
}
.jewellery-goods3-item .find-and-arrow-btn-children::after{
    right: -25px;
}
.find-and-arrow-text{
    font-size:17px;
}
.jewellery-goods3-item{
    height: 286px;
}
.love-shop-goods4{
    height: 317px;
}
.dr-main-nav li:hover span::after {
    opacity: 1;
}
.dr-main-nav a:hover,a:visited{
    color:black;
}
.dr-main-nav a{
    text-decoration:none;
}
.dr-main-nav-goods-text_img span{
    position: relative;
    cursor: pointer;
    
}
.dr-main-nav-goods-text_img ::after{
    opacity: 0;
    width: 20px;
    height: 20px;
    content:'';
    display: block;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom:-20px;
   /* background-image: url("~public/img/triangle.svg");
    background-repeat:no-repeat;*/
    background: url("~public/img/titleBar/triangle.svg") no-repeat center center/cover;    
}

.dr-main-nav-goods-text_img{
    position: relative;
}
.dr-main-nav li:hover .dr-main-nav-Goods-item{
    visibility: visible;
    opacity: 1;
}
.dr-main-nav li{
    list-style: none;
}
.dr-main-nav{
    height: 54px;
    line-height: 54px;
    z-index:9;
    position: relative;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    transition: all .5s ease-in-out;
    background: #fff
}
.dr-main-nav-goods1,.dr-main-nav-goods2,.dr-main-nav-goods3
,.dr-main-nav-goods4,.dr-main-nav-goods5{
    width: 0.5989583rem;
    text-align: center;
    margin:0 10px;
    font-size: 14px; 
    color: #333;
    width: 115px;
}

@media screen and (max-width: 1200px){
    .dr-main-nav{
        display: none;
    }    
}
</style>