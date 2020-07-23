<template>
    <div class="left-op-2">
        <h2>{{propsOp.title}}</h2>
        <el-radio-group v-model="radio">
            <el-radio @change="changeCheckd(index)" :data-max="Infinity" :data-min="100" v-for="(item,index) in propsOp.service" :key="index" :label="index">
                {{item}}
            </el-radio>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    name:'leftOpcion2',
    data(){
        return{
            radio:10,
        }
    },
    props:{
        propsOp:{
            type:Object,           
        },
        
    },
    mounted(){
        this.$bus.$on('claearCheck',data => this.radio = data)
    },
    methods:{
        changeCheckd(index){
            //当传入重量
            if(this.propsOp.title === '重量  (克拉)'){
                if(index===0){
                    this.$store.commit({
                        type: 'fiterWeight',
                        min:0, 
                        max:this.propsOp.service[index].split('-').map(e=>parseInt(e))[0],
                        text:this.propsOp.service[index]
                    })
                }else if(index===this.propsOp.service.length-1){
                    this.$store.commit({
                        type: 'fiterWeight',
                        min:100, 
                        max:Infinity,
                        text:this.propsOp.service[index]
                    })              
                }else if(index===this.propsOp.service.length-2){
                    this.$store.commit({
                        type: 'fiterWeight',
                        min:50, 
                        max:100,
                        text:this.propsOp.service[index]
                    })              
                }
                else{
                    this.$store.commit({
                        type: 'fiterWeight',
                        min:this.propsOp.service[index].split('-').map(e=>parseInt(e))[0], 
                        max:this.propsOp.service[index].split('-').map(e=>parseInt(e))[1],
                        text:this.propsOp.service[index]
                    })
                }
            }
            //当传入形状
            if(this.propsOp.title === '按形状'){
                let shapeText = this.propsOp.service[index];
                this.$store.commit('fiterShape',shapeText);
            }
               
        }
    }

}
</script>

<style>
.el-radio__label{
    font-size: 12px; 
}
.el-radio{
    margin: 10px 0;
}
.el-radio__inner:hover {
    border-color: #9c827d;
    }
.el-radio-group {
    display: flex;
    flex-direction:column;
}
.el-radio__input.is-checked .el-radio__inner{
    border-color: #9c827d;
    background: #9c827d;
}
.el-radio__input.is-checked+.el-radio__label {
    color: #9c827d;;
}
.left-op-2{
    margin-top:30px;
}
.el-radio-group{
    margin-top:15px;
}
</style>