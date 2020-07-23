<template>
    <div class="custo-right-video">
        <video autoplay="autoplay" loop="loop" class="custo-right-video-box" v-if="propsVideo!=0">
             <source class="custo-right-video-mp4" :src="propsVideo[0].homeMp4file" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    name:'custoRightVideo',
    props:{
        propsVideo:{
            type:Array
        }
    }
}
</script>

<style>
.custo-right-video{
    width: 55%;
    box-sizing: border-box;
    border: solid .0520833rem #f2eded;
}
.custo-right-video-box{
    width: 100%;
    height: 100%; 
}
.custo-right-video-mp4{
    width: 100%;
    height: 100%;
}
</style>