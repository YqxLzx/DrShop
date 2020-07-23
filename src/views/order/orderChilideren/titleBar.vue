<template>
    <div class="order-title">
        <p @click="blackClass">返回购物</p>
        <div class="order-main-title">
            <h1>DR</h1>
            <el-steps process-status="wait" :align-center="true" space=100% :active="active" finish-status="success">
                <el-step title="购物车"></el-step>
                <el-step title="填写订单信息"></el-step>
                <el-step title="支付"></el-step>
            </el-steps>
            <h1>400-01-13520</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:1
        }
    },
    methods:{
        blackClass(){
            this.$router.push({path:'proposeRing'})
        }
    }
}
</script>

<style>
.el-steps{
    width: 3.125rem;
}
.order-title>p{
    position: absolute;
    right:1.5625rem;
    top:-.2083333rem;
    cursor: pointer;
    color: #9c827d;
    font-size: 12px;
}
.order-title{
    position: relative;
    margin:.4083333rem 0 0 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.03);
}
.order-main-title{
    background-color: #f6f7f9;
    width: 7.2083333rem;
    height: .4166667rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-main-title h1{
    font-size:.1510417rem;
    margin:0 .2041667rem;
}
</style>