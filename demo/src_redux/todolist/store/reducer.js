import State from './state'
import actionType from './action-type'
export default(preState=State,action)=>{
    //这个里面的preState 即使是嵌套，也不要往下继续点，不要修改原数据
    let newData =preState   //根据action 修改数据
    let {type,params}=action //对传过来的action 里面的type，和params 进行解构
    switch (type) {
        case actionType.ADD_LIST:
            newData.list.push(params)
            break;
            case actionType.DEL_LIST:
                newData.list.splice(params,1)
                break;
    
        default:
            break;
    }
    return newData
}