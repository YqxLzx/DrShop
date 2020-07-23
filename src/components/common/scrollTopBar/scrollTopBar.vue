<template>
    <div id="scroll-top-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'scrollTopBar',
}
</script>

<style>
#scroll-top-bar{
    position: fixed;
    right: 16px;
    bottom: 160px;
    width: 48px;
    text-align: center;
    z-index: 99;
}
</style>