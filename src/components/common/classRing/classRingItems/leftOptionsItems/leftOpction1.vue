<template>
    <div>
        <h3>求婚戒指</h3>
        <div>
            <ul class="serviece-class" >
                <li @click="clickFiter(index)" v-for="(item,index) in propsServices" :key="index">
                    <p>{{item.seriesring.name}}</p>
                </li>
            </ul>
        </div>
    </div>   
</template>

<script>
export default {
    name:'leftSort',
    data(){
        return{
        }
    },    
    props:{
        propsServices:{
            type:Array
        }
    },
    methods:{
        clickFiter(index){
            let serStr = this.propsServices[index].seriesring.name;
            this.$store.commit('fiterName',serStr)           
        },
    }
}
</script>

<style>

.serviece-class{
    font-size: 14px;
    margin-top:54px;
}
.serviece-class li p{
    margin-bottom: 24px;
    cursor: pointer;
    transition: transform 0.5s ease;
    /*-moz-transform-origin: 0 100%;
    -webkit-transform-origin:0 100%;
    transform-origin:0 100%;*/
    transform: scale(1);
}
.serviece-class li p:hover{
    color:#9c827d;
    transform: scale(1.1);
}
</style>