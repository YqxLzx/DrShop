import { save_MidClassRing,fiterName,fiterWeight, sortArr,clearAllFiter,fiterShape
,fiterPrice,pushClassRing,clearSort} from './mutation-types'
const _ = require('lodash');
export default  {
    //保存初始数组
    [save_MidClassRing](state,data){
      state.midClassRing = data        
      //state.defaultmidClassRing= data.slice(0,19)
      //state.defaultmidClassRing = [...data] 
      //state.defaultmidClassRing = data.map(item => Object.assign({},item))
      state.defaultmidClassRing = _.cloneDeep(state.midClassRing)

    },
    /*[save_MidClassRing](state,data){
      for(var i =0;i <= 5;i++){
        state.midClassRing.push(data[i]);
      }
    },*/
    [pushClassRing](state,payload){
      state.midClassRing.push(payload.res.ret);
      console.log(payload.res.ret)
    },
    //筛选系列
    [fiterName](state,data){
      state.fiters.name = data;
      state.screenShow.showFiterNameText =  data
      state.screenShow.ifshow = true;
    },
    //筛选重量(克拉)
    [fiterWeight](state,payload){
      state.fiters.weight.minNum = payload.min;
      state.fiters.weight.maxNum = payload.max;
      state.screenShow.showFiterWeigtText = `${ payload.min}--${ payload.max}`
      state.screenShow.ifshow = true;      
    },
    //筛选形状
    [fiterShape](state,data){
      state.fiters.shape = data;
      state.screenShow.showFiterShapeText = data;
      state.screenShow.ifshow = true;
    },
    //筛选价格
    [fiterPrice](state,payload){
      state.fiters.price.minPrice = payload.minPrice;
      state.fiters.price.maxPrice = payload.maxPrice;
      state.screenShow.ifshow = true;
      state.screenShow.showFiterPriceText = `${payload.minPrice}--${payload.maxPrice}`;
    },
    //排序
    [sortArr](state,fn){ 
      state.midClassRing.sort(fn);
    },
    //清除排序
    [clearSort](state){
      state.midClassRing = _.cloneDeep(state.defaultmidClassRing)
    },
    //清除筛选及过滤
    [clearAllFiter](state){
      state.fiters.name = '';
      state.fiters.weight.minNum = null;
      state.fiters.weight.maxNum = null;
      state.screenShow.showFiterText = [];
      state.screenShow.ifshow = false;
      state.fiters.shape='';
      state.fiters.price.minPrice = 0;
      state.fiters.price.maxPrice = Infinity;

      state.screenShow.showFiterNameText = null;
      state.screenShow.showFiterWeigtText = null;
      state.screenShow.showFiterShapeText = null;
      state.screenShow.showFiterPriceText = null;
      state.screenShow.showWeigthText = null;
    },
 
  }
