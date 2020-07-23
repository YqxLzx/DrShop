<template>
    <div class="regiser"> 
        <h2>注册用户</h2>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号码"  prop="numOrEm">
                <el-input  v-model="ruleForm.numOrEm" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="昵称" >
                <el-input   v-model="ruleForm.nickName"></el-input>
            </el-form-item>            
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码" prop="idCard">
                <el-input v-model.number="ruleForm.idCard"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="clickBackBtn">返回登录页面</el-button>
            </el-form-item>           
        </el-form>
    </div>
</template>

<script>
export default {
    name:'register',
    data() {
      let IdcardRules = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
      var checkIDCard = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('身份证不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值(末尾可具有X)'));
          } else {
            if (!IdcardRules.test(value)) {
              callback(new Error('请输入正确的身份证格式'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
       let phonenNumberRules = new RegExp(/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/);
       var checkNumOrEm = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!phonenNumberRules.test(value)) {
            callback(new Error('请输入正确的手机号'))
          } else {
              callback();
            }
          
        }, 1000);
      };

      let passwordRules = new RegExp(/^.{6,12}$/);
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        if(!passwordRules.test(value)){
            callback(new Error('请输入6—12位的密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          goHome_time:3,
          pass: null,
          checkPass: null,
          idCard:null,
          nickName:null,
          numOrEm:null,
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          idCard: [
            { validator: checkIDCard, trigger: 'blur' }
          ],
          numOrEm:[
              {
                validator: checkNumOrEm, 
                trigger: 'blur'  
              }
          ]
        },        
      }
      
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('register',{
            phoneNumber:this.ruleForm.numOrEm,
            idCard:this.ruleForm.idCard,
            nickName:this.ruleForm.nickName,
            password:this.ruleForm.pass
        }).then(res => {
            var status = res.status
            switch(status){
              case 200 :{
                this.goHome_time = 3;
                let willGoHome =  setInterval(function(){
                  this.goHome_time = this.goHome_time - 1
                  if(this.goHome_time === 0){
                    clearInterval(willGoHome);
                  }
                },1000)
                this.$router.push('/home')
                this.$message({                 
                  message: `恭喜,${this.goHome_time - 1}秒后将跳转至主页`,
                  type: 'success'
                });

                localStorage.setItem('token', res.data.data);
                localStorage.setItem('token_exp', new Date().getTime()); 
              }
              console.log(res.data.data)
              break;
              case 201 : {
                this.$message.error('注册失败,此身份证已经被注册');
            }
              break;
              case 202 : {
                this.$message.error('注册失败,该手机号已存在');
            }  
              break;         
            }               
          }).catch(err => console.log(err));             
          } else {
            console.log('error submit!!');
            this.$message.error('错误的提交，请检查');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      
    },
      /*submitForm(formName) {
        this.$http.post('register',{
          phoneNumber:this.ruleForm.numOrEm,
          idCard:this.ruleForm.idCard,
          nickName:this.ruleForm.nickName,
          password:this.ruleForm.pass
        })
        .then(res => {
            var status = res.status
            switch(status){
              case 200 :{
                this.$message({
                message: '恭喜您，注册成功，三秒后将跳转',
                type: 'success'
                });           
                localStorage.setItem('token', res.data);
                localStorage.setItem('token_exp', new Date().getTime()); 
              }
              break;
              case 201 : {
                this.$message.error('注册失败,该手机号已存在');
            }
              break;
              case 202 : {
                this.$message.error('注册失败,该身份证已存在');
            }  
              break;         
            }               
          })          
      .catch(err => console.log(err));
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            this.$message.error('错误的提交，请检查');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },*/
      clickBackBtn() {
        this.$bus.$emit('okhave',false);
        this.$notify({
          title: '已经返回登陆页',
          message: '您已经成功返回登陆页面，您可以执行登录操作了',
          type: 'success'
        });
      },
    }
  }

</script>

<style>
.regiser h2{
    margin-bottom:.15625rem;
    text-align: center;
}
.regiser{
    min-width: 400px;
    min-height: 380px;
    position: absolute;
    left:50%;
    top:.5208333rem;
    transform: translateX(-50%);
    white-space: nowrap
}
</style>