<template>
    <div class="double-arrow-btn-box">
        <slot name="left-arrow"></slot>
        <slot name="right-arrow"></slot>
    </div>
</template>

<script>
export default {
    name:'doubleArrowBtn'
}
</script>

<style>
.double-arrow-btn-box{
    display: flex;
    width:1.3020833rem;
    height: .3125rem;
    margin: 0 auto;
    border: solid 1px gray;
    justify-content: center;
    border-radius: 2px;
    position: absolute;
    z-index: 20;

}

</style>