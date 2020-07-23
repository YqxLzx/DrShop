<template >
    <!--验证码登陆盒子-->
    <form class="login-ipnut-form" v-if="showPassworOrPhoneCard">
        <div class="input-phoneNumber-box">
            <div   v-show="showPhoneNumber" class="input-show-phoneNumber">手机号码</div>
            <input @input="changeValue" oninput = "value=value.replace(/[^\d]/g,'')" v-model="inputPhoneNumber" @blur="blurPhoneNumber" @focus="focusPhoneNumber" class="input-phoneNumber" placeholder="手机号码"/>
            <p v-show="alretErr " class="err-p">*请输入正确的手机号码</p>
        </div>
        <div class="input-phoneCode-box">
            <input  @input="changeValue2" v-model="inputPhoneCode" oninput = "value=value.replace(/[^\d]/g,'')" @blur="blurPhoneCode" @focus="focusPhoneCode" class="input-phoneCode" placeholder="验证码"/>
            <div   v-show="showPhoneCode" class="input-show-phoneCode">验证码</div>
            <p v-show="alertErr2" class="err-p2">*验证码错误或为未同意注册协议</p>
            <span v-if="showSendCodeBtn" @click="clickSendCode" class="input-phoneCode-span">发送验证码</span>
            <span v-else class="input-phoneCode-span">已发送({{conuntDownNum}})</span>
        </div>
        <div class="login-passord-choose">
            <p @click="clickPasswordLogin" class="howLogin-p">使用密码登陆</p>
            <confirmBtn @click.native="clickConfirm" >
                <div  slot="slot-text">确定</div>
            </confirmBtn>
            <el-checkbox @change="clickCheckbox" v-model="checked" text-color="red" class="agreeDR" >同意Darry Ring 用户注册协议 和 隐私条款</el-checkbox>
            <div v-if="checked==false" class="no-checked-show1">!</div>
        </div>
        
    </form>   
</template>

<script>
import confirmBtn from 'common/somebtn/confirmBtn/confirmBtn'
export default {
    name:'numberLogin',
        components:{
        confirmBtn,
    },
     data(){
        return{
            showPhoneCode:false,
            showPhoneNumber:false,
            showPassworOrPhoneCard:false,
            inputPhoneNumber:null,
            inputPhoneCode:null,            
            alretErr:false,
            alertErr2:false,
            showSendCodeBtn:true,
            conuntDownNum:120,
            checked:true,
            noCheckdShow:false,
        }
    },
    mounted(){
        this.$bus.$on('sendNumbershow',res =>{
            this.showPassworOrPhoneCard = res;
            console.log(res)
        })
    },
    methods:{
        focusPhoneCode(){
            this.showPhoneCode = !this.showPhoneCode;
        },
        blurPhoneCode(){
            this.showPhoneCode = !this.showPhoneCode;
        },
        focusPhoneNumber(){
            this.showPhoneNumber = !this.showPhoneNumber;
        },
        blurPhoneNumber(){
            this.showPhoneNumber = !this.showPhoneNumber;
        },
        clickPasswordLogin(){
            this.showPassworOrPhoneCard = false;
            this.$bus.$emit('sendPassShow',true)
        },
        clickConfirm(){
            //验证手机号
            let phonenNumberRules = new RegExp(/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/);
            let phoneNumber_true = false; //手机号钥匙
            let code_true = false; //验证码钥匙
            
            if(!phonenNumberRules.test(this.inputPhoneNumber)){
                this.alretErr = true ;
            }else{
                phoneNumber_true = true;
                this.alretErr = false ;
            }
            //验证验证码
            if(this.inputPhoneCode == 123456 && this.checked){
                code_true = true;
            }else{
                this.alertErr2 = true;
            }
            if(phoneNumber_true && code_true){
                this.$router.push({path:'/home'});
                this.$http.post('register',{
                    phoneNumber:this.inputPhoneNumber
                    },{timeout: 1000,}
                )
            }
            
        },
        clickSendCode(){
            //验证手机号
            let phonenNumberRules = new RegExp(/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/);
            if(!phonenNumberRules.test(this.inputPhoneNumber)){
                this.alretErr = true ;
            }else{
                this.showSendCodeBtn = false;           
                let showCodeSet = setInterval(
                    () => {
                        this.conuntDownNum = this.conuntDownNum - 1;
                },
                1000);
                setInterval(
                    () => {
                        this.showSendCodeBtn = true;
                        clearTimeout(showCodeSet); 
                    },120000
                );

            }            

        },
        changeValue(){
            this.alretErr = false;
        },
        changeValue2(){
            this.alertErr2 = false;
        },
        clickCheckbox(){
            console.log(this.checked)
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
.no-checked-show1{
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
.input-show-phoneNumber,.input-show-phoneCode{
    position: absolute;
    top:0;
    transform: translateY(50%);
    left:30px;
    background-color: #f2eded;
    padding: 0 5px;
}
.input-phoneNumber-box ,.login-passord-choose{
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

.input-phoneCode-box{
    position: relative;
}
.input-phoneCode-span{
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
.login-ipnut-form{
    display: flex;
    flex-direction: column;
    margin-top:.15625rem;
}
.input-phoneNumber,.input-phoneCode{
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