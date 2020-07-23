<template>
    <div id="home">
        <titleBar/>
        <div class="home-vidio" >
            <video v-if="(homeVideo.length!=0)" loop="loop"
             :src="homeVideo[1].homeMp4file" autoplay="autoplay">
            </video>
        </div>
        <secition class="section1">
            <sectionText  ref="section1TextRef" :class="{'add_return-show':activeSection1}" class="left-show" :sectionTexts="secition1Text">
                <confirmBtn >
                    <span  slot="slot-text">查看更多</span>
                </confirmBtn>
            </sectionText>
            <sectionImg  ref="section1ImgRef" :class="{'add_return-show':activeSection1}" class="right-show" :sectionImgs="section1Img"  v-if="section1Img"/>
            <sectionMore ref="section1MoreRef" :class="{'add_return-show':activeSection1}" class="right-show" />
        </secition>
        <scrollTopBar v-show="scrollTopBarIsShow">
            <backTopBtn/>
            <messageBtn>
                <buyMessageItem :propsBuyMessage="scrollTopBar_messageItemBefore"/>
                <buyMessageItem :propsBuyMessage="scrollTopBar_messageItemAfter"/>
                <serviceItem slot="service-item" :propsService="scrollTopBar_serviceItem" />
            </messageBtn>
            <iphoneBtn/>
        </scrollTopBar>
        <queryIDcard class="query-IDcard">
            <queryText/>
            <queryBtn/>
        </queryIDcard>
        <secition class="section2">
            <sectionMore ref="section2MoreRef" :class="{'add_return-show':activeSection2}" class="left-show" />
            <sectionImg  ref="section2ImgRef" :class="{'add_return-show':activeSection2}" class="left-show" v-if="section2Img" :sectionImgs="section2Img" PopImgWidth='4.671875rem' PopImgHeight='3.6302083rem'>
                <confirmBtn >
                    <span  slot="slot-text">查看更多</span>
                </confirmBtn>
            </sectionImg>
            <sectionText  ref="section2TextRef" :class="{'add_return-show':activeSection2}" class="right-show" :sectionTexts="secition2Text" />                       
        </secition>
        <swiperFrist class="left-show" ref="swiperFristRef1" :class="{'add_return-show':activeSwiper1}" :homeShowSwiperImgs="homeSwiperImgs">
            <confirmBtn >
                <span  slot="slot-text">去购买</span>
            </confirmBtn>
        </swiperFrist>        
        <reservation class="reservation"> 
            <reservationText :reservationText = "homeReservationText"/>
            <reservationBtn/>
            <confirmBtn ><div slot="slot-text" >立即预约</div></confirmBtn>
        </reservation>
        
        <swiperSecond ref="swiperSecondRef">
            <swiperLeft class="left-show" :class="{'add_return-show':activeSwiper2}" :swiperImgs="homeSwiperSecondImgs"/>
            <swiperRight class="right-show" :class="{'add_return-show':activeSwiper2}" :swiperImgs="homeSwiperSecondImgs">
                <slideArrow class="home-swiper-slot-arrow">
                    <div>查看详情</div>
                </slideArrow>
            </swiperRight>
            <swiperMore :class="{'add_return-show':activeSwiper2}" class="right-show"/>
        </swiperSecond >

        <secition class="section3">
            <swiperMore />
            <custoLeftText>
                <confirmBtn ><div slot="slot-text" >立即定制</div></confirmBtn>
            </custoLeftText>
            <cuseoRightVideo :propsVideo="homeVideo"/>
        </secition>

        <starsAndStories class="starsAndStories">
            <slideArrow slot="slideArrowBtn">
                <div>查看更多</div>
            </slideArrow>
            <starsAndStoriesImg v-if="starsAndStoriesImg.lengt!=0" :propsStarsStoriesImg="starsAndStoriesImg" />
        </starsAndStories>

        <optionBar :propsIcons="bottomOptions"/>
        <bottomBar>
            <bottomFristItem/>
            <div class="bottom-Second-Box">
            <bottomSecondItems :propsItems="bottomSecondItem1"/>
            <bottomSecondItems :propsItems="bottomSecondItem2"/>
            <bottomSecondItems :propsItems="bottomSecondItem3"/>
            </div>
            <bottomThirditem/>            
        </bottomBar>
    </div>
