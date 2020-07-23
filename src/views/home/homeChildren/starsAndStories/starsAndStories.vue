<template>
    <div class="stars-and-stories">
        <div class="stars-and-stories-tittle">
            <span>DR明星故事</span>
            <slot name="slideArrowBtn"></slot>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'starsAndStories'
}
</script>

<style>
.stars-and-stories{
    padding-top:.9895833rem;
}
.stars-and-stories-tittle{
    font-size: .1822917rem;
    margin-bottom: .1302083rem;
    text-align: center;
    position: relative;
}
</style>