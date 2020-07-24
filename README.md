# dr

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 1、项目描述
此项目拥有用户注册，用户登录，购物车，订单页面，完成支付与评价等功能，是前后端分离的单页面项目

### 2、一下项目所展示技术栈包含
Vue-cli、Vue-router、VueX、Axios、Elenment-ui、Node.js、Express、Mongodb

### 3、项目初始化开发
使用脚手架创建项目  

安装所有依赖/指定依赖  

开发环境运行  

生产环境打包与发布  


### 4、搭建项目整体界面结构
vue-router的理解和使用  

    router-view/router-link/keep-alive  
    
    $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)  
    
    $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params  
    
项目路由拆分  

    顶部导航组件:titleBar  
    
    顶部导航子组件：goodsItem  
    
    
### 5、组件的抽取
公共组件:  

  bottomBar(底部)、classRing（分类页面)、scrollTopBar(回到顶部)、  
  
  slideArrow(箭头组件)、somebtn(一些公共按钮)、toast(吐司)  
  
  
### 6、注册/登录路由组件
register/login

### 7、后台项目
启动后台项目: 理解前后台分离  

express + mongodb

### 8、前后台交互
ajax请求库: axios  

ajax请求函数封装: axios + promise  

接口请求函数封装: 每个后台接口

### 9、异步操作
封装ajax:   

    promise+axios封装ajax请求的函数  
    
    封装每个接口对应的请求函数(能根据接口定义ajax请求函数)  
    
    解决ajax的跨越域问题: 配置代理, 对代理的理解  
    
vuex编码  

    创建所有相关的模块: store/index|state|mutations|actions|getters|mutation-types  
    
    设计state: 从后台获取的数据  
    
    实现actions:   
    
        定义异步action: async/await  
        
        流程:　发ajax获取数据, commit给mutation  
        
    实现mutations: 给状态赋值  
    
    实现index: 创建store对象  
    
    main.js: 配置store  
    
组件异步显示数据  

    在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中  
    
    mapState(['xxx'])读取state中数据到组件中  
    
    在模板中显示xxx的数据  
    
模板中显示数据的来源  

    data: 自身的数据(内部改变)  
    
    props: 外部传入的数据(外部改变)  
    
    computed: 根据data/props/别的compute/state/getters  
    
    
### 10、登陆/注册: 界面相关效果
a. 切换登陆方式  

b. 手机号合法检查  

c. 倒计时效果  

d. 切换显示或隐藏密码  

g. 前台验证提示  


### 10-1、登录/注册：动态功能实现
1). 2种方式 

   手机号/短信验证码登陆//未完成 
   
   用户名/密码/图片验证码登陆  
   
2). 登陆的基本流程  

   表单前台验证, 如果不通过, 提示  
   
   发送ajax请求, 得到返回的结果  
   
   根据结果的标识(code)来判断登陆请求是否成功  
   
       000001: 成功, 保存用户信息, localStorage.setItem  
       
       000002. 失败, 前台提示err  
       
3). vue自定义事件  

   绑定监听: @eventName="fn"  function fn (data) {// 处理}  
   
   分发事件: this.$emit('eventName', data)  
   
4). 注意:  

   使用network查看请求(路径/参数/请求方式/响应数据)  
   
   使用vue的chrome插件查看vuex中的state和组件中的数据  
   
   使用debugger语句调试代码  
   
   实参类型与形参类型的匹配问题  
   

### 11、前后台交互相关问题  

1). 如何查看你的应用是否发送某个ajax请求?   

    浏览器的network  

2). 发ajax请求404  

    请求的路径的对  
    
    代理是否生效(配置和重启)  
    
    服务器应用是否运行  
    
    
3). 后台返回了数据, 但页面没有显示?  

    vuex中是否有  
    
    组件中是否读取  
    
    
### 12、搭建商家整体界面  

1). 拆分界面路由  

2). 路由的定义/配置|使用  

3). 组件的最大化复用  

### 13、各个组件及其思路


### 14、遇到的问题
1：问题;,VueX中，组件shoppingBag，mutations中再模型上修改state中的[]中商品对象属性,使用set后仍无法做到响应式。  
   解决;要使用set直接修改[]中的obj是无法做到响应式，因为VUE记录的是[],所以要直接set修改[],   
   代码;
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
2:问题;,VueX中，组件shoppingBag，要在action发生网络请求,使用this.$http会导致错误。
  解决;VueX中this指向store,故使用this._vm.$root指向Vue实例
  代码;this._vm.$root.$http.post('toShoppingBag',{ 
                user:localStorage.getItem('token'),               
                obj:data
             })  
  