</template>
<script>
import titleBar from 'common/titleBar/titleBar'
import secition from './homeChildren/section/section'
import sectionText from './homeChildren/section/sectionChildren/sectionText'
import sectionImg from './homeChildren/section/sectionChildren/sectionImg'
import sectionMore from './homeChildren/section/sectionChildren/sectionMore'
import queryIDcard from './homeChildren/queryIDcard/queryIDcard'
import queryText from './homeChildren/queryIDcard/queryIDcardChildren/queryText'
import queryBtn from './homeChildren/queryIDcard/queryIDcardChildren/quertBtn'
import reservation from './homeChildren/reservation/reservation'
import reservationText from './homeChildren/reservation/reservationChildren/reservationText'
import reservationBtn from './homeChildren/reservation/reservationChildren/reservationBtn'
import confirmBtn from 'common/somebtn/confirmBtn/confirmBtn'
import swiperFrist from './homeChildren/swiper/homeShowSwiper'
import scrollTopBar from 'common/scrollTopBar/scrollTopBar'
import backTopBtn from 'common/scrollTopBar/scrollTopBarChildren/backTopBtn'
import messageBtn from 'common/scrollTopBar/scrollTopBarChildren/messageBtn'
import buyMessageItem from 'common/scrollTopBar/scrollTopBarChildren/messageBtnItems/buyMesssageItem'
import serviceItem from 'common/scrollTopBar/scrollTopBarChildren/messageBtnItems/serviceItem'
import iphoneBtn from 'common/scrollTopBar/scrollTopBarChildren/IphoneBtn'
import slideArrow from 'common/slideArrow/slideArrow'
import swiperSecond from './homeChildren/swiperSecond/swiperSecond'
import swiperLeft from './homeChildren/swiperSecond/swiperSecondChildren/swiperLeft'
import swiperRight from './homeChildren/swiperSecond/swiperSecondChildren/swiperRight'
import swiperMore from './homeChildren/swiperSecond/swiperSecondChildren/swiperMore'
import custoLeftText from './homeChildren/Customized/custoLeftText'
import cuseoRightVideo from './homeChildren/Customized/custoRightVideo'
import starsAndStories from './homeChildren/starsAndStories/starsAndStories'
import starsAndStoriesImg from './homeChildren/starsAndStories/starsAndStoriesChildren/starsAndStoriesImg'
import optionBar from 'common/bottomBar/optionBar'
import bottomBar from 'common/bottomBar/bottomBar'
import bottomThirditem from 'common/bottomBar/bottomItems/bottomThirditem'
import bottomFristItem from 'common/bottomBar/bottomItems/bottomFristItem'
import bottomSecondItems from 'common/bottomBar/bottomItems/bottomSecondItems'
export default {
    name:'home',
    components:{
        titleBar,
        secition,
        sectionText,
        sectionImg,
        sectionMore,
        queryIDcard,
        queryText,
        queryBtn,
        reservation,
        reservationText,
        reservationBtn,
        confirmBtn,
        swiperFrist,
        scrollTopBar,
        backTopBtn,
        messageBtn,
        buyMessageItem,
        serviceItem,
        iphoneBtn,
        slideArrow,
        swiperSecond,
        swiperLeft,
        swiperRight,
        swiperMore,
        custoLeftText,
        cuseoRightVideo,
        starsAndStories,
        starsAndStoriesImg,
        optionBar,
        bottomBar,
        bottomThirditem,
        bottomFristItem,
        bottomSecondItems
        
    },
    data(){
        return{
            homeVideo:[],
            secition1Text:[
                '求婚钻戒',
                '求婚是向心爱之人发出共度余生的浪漫订婚邀约，',
                '是一生仅此一次的郑重承诺，是爱情里不可或缺的仪式感。',
                '用男士一生仅能定制一枚的DR求婚钻戒，','给她笃定唯一的承诺：用一生，爱一人！'
            ],
            scrollY:Number,
            section1Img:Object,
            activeSection1:false,
            activeSection2:false,
            activeSwiper1:false,
            winHeight:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            secition2Text:[
                '结婚对戒',
                '结婚，是爱的最高级誓言。',
                '一戒定情，二戒成婚，三戒定一生。',
                '每一对结婚对戒，会伴随我们走过一生一世',
                '当岁月远去，爱未曾减少，一生只为你承诺。'
            ],
            section2Img:Object,   
            homeReservationText:[
                '预约试戴',
                '求婚钻戒，浪漫对戒，精选男戒，和最好的礼物，',
                '欢迎前往你附近的DR门店试戴心仪的珠宝',
            ],
            homeSwiperImgs:[],
            scrollTopBar_messageItemBefore:{
                img:require('public/img/scrollTopBar/buybefore.svg'),
                title:'售前咨询',
                chooseItem:['定制咨询','商品查询','协助购买']
            },
            scrollTopBar_messageItemAfter:{
                img:require('public/img/scrollTopBar/buyafter.svg'),
                title:'售后咨询',
                chooseItem:['订制进度','订单咨询','退/换货款']
            },
            scrollTopBar_serviceItem:{
                title:'快速服务',
            },
            scrollTopBarIsShow:false,
            homeSwiperSecondImgs:[] ,
            activeSwiper2:false ,
            starsAndStoriesImg:[],
            bottomOptions:[
                {
                    img:require('public/img/bottomBar/optionsBar/GIA.svg'),
                    name:'专业认真'
                },
                                {
                    img:require('public/img/bottomBar/optionsBar/docubleBook.svg'),
                    name:'一钻双证'
                },
                                {
                    img:require('public/img/bottomBar/optionsBar/15days.svg'),
                    name:'15天包退'
                },
                                {
                    img:require('public/img/bottomBar/optionsBar/freeFreight.svg'),
                    name:'全国免运费'
                },
                                {
                    img:require('public/img/bottomBar/optionsBar/Insurance.svg'),
                    name:'全程保险'
                },
                {
                    img:require('public/img/bottomBar/optionsBar/vip.svg'),
                    name:'VIP服务'
                },

            ],
            bottomSecondItem1:{
                img:require('public/img/bottomBar/phone.svg'),
                name:'联系我们',
                text:'400-01-13520',
                childrenShow:[['公司简介','商务合作','联系我们']]
            },
            bottomSecondItem2:{
                img:require('public/img/bottomBar/service.svg'),
                name:'服务',
                text:'了解DR的专业服务和保养建议',
                childrenShow:[['专属定制','售后服务','费用标准'],
                            ['购买规则','购物流程','专业认证'],
                            ['资讯中心','品牌专题','DR标签']]
            }, 
            bottomSecondItem3:{
                img:require('public/img/bottomBar/service.svg'),
                name:'精品店',
                text:'搜素附件的精品店'
            },         
        }
    },
    created(){
        this.getHomeSectionImgs();
        this.getHomeSwiperImgs();
        this.getHomeSwiperSecondImgs();
        this.getHomeViedos();
        this.getHomestarsStoriesImg();
        //this.getShoppingBag();
    },
    mounted() {
       window.addEventListener('scroll', this.homescroll);
    },
    methods:{
        homescroll(){
            this.scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ;
            let clientHeight = this.winHeight
            //第一阶段 section1显示
            let section1Text_top = this.$refs.section1TextRef.$el.getBoundingClientRect().top
            let start_Change1 = true;
            if(section1Text_top <= (clientHeight + 100) && start_Change1==true){
                this.activeSection1 = true;
                start_Change1 = false;
            }
            //第二阶段 section2显示
            let section2Text_top = this.$refs.section2TextRef.$el.getBoundingClientRect().top
            let start_Change2 = true;
            if(section2Text_top <= (clientHeight + 100) && start_Change2==true){
                this.activeSection2 = true;
                start_Change2 = false;
            }
            //第三阶段,第一张轮播图显示
            let swiperFrist_top = this.$refs.swiperFristRef1.$el.getBoundingClientRect().top;
            let start_Change3 = true;
            if(swiperFrist_top <= (clientHeight + 100) && start_Change3==true){
                this.activeSwiper1 = true;
                start_Change3 = false;                
            }
            //右侧快捷导航显示与隐藏
            let scrollTop_isShow = true 
            if(this.scrollY >= 1100 && scrollTop_isShow == true){
                this.scrollTopBarIsShow = true;
                scrollTop_isShow = false;
            }else if(this.scrollY < 1100){
                this.scrollTopBarIsShow = false;
                scrollTop_isShow = true;
            }
            //第四阶段第二张轮播图显示
            let swiperSecond_top = this.$refs.swiperSecondRef.$el.getBoundingClientRect().top;
            let start_Change4 = true;
            if(swiperSecond_top <= (clientHeight + 100)  && start_Change4==true){
                this.activeSwiper2 = true;
                start_Change4 = false;                 
            }

        },
        async getHomestarsStoriesImg(){
            const {data:res}  = await this.$http.get('starsAndStories');
            this.starsAndStoriesImg = res.ret;           
        },
        async getHomeViedos(){
           const {data:res}  = await this.$http.get('homeMp4');
           this.homeVideo = res.ret;          
        },
       async getHomeSectionImgs(){
           const {data:res}  = await this.$http.get('homesectionImgs');
           this.section1Img = res.ret[2];
           this.section2Img = res.ret[10];
        },
        async getHomeSwiperImgs(){
           const {data:res}  = await this.$http.get('homeswiper');
           this.homeSwiperImgs = res.ret;
        },
        async getHomeSwiperSecondImgs(){
           const {data:res}  = await this.$http.get('homeSwiperSecond');
           this.homeSwiperSecondImgs = res.ret;
        },
        async getShoppingBag(){
            const {data:res}  = await this.$http.post('getShoppingBag',
                {
                    idCard:localStorage.getItem('token'),
                }
            );
            console.log(res)
        }
    },
    destroyed() {
        window.removeEventListener("scroll", this.homescroll);
  },

}
</script>

