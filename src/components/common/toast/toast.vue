<template>
    <div class="toast">{{}}</div>
</template>

<script>
export default {
    name:'toast',
    props:{
        propsToast:{
            type:Object,
        }
    }
}
</script>

<style>
.toast{
    position: relative;
    
}
</style>