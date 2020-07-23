//防抖函数
export function debounce(fn,time){
    let timeout
    return function(){
      let that = this
      let agrs = arguments
      clearTimeout(timeout)
      timeout = setTimeout(function(){
        fn.apply(that,agrs)
      },time)
    }
  }