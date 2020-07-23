<template>
    <img src="~public/img/titleBar/logo.png" class="mid-logo" />
</template>

<script>
export default {
    name:'titleMidLogo'
}
</script>

<style>
.mid-logo{
    width: 50px;
    height: 51px;
    font-size: 40px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor:pointer;
}

@media screen  and (max-width:1200px){
    .mid-logo{
        width: 48px;
        height: 48px;
    }
}
@media screen  and (max-width:900px){
    .mid-logo{
        width: 34px;
        height: 35px;
    }
}
</style>