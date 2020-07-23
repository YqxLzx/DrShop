<template>
    <titleMainBar class="title-header-bar" :class="{add_fixed:isScroll}">
        <titleMainItem v-if="!isScroll">
            <titleMidLogo/>
        </titleMainItem>
            <drNav>
            <titleLeftBox/>
            <titleRightBox>
                <loginItem/>
                <loveItem/>
                <buyItem/>
                <whereItem/>
                <languageItem/>
            </titleRightBox>
            <drMainNav :class="{add_drnav:isScroll}"/>
            <leftMenu/>                    
        </drNav>
    </titleMainBar>
</template>

<script>
//import drWorldGoods5 from '../titleBar/drNav/drNavItems/drWorldGoods5'

import leftMenu from '../titleBar/titleMainBar/titleItems/leftMenu'
import drMainNav from '../../common/titleBar/drNav/drMainNav'
import drNav from '../titleBar/drNav/drNav'
import titleMainItem from '../titleBar/titleMainBar/titleMainItem'
import titleMainBar from '../titleBar/titleMainBar/titleMainBar'

import titleLeftBox from '../titleBar/titleMainBar/titleItems/titleLeftBox'
import titleRightBox from '../titleBar/titleMainBar/titleItems/titleRightBox'
import titleMidLogo from '../titleBar/titleMainBar/titleItems/titleMidLogo'

import loginItem from 'common/titleBar/titleMainBar/titleItems/titleRightItems/loginItem'
import loveItem from 'common/titleBar/titleMainBar/titleItems/titleRightItems/loveItem'
import buyItem from 'common/titleBar/titleMainBar/titleItems/titleRightItems/buyItem'
import whereItem from 'common/titleBar/titleMainBar/titleItems/titleRightItems/whereItem'
import languageItem from 'common/titleBar/titleMainBar/titleItems/titleRightItems/languageItem'
export default {
    name:'titleBar',
    components:{
        //drWorldGoods5,
        leftMenu,
        drMainNav,
        drNav,
        titleMainItem,
        titleMainBar,        
        titleLeftBox,
        titleRightBox,
        titleMidLogo,
        loginItem, 
        loveItem, 
        buyItem, 
        whereItem,
        languageItem,
    },
    data(){
        return{
            scrollY:0,//Y轴滚动值
            prevY:0,//滚动基线
            isScroll:false,//滚动后添加类名
        }
    },
    destroyed() {
        //销毁监听
        window.removeEventListener("scroll", this.menu);
  },
    mounted(){
        //window监听滚动事件
        window.addEventListener('scroll', this.menu)
    },
    methods:{
        menu(){
            this.scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let DifferenceY =  this.prevY - this.scrollY ;
            this.prevY = scrollY;
            let isClose = true;
            if(DifferenceY < 0 && this.scrollY > 50 && isClose){
                this.isScroll = true;
                isClose = false;
            }else if(DifferenceY > 0 && this.scrollY <= 50 ){
                this.isScroll = false;
                isClose = true;
            }
        }
    }

}
</script>


<style>

.title-header-bar{
    position: relative;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.03);
}
.add_fixed{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 99;
}

.add_drnav{
    height: 0.5364583rem;
    line-height:  0.5364583rem ;    
}
</style>