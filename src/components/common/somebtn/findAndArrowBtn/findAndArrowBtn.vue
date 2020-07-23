<template>
    <div class="find-and-arrow-btn">
        <div class="find-and-arrow-btn-children"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name:'findAndArrowBtn'
}
</script>

<style>
.find-and-arrow-btn:hover{
    font-weight:700;
    text-decoration:underline;
}
.find-and-arrow-btn:hover .find-and-arrow-btn-children::after{
    transform: scale(1.2);
}
.find-and-arrow-btn-children::after{
    content:'';
    transform: scale(1);
    position: absolute;
    top:8px;
    right:-45px;
    display: block;
    transition: all 0.5s ease;
    width: 21px;
    height: 6px;
    background: url("~public/img/titleBar/go.png") no-repeat left center/cover; 
}
.find-and-arrow-btn{
    height: 20px;
    line-height: 20px;
    text-align: left;
    cursor:pointer; 
}
.find-and-arrow-btn-children{
    width: 100px;
    position: relative;
    font-size:17px;
    white-space: nowrap;
}
</style>