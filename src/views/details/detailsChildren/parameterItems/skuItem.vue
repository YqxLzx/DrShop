<template>
    <div class="sku"  @click="clickShow" @click.stop>
        <div class="sku-name-frist">{{propsSource}}</div>
        <div class="sku-name-last">
            <span v-if="propsChoose.length>0">{{propsChoose[activeIndex].name}}</span>
            <img :class="{'add_texture-triangle-img':isShow}" class="sku-triangle-img" src="~public/img/titleBar/triangle.svg" />
        </div>
        <div :class="{'add_show-choose-box':isShow}" class="show-choose-box">
            <div  @click="clickChoose(index)" class="sku-choose-box" v-for="(item,index) in propsChoose" :key="index">
                <div class="text-img-box">
                    <img v-if="active===index" class="sku-yes-img" src="~public/img/other/yes.svg" />
                    <span>{{item.name}}</span>                    
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
            activeIndex:0,
            active:0,
        }
    },
    props:{
        propsSource:{
            
        },
        propsChoose:{
            type:Array
        }
    },
    mounted(){
        document.body.addEventListener('click',()=>{
            this.isShow = false;
        },false);       
    },
    methods:{
        clickShow(){
            this.isShow = !this.isShow;            
        },
        async clickChoose(index){
            if(this.propsSource==='材质'){
                this.active = index;
                this.activeIndex = index;      
                this.$store.commit('chooseSku',{
                    name:this.propsChoose[index].name,
                    price:this.propsChoose[index].price
                })
            }else if(this.propsSource==='主钻'){
                this.active = index;
                this.activeIndex = index;      
                this.$store.commit('chooseMainRing',{
                    name:this.propsChoose[index].name,
                    price:this.propsChoose[index].price
                })                
            }

        }
    }

}
</script>

<style>
.sku-yes-img{
    width: .1302083rem;
    height:.1302083rem;
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
    justify-content: center;
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
    width: 45%;
    height: .1302083rem;
    padding: .0260417rem;
    border:1px solid #ded1cf;
    text-align: center;
    margin:.0260417rem .0260417rem;
    font-size:.09375rem;
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