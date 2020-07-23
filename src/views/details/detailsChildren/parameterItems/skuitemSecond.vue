<template>
    <div class="sku"  @click="clickShow" @click.stop>
        <div class="sku-name-frist">{{propsSource.title}}</div>
        <div class="sku-name-last">
            <span >{{propsSource.chooseItem[indexItem]}}</span>
            <img :class="{'add_texture-triangle-img':isShow}" class="sku-triangle-img" src="~public/img/titleBar/triangle.svg" />
        </div>
        <div :class="{'add_show-choose-box':isShow}" class="show-choose-box">
            <div  @click="clickChoose(index)" class="sku-choose-box" v-for="(item,index) in propsSource.chooseItem" :key="index">
                <div class="text-img-box">
                    <span>{{item}}</span>                    
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name:'sku',
    data(){
        return{
            isShow:false,
            showBox:['你好','哈哈','w呜呜'],
            active:0,
            indexItem:0,
            indexSize:5
        }
    },
    props:{
        propsSource:{
            type:Object
        },

    },
    mounted(){
        document.body.addEventListener('click',()=>{
            this.isShow = false;
        },false);
    },
    methods:{
        clickShow(){
            console.log(this.isShow)
            this.isShow = !this.isShow
        },
        clickChoose(index){
            this.active = index;
            this.indexItem = index;
            this.propsSource.chooseItem[index]
            this.indexSize = this.propsSource.chooseItem[index]
            this.$store.commit('chooseSize',this.indexSize)
            this.indexSize = 5
            console.log(this.propsSource.chooseItem[index])
        }
    }

}
</script>

<style scoped>
.sku-yes-img{
    width: 25px;
    height: 25px;
}
.text-img-box{
    white-space: nowrap;
    display: flex;
    justify-content: center;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
}
.show-choose-box{
    width: 100%;
    position: absolute;
    z-index: 21;
    top:64px;
    left:0;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content:flex-start;
    background-color: #f2eded;
    transition: all 0.5s ease;
    transform: scaleY(0);
    transform-origin: 0 0 0;
}
.sku-choose-box:hover{
    background-color: antiquewhite;
}
.sku-choose-box{
    width: 30px;
    height:.15625rem ;;
    line-height:.15625rem ;  
    border:1px solid #ded1cf;
    text-align: center;
    margin:5px 5px;
    font-size:18px;
    cursor: pointer;
    position: relative;
}
.sku-triangle-img{
    width: 20px;
    height: 20px;
    position: absolute;
    transition: all 0.5s ease; 
    transform:rotate(0deg);    
}
.sku-name-last{
    font-size: 16px;
    font-weight: 500;
   position: relative; 
   cursor: pointer;
}
.sku-name-frist{
    font-size: 16px;
    font-weight: 600;
}
.sku{
    width:80%;
    position: relative;
    padding: 20px 0;
    margin: 10px 0;
    border-bottom: solid 1px gray;
    display: flex;
    justify-content: space-between;
}
.add_texture-triangle-img{
    transform:rotate(180deg); 
}
.add_show-choose-box{
    transform: scaleY(1);
}
</style>