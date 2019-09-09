# react04
redux

######安装
npm install redux

######整体思路
1.获取全局变量  store对象下的 getState() 获取全局状态值
2.全局状态值改变 +  并且更新界面
    actionCreate 里的方法触发reducer 进行修改    dispatch 提交action
    Store.subscribe(()=>{}) 只要回调执行了  就说明全局状态值发生了改变  通过setState来更新界面

######各个组件的作用
state.js: 存放全局状态值的初始值

reducer.js:  根据action来修改全局状态值,处理数据
             preState  
             参数action: 为dispatch actionCReate 里提交的action
             根据 type 类型来判断要处理 actionCReate 里面的哪一个函数
             return 出去的值，就是全局状态值
            
Store：一个集结点
    提供3个方法
           getState  获取数据
           dispatch  提交数据
           subscribe  数据监听进行触发

