<template>
    <div class="query-btn">
        <input type="text" placeholder="输入身份证号查看真爱承诺" class="query-btn-input" />
        <img src="~public/img/home/query.svg" />
        <div  class="query-btn-hoverBox"></div>
    </div>
</template>

<script>
export default {
    name:'query-btn'
}
</script>

<style>
/*.query-btn:hover .query-btn-hoverBox{
    opacity:1;
}
.query-btn-hoverBox{
    position: absolute;
    width: 346px;
    height: 69px;
    text-align: center;
    font-size: 12px;
    color: #949292;
    bottom: -180px;
    z-index: 5;
    left:0;
    opacity: 0;
     
}*/
.query-btn{
    width: 1.5364583rem;
    height: .171875rem;
    margin: 0 auto;
    border: solid 1px gray;
    padding:.0625rem .46875rem .0625rem .1458333rem;
    position: relative;
}
.query-btn-input{
    width: 100%;
    height: 100%;
    border: none;
    font-size:.078125rem;
    outline:none;
}
.query-btn img{
    width: 20px;
    height: 20px;
    position: absolute;
    right:.15625rem;
    top:50%;
    transform: translateY(-50%);
    cursor: pointer;

}
</style>