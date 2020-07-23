<template>
    <div class="third-children">
        <div class="third-children-img"  v-for="(item,index) in drWorldImgs" :key="index">
            <img :src="item.drworldimg" class="goods5-imgs" /> 
            <span class="third-children-text1">{{drWorldText[index]}}</span>         
        </div>
    </div>
</template>

<script>
export default {
    name:'thirdChildren',
    data(){
        return{  
            drWorldText:['联系专属顾问','使用小程序服务']
        }
    },
    props: {
      drWorldImgs: {
         type:Array,
      }
    },

    methods:{
    }

}
</script>

<style>
.third-children-img img{
    width: 100px;
    height: 100px;
}
.third-children{
    width: 20%;
    display: flex;
    justify-content: flex-start;
}
.third-children-text1{
    width: 100px;
    height: 40px;
    line-height: 40px;
    color: #202020;
    font-size: 12px;
    position: absolute;
    top:110px;
    left:50%;
    transform: translateX(-50%);
}
.third-children-img{
    display: flex;
    justify-content: center;
    margin-right:0.3020833rem;
    position: relative;
}
</style>