<template>
    <div class="reservation-btn">
        <img class="reservation-btn-triangle" src="~public/img/titleBar/triangle.svg" :class="{isActive:activeCitysWhere}" />
        <span class="reservation-btn-location"  @click="clickCityWhere" >{{cityName}}</span>
        <img class="reservation-btn-where"  src="~public/img/titleBar/where.svg" />
        <div v-if="!shopName" class="reservation-btn-whereShow" @click="clickShopWhere">查找附件的DR商店</div>
        <div v-else class="reservation-btn-whereShow" @click="clickShopWhere">{{shopName}}</div>
        <div :class="{'isActive-CitysWhere':activeCitysWhere}" class="reservation-show-CitysWhere">
            <ul>
                <li v-for="(item,index) in citys" :key="index" @click="clickCitiy(index)">
                    <p>{{item.citys_Shop.city}}</p>
                </li>
            </ul>
        </div>
        <div :class="{'isActive-CitysWhere':activeshopsWhere}" class="reservation-show-shopsWhere">
            <ul>
                <li v-for="(item,index) in citysShop" :key="index" @click="clickShop(index)">
                    <p>{{item}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'reservationBtn',
    data(){
        return{
            activeCitysWhere:false,
            activeshopsWhere:false,
            citys:[],
            citysShop:[],
            cityName:'',
            shopName:''
        }
    },
    methods:{
        //选择地点
        async clickCityWhere(){
            this.activeCitysWhere = !this.activeCitysWhere;
            const{data:res} = await this.$http.get('citysShop')
            this.citys = res.ret;
            console.log(this.citys)
        },
        clickShopWhere(){
           this.activeshopsWhere = !this.activeshopsWhere;

        },
        //选择具体地点并赋值
        clickCitiy(index){
            this.cityName = this.citys[index].citys_Shop.city ;
            this.activeCitysWhere = false;
            this.citysShop = this.citys[index].citys_Shop.Shops;
            this.shopName = null;

        },
        clickShop(index){
            this.shopName = this.citysShop[index]
            this.activeshopsWhere=false;
        }
    }
}
</script>

<style>
.reservation-show-shopsWhere li:hover{
    background-color:gray;
}
.reservation-show-CitysWhere li:hover{
    background-color:gray;
}
.reservation-show-CitysWhere li,.reservation-show-shopsWhere li{
    font-size: 14px;
    height: 32px;
    color: #22282d;
    cursor: pointer;
    padding:0 16px;
    line-height: 32px;
    text-align: left;
    list-style: none;
    
}
.reservation-show-CitysWhere,.reservation-show-shopsWhere{
   padding: .0520833rem 0 .1041667rem 0;
   width: 100%;
   height: 1.25rem;
   position: absolute;
   top:.1875rem;
   left:0;
   transition: all 0.5s ease;
   transform: scaleY(0);
   background: #ded1cf;
   visibility: hidden;
   transform-origin:top;
   z-index: 99;
}
.reservation-btn-whereShow{
    width: 1.5625rem;
    position: absolute;
    height: 16px;
    left:.5208333rem;
    top:25%;
    cursor: pointer;
    color: #22282d;
    text-align: left;
    font-size: .0729167rem;
}
.reservation-btn{
    margin: .2916667rem auto 0 ;
    width: 2.1354167rem;
    padding: .0520833rem;
    border-bottom: 1px solid #22282d;
    position: relative;
    height: 16px;
}
.reservation-btn img{
    width: 16px;
    height: 16px;
}
.reservation-btn-triangle{
    position: absolute;
    right:.0520833rem;
    top:25%;
    cursor: pointer;
    transition: all 0.5s ease;
    transform: rotate(0);
}

.reservation-btn-where{
    position: absolute;
    left:.0520833rem;
    top:25%;
    cursor: pointer;
}
.reservation-btn-location{
    position: absolute;
    left:.1822917rem;
    top:25%;
    font-weight: 600;
    cursor: pointer;
    width: .3125rem;
    height: 16px;
}
.isActive{
    transform: rotate(180deg);
}
.isActive-CitysWhere{
    transform: scaleY(1);
    visibility:visible;
}
</style>