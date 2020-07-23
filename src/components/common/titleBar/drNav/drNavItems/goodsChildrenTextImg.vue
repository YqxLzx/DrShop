<template>
    <div class="goods-children-item-textimg">
        <div class="goods-children-item-center-box">
            <div class="goods-children-item-headerText">{{TextImg.headText}}</div>
            <ul>
                <li @click="clickShapeLi(index)" v-for="(item,index) in TextImg.goodsTextImg" :key="index" >
                    <img class="goods-children-img-margin" :src="item.src" />
                    <div>{{item.text}}</div>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'goodsChildrenItemTextimg',
    data(){
        return{
        }
    },
    props:{
        TextImg:{
            type:Object,
        }
    },
    methods:{
        clickShapeLi(index){
            this.$store.commit('fiterShape',this.TextImg.goodsTextImg[index].text);
            this.$router.push({path:'/proposeRing'});
        
        }
    }
}
</script>

<style>
.goods-children-img-margin{
    margin-right:10px;
}
.goods-children-item-textimg{
    text-align: left;
}
.goods-children-item-center-box{
    margin: 0 auto;
}
.goods-children-item-center-box h4{
    padding-bottom: 0.125rem;
    height: 0.109375rem;
    line-height:  0.109375rem;
}
.goods-children-item-center-box li:hover{
    color: #9c827d;
}
.goods-children-item-center-box li{
    display: flex;
    flex-wrap: nowrap;
    font-size: 12px;
    height:0.09375rem;
    line-height: 0.09375rem;
    margin-bottom: 0.1041667rem;
    cursor:pointer;
}

.goods-children-item-headerText{
    font-size: 15px;
    font-weight: 600;
    cursor: text;
    color: #202020;
    padding-bottom: 0.125rem;
    margin-bottom: 0;
    height: 0.109375rem;
    line-height: 0.109375rem;
}

</style>