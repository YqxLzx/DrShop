<template>
    <div class="custo-left-text">
        <div class="custo-left-title">定制你的钻戒方案</div>
        <p>
            DR悉心甄选每颗钻石，只选用SI1及以上的优质净度，
            J及以上璀璨色级，切工更是高达3VG以上，
            确保每一颗钻石都光彩夺目，熠熠生辉。
        </p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'custoLeftText'
}
</script>

<style>
.custo-left-title{
    font-size: .2291667rem;
    margin-bottom: .2083333rem;
    font-weight: 100;
}
.custo-left-text{
    position: relative;
    width: 27%;
    padding: .125rem .7135417rem .125rem .78125rem;
}
.custo-left-text p{
    line-height:44px;
    font-size: .0833333rem;
}
</style>