<template>
    <div   class="sort-box-show">
        <ul >
            <li  @click="clickSortItem(index)" v-for="(item,index) in propsSortText" :key="index">
                {{item}}
            </li>
        </ul>
    </div>  
</template>

<script>
export default {
    name:'sortBox',
    data(){
        return{
            isResove1:false,
            isResove2:false,   
        }
    },
    props:{
        propsSortText:{
            type:Array
        },
    },
    created(){

    },
    methods:{
        clickSortItem(index){
            switch(index){
                case 2://价格
                    if(this.isResove1 === true){                        
                        let sortArr1 = (a, b) => parseFloat(b.proposeClass_Ring.price) - parseFloat(a.proposeClass_Ring.price);
                        this.$store.commit('sortArr',sortArr1);
                        this.isResove1 = !this.isResove1;
                    }else{                        
                        let sortArr2 = (a, b) => parseFloat(a.proposeClass_Ring.price -  parseFloat(b.proposeClass_Ring.price));
                        this.$store.commit('sortArr',sortArr2);
                        this.isResove1 = !this.isResove1  ;          
                   }
                break;
                case 1://人气
                    if(this.isResove2 === true){
                        let sortArr3 = ((a, b) => parseFloat(b.proposeClass_Ring.popularity) - parseFloat(a.proposeClass_Ring.popularity));
                        this.$store.commit('sortArr',sortArr3)
                        this.isResove2 = !this.isResove2;
                    }else{
                        let sortArr4 = ((a, b) => parseFloat(a.proposeClass_Ring.popularity) - parseFloat(b.proposeClass_Ring.popularity));
                        this.$store.commit('sortArr',sortArr4)
                        this.isResove2 = !this.isResove2;                       
                    }
                break;
                case 0://默认
                    this.$store.commit('clearSort')
                    console.log(this.$store.state.midClassRing)
                break;                
            }
        },
    }
	
}
</script>

<style>
.sort-box-show{
    position: absolute;
    top:20px;
    left:0;
    background-color: #9c827d;
    white-space: nowrap;
    text-align: center;
    transition: all 0.5s ease;
    transform-origin:top;
    transform: scaleY(0);
}

.sort-box-show ul{
   width: .3645833rem;
   padding-top:10px; 
}
.sort-box-show li{
    margin-bottom:10px;
    cursor: pointer;
    width: 100%;
    display: block;
}
.sort-box-show li:hover{
    background-color: antiquewhite
}

</style>