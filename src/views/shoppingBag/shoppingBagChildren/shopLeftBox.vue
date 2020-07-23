<template>
<div>
    <div v-if="addMerchandises.length>0" id="left-shopping-box">
        <div class="left-titel">
            <div class="title-box-flex">
                <h2 >购物袋</h2>
                <p class="shoppingBag-num">共{{addMerchandises.length}}类商品</p>
            </div>
            <div  class="title-box-flex">
                <p class="shoppingBag-num">已选{{checkedBox}}件</p>
                <el-checkbox v-model="checkeds" @change="changeChieckd">全选</el-checkbox>
            </div>
        </div>
        <div :class="{'add_left-mid-box-shoppig':index !=0 ? true:false}" class="left-mid-box-shopping" v-for="(item,index) in addMerchandises" :key="index">
            <div class="shopping-img">
                <img :src="item.img"/>
            </div>
            <div class="shopping-parmes">
                <h3>{{item.name}}</h3>
                <p>{{item.price}}元</p>
                <ul class="ops-item">
                    <li>主钻:   {{item.chooseScience}}</li>
                    <li>材质:   {{item.chooseMainRing}}</li>
                    <li>尺寸:   {{item.ringSize}}</li>
                    <li>刻字内容 {{item.carving}}</li>
                </ul>
                <div class="shopping-bottom">
                    <div  class="shopping-bottom-box">
                        <div class="shopping-bottom-box">
                            <img src="~public/img/other/love.svg" />
                            <div>加入心愿单</div>
                        </div>
                        <div @click="clickDel(index)" class="shopping-bottom-box">
                            <img src="~public/img/other/del.svg"  />
                            <div>删除</div>
                        </div>                
                    </div>
                    <input type="checkbox"  :checked="item.checked" @click="changeCheckedDel(index)" />
                </div>
                <div class="shop-count">数量:{{item.count}}</div> 
            </div>
        </div>
    </div>
</div> 
</template>

<script>
 //import { mapState } from 'vuex'
 import { mapActions } from 'vuex'
export default {
    data() {
      return {
        checkeds: true,
        
      }
    },
    props:{
        propsChecked:{
            type:Boolean
        }
    },
    computed:{
        addMerchandises(){
            return  this.$store.state.shoppingBag.addMerchandises
        },
        checkedBox(){
           return this.$store.state.shoppingBag.addMerchandises.filter(item => item.checked === true ).length
        }
    },
    methods:{  
        getParam(obj){  
            return localStorage.getItem(obj)  
        }, 
        ...mapActions(['checked','chooseScience']),
        //全选按钮点击
        changeChieckd(){
            for(var i = 0 ; i < this.addMerchandises.length;i++){
                this.$set(
                    this.addMerchandises,
                    i,
                    Object.assign(
                    this.addMerchandises[i], 
                    {
                        checked: this.checkeds
                    }
              ))
            }
            console.log(this.$store.state.shoppingBag.addMerchandises[0].checked)           
        },
        //商品按钮点击
        changeCheckedDel(index){
            this.$store.commit('isChecked',index);
            this.checkeds = this.$store.state.shoppingBag.addMerchandises.every(item => item.checked === true)           
        },
        //删除商品
        clickDel(index){
            this.$store.state.shoppingBag.addMerchandises.splice(index,1)
        }
        
    },

}
</script>

<style>

.shop-count{
    position: absolute;
    bottom: -.1041667rem;
    right: 0;
}
.el-checkbox__inner:hover{
    border: 1px solid rgb(96,56,17);
}
.shopping-bottom-box img{
    margin-right: 10px;
}
.shopping-bottom-box{
    display: flex;
    margin-right: .078125rem;
    cursor: pointer;
    white-space: nowrap;
}
.shopping-bottom{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.ops-item li{
    padding: .0260417rem .0520833rem .0520833rem 0;
    font-size: .0833333rem;
    
}
.shopping-parmes h3{
    font-size: .1145833rem;
    white-space: nowrap;
}
.shopping-parmes{
    width: 60%;   
    position: relative;
    height:  1.3020833rem;
}
.shopping-parmes p{
    margin:10px 0;
    font-size: .125rem
}
.ops-item{
    margin:.1041667rem 0 .3385417rem 0;
    list-style: none;
    column-count:2;
}
.shopping-img{
    width:  1.3020833rem;;
    height:  1.3020833rem;
    background-color: green;
}
.shopping-img img{
   width: 100%;
   height: 100%; 
}
#left-shopping-box{
    width: 3.6941667rem;
    margin-right: .15625rem;
}
.title-box-flex{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
.left-titel{
    display: flex;
    justify-content: space-between;
}
.shoppingBag-num{
    margin: 0 10px;
    font-size: 14px;
}
.left-mid-box-shopping{
    margin-top:30px;
    padding: 40px 0;
    border-bottom:solid 1px gray;
    border-top:solid 1px gray;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.el-checkbox__input.is-checked+.el-checkbox__label,.el-checkbox__input.is-indeterminate .el-checkbox__inner,.el-checkbox__input.is-focus
{
    color:rgb(96,56,17)
}
.el-checkbox__input.is-checked .el-checkbox__inner{
background-color: rgb(96,56,17);
    border-color: rgb(96,56,17);
}
.add_left-mid-box-shoppig{
    border-top: none;
    margin-top:0;
}
@media screen and (max-width: 800px) {
    .left-mid-box-shopping {
        height: 120px;
    }
    .shop-count{
        top:0;
    }
}
</style>