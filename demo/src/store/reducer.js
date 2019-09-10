import State from './state'
export default (preState=State,action)=>{
    console.log('触发老佛爷')
    //添加JSON.parse 不会修改原数据
    let newData=JSON.parse(JSON.stringify(preState))
    let {type,params}=action
    switch (type) {
        case 'CHANGE_NUM':
            newData.num++
            break;
    
        default:
            break;
    }
    return newData  
}