<style>
.bottom-Second-Box{
    flex: 1;
    display: flex;
    justify-content: center;
}
.starsAndStories .slide-arrow-box{
    left:50%;
    transform: translateX(-50%);
    
}
.section3 .confirm-btn{
    background-color: black;
    color: #fff;
}
.section3 #confirm{
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
#home .section3{
    padding:.5208333rem .8333333rem 0 .7135417rem;
}
.left-show{
    transform: translateX(-100%);
    transition: all 2s ease;
}
.right-show{
    transform: translateX(100%);
    transition: all 2s ease;
}
.add_return-show{
    transform: translateX(0);
}
.home-swiper-slot-arrow{
    margin-top:.234375rem;
}
#home-swiper #confirm{
    left:80%;
    bottom:0px;
}

.reservation .confirm-btn{
    background-color: black;
    color: #fff;
}
.section1 .home-section-text #confirm{
    bottom:0.3125rem;
}
.section1 .home-section-img{
    z-index: 10;
}
.section2 .section-more-a-img::after{
    bottom:31.3%;
    left:72.3%;
}
.section2 .section-more-div-img::after{
    bottom: 0;
    left: 62.3%;
}
.section2 #confirm{
    right: 0;
    transform: translate(50%,-50%);
}

.home-section-text #confirm{
    right: 0;
    transform: translate(50%,-50%);
}
.section2{
    padding-bottom:1.0104167rem;
    padding-top:.8333333rem;
}
#home .section2 .home-section-text .section-text-arrow{
    bottom: -.4166667rem;
    left: 1.5625rem;
}
#home .section2 .home-section-text{
    padding:.8020833rem .7291667rem .2604167rem .4166667rem;
    margin-top: .8333333rem;
    height:1.7291667rem;
}

.reservation #confirm{
    left:50%;
    transform: translate(-50%,50%);
    bottom:0;
}
.query-IDcard{
    margin: 0 auto;
    padding-top:.8333333rem;
}

#home{
    background-color: #fff;
}
.home-vidio video{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    
}
.home-vidio{
    width: 100%;
    height:4.7708333rem;
    position: relative;
    z-index: 1;
}
</style>