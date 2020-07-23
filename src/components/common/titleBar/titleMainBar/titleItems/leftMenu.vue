<template>
    <div id="left-menu" v-if="ifMenuClose">
        <div class="left-menu-box" :class="{'add_leftMenuSave':ifMenuClose}">
            <img  src="~public/img/titleBar/no.svg" class="menu-box-noBtn" @click="clickClose"/>
            <ul>
                <li class="menu-box-propose-li">
                    <span>求婚戒指</span>
                    <img src="~public/img/titleBar/triangle.svg" />
                </li>
                <li class="menu-box-marry-li">
                    <span>结婚对戒</span>
                    <img src="~public/img/titleBar/triangle.svg" />
                </li>
                <li class="menu-box-Jewellery-li">
                    <span>珠宝</span>
                    <img src="~public/img/titleBar/triangle.svg" />
                </li>
                <li class="menu-box-storefront-li">
                    <span>全球精品店面</span>
                    <img src="~public/img/titleBar/triangle.svg" />
                </li>
                <li class="menu-box-DRworld-li">
                    <span>DR世界</span>
                    <img src="~public/img/titleBar/triangle.svg" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'leftMenu',
    data(){
        return{
            ifMenuClose:false,//控制左侧菜单是否关闭            
        }
    },
    mounted(){
        this.$bus.$on('opend', (value) => {
        this.ifMenuClose = value;    
})
    },
    /*destroyed(){
        window.removeEventListener('opend', this.ifMenuClose)
    },*/
    methods:{
        clickClose(){
            this.ifMenuClose = false;
            this.$bus.$emit('close',this.ifMenuClose);
        }
    }
}
</script>

<style>
.add_leftMenuSave{
    transform: scaleX(1)!important;
    opacity: 1!important;
}
.menu-box-noBtn{
    width: 16px;
    height: 16px;
    position: absolute;
    top: 24px;
    left: 34px;
    cursor: pointer;
}
.left-menu-box>ul li:hover img{
     opacity: 1;
}
.left-menu-box>ul li img{
    margin-right:25px;
    float:right;
    width: 20px;
    height: 20px;
    opacity: 0;
}
.left-menu-box>ul li{
    list-style: none;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 40px;
}
.left-menu-box{
    position: fixed;
    top: 102px;
    left: 0;
    width: 352px;
    background-color: #f2eded;
    z-index: 9;
    height: calc(100vh - 103px);
    box-sizing: border-box;
    padding-top: 105px;
    padding-left: 62px;
    padding-bottom: 28px;
    color: #22282d;
    overflow-y: auto;
    transition: all 3s ease-in;
    transform: scaleX(0);
    opacity: 0;
}
#left-menu{
    position: fixed;
    width: 100%;
    height: calc(100vh - 60px);
    top: 102px;
    background-color: rgba(0,0,0,.4);
    z-index: 9;
}

@media screen  and (max-width:1200px){
    .left-menu-box{        
        top: 100px;
        height: calc(100vh - 60px);
    }
}

@media screen  and (max-width:1200px){
    #left-menu{        
        top: 100px;
        height: calc(100vh - 60px);
    }
}

@media screen  and (max-width:900px){
    .left-menu-box{
        width: 100%;
        top: 60px;
        height: calc(100vh - 60px);
    }
}

@media screen  and (max-width:900px){
    #left-menu{
        top: 60px;
        height: calc(100vh - 60px);
    }
}
</style>