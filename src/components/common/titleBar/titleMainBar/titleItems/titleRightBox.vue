<template>
    <div class="title-main-item-rightbox">
        <slot></slot>
    </div>  
</template>

<script>
export default {
    name:'titleRightBox',

}
</script>

<style>
.title-main-item-rightbox{
    position: absolute;
    top:0.207313rem;
    right:0.4979rem;
    display: flex;
    align-items: center;
    min-width: auto;
}

@media screen and (max-width: 1200px){
.title-main-item-leftbox, .title-main-item-rightbox {
    top: 40px;}
}


@media screen and (max-width: 900px){
.title-main-item-leftbox, .title-main-item-rightbox {
    top: 19px;
}
}


</style>