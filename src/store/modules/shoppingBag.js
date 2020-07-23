import Vue from 'vue'
//const _ = require('lodash');
export default {
    state:{
        //addMerchandise:Object,
        addMerchandises:[], //所有商品所在的数组
        Science:{
            name:'白18金K',
            addPriceScience:0,
        },
        MainRing:{
            name:'50分F-G色',
            addPriceMainRing:0,            
        },
        ringSize:5,
        carving:''
    },
    mutations:{
        //选择材料
        chooseSku(state,palyload){
            state.Science.addPriceScience = palyload.price;
            state.Science.name = palyload.name;            
        },
        chooseMainRing(state,palyload){
            state.MainRing.addPriceMainRing = palyload.price;
            state.MainRing.name = palyload.name; 
        },
        //选择尺寸
        chooseSize(state,data){
            state.ringSize = data;           
        },
        //添加至购物车，商品添加进总数组
        goShoppingBag(state,palyload){
            if(palyload.haveShops){
                state.addMerchandises.push(palyload.data)
            }
            
        },
        //点击商品选择按钮
        /*isChecked(state,index){
            Vue.set(state.addMerchandises[index], 'checked', !(state.addMerchandises[index].checked));              
        },*/
        isChecked(state,index){ 
            Vue.set(
              state.addMerchandises,
              index,
              Object.assign(
                state.addMerchandises[index], 
                {
                    checked: !(state.addMerchandises[index].checked)
                }
              )
            );       
        },
        //刻字
        haveCarving(state,data){
            state.carving = data;
        }

    },
    actions:{
        addMongod({commit,state},data){
            data.price =  data.price + state.MainRing.addPriceMainRing + state.Science.addPriceScience
            let product = state.addMerchandises.find(item => item.price === data.price)
            var haveShops = false
            if(product){
                product.count += 1
            }else{
                data.checked = true
                //给具体商品添加特定属性
                data.chooseScience = state.Science.name
                data.chooseMainRing = state.MainRing.name
                data.ringSize = state.ringSize
                data.carving =  state.carving
                haveShops = true
            }            
           this._vm.$root.$http.post('toShoppingBag',{ 
                user:localStorage.getItem('token'),               
                obj:data
             })
            console.log(localStorage.getItem('token'))
            
            commit('goShoppingBag',{
                haveShops,
                data
            })
        }
    },
    getters:{
        lastAddPrice(state){
            return state.Science.addPriceScience + state.MainRing.addPriceMainRing
        },

    }
}