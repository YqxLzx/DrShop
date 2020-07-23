<template>
    <div class="relative-buy">
        <div @click="clickGoShoppingBag">        
            <el-badge :hidden="merchandises.length===0" :value="merchandises.length" class="item">                    
                <img  src="~public/img/titleBar/buy.svg" />
            </el-badge>
        </div>
        <div class="title-buy-box">
            <div class="title-buy-small-box">
                <div v-if="ifLogin">
                    <div class="your-shop">您的购物袋中没有任何商品</div>
                    <div @click="clickLogin" class="no-login">登陆/注册账户</div>                            
                </div>
                <!--登陆后切换显示盒子-->
                <div v-else>                   
                    <div class="your-shop" v-if="merchandises.length===0">您的购物袋中没有任何商品</div>
                    <div v-else class="have-shop">
                        <div v-for="(item,index) in merchandises" :key="index" class="haves-box">
                            <img class="have-img" :src="item.img" />
                            <div class="have-shop">
                                <p>{{item.name}}</p>
                                <p>价格:{{item.price}}</p>
                                <p>数量:{{item.count}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="my-hope">我的心愿单</div>
                    <div class="my-has">我的订单</div>
                </div>
            </div>
            <div v-if="ifLogin"></div>
            <div v-else></div>
       </div>
    </div>  
</template>

<script>
export default {
    name:'buyItem',
    created(){
        const token = localStorage.getItem('token');
        if(token){
            this.ifLogin = false;
        }
    },
    data(){
        return{
            ifLogin:true,
            haveBuy:false,
            haves:1,
            haveShoppingBuy:[]
        }
    },
    mounted(){
        this.$bus.$on('sendHasloggin',data => {
            this.ifLogin = data;
        })

    },
    methods:{
        clickLogin(){
            this.$router.push({ path:'/login' });
        },
        clickGoShoppingBag(){
            this.$router.push({ path:'/shoppingBag' });
        }
    },
    computed:{
        merchandises(){
            return this.$store.state.shoppingBag.addMerchandises
        },

    }
}
</script>

<style>
.have-shop p{
    font-size: 13px;
    margin-top:10px;
}
.have-img{
    width: 80px;
    height: 80px;
    background-color: green;
    margin-right: 20px;
}
.haves-box{
    display: flex;
    margin-bottom: 15px;
}
.have-shop{
    font-size: 20px;
    min-height: 60px; 
}
.my-hops,.my-has{
    margin: 10px 0;
}
.your-shop{
    font-size: 20px;
    min-height: 60px;    
}
.no-login:hover{
    text-decoration:underline;
}
.title-buy-small-box div{
    opacity:0;
}
.title-buy-small-box{
    flex-wrap: wrap;
    position: relative;
    padding: 30px 20px 20px;
    background: #f2eded;
    box-sizing: border-box;
    min-height: 122px;
}
.title-buy-box{
    transform: scaleY(0);
    opacity: 0;
    transition: all 0.6s ease;
    transform-origin: top;
    position: absolute;
    padding-top: 20px;
    top:24px;
    left:-160px;
    width: 328px;
    height: 120px;
}
.relative-buy:hover .title-buy-small-box div{
    opacity:1;
}
.relative-buy:hover .title-buy-box{
    transform: scaleY(1);
    opacity: 1;
}
</style>