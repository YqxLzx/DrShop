<template>
    <div class="reservation-text">
        <p :class="{'reservation-text-header':index==0,'reservation-text-p':index!=0}" v-for="(item,index) in reservationText" :key="index">{{item}}</p>
    </div>
</template>

<script>
export default {
    name:'reservation-text',
    props:{
        reservationText:{
            type:Array
        }
    }
}
</script>

<style>

.reservation-text-p{
    font-size:.0729167rem;
    color: #22282d;
    line-height: .1510417rem;
}
.reservation-text-header{
    font-size: .2291667rem;
    margin-bottom: .1041667rem;
    font-weight: 500 ;
}
</style>