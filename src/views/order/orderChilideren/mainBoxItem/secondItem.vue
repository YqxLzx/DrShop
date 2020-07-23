<template>
    <div>
        <div class="sure-shop">
            <h2>确认商品信息</h2>
            <span>{{addMerchandises.length}}件</span>
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
                    <li>数量：  {{item.count}}</li>
                </ul>
                <p>定制周期 20个工作日内（付款完成后)</p>
                <div class="block">
                    <el-date-picker
                    v-model="hopeData1"
                    type="date"
                    placeholder="希望的收获日期">
                    </el-date-picker>
                </div>
                <p class="hope-data">*期望收货日期不能早于2020-08-20，不能晚于2020-11-18</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hopeData1:''
        }
    },
    computed:{
        addMerchandises(){
            return  this.$store.state.shoppingBag.addMerchandises
        },
    }
}
</script>

<style scoped>
.el-date-editor.el-input{
    width: 1.1458333rem;
}
.ops-item{
    margin:.1041667rem 0 .0385417rem 0;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
}
.ops-item li{
    padding: .0260417rem .0520833rem .0520833rem 0;
    font-size: .0733333rem;
    color:gray;
    white-space: nowrap;
}
.shopping-parmes h3{
    font-size: .1145833rem;
    white-space: nowrap;
}
.shopping-parmes{
    margin-left:20px;
    width: 2.6041667rem;   
    position: relative;
    height:  1.3020833rem;
}

.shopping-parmes p{
    margin:10px 0;
    font-size: .125rem
}
.shopping-parmes .hope-data{
    font-size:11px;
    color: gray;
    white-space: nowrap;
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
.left-mid-box-shopping{
    background-color: #f6f7f9;
    margin-top:30px;
    padding: 40px 0;
    border-bottom:solid 1px gray;
    border-top:solid 1px gray;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.add_left-mid-box-shoppig{
    border-top: none;
    margin-top:0;
}
.sure-shop{
    display: flex;
    justify-content:space-between;
    margin:20px 0;
}
.shop{
    padding: 20px;
    
}
@media screen and (max-width: 900px) {
    .left-mid-box-shopping {
        height: 180px;
    }
}
</style>