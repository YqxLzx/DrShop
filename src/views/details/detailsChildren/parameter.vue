<template>
    <div class="parmaeter">
        <span>求婚钻戒</span>------<span>系列:</span>
        <span>{{propsTitle.num}}</span>
        <h3 class="parmaaerer-title">{{propsTitle.name}}</h3>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'parameter',
    props:{
        propsTitle:{
            
        }
}
}
</script>

<style scoped>
.parmaeter span{
    font-weight: 400;
    margin-bottom:15px;
    color: gray;
    
}
.parmaeter{
    width: 40%;
    position: relative;
    
}
.parmaaerer-title{
    margin:.1302083rem 0;
    font-size:30px;
    font-weight: 500
}
</style>