<template>
    <div class="title-main-item-leftbox">
        <img class="title-menu" src="~public/img/titleBar/menu.svg" @click="clickOpen" />
        <span class="telephone">400-01-13520</span>
        <div class="box-move-TB">
            <a class="box-move">
                <div class="more-box-big">         
                    <div class="more-box">
                    <img class="box-move-TB-img-more"  src="~public/img/titleBar/go.png" />
                        <a href="https://darryring.tmall.com/" class="box-move-TB-text">天猫旗舰店</a>
                        <img class="box-move-TB-img" src="~public/img/titleBar/go.png" /> 
                    </div> 
                </div>
            </a>              
        </div>
    </div>
</template>

<script>
export default {
    name:'titleLeftBox',
    data(){
        return{
            ifMenuOpen:false,//控制左侧菜单是否打开
        }
    },
    mounted(){
        this.$bus.$on('close',(value) => {
            this.ifMenuOpen = value
        })
    },
    /*destroyed(){
        window.removeEventListener('close', this.ifMenuOpen)
    },*/
    methods:{
        clickOpen(){
            this.ifMenuOpen = !this.ifMenuOpen;
            this.$bus.$emit('opend',this.ifMenuOpen);
        }
    }
}
</script>

<style>
.title-menu{
    width: 23px;
    height: 23px;
    position: absolute;
    top: 0px;
    left:-42px;
    cursor: pointer;
    display: none;
}

.more-box-big{
    position: relative;
    overflow: hidden;
}

.more-box:hover{
    transform: translateX(30px);
}
.more-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 1s ease;
    transform: translateX(0);
}

.more-box:hover > .box-move-TB-img-more{
    transform: translateX(0px);
}

.box-move .box-move-TB-img{
    width: 30px;
    height: 8px;
}
.box-move-TB-text{
    font-size: 12px;
    text-decoration:none;
    color: black; 
    font-family:weiruanyahei;    
}
.box-move-TB-text :visited{
    text-decoration:none;
}

.box-move{
    align-items: center;
    display: flex;
    flex-wrap:nowrap;  
    border-left: 1px solid gray;
    padding-left: 30px;  
}

.more-box-big .box-move-TB-img-more{
    position: absolute;
    left:-30px;
    top:4px;
    transition: all 1s ease;
    transform: translateX(0);
}

.box-move-TB{
    margin-left:20px;
}
.telephone{
    line-height: 22px;
    font-size:0.1354167rem;
}
.title-main-item-leftbox{
    position: absolute;
    top:0.207313rem;
    left:0.4149rem;
    display: flex;
    height: 22px;
    align-items: center;
    z-index: 99;
}
@media screen  and (max-width:1200px){
    .title-menu{
        display: block;
    }
}

@media screen  and (max-width:900px){
    .title-menu{
        display: block;
        top:0px;
    }
}

@media screen and (max-width:900px){
.box-move-TB{
    display: none;
}
}

@media screen and (max-width:1200px){
.title-main-item-leftbox,.title-main-item-rightbox{
    top:40px;
}
}

@media screen and (max-width:1200px){
.title-main-item-leftbox{
    left:80px;
}
}

@media screen and (max-width:900px){
.title-main-item-leftbox,.title-main-item-rightbox{
    top:19px;
}
} 
@media screen and (max-width:900px){
.title-main-item-leftbox{
    left:80px;
}
}
</style>