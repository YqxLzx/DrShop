<template>
    <div class="goods-children-frist">
        <div class="goods-children-frist-Mainbox" v-if="ringSeries.length">
            <ul class="goods-children-frist-Leftobox">
                <div class="class-series">按系列</div>
                <li v-for="(item,index) in ringSeries" :key="index" @click="clickGoodsSeriesLi(index)" @mouseenter="enterGoodsSeriesLi(index)">
                    <div class="goods-children-frist-Leftobox-img"><img :src="item.seriesring.img"/></div>
                    <div class="goods-children-frist-Leftobox-name">{{item.seriesring.name}}</div>
                </li>
            </ul> 
            <div class="goods-children-frist-Rightbox">
                <div  class="big-ring-show-box"><img  :src="ringSeries[activeIndex].seriesring.bigImg" class="big-ring-show"/></div>
                <p class="goods-children-frist-Rightbox-name"  >{{ringSeries[activeIndex].seriesring.name}}</p>
                <p class="goods-children-frist-Rightbox-describe"  >{{ringSeries[activeIndex].seriesring.describe}}</p>
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'goodsChildrenFrist',
    data(){
        return{
            activeIndex:0 
        }
    },
    props:{
        ringSeries:{
            type:Array,
        },

    },
    methods:{
        enterGoodsSeriesLi(index){
            this.activeIndex = index;
            console.log(this.ringSeries);
        },
        clickGoodsSeriesLi(index){
            this.$store.commit('fiterName',this.ringSeries[index].seriesring.name);
            this.$router.push({path:'/proposeRing'});
        }
    },

}
</script>

<style>
.goods-children-frist-Leftobox-img{
    width: 70px;
    height: 70px;
}
.goods-children-frist-Leftobox-name{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
}
.class-series{
    position: absolute;
    top:-.25rem;
    left:15px;
    margin-bottom:10px;
    height: 20px;
    line-height: 20px;
    font-size: 15px;
    font-weight: 800;
}
.goods-children-frist-Leftobox{
    width: 17vw;
    display: flex;
    flex-wrap: wrap;
    max-width: 17vw;
    min-width: 300px;
    height: auto;
    margin-right: .3125rem;   
    align-content: flex-start;
    position: relative;
}
.goods-children-frist-Leftobox li{
    flex: 0 0 33%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow:0;
    align-content:flex-start;
    margin-bottom: .234375rem;
    cursor:pointer;
}
.goods-children-frist-Rightbox{
    max-width: 1.4583333rem;
    height: auto;
}
.goods-children-frist-Rightbox-name{
    color: rgb(17, 16, 16);
    font-weight: 800;
    font-size: 17px;
    height: 24px;
    line-height: 24px ;
    margin: 0.125rem 0 0.0416667rem 0;
}
.goods-children-frist-Rightbox-describe{
    word-wrap:break-word;
    text-align: left;
    max-width: 277.5px;
    min-height: 80px;
    line-height:18px;
    font-size: 12px;
    margin-bottom: 0.0833333rem;
}
.goods-children-frist{
    width: 50%;
    height: auto;
    padding-right: 0.2916667rem;
    padding-left:0.78125rem;
    padding-top:.25rem;
    border-right: solid 1px gray;
}
.goods-children-frist-Mainbox{
    display: flex;
    justify-content: flex-end;
}
.big-ring-show{
    cursor:pointer;
    width: 100%;
    height: 100%;
}
.big-ring-show-box{
    width: 1.4583333rem;
    height: 1.09375rem;   
}
</style>