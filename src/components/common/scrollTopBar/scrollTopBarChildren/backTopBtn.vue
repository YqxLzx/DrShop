<template>
    <div >
        <el-backtop :right="0"  :bottom="0" :visibility-height="100" class="go-top-img">
            <img src="~public/img/scrollTopBar/goTop.svg" />
        </el-backtop>
        
    </div>
</template>

<script>
export default {
    name:'goTopBtn'
}
</script>

<style>
.el-backtop{
    position:inherit;
    border-radius: 0;
    transition: all 0s cubic-bezier(0,0,0,0);
}
.go-top-img img{
    width:.1197917rem;
    height: .0833333rem;
}
.go-top-img{
    display: flex;
    align-items: center;  
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: rgb(153, 156, 162);
    margin-bottom: 4px;
    cursor: pointer;
}
.go-top-img:hover{
    background-color:#9c827d;
}
</style>