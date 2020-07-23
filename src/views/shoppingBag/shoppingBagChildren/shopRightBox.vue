<template>
    <div class="shopbag-right-box shopRightBox">
        <h2>订单信息</h2>
        <div class="price-right-box">
            <div class="flex-price-right-box">
                <p>小结:</p><p class="price-1">{{lastPrice}}</p>
            </div> 
        <div class="flex-price-right-box">
                <p>运费:</p><p class="price-1">0元</p>
            </div> 
        </div>
        <div class="addprice">
            <p class="add-price">总计</p>
            <p class="how-much">￥{{lastPrice}}</p>
        </div>
        <confirmBtn @click.native="goOrder">
             <div slot="slot-text" >去结算</div>
        </confirmBtn>
    </div>
</template>

<script>
 //import { mapState } from 'vuex'
import confirmBtn from 'common/somebtn/confirmBtn/confirmBtn'
export default {
    name:'shopbagright',
    data(){
        return{
            addLastPrice:0
        }
    },
    components:{
        confirmBtn
    },
    methods:{
        goOrder(){
            this.$router.push({path:'Order'})
        }
    },
    computed: {
     /*...mapState({
          addMerchandises: state => state.shoppingBag.addMerchandises
     }),*/
    lastPrice() {
        return this.$store.state.shoppingBag.addMerchandises.reduce((total, item) => {
            return total + (item.checked? item.price*item.count : 0);
           }, 0);
     }
}
   /* created(){
        let priceAdd = this.$store.state.shoppingBag.addMerchandises.every(item => item.checked === true);
        console.log(this.$store.state.shoppingBag.addMerchandises)
        console.log(priceAdd)
        this.addLastPrice =  priceAdd.map(item => item.price+=item.price) 
        console.log(this.addLastPrice)        
    }*/
}
</script>

<style>
.shopRightBox{
    position:sticky ;
    top:50px;
}
.flex-price-right-box{
    display: flex;
    justify-content: space-between;
}
.add-price{
    font-size: .140625rem;
    font-weight: 600;
}
.shopbag-right-box #confirm{
    margin-top:.2604167rem;
    position: initial;
}
.shopbag-right-box .confirm{
    width:2.7083333rem;
}
.shopbag-right-box .confirm-bgc{
    background-color: black;
    color: #fff;
}

.how-much{
    font-size: .1302083rem
}
.addprice{
    margin-top:.15625rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.price-right-box p{
    text-align: right;
    margin-bottom: 15px;
    font-size: 11px;
    color:gray;
}
.price-right-box{
    padding: .3645833rem 0 .2604167rem 0;
    border-bottom: solid 1px gray;
}
.shopbag-right-box{
    padding:20px 30px 40px 30px;
    background-color: #f2eded;
    width: 2.7083333rem;
    max-height: 2.6041667rem;
    margin-left:40px;
    margin-top:54px;
}
</style>