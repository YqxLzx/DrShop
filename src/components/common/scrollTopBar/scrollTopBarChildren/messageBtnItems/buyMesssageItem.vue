<template>
    <div  class="buy-message-box">
        <img class="buy-message-img" :src="propsBuyMessage.img"/>
        <div class="buy-message-text"> 
            <div class="buy-message-box-title">
                <div>{{propsBuyMessage.title}}</div>
                <img class="buy-message-arrow" src="~public/img/scrollTopBar/goarrow.svg" />
            </div>
            <div class="buy-message-box-bottom">
                <p v-for="(item,index) in propsBuyMessage.chooseItem" :key="index">
                    {{item}}
                </p>
            </div>
        </div>               
    </div>
</template>

<script>
export default {
    name:'buyItem',
    props:{
        propsBuyMessage:{
            type:Object
        }
    }
}
</script>

<style>
.buy-message-box .buy-message-img{
    width:30px;
    height:30px;
    padding:0 20px 20px 20px;
}
.buy-message-box{
    display: flex;   
    padding:25px 25px 25px 15px; 
    align-items: center;
    background-color: #f2eded;
    
}
.buy-message-box-title{
    display: flex;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;    
}
.buy-message-box-bottom p{
  white-space: nowrap; 
  margin-right: 5px; 
  color:gray;
}
.buy-message-box-bottom{
    display: flex;
    flex-wrap:nowrap; 
}
</style>