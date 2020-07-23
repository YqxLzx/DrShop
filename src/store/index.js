import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getter'
import actions from './actions'
import shoppingBag from './modules/shoppingBag'
Vue.use(Vuex)

const state = {
    midClassRing:[],
    defaultmidClassRing:[],
    fiters:{
      name:'',
      weight:{
        minNum:null,
        maxNum:null
      },
      shape:'',
      price:{
        minPrice:0,
        maxPrice:Infinity
      }
    },
    screenShow:{
      ifshow:false,
      showFiterNameText:'',
      showFiterWeigtText:'',
      showFiterShapeText:'',
      showFiterPriceText:'',
      showWeigthText:'',

    }    
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    shoppingBag:shoppingBag
  }
  
})



