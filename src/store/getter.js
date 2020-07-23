export default {
    //过滤
    fiter_midClassRing(state){
      return state.midClassRing.filter(item => {
        const nameFilterResult = state.midClassRing ? item.proposeClass_Ring.service.includes(state.fiters.name) : true;
        const weightFilterResult = state.fiters.weight.maxNum? 
        (state.fiters.weight.minNum < item.proposeClass_Ring.carat  &&  item.proposeClass_Ring.carat  < state.fiters.weight.maxNum) : true;
        const shapeFilterResult = state.midClassRing ? item.proposeClass_Ring.shape.includes(state.fiters.shape) : true;
        const priceFiterResult = state.midClassRing ? 
        (state.fiters.price.minPrice < item.proposeClass_Ring.price  &&  item.proposeClass_Ring.price  < state.fiters.price.maxPrice) : true;
        return nameFilterResult  &&  weightFilterResult && shapeFilterResult && priceFiterResult;                
    });
    },
    //筛选盒子 显示
    show_ifscrren(state){
      return state.screenShow.ifshow
    },
    //筛选盒子 内容
    showFiterNameText(state){
      return state.screenShow.showFiterNameText
    },
    showFiterWeigtText(state){
      return state.screenShow.showFiterWeigtText
    },
    showFiterShapeText(state){
      return state.screenShow.showFiterShapeText
    },
    showFiterPriceText(state){
      return state.screenShow.showFiterPriceText
    }
  }