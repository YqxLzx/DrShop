<template>
    <div>
        <!--切换显示密码登陆盒子-->
        <form class="login-ipnut-password-form" v-if="isshowFormPassword">
            <div class="input-EmOrPhoneNum-box">
                <div v-show="ifShowNumber" class="input-show-EmOrPhoneNum">手机号</div>
                <input v-model="form.inputNumberOrEm" @input="isShowNumber" @blur="blurwNumber" class="input-EmOrPhoneNum" placeholder="手机号"/>
                <p v-show="numberErr" class="err-p">*密码或账号错误</p>
            </div>
            <div class="input-passWord-box">
                <input @input="isShowPassword" type="password" @blur="blurPassword" v-model="form.inputPassword" class="input-passWord" placeholder="密码"/>
                <div  v-show="ifShowPassword"  class="input-show-passWord">密码</div>
                <p v-show="passwordErr" class="err-p2">*密码或账号错误</p>
            </div>
            <div class="login-passord-choose">
                <p class="howLogin-p" @click="clickUseNumber">使用手机验证码登陆</p>
                <p class="forgetPassword">忘记密码?</p>
                <p class="will-register" @click="clickRegister">还没有DR账号?点击这里</p>
                <confirmBtn @click.native="clickBtn" >
                    <div  slot="slot-text">确定</div>
                </confirmBtn>
                <el-checkbox  v-model="checked" text-color="red" class="agreeDR" >同意Darry Ring 用户注册协议 和 隐私条款</el-checkbox>
                <div v-if="!checked" class="no-checked-show2">!</div>
            </div>           
        </form>
    </div>
</template>

<script>

import confirmBtn from 'common/somebtn/confirmBtn/confirmBtn'
export default {
    name:'loginPassword',
    components:{
        
        confirmBtn
    },
    data(){
        return{
            isshowFormPassword:true,
            form:{
                inputNumberOrEm:'',
                inputPassword:''
            },
            ifShowNumber:false,
            ifShowPassword:false,
            numberErr:false,
            passwordErr:false,
            agrre:false,
            checked:false,
            ol:''

        }
    },
    mounted(){
        this.$bus.$on('sendPassShow',res =>{
            this.isshowFormPassword = res;
        })
    },
    methods:{
        clickUseNumber(){
            this.isshowFormPassword =false;
            this.$bus.$emit('sendNumbershow',true);
        },
        isShowNumber(){
            this.ifShowNumber = true;
        },
        blurwNumber(){
            this.ifShowNumber =false;
        },
        isShowPassword(){
            this.ifShowPassword = true;
        },
        blurPassword(){
            this.ifShowPassword =false;
        },
        clickBtn(){
            /*this.$http.post('login',{
                    phoneNumber:this.form.inputNumberOrEm,
                    password:this.form.inputPassword
                }).then(res =>{
                    console.log(res)
                })*/
            console.log('输入完成想跳转')      
                this.$http.post('login',{
                    phoneNumber:this.form.inputNumberOrEm,
                    password:this.form.inputPassword
                }).then(res =>{
                    var status = res.status                   
                    localStorage.setItem('token', res.data.data);
                    localStorage.setItem('token_exp', new Date().getTime());
                    console.log(res)
                    if(status === 200 &&  this.checked) {              // if checked !!!!!!!                   
                        this.$message({
                        message: '登录成功',
                        type: 'success'
                        });           
                        localStorage.setItem('token',res.data.data);
                        localStorage.setItem('token_exp', new Date().getTime()); 
                        this.$router.push('/home')
                    }else if( status === 201) {
                            this.$message.error(res.data.msg);
                    }else if(status === 200 ){
                        this.$message.error('还未同意注册协议');
                    }
                               
                    } 
                )
                       
        },
        clickRegister(){
            this.$bus.$emit('willRegister',true)
        }

    }
    
}
</script>

<style>
.will-register{   
    margin:15px 0 0px 0;
    cursor: pointer;
    display: inline-block;
}
.no-checked-show2{
    position: absolute;
    color:red;
    bottom: -132px;
    left: -10px;
    font-size: 20px;
}
.err-p2{
    position: absolute;
    bottom:-8px;
    left:0;
    color:red;
}
.err-p{
    position: absolute;
    bottom:-8px;
    left:0;
    color:red;
}
.forgetPassword{
    cursor: pointer;
    position: absolute;
    right:10px;
    top:15px;
    color:#9c827d;
}
.howLogin-p{
    cursor: pointer;
    margin-top:15px;
}
.input-show-EmOrPhoneNum,.input-show-passWord{
    position: absolute;
    top:0;
    transform: translateY(50%);
    left:30px;
    background-color: #f2eded;
    padding: 0 5px;
}
.input-EmOrPhoneNum-box ,.login-passord-choose{
    position: relative;
}
.login-right{
    min-width: 288px;
     height:2.479167rem;;
    padding-left: .68125rem;
    
}
.el-checkbox__input.is-checked+.el-checkbox__label{
    color:black;
}
.el-checkbox__input.is-checked .el-checkbox__inner{
    background-color:#4d3900;
    border-color: #4d3900;
}
.agreeDR{
    position: absolute;
    bottom: -.6764583rem; 
    left:0;  
}

.login-right #confirm{
    bottom: -.5364583rem;
    width: 1.9375rem;
    margin-bottom:15px;
}
.login-right .confirm-btn{
    background-color:black;
    color: #fff;
}
.login-right .confirm {
    width: auto;
}

.input-passWord-box{
    position: relative;
}
.input-passWord-span{
    position: absolute;
    right:.078125rem;
    top:50%;
    transform: translateY(-50%);
    font-size: .0729167rem;
    cursor: pointer;
}
.login-right h2{
    font-size: 24px;
    font-weight: 500;
}
.login-ipnut-password-form{
    display: flex;
    flex-direction: column;
    margin-top:.15625rem;
}
.input-EmOrPhoneNum,.input-passWord{
    border: solid 1px gray;
    height: 55px;
    padding-left:20px;
    outline-style: none;
    border-radius: 0;
    width:340px;
    background-color:transparent;
    margin:15px 0;
}
</style>