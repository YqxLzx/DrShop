<template>
    <div @click="clickEvaluate">
        <div  class="skuHelpItem">
            <h1>{{propsText}}</h1>
            <img  src="~public/img/titleBar/triangle.svg" /> 
        </div>
        <div  @click.stop class="skuHelpItem-show-box" :class="{'add_skuHelpItem-show-box':ifMask}"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name:'skuHelpItem',
    data(){
        return{
            ifMask:false
        }
    },
    mounted(){
        this.$bus.$on('closeShow',data=>this.ifMask = data)
    },
    methods:{
        clickEvaluate(){
            this.ifMask = ! this.ifMask;
            this.$bus.$emit('show',this.ifMask);
        }
    },
    props:{
        propsText:{
            type:String
        }
    }
}
</script>

<style>
.skuHelpItem-show-box{
    transition: all 0.5s ease;
    transform: scaleX(0);
    transform-origin:right;
    position: fixed;
    top:0;
    right:0;
    background-color: #fff;
    height: 100%;
    width: 600px;
    z-index: 1000;
}

.skuHelpItem img{
    width: 28px;
    height: 28px;
    transform: rotate(270deg)
}
.skuHelpItem{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: .35625rem;
    height: .35625rem;
    padding:10px 0;
    border-bottom:solid 1px gray;
    position: relative;
}
.add_skuHelpItem-show-box{
    transform: scaleX(1);
    z-index: 100;
    opacity: 1;
    overflow-y:scroll;
     overflow-x:hidden;
}
</style>