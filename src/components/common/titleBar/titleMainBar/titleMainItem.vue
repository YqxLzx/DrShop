<template>
    <div id="title-main-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'titleMainItem',
    conmponents:{

    },
    data(){
        return{
            winWidth:Number,//当前窗口宽度
        }
    },
    created(){

    },
    methods:{
        getDrLogo(){
            this.$http.get('')
        },
        enterLogin(){
            //this.$refs.ooo.style.opacity = 1;
        }

    }
}
</script>

<style> 



#title-main-item{
    position: relative;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.03);
    padding: 32px 80px 28px; 
    min-width: auto;
    height: 52px;
    
}

@media screen and (max-width: 1200px){
    #title-main-item{height:36px;
    padding: 32px ;}    
}

@media screen and (max-width: 900px){
    #title-main-item{height:36px;
    padding: 12px ;}    
}







</style>