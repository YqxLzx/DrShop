<template>
    <div>
        <div class="left-box">
            <h1>收货人信息</h1>
            <el-form :inline="true"  class="demo-form-inline el-form1">
                <el-form-item>
                    <el-input placeholder="*收货人"></el-input>
                    <div  class="block">
                        <el-cascader
                            v-model="value"
                            :options="options"
                            @change="handleChange"
                            placeholder='北京/南城/朝阳小区'></el-cascader>
                    </div>
                    <el-input class="where-class" v-model="inputWhere" placeholder="请输入详情地址"></el-input>
                    <el-input class="where-class" v-model="inputNum" placeholder="请输入手机号"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="info">配送至此</el-button>
            
        </div>
    </div>
</template>

<script>
var NumRex = new RegExp(/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/);
var checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('手机号不能为空'));
    }
    setTimeout(() => {
        if (!NumRex.test(value)) {
        callback(new Error('请输入正确的手机号码'));
        } else {
            callback();            
            }
        
    }, 1000);
    };
export default {
    data() {
      return {
        haveCard:true,
        haveIimes:false,
        cardNum:null,
        ruleForm: {
          phoneNum: ''
        },
        rules: {
          phoneNum: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        inputWhere:'',
        inputNum:'',
        value: [],
        options: [{
          value: 'zhinan',
          label: '北京',
          children: [{
            value: '东城',
            label: '南城',
            children: [{
              value: '京华小区',
              label: '京华小区'
            }, {
              value: '朝阳小区',
              label: '朝阳小区'
            }, {
              value: '京都小区',
              label: '京都小区'
            }, {
              value: '风华小区',
              label: '风华小区'
            }]
          }, {
            value: '北城',
            label: '北城',
            children: [{
              value: '北城新区',
              label: '北城新区'
            }, {
              value: '鸟巢',
              label: '鸟巢'
            }]
          }]
        }, {
          value: '上海',
          label: '上海',
          children: [{
            value: '浦东新区',
            label: '浦东新区',
            children: [{
              value: '上海外滩',
              label: '上海外滩'
            }, {
              value: '黄埔大道',
              label: '黄埔大道'
            }, {
              value: '迪士尼',
              label: '迪士尼'
            }, {
              value: '虹桥机场',
              label: '虹桥机场'
            }, {
              value: '弄堂',
              label: '弄堂'
            }]
          },]
        }, {
          value: '广州',
          label: '广州',
          children: [{
            value: '广州塔',
            label: '广州塔'
          }, {
            value: '新世界大道',
            label: '新世界大道'
          }, {
            value: '长隆乐园',
            label: '长隆乐园'
          }]
        }]
      };
    },
    methods:{
      handleChange(value) {
        console.log(value);
      },
    clickSendNum(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.haveCard = false;
            this.haveIimes = true;
            setTimeout(function(){
              this.haveIimes = false
            },5000)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }, 
    }
}
</script>

<style scoped>
.left-box .input-phonenum{
    width: 60%;
}
.left-box .-willcard-num{
    width: 1.0416667rem;
}
.card-num{
    position: relative;
}
.card-num span{
    position: absolute;
    top:60%;
    height: .1041667rem;
    line-height: .1041667rem;
    right:1.25rem;
    cursor: pointer;
}
.go-buy-will{
    transform: translateY(20px)
}
.el-form-item__content{
    margin-left: 0 !important;
}
.el-form1{
    display: flex;
    flex-wrap: wrap;
   width: 2.6041667rem;
}
.where-class{
    margin-top: 20px;
}
.el-input,.el-input__inner,.el-cascader{
    margin-top:30px;
    width: 2.6041667rem;
    outline: none;
}

.left-box h1{
    font-size: 35px;
    font-style: inherit;
    font-weight: 400;
    margin-bottom: 20px;
}
</style>