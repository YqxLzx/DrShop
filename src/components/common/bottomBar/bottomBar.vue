<template>
    <div class="bottom-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'bottomBar'
}
</script>

<style>
.bottom-bar{
    padding: .34375rem 1.2083333rem .1510417rem 1.25rem;
    display:flex;
    justify-content: space-between;
}

</style>