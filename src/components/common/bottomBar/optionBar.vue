<template>
    <div class="option-bar-bottom">
        <ul class="op-bar-bottom-box">
            <li v-for="(item,index) in propsIcons" :key="index">
                <img :src="item.img" />
                <div class="op-bar-bottom-name">{{item.name}}</div>
            </li>
        </ul>
    </div>   
</template>

<script>
export default {
    name:'optionBar',
    props:{
        propsIcons:{
            type:Array
        }
    }
}
</script>

<style>
.option-bar-bottom{
    padding-top:76px;
}
.op-bar-bottom-box{
    background-color:#f2eded;
    padding: 30px 0;
    text-align: center;
    display: flex;
    justify-content: center;
}
.op-bar-bottom-box li{
    list-style: none;
    color:#9c827d;
}
.op-bar-bottom-box li img{
    width:.3177083rem;
    height:.3177083rem;
}
.op-bar-bottom-name{
    margin:.0820833rem .15625rem 0 .15625rem;
}
</style>