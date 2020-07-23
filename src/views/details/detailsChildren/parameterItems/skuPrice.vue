<template>
    <div id="sku-buy-item">
        <div class="sku-price-box">
            <h2 class="sku-price">{{propsePrice + lastAddPrice}}</h2>
            <p class="sku-other-ring">再看看其他钻石</p>
        </div>
        <div class="sku-price-btns-box">
            <div class="sku-price-btns">
                <confirmBtn class="sku-buy-btns">
                    <div slot="slot-text" >立即购买</div>
                </confirmBtn>
                <confirmBtn class="sku-buyBox-btn"  @click.native="goShoppingBag();open2()">
                    <div slot="slot-text" >放入购物袋</div>
                </confirmBtn>
                <confirmBtn class="sku-will-btn">
                    <div slot="slot-text" >预约试戴</div>
                </confirmBtn>
            </div>
        </div>
        <p>配送说明：预计20个工作日送达(限大陆地区),如需加急或者其他地区请咨询客服。</p>
    </div>
</template>

<script>
import confirmBtn from 'common/somebtn/confirmBtn/confirmBtn'
export default {
    name:'price',
    data(){
        return{
            chooseItem:{
                price:0,
                skuName:5,
            }
        }
    },
    props:{
        propsePrice:{
            type:Number
        },
        propsCommodity:{
            type:Object
        }
    },
    mounted(){
        this.$bus.$on('chooseSku',palyload => {
            this.chooseItem.price = palyload.price;
            this.chooseItem.skuName = palyload.name;
            console.log(this.chooseItem)
        })
    },
    methods:{
        setParam(name,value){  
            localStorage.setItem(name,value)  
        },
        //添加至购物车
       goShoppingBag(){
            this.$router.push({path:'/shoppingBag'});
            //this.$store.commit('goShoppingBag',this.propsCommodity)
            this.setParam('shop',this.propsCommodity)
            /*await this.$http.post('toShoppingBag',{
                user:localStorage.getItem('token'),
                obj:this.propsCommodity
            })
            console.log(localStorage.getItem('token'))*/
            this.$store.dispatch('addMongod',this.propsCommodity)
        },
        //消息提示
        open2() {
            this.$message({
            message: '添加至购物车成功',
            type: 'success'
        });
      },
    },
    components:{
        confirmBtn
    },
    computed:{
        lastAddPrice(){
            return this.$store.getters.lastAddPrice
        }
    }
}
</script>

<style>
.sku-price-btns-box{
    height:.78125rem;
}
#sku-buy-item .sku-buyBox-btn {
    background-color: #eaeaea;
}
#sku-buy-item .sku-buy-btns{
    background-color: black;
    color: #fff;
}
.sku-buyBox-btn .confirm-bgc{
    background-color: black;
    color: #fff;
}
.sku-buyBox-btn{
    position: absolute;
    left: 1.40625rem;
}
.sku-will-btn .confirm{
    width: 2.725rem;
}
.sku-will-btn .confirm-bgc{
    background-color: black;
    color: #fff;
}
.sku-will-btn{
    position: absolute;
    top:.4166667rem;
}
.sku-price-btns{
    position: relative;
}
.sku-other-ring{
    line-height: 37px;
    cursor: pointer;
}
.sku-price-box{
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px
}
.sku-price{
    font-size:28px
}
</style>