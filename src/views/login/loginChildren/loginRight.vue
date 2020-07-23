<template>
    <div class="login-right">
        <h2>账号登陆</h2>
        <slot  name="number-login"></slot>
        <slot  name="passWodr-login"></slot>
        <!--
        <form class="login-ipnut-form" v-else>             
            <div class="input-phoneNumber-box">
                <div   v-show="showPhoneNumber" class="input-show-phoneNumber">手机号码</div>
                <input  class="input-phoneNumber" placeholder="邮箱地址或手机号码"/>
            </div>
            <div class="input-phoneCode-box">
                <input  class="input-phoneCode" placeholder="密码"/>
            </div>                           
            <div class="login-passord-choose">
                <div   v-show="showPhoneCode" class="input-show-phoneCode">验证码</div>
                <p class="howLogin-p" @click="clickPasswordLogin">使用手机验证码登陆</p>
                <p class="forgetPassword">忘记密码?</p>
                <confirmBtn>
                    <div slot="slot-text">确定</div>
                </confirmBtn>
                <p class="will-register">还有有DR账号?点击这里</p>
                <el-checkbox  text-color="red" class="agreeDR" >同意Darry Ring 用户注册协议 和 隐私条款</el-checkbox>
            </div>           
        </form>
        -->
    </div>
</template>

<script>

export default {
    name:'loginRight',
    data(){
        return{
            
        }
    },

   
}
</script>

<style>


</style>       