<template>
    <div class="left-opction-3">
        <h2>{{propsBox.title}}</h2>
        <ul class="left-opction-3-ul">
            <li v-for="(item,index) in propsBox.bgc" :key="index" :style="{backgroundColor:item}" @click="clickChecked(index)">
                <img src="~public/img/other/yes.svg" v-show="(index===isShowIndex)" />
            </li>
        </ul>
        <div class="choose-input-box">
            <input v-model="chooseInput1" @input="inputChecked" oninput = "value=value.replace(/[^\d]/g,'')" />
            <label>—</label>
            <input v-model="chooseInput2"   @input="inputChecked" oninput = "value=value.replace(/[^\d]/g,'')"/>
            <button>确定</button>
        </div>
    </div>
</template>

<script>
import {throttle} from 'fns/throttle.js'
export default {
    name:'leftOpction3',
    data(){
        return{
            isShowIndex:Number,
            chooseInput1:null,
            chooseInput2:null,
            isImgShow:false,

        }
    },
    mounted(){
        throttle(this.inputChoose2,1000);
        this.$bus.$on('claearCheckInput',data=>{
            this.chooseInput1 = data[0];
            this.chooseInput2 = data[0];
            this.isShowIndex = data[1]
        })
    },
    props:{
        propsBox:{
            type:Object
        }
    },
    methods:{
        clickChecked(index){
            this.isShowIndex = index;
            switch(index){
                case 0 :
                    this.chooseInput1 = 0;
                    this.chooseInput2 = 5000; 
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice: this.chooseInput1,
                        maxPrice:this.chooseInput2
                    })
                break;
                case 1 :
                    this.chooseInput1 = 5001;
                    this.chooseInput2 = 10000;
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice: this.chooseInput1,
                        maxPrice:this.chooseInput2
                    }) 
                break;
                case 2 :
                    this.chooseInput1 = 10001;
                    this.chooseInput2 = 20000; 
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice: this.chooseInput1,
                        maxPrice:this.chooseInput2
                    })
                break;
                case 3 :
                    this.chooseInput1 = 20001;
                    this.chooseInput2 = 40000;
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice: this.chooseInput1,
                        maxPrice:this.chooseInput2
                    }) 
                break;
                case 4 :
                    this.chooseInput1 = 40001;
                    this.chooseInput2 = '以上'; 
                    this.$store.commit({
                        type:'fiterPrice',
                        minPrice: this.chooseInput1,
                        maxPrice:Infinity
                    })
                break;
            }
        },
        inputChecked(){
            if(this.chooseInput1 == 0 && this.chooseInput2 == 5000){
                this.clickChecked(0);
            }else if(this.chooseInput1 == 5001 && this.chooseInput2 == 10000){
                this.clickChecked(1);
            }else if(this.chooseInput1 == 10001 && this.chooseInput2 == 20000){
                this.clickChecked(2);
            }else if(this.chooseInput1 == 20001 && this.chooseInput2 == 40000){
                this.clickChecked(3);
            }else if(this.chooseInput1 == 40000){
                this.clickChecked(4);
            }
            
        }
    }
}
</script>

<style>
.choose-input-box label{
    margin:0 3px;
}
.choose-input-box button{
    height:auto;
    background: #9c827d;
    text-align: center;
    line-height: 1;
    padding: 4px 13px 4px 13px;
    color: #fff;
    margin-left:8px;
    cursor: pointer;
    outline: none;
}
.choose-input-box{
    margin-top:15px;
    display: flex;
    
    align-items: center;
}
.choose-input-box input{
    outline: none;
    background: #fff;
    border: 1px solid #999ca2;
    width: .3020833rem;
    height: .1041667rem;
    box-sizing: border-box;
}
.left-opction-3-ul{
    display: flex;
    margin-top: 15px;
    cursor: pointer;
}
.left-opction-3-ul li{
    width:.21875rem;
    height: .125rem;
    display: flex;
    justify-content: center;
    
}
.left-opction-3{
    margin-top:30px;
}

</style>