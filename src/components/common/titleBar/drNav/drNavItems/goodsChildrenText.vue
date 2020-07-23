<template>
    <div class="goods-children-item">
        <ul>
            <li @click="clickGoodsPrice(index)" :class="{add_fontsize:index==0 }" v-for="(item,index) in goodsChildrenItemLi" :key="index" >
                {{item}}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'goodsChildrenItem',
    data(){
        return{}
    },
    props:{
        goodsChildrenItemLi:{
            type:Array,
            default:function(){
                return ['我是空','我也是空']
            }           
        }
    },
    methods:{
        clickGoodsPrice(index){
            switch (index){
                case 0 :{
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice:0,
                        maxPrice:5000
                    })
                }
                break;
                case 1 :{
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice:5001,
                        maxPrice:10000
                    })
                }
                break;
                case 2 :{
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice:10001,
                        maxPrice:20000
                    })
                }
                break;
                case 3 :{
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice:20001,
                        maxPrice:50000
                    })
                }
                break;
                case 4 :{
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice:50000,
                        maxPrice:Infinity
                    })
                }
                break;
            }
        }
    }
}
</script>

<style>
.goods-children-item li{
    height: 0.09375rem;
    line-height:  0.09375rem;
    margin-bottom: 0.1041667rem;
    font-size:12px;
    color: #333333;
        cursor:pointer;
}
.goods-children-item li:hover{
    color:#22282d;
    font-weight: 800
}
.goods-children-item{
    text-align: left;
}
/*.jewellery-goods3-li{
    height: 12px;
    line-height:12px;
    margin-bottom: 0.0989583rem;
}*/
.goods-children-item .add_fontsize{
    font-size: 15px;
    font-weight: 600;
    cursor: text;
    color: #202020;
    padding-bottom:0.125rem;
    margin-bottom: 0;
    height:0.109375rem;
    line-height: 0.109375rem;
    white-space: nowrap;
}

</style>