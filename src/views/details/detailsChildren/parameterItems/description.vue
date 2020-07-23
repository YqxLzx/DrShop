<template>
    <div class="description">
        <h1>细节描述</h1>
        <ul>
            <li v-for="(value, name) in pickedPropsObj" :key="name"> 
                {{ translateKey(name) }}: {{ value }} 
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name:'description',
    data(){
        return{
            keyCnName:{
                id:'产品号' ,  
                name: ' 产品名',
                popularity: ' 人气',
                service: ' 系列',
                carat:   ' 克拉(分)',
                num:  '  产品编号',
                color:   ' 颜色',
                pure:   '纯净度',
                shape:   ' 形状',
                cut:   '切工',
                class:'求婚钻戒'
            },
            choosedItem:''
        }
    },
    computed: {
        pickedPropsObj: function() {
            const obj = {};
            for(let key in this.propsObj) {
                    if(Object.prototype.hasOwnProperty.call(this.keyCnName,key)) {
                            obj[key] = this.propsObj[key];
                    } 
            }
            return obj;
        }
    },
    mounted(){

    },
    props:{
        propsObj:{
            type:Object
        }
    },
    methods: {
        translateKey: function(key) {
            return this.keyCnName[key];
    }
  }
}
</script>

<style>
.description li{
    padding: 7px 7px;
}
.description ul{
    column-count: 3;
}
.description h1{
    padding: 20px 0;
}
.description{
    padding: 40px 0 20px 0;
    width: 80%;
    border-bottom: solid 1px gray;
}
.description li{
    list-style: none;
}
</style>