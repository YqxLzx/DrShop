<template>
    <div class="propseRing-box">
        <titleBar/>   
        <div class="propose-main-box">
            <div class="propose-Navigation">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">DR</el-breadcrumb-item>
                    <el-breadcrumb-item >求婚戒指</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/' }">全部商品</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="sort-box" @click="clickSortBox" >
                    <div>排序</div>
                    <img src="~public/img/titleBar/triangle.svg" />
                    <sortBox  :class="{'add_isshow':ifSortBoxShow}"   :propsSortText="['默认','按人气','按价格']"/>
                </div>
            </div>
            <div class="propose-mid-main-box">
                <leftOpctions  class="left-sort">
                    <leftOpction1  :propsServices="drService" />
                    <leftOpction2 :propsOp="weightService"  />
                    <leftScrrenShow  />
                    <leftOpction2 :propsOp="shapeService" />
                    <leftOpction3 :propsBox="boxAndColor"/>
                </leftOpctions>
                <midClassRing class="midClassRing">
                    <confirmBtn @click.native="clickBuy" class="propose-mid-main-box-buyBtn">
                        <slot slot="slot-text">立即购买</slot>
                    </confirmBtn>
                </midClassRing>
            </div>
        </div>
        <bottomMainBar/>
    </div>
</template>

<script>
import titleBar from 'common/titleBar/titleBar'
import bottomMainBar from 'common/bottomBar/bottomMainBar'
import confirmBtn from 'common/somebtn/confirmBtn/confirmBtn'
import leftOpctions from 'common/classRing/classRingItems/leftOPtions'
import leftOpction1 from 'common/classRing/classRingItems/leftOptionsItems/leftOpction1'
import leftOpction2 from 'common/classRing/classRingItems/leftOptionsItems/leftOpction2'
import leftScrrenShow from 'common/classRing/classRingItems/leftOptionsItems/leftScreenshow'
import leftOpction3 from 'common/classRing/classRingItems/leftOptionsItems/leftOpction3'
import midClassRing from 'common/classRing/classRingItems/midClassRing'
import sortBox from 'common/classRing/sortBox/sortBox'
export default {
    name:'proposeRing',
    data(){
        return{
            ifSortBoxShow:false,
            //分类文字
            drService:[],
            weightService:
            {
                title:'重量  (克拉)',
                service:['10分以下','10分-30分','30分-50分','50分-1克拉','1克拉以上'],
            },               
            shapeService:{
                title:'按形状',
                service:['方形','心形','圆形']
            },
            boxAndColor:{
                title:'按价格',
                number:5,
                bgc:['#ebecee','#d9dadd','#999ca2','#6a6d72','#22282d']
            },
        }
    },
    components:{
        titleBar,
        bottomMainBar,
        leftOpctions,
        leftOpction1,
        leftOpction2,
        leftScrrenShow,
        leftOpction3,
        midClassRing,
        confirmBtn,
        sortBox
    },
    created(){
        this.getPropseClass();
        this.getdrService();
    },
	mounted() {

	},
    methods:{
        async getdrService(){
            const {data:res} = await this.$http.get('proposalRing');
            this.drService = res.ret; 
        },
        async getPropseClass(){
            const {data:res} = await this.$http.get('proposaClass');
            console.log(res)
            this.$store.commit('save_MidClassRing',res.ret);
            console.log(this.$store.state.midClassRing)
        },
        clickBuy(){
            console.log('买卖秒')
            //this.$router.push('/details')
        },
        clickSortBox(){
            this.ifSortBoxShow = ! this.ifSortBoxShow;
        },

    }

}
</script>

<style>
.sort-box .add_isshow{
    transform: scaleY(1);
}
.propseRing-box{
    overflow: hidden;
}
.midClassRing .more{
    line-height:.2083333rem;
}
.midClassRing #confirm,.midClassRing .confirm{
    width: .8333333rem;
    height: .2083333rem;
}
.midClassRing li:hover .propose-mid-main-box-buyBtn{
visibility:visible;
}
.propose-mid-main-box-buyBtn{
    visibility: hidden;
    bottom:.3741667rem;
    left:50%;
    transform: translateX(-50%);
}
.propose-mid-main-box{
    display: flex;
   
}
.left-sort{
    width: 1.5104167rem;
    padding-right:20px;
}
.propose-main-box li{
    list-style: none;
}
.propose-main-box h3{
    font-size: 32px;
    font-weight: 500;
    margin-top:20px;
}
.el-breadcrumb__inner.is-link:hover{
    color:#9c827d;
}
.propose-main-box{
    max-width: 7.7239583rem;
    margin: 0 auto;
}
.propose-Navigation{
    margin-top:20px;
    display: flex;
    justify-content: space-between;
}
.sort-box{
    display: flex;
    position: relative;
    cursor: pointer;
}
.sort-box img{
    width: 16px;
    height: 16px;
    cursor: pointer;
}
.el-breadcrumb__item{
    font-size: 14px;
}
.bottom-Second-Box{
    flex: 1;
    display: flex;
    justify-content: center;
}

</style>