<template>
    <div class="home-reservation">
        <div class="home-reservation-main"> 
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'reservation'
}
</script>

<style>
.home-reservation{
    height: 2.40625rem;
    text-align: center;
    padding: .9895833rem 1.25rem 0 1.25rem;
}
.home-reservation-main{
    width: 100%;
    height:2.2916667rem;
    border: solid .0520833rem #f2eded;
    box-sizing: border-box;
    padding-top: .6041667rem;
    position: relative;
}
</style>