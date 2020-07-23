<template>
<div>
    <div class="details-show-img-box">
        <div class="small-box">
            <div :class="{add_maskOp:activeImg!=index}"  @click="clickSmallImg(index)" class="small-img-show" v-for="(item,index) in  propshowImg" :key="index">
                <img  v-if="propshowImg" :src="item" />
            </div>
        </div>
       <!-- <div ref="boxRef">        
            <div @mousemove="move" @mouseleave="leaveBigShow" @mouseenter="enterBigShow" v-show="(index===activeImg)" class="big-img-show" v-for="(item,index) in  propshowImg" :key="index">
                <img v-if="propshowImg" :style="{backgroundImage:'url(' + item + ')'}"/>
                <div ref="itemName" :style="{left:maskLeft+'px',top:maskTop+'px'}" class="mask">
                    <img class="mask-big-img"  v-if="propshowImg" :src="item"/>
                </div>
            </div>
        </div>-->
        <div class="mediaShow">
            <div v-for="(item,index) in  propshowImg" :key="index">
                <div 
                    v-if="(index===activeImg)"
                    class="big-img" 
                    ref="itemName"
                    :style="{ 
                    width: bigImgSize + 'px',
                    height: bigImgSize + 'px',
                    background: 'url(' + item + ') no-repeat center center/cover'
                    }"
                    @mouseenter="displayMagnifier"
                    @mouseleave="hideMagnifier"   
                    @mousemove="moveMagnifier"
                >
                <div 
                    class="magnifier" 
                    v-if="showMagnifier" 
                    :style="{
                    width: magnifierSize + 'px',
                    height: magnifierSize + 'px',
                    top: magnifierTop + 'px', 
                    left: magnifierLeft + 'px',
                    background: 'url(' + item + ') no-repeat',
                    backgroundPosition: magnifierX + 'px ' + magnifierY + 'px',
                    backgroundSize: (factor * 100) + '% ' + (factor * 100) + '%'
                    }"
                >
                </div>
                </div>
            </div>
        </div>
        <div class="mediaShow-clon">
            <div  v-for="(item,index) in  propshowImg" :key="index">
                <img  class="big-img-clon"  v-if="(index===activeImg)" :src="item" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'bigShowImg',
    data(){
        return{            
            activeImg:0,
            ifShowMaskImg:true,
            maskLeft:Number,
            maskTop:Number,
            bigImgSize: 700,
            magnifierSize: 300,
            showMagnifier: false,
            magnifierTop: null,
            magnifierLeft: null,
            factor: 3.5,
            
        }
    },
    props:{
        propshowImg:{
            type:Array,
        }
    },
    computed: {
        magnifierX() {
            return -this.magnifierSize*(this.factor*this.magnifierSize + 2*this.factor*this.magnifierLeft - this.bigImgSize)/(2*this.bigImgSize) ;
        },
        magnifierY() {
            return -this.magnifierSize*(this.factor*this.magnifierSize + 2*this.factor*this.magnifierTop - this.bigImgSize)/(2*this.bigImgSize) ;
        }
  },
    methods:{
        clickSmallImg(index){
            this.activeImg  =  index;
        },
        enterBigShow(){
            this.ifShowMaskImg = true;
        },
        leaveBigShow(){
            this.ifShowMaskImg = false;
        },
        getMagnifierPos(ev) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const magnifierY = 
                ev.pageY - (this.$refs.itemName[0].getBoundingClientRect().top + scrollTop) - this.magnifierSize/2 ;
                
            const magnifierX =
                ev.pageX - (this.$refs.itemName[0].getBoundingClientRect().left)- this.magnifierSize/2 ;
            this.magnifierTop = Math.min(
                Math.max(0, magnifierY), 
                this.bigImgSize - this.magnifierSize
            );
            this.magnifierLeft = Math.min(
                Math.max(0, magnifierX), 
                this.bigImgSize - this.magnifierSize
            );
        },
        displayMagnifier(ev) {
            this.showMagnifier = true;    
            this.getMagnifierPos(ev);
        },
        hideMagnifier() {
            this.showMagnifier = false;
        },
        moveMagnifier(ev) {
            this.getMagnifierPos(ev);   
        }
        /*move(e) {
            let item_width = this.$refs.itemName[0].offsetWidth;
            let item_height = this.$refs.itemName[0].offsetHeight
            this.maskLeft = e.clientX - this.$refs.boxRef.offsetLeft - item_width
            this.maskTop = e.clientY - this.$refs.boxRef.offsetTop - item_height -100
            if(this.maskLeft <= 10 ){
                this.maskLeft = 0
            }else if(this.maskLeft >= 385){
                this.maskLeft = 385
            }
            if(this.maskTop <= 10 ){
                this.maskTop = 0
            }else if(this.maskTop >= 385){
                this.maskTop = 385
            }
            console.log(this.$refs.itemName[0].offsetWidth)
        }*/
    }
}
</script>

<style>
.big-img {  
  position: relative;
  border: 1px solid #000;
  z-index: 10;
}
.big-img-clon{
    width:4.34375rem;
    height: 4.34375rem;
}
.magnifier {
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid #ccc;
}


.add_maskOp{
    opacity: .5;
}
.details-show-img-box .small-img-show{
    width: 1.0416667rem;
    height: 1.0416667rem;
    background-color: green;
    margin: 0 .078125rem .078125rem  0;
}
.details-show-img-box .small-img-show img{
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.details-show-img-box {
    width:4.7395833rem;
    display: flex;
    margin-right:100px;
    position: sticky;
    top: 150px;
}
.small-box{
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
.mediaShow-clon{
    display: none;
}
.mediaShow {
    display: block;
}

@media screen and (max-width:1200px) {
    .mediaShow {
        display: none;
    }
    .mediaShow-clon{
        display: block;
    }
}
</style>