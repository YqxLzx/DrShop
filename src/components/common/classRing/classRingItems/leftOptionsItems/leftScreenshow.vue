<template>
    <div v-if="show_ifscrren" class="left-screen-show">
        <h2>已选筛选</h2>
        <div @click="clickClearAll" class="clear-screen">全部清除</div>
        <div class="screen-box">
            <div v-if="showFiterNameText" class="screen-text">{{`按系列:${showFiterNameText}`}}</div>
            <div v-if="showFiterWeigtText" class="screen-text">{{`按重量(克拉):${showFiterWeigtText}`}}</div>
            <div v-if="showFiterShapeText" class="screen-text">{{`按形状:${showFiterShapeText}`}}</div>
            <div v-if="showFiterPriceText" class="screen-text">{{`按价格:${showFiterPriceText}`}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'leftScreenShow',
    data(){
        return{
            fiterText:'',
            fiterObj:Object
        }
    },
    computed:{
        showFiterNameText(){
            return this.$store.getters.showFiterNameText
        },
        show_ifscrren(){
            return this.$store.getters.show_ifscrren
        },
        showFiterWeigtText(){
            return this.$store.getters.showFiterWeigtText
        },
        showFiterShapeText(){
            return this.$store.getters.showFiterShapeText
        },
        showFiterPriceText(){
            return this.$store.getters.showFiterPriceText
        }
    },
    methods:{
        clickClearAll(){
            this.$store.commit('clearAllFiter')
            this.$bus.$emit('claearCheck',false);
            this.$bus.$emit('claearCheckInput',[null,false]);
        }
    }

}
</script>

<style>

.left-screen-show h2{
    margin-bottom: 15px;
}
.screen-text{
    display: inline-block;
    padding:6px 12px;
    border: 1px solid #6a6d72;
    white-space: nowrap;
    color: #22282d;
    font-size: 12px;
    margin-bottom: 8px;
    margin-right: 10px;
}
.left-screen-show{
    margin-top:30px;
    position: relative;
}
.clear-screen{
    font-size: 11px;
    position: absolute;
    right:0;
    top:0;
    line-height: 28px;
    cursor: pointer;
}
</style>