<template>
    <div class="home-section-img" :style="{width:PopImgWidth,height:PopImgHeight}">
        <img  v-lazy="sectionImgs.homeSectionImg"/>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'homeSectionImg',
    data(){
        return{
            
        }
    },
    props:{
        sectionImgs:{
            Type:Object,
        },
        PopImgWidth:{
            Type:String,
            default:'4.0625rem',
        },
        PopImgHeight:{
            Type:String,
            default:'4.3125rem',            
        }
    }
}
</script>

<style>
.home-section-img{
    position: relative;
    z-index: 19;
}
.home-section-img img{
    width: 100%;
    height: 100%;

}
</style>