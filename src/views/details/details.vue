<template>
    <div  id="details">        
        <titleBar/>
        <div class="mainMid" >
            <bigShowImg  :propshowImg="detailsRingImg" /> 
            <parameter  :propsTitle="detailsRing">
                <skuItem :propsChoose="detailsRing.materialScience" propsSource='材质'/>
                <skuItem :propsChoose="detailsRing.mainDiamonds" propsSource='主钻' />
                <skuitemSecond  :propsSource="bySize" />
                <carving/>
                <skuPrice :propsCommodity="detailsRing" :propsePrice="detailsRing.price" class="mainMid-skuPrice"/>
                <skuShopCart />
                <description :propsObj="detailsRing"/>
                <skuHelpItem  propsText="评价">
                    <showBox :propsTitle="evaluate">
                        <leavingMessage/>
                    </showBox>
                </skuHelpItem>
                <skuHelpItem  propsText="服务">
                    <showBox class="service-box-show" :propsTitle="service">
                        <img src="~public/img/other/5a15960.png"/>
                    </showBox>
                </skuHelpItem>                                 
            </parameter>
        </div>
        <bottomMainBar class="margin-top"/>
        <div v-if="ifMaskShow" class="details-mask-box"></div>        
    </div>

</template>

<script>
import titleBar from 'common/titleBar/titleBar'
import bottomMainBar from 'common/bottomBar/bottomMainBar'
import bigShowImg from './detailsChildren/bigShowImg'
import parameter from './detailsChildren/parameter'
import skuItem from './detailsChildren/parameterItems/skuItem'
import skuitemSecond from './detailsChildren/parameterItems/skuitemSecond'
import carving from './detailsChildren/parameterItems/carving'
import skuPrice from './detailsChildren/parameterItems/skuPrice'
import skuShopCart from './detailsChildren/parameterItems/skuShopCart'
import description from './detailsChildren/parameterItems/description'
import skuHelpItem from './detailsChildren/parameterItems/skuHelpItem'
import showBox from './detailsChildren/parameterItems/showBoxItems/showBox'
import leavingMessage from './detailsChildren/parameterItems/showBoxItems/leavingMessage'
var preD = function (e) {
      e.preventDefault()
 }
export default {
    name:'detail',
    data(){
        return{
            detailsRingImg:[],
            detailsRing:null,
            //材质选项
            byMaterial:{
                title:'材质',
                chooseItem:['白18金K','Pt950','红18K金','黄18K金']               
            },
            //钻石选项
            byDiamonds:{
                title:'主钻',
                chooseItem:['50分F-G色','30分H色','70分H色','100分G色']
            },
            //按尺寸
            bySize:{
                title:'尺寸',
                chooseItem:[]
            },
            //细节数据
            descriptions:Object,
            //评价
            evaluate:{
                name:'评价'
            },
            //服务
            service:{
                name:'服务'
            },
            //隐藏个盒子
            ifMaskShow:false                      
        }
    },
    components:{
        titleBar,
        bottomMainBar,
        bigShowImg,
        parameter,
        skuItem,
        skuitemSecond,
        carving,
        skuPrice,
        skuShopCart,
        description,
        skuHelpItem,
        showBox,
        leavingMessage,
    },
    watch:{
        ifMaskShow (val) {
            if(val){
                document.body.style.overflow = 'hidden'
                document.addEventListener('touchmove', preD, {passive: false})
            } else {
                document.body.style.overflow = ''
                document.removeEventListener('touchmove', preD, {passive: false})
            }
        }
    },
    created(){
        this.detailsRing = JSON.parse(localStorage.getItem('onceRing'));
        this.detailsItem = this.$route.query.data;
        console.log(this.detailsItem)
        //处理图片       
        function getImgs(obj){
            return [obj.img,obj.rotateImg];
        }
        this.detailsRingImg = getImgs(this.detailsRing );
        console.log(this.detailsRing)
        //处理尺寸数组
        function pushSize(Arr){
            console.log(211)
            for(var i = 5;i<=33;i++){
                Arr.push(i);
        }}

        pushSize(this.bySize.chooseItem);
        //处理商品细节描述对象

    },
    mounted(){
        this.$bus.$on('show',data => this.ifMaskShow = data);
        this.$bus.$on('noshow',data => this.ifMaskShow = data)
    },
    methods:{

    },

    
}
</script>

<style>

.margin-top{
    margin-top:10px;
}
.details-mask-box{
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: 0.7;
    position: absolute;
    z-index: 30;
    top:0;
    left: 0;
}

.mainMid-skuPrice{
    margin-top:50px
}
#details{
    position: relative;
}

.mainMid{
    padding: 0 .6604167rem;
    margin-top:.2604167rem;
    display: flex;
}

</style>