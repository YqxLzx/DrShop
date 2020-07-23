<template>
    <div class="relative-login" > 
        <div class="login-img">
            <img  src="~public/img/titleBar/mine.svg" />
            <div class="title-login-box"  >
                <div  v-if="ifLogin" class="title-login-small-box">
                    <div>
                        <div class="title-login-box-frist">拥有DR账户您将获得一下服务;</div>
                        <ul class="title-login-box-frist-ul">
                            <li>保存您的购物袋、心愿单等个人信息</li>
                            <li>查询购买记录</li>
                            <li>订单追踪以及售后服务</li>
                        </ul>  
                        <div class="title-login-btn">
                            <div class="title-login-relative">
                                <div class="title-login-btn-text" @click="clickLogin">登陆/注册</div>
                                <div class="title-login-btn-bgc"></div>
                            </div>                                    
                        </div>   
                    </div>
                </div>
                <!--登陆后切换显示盒子-->
                <div v-else class="haveLogged">
                    <ul class="haveLogged-ul">
                        <li>我的订单</li>
                        <li>我的心愿单</li>
                        <li>个人中心</li>
                    </ul>
                    <div @click="outLogin" class="go-out">退出</div>
                </div>
            </div>
        </div>   
    </div>
  
</template>

<script>
export default {
    name:'loginItem',
    data(){
        return{
            ifLogin:true,
        }
    },
    created(){
        const token = localStorage.getItem('token');
        if(token){
            this.ifLogin = false;
        }
    },
    mounted(){
        /*this.$bus.$on('sendHasloggin',data => {
            console.log(data);
            this.ifLogin = data;
        })*/
    },
    methods:{
        clickLogin(){            
            this.$router.push({ path: '/login' });
        },
        outLogin(){    
            //this.$http.get('logout');        
            this.ifLogin = true;
            localStorage.clear();
            console.log('我要退出了')
            this.$bus.$emit('sendHasloggin', this.ifLogin);
        }
    }

}
</script>

<style>
.haveLogged-ul li:hover{
    background: #9c827d;
}
.go-out{
    font-size: 14px;
    font-weight: 500;
    padding: 10px 10px 0 10px;
}
.haveLogged{
    min-width: 100px;
    padding:20px 0;
    white-space: nowrap;
    background: #f2eded; 
    z-index: 10; 
    position: relative;
}
.haveLogged li{
    list-style: none;
    padding:5px 10px;
}
.title-login-relative {
    border-radius:4px;
    position: relative;
    width:100%;
    height: 38px;
    line-height: 38px;
    background-color: black;
    color: white;
    text-align: center;
    border: 1px solid black;
}
.title-login-btn-text, .title-login-btn-bgc {
    position: absolute;
    left: 0;
    top: 0;
}
.title-login-btn-text {
    font-size: 18px;
    z-index: 10;
    width: 100%;
    box-sizing: border-box;
    border-left: 3px solid white;
    border-right: 3px solid white;
}
.title-login-btn-bgc {
    z-index: 0;
    width: 0;
    height: 38px;
    transition: all .5s linear;
}
.title-login-relative:hover > .title-login-btn-bgc {
    width: 100%;
    background-color:#9c827d;
}

.title-login-btn{
    position: absolute;
    bottom:20px;
    left: 50%;
    transform: translateX(-50%);
    color:white;
    width: 90%;
}
.title-login-small-box{
    position: relative;
    width: 218px;
    height: 154px;
    padding: 20px 16px;
    background: #f2eded; 
    z-index: 10;
}
.title-login-small-box ul{
    font-size:12px;
}

.title-login-small-box div{
    opacity: 0;
}
.title-login-box{
    position:absolute;
    top:22px;
    left: -30px;
    height:194px;
    padding-top:20px;
    transform-origin: center top;
    transform: scaleY(0);
    transition: all 0.6s ease;
    overflow: hidden;
    opacity: 0;
}
.title-login-box-frist{
    font-size: 15px;
    font-family:weiruanyahei;
}
.title-login-box  .title-login-box-frist-ul li {
    list-style-type: none;
    background: url("~public/img/titleBar/listyle.svg") ;
    text-indent: 2em;
    font-size: 12px;
    color: #6a6d72;
    margin: 10px 0;
    background-repeat:no-repeat;
    background-size:8px;
}
.login-img:hover .title-login-box {
    transform: scaleY(1);
    opacity: 1;
}
.login-img:hover .title-login-small-box div {
    opacity: 1;
} 

.login-img,.title-love,.relative-buy,.title-where{
    margin: 0 0.0937468rem;
    cursor: pointer;
    position: relative;
    z-index: 10;
}
</style>