<template>
   <div class="parmse-show-box">
        <div class="show-box-item">
            <h1>{{propsTitle.name}}</h1>
        </div> 
        <img @click="clickNoImg" class="no-img" src="~public/img/other/no.svg" /> 
        <div class="slot-show-box"><slot></slot></div>
   </div>
</template>

<script>
export default {
    name:'show-box',
    data(){
        return{
            ifMaskBox:false,
        }
    },
    props:{
        propsTitle:{
            type:Object
        }
    },
    methods:{
        clickNoImg(){
           this.$bus.$emit('closeShow',false)
           this.$bus.$emit('noshow',false)
                   
        }
    }

}
</script>

<style scoped>
.parmse-show-box{
    
}
.slot-show-box{
    position: absolute;
    top:100px;
    left:50%;
    transform: translateX(-50%);
}
.bodystyle{
    overflow: hidden;
}
.no-img{
    width: 32px;
    height: 32px;
    position: absolute;
    top:20px;
    right:30px;
    cursor: pointer;
}
.show-box-item{
    width:100%;
    height:100%;
    padding: 20px 50px;
    position: relative;
}

.add_mask-box{   
    background-color: gray;
    opacity: 0.5;
}

</style>