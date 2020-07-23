<template>
    <div class="left-arrow-btn">
        <img src="~public/img/titleBar/go.png" />
    </div>  
</template>

<script>
export default {
    name:''
}
</script>

<style>
.left-arrow-btn img{
    transform: rotate(180deg)
}
.left-arrow-btn:hover{
    background-color: #9c827d;
}
.left-arrow-btn{
    border-left:solid 1px #9c827d;
    width: 49%;
    height: 100%;
    
    display: flex;
    justify-content:center;
    align-content: center;
    align-items: center;
    background-color: #fff;
}
</style>