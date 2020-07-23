<template>
    <div>
        <div class="carving" >
            <div class="ifAdd-box"> 
                <p>免费雕刻</p>
                <div @click="clickAddBtn" class="carving-click-add">点此添加</div>
            </div>

            <div v-if="isShow" :class="{'add_carvine-choose-name':isShow}" class="carvine-choose-name">
                <p class="orText">是否需要艺术字</p>
                <el-radio v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
                <div>
                    <el-input
                    class="input-name"
                    placeholder="限输入长度5个汉字或10个字母"
                    v-model="input"
                    clearable>
                    </el-input>
                    <button @click="clickBtn">确定</button>
                </div>
            </div>
            
        </div>        
    </div>
</template>

<script>
export default {
    name:'carving',
    data(){
        return{
            radio:'1',
            isShow:false,
            input:''
        }
    },
    mounted(){

    },
    methods:{
        clickAddBtn(){
            this.isShow = !this.isShow
        },
        clickBtn(){
            this.isShow = !this.isShow;
            this.$store.commit('haveCarving',this.input)
        }
    }
}
</script>

<style>
.el-radio{
    margin-right: 10px
}
.ifAdd-box{
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px
}
.el-input__inner{
    border-color: #d6c7bae8;
    outline:none;
}
.carvine-choose-name button{
    background-color: black;
    width: 140px;
    height: 50px;
    color: white;
    outline:none;;
}
.input-name{
    margin: 15px 0;
}
.carvie-box-show{
    display: flex;
    flex-direction:column;
}
.orText{
    margin-right:30px;
}
.carvine-choose-name{
    transition: all 0.5s ease;
    opacity: 0;
    transform-origin: 0 0 0;
}
.add_carvine-choose-name{
     opacity: 1;
}
.el-radio__input.is-checked+.el-radio__label{
    color:#d6c7bae8;
}
.el-radio__input.is-checked+.el-radio__labe{
    color: #d6c7bae8;
}
.el-radio__input.is-checked .el-radio__inner{
    border-color: #d6c7bae8;
    background:#d6c7bae8;
}
.carvine-choose-name{
    width:50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.carving p{
    font-size: 17px;
}
.carving{   
    padding:15px 0;
}
.carving-click-add{
    color:#d6c7bae8;
    font-size: 17px;
    cursor: pointer;
}
</style>