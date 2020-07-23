<template> 
    <div class="bottom-second-items">
        <div class="bottom-second-items-box">
            <div class="bottom-second-items-img"><img v-lazy="propsItems.img"/></div>
            <p>{{propsItems.name}}</p>
            <div class="bottom-second-items-text">{{propsItems.text}}</div>
        </div>
        <div class="bottom-show-box" v-if="propsItems.childrenShow!=0">
            <ul v-for="(item,index) in propsItems.childrenShow" :key="index">
                <li  v-for="(item1,index1) in item" :key="index1">{{item1}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'bottomSecondItems',
    props:{
        propsItems:{
            type:Object
        }
    }
}
</script>

<style>
.bottom-show-box ul{
    padding: 10px 30px 25px;
    background-color: #fff;
    
}
.bottom-show-box li:hover{
    border-bottom: solid 1px gray;
}
.bottom-show-box li{
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    width: 100%;
    list-style: none;
    font-size: .078125rem;
    margin-top:.078125rem;
}
.bottom-second-items:hover .bottom-show-box ul{
    display: block;
}
.bottom-show-box ul{
    display: none;
}
.bottom-show-box{
    position: absolute;
    bottom:115px;
    display: flex;
    left:50%;
    transform: translateX(-50%);
    box-shadow: 0 0 40px 0 rgba(34,40,45,.1);
   
}
.bottom-second-items-img{
    width: 32px;
    height: 32px;   
}
.bottom-second-items,.bottom-second-items-box{
    position: relative;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    align-items: center;
}
.bottom-second-items img{
    height: 100%;
    width: 100%;
}
.bottom-second-items p{
    text-align: center;
    width: 100%;
    margin: .0677083rem 0 .078125rem 0;
    font-weight: 500;
    font-size: .0833333rem;
}
.bottom-second-items-text{
    color: #6a6d72;
}
</style>