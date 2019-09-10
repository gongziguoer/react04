import State from './state' //引入State默认值来进行使用


export default(prestate=State,action)=>{
    //本质为纯函数
    //参数1：prestate:修改之前的全局状态值
    //参数2：action:根据action来修改全局状态值，最后返回出去
    console.log('老佛爷数据修改',action)
    let newdata= prestate
    let {type,params}=action
    switch (type) { //根据actionCreate 里面的type类型来判断
        case 'CHANGE_NAME':
            newdata.name=params
            break;
    
        default:
            break;
    }
    console.log('修改后的数据',newdata)
    return newdata
}