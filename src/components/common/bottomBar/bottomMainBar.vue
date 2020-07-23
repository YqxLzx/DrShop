<template>
    <div>
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
import bottomBar from 'common/bottomBar/bottomBar'
import bottomThirditem from 'common/bottomBar/bottomItems/bottomThirditem'
import bottomFristItem from 'common/bottomBar/bottomItems/bottomFristItem'
import bottomSecondItems from 'common/bottomBar/bottomItems/bottomSecondItems'
import optionBar from 'common/bottomBar/optionBar'
export default {
    name:'bottomMainBar',
    data(){
        return{
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
    components:{
        bottomBar,
        bottomThirditem,
        bottomFristItem,
        bottomSecondItems,
        optionBar,
    }
}
</script>

<style>
.bottom-Second-Box{
    flex: 1;
    display: flex;
    justify-content: center;
}
</style>