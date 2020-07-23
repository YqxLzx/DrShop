<template>
    <div class="mid-class-ring infinite-list-wrapper" style="overflow:auto">
        <ul class="list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled" >
            <li @click="clickClassRing(index)" class="mid-show-img" v-for="(item,index) in fiter_midClassRing" :key="index">
                <img class="show-ring" v-lazy="item.proposeClass_Ring.img"  />
                <img class="show-ring-clon" v-lazy="item.proposeClass_Ring.rotateImg" />                
                <p class="mid-show-ring-name">{{item.proposeClass_Ring.name}}</p>
                <p class="mid-show-ring-price">￥{{item.proposeClass_Ring.price}}</p>
                <slot></slot>
                <img class="love-svg" src="~public/img/other/love.svg" />
            </li>
            
        </ul>
            <p  v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
    </div>
</template>

<script>
export default {
    name:'midClassRing',
    data(){
        return{
            count:1,
            loading: false
        }
    },
    mounted(){
        
    },
	computed:{
        fiter_midClassRing(){
            return this.$store.getters.fiter_midClassRing
        },
        noMore () {
            return this.fiter_midClassRing >= this.count
        },
        disabled () {
            return this.loading || this.noMore
      }
  }, 
  methods: {
    async load () {
        this.loading = true;
        /*const {data:res} = await this.$http.get('proposaClass');
        this.$store.dispatch('push_classRing',{
            res
        })*/
        //console.log(res)
        this.loading = false
      },
      clickClassRing(index){
        let indexLi = this.$store.getters.fiter_midClassRing[index].proposeClass_Ring;
        console.log(indexLi)
        localStorage.setItem('onceRing', JSON.stringify(indexLi));
        this.$router.push({ 
            path: '/details',
            query: {  
                data: indexLi,                
            }
        });
      }
    }
  
}
</script>

<style>
.mid-show-img:hover .show-ring-clon{
    opacity: 1;
}
.love-svg{
    position: absolute;
    width: 22px;
    height: 22px;
    right:10px;
    top:15px;
    cursor: pointer;
}
.mid-show-ring-price{
    margin-top: .7vw;
    text-align: center;
    color: #22282d;
    line-height: 24px;
    font-weight: 600;
    font-size: 20px;
}
.mid-show-ring-name{
    margin-top: 1vw;
    text-align: center;
    color: #22282d;
    font-size: 14px;
    white-space: nowrap;
    margin: 0 .24rem;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: NotoSansHans;
}
.mid-class-ring{
    flex:1;
}
.mid-class-ring ul{
    display: flex;
    flex-wrap: wrap;
    margin-top:58px;
    
}
.mid-show-img ,.show-ring-clon{
    width: 1.86875rem;
    height: 1.86875rem;
    margin-bottom: 1vw;
    cursor: pointer;
}
.show-ring{
    width: 100%;
    height: 1.86875rem;
}
.show-ring-clon{
    position: absolute;
    top:0;
    left:0;
    opacity: 0;
    transition: all 0.5s ease;
}
.show-ring{
    opacity: 1;
}
.mid-show-img{
    display: inline-block;
    width: 1.86875rem;
    height: 2.8125rem;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 5px;
    margin-right:5px;  
}
.mid-show-img:hover{
    border: solid 1px #9c827d;
}




</style>