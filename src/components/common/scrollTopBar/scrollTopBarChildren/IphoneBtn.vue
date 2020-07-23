<template>
    <div @mouseenter="getDrworldImg" class="iphone-btn">
        <img src="~public/img/scrollTopBar/iphone.png" />
        <div class="show-box-drWoldr">
            <img v-if="iphoneImgs.length!=0" :src="iphoneImgs[1].drworldimg"  class="dr-world-show"/>
            <p >微信扫一扫，进入Dr真爱世界</p>
        </div>

    </div>
</template>

<script>
export default {
    name:'iphoneBtn',
    data(){
        return{
            iphoneImgs:[],
        }
    },
    methods:{
        async getScrollTopBarIphone(){ 
            if(this.iphoneImgs.length==0){
                const {data:res} =  await this.$http.get('drWorld') ;
                this.iphoneImgs = res.ret;     
                console.log(this.iphoneImgs) ;    
            }           
                             
        },
        getDrworldImg(){
            this.getScrollTopBarIphone();
        }
    }
}
</script>

<style>

.iphone-btn:hover .show-box-drWoldr{
    display:block;
    animation:opacityShow .7s ease;
}
.iphone-btn p{
    margin-top:10px;
}
.iphone-btn img{
    width:.1197917rem;
    height: .0833333rem;
}
.show-box-drWoldr{
    position: absolute;
    left:-200px;
    bottom:0;
    background-color: #fff;
    display: none;
    padding:10px;

}
.iphone-btn .dr-world-show{
    width: 180px;
    height: 170px;
}
.iphone-btn{
    display: flex;
    align-items: center;  
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: rgb(153, 156, 162);
    margin-bottom: 4px;
    cursor: pointer;
    position: relative;
}
.iphone-btn:hover{
    background-color:#9c827d;
}
@keyframes opacityShow{
    0%{opacity: 0;}
    25%{opacity: 0.25;}
    50%{opacity: 0.5;}
    75%{opacity: 0.75;}
    100%{opacity: 1;}
}
</style>