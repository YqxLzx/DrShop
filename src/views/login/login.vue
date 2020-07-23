<template>
    <div id="login-view">
        <titleBar class="login-view-titleBar"/>
        <div class="login-main">
            <register v-if="showRegister"/>
            <div v-else class="login-main-box">               
                <loginLeft/>
                <div class="login-main-box-span"></div>
                <loginRight>
                    <numberLogin slot="number-login"/>
                    <passWodrLogin   slot="passWodr-login"/>                   
                </loginRight>      
            </div>
        </div>
    </div>
</template>

<script>
import titleBar from 'common/titleBar/titleBar'
import loginLeft from './loginChildren/loginLeft'
import loginRight from './loginChildren/loginRight'
import passWodrLogin from './loginChildren/loginRightItems/passWordLogin'
import numberLogin from './loginChildren/loginRightItems/numberLogin'
import register from '../register/register'
export default {
    name:'login',
    components:{
        titleBar,
        loginLeft,
        loginRight,
        passWodrLogin,
        numberLogin,
        register
    },
    mounted(){
        this.$bus.$on('okhave',res => {
            this.showRegister = res;
        });
        this.$bus.$on('willRegister',data => {
            this.showRegister = data;
        });
        
    },
    data(){
        return{
            showRegister:false,
        }
    }


}
</script>

<style>
#login-view .login-view-titleBar{
   min-width: 1080px;
}
.login-main-box-span{
    width: 1px;
    height: 1.0116667rem;
    background-color: gray;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
}
.login-main-box{
    
    padding: .546875rem 2.1354167rem 0 2.1354167rem;
    flex: 1;
    position: relative;
    display: flex;
    justify-content:space-between;
    align-items: center;
    
}
.login-main{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 166px);
    background: url('~public/img/login/login-bg.png') no-repeat 50%;
    background-size: cover;  
    display: flex;
    justify-content: space-between;
    min-width: 1080px;
}


</style>