<template>
    <div class="mainBox">
        <div class="left-main">
            <slot></slot>
        </div>  
        <slot name="right-box"></slot>      
    </div>
</template>

<script>

export default {

}
</script>

<style >
.mainBox{
    width: 80%;
    margin: 0 auto;
    padding-top:30px;
    display: flex;
    justify-content: space-between;
}
.left-main{
    width: 4.1666667rem;
}
</style>