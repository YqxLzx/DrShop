<template>
    <div class="message-btn">
        <img src="~public/img/scrollTopBar/message.svg" />
        <div class="message-btn-showBox">
            <div class="buy-box"><slot></slot></div>
            <slot name="service-item"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'messageBtn'
}
</script>

<style>
.buy-box{
    margin-bottom:3px;
}
.message-btn-showBox{
    position: absolute;
    padding: 20px 0 0 0;
    bottom: 0px;
    left:-273px;   
    display: none;
}
.message-btn img{
    width:.1197917rem;
    height: .0833333rem;
}
.message-btn:hover .message-btn-showBox{
    animation:opacityShow .7s ease-in;
    display:block;
}
.message-btn{
    position: relative;
    display: flex;
    align-items: center;  
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: rgb(153, 156, 162);
    margin-bottom: 4px;
    cursor: pointer;

}
.message-btn:hover{
    background-color:#9c827d;
}
@keyframes opacityShow{
    0%{opacity: 0;}
    25%{opacity: 0.25;}
    50%{opacity: 0.5;}
    75%{opacity: 0.75;}
    100%{opacity: 1;}
}
</style>