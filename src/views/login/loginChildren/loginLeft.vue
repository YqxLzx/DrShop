<template>
    <div class="login-left">
        <h3 class="login-left-title">微信登陆</h3>
        <img class="login-left-VX-img" src="~public/img/login/vx.jpg" />
        <div class="chosse-login-box">
            <p>第三方登陆</p>
            <img src="~public/img/login/qq.svg" />
            <img src="~public/img/login/weibo.svg" />
            <img src="~public/img/login/zhifubao.svg" />
        </div>
    </div>
</template>

<script>
export default {
    name:'loginLeft',
}
</script>

<style>
.login-left-VX-img{
    min-width: 288px;
    min-height: 288px;
}
.login-left{
    height:2.479167rem;
    /*padding-right:.8333333rem;
    border-right:solid 1px gray;*/
    padding-right:.5520833rem;
    padding-left:.5520833rem;
}
.chosse-login-box{
    display: flex;
    position: relative;
    justify-content: space-between;
}
.login-left img{
    width: 1.3020833rem;
    height: 1.3020833rem;
    margin-bottom: 30px;
}
.chosse-login-box img{
    width: 22px;
    height: 22px;
}
.login-left-title{
    text-align: left;
    font-size: 24px;
    font-weight:500;
    margin-bottom:.30625rem;
}
</style>