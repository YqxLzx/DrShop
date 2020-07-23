export function throttle(fn,time){
    let that,agrs;
    let oldTime = 0;
    return function(){
      that = this;
      agrs = arguments;
      //获取当前时间戳
      let nowTime = new Date().valueOf();
      if(nowTime - oldTime > time){
        fn.apply(that,agrs)
        oldTime = nowTime;
      }          
    }
  }