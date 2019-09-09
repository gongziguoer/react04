import State from './state'
export default (preState=State,action)=>{
    console.log('修改前的数据',preState)
    console.log('state.js',State)
    let newData=preState
    let {type,params}=action
    switch (type) {
        case 'CHANGE_NUM':
            newData.num+=1
            break;
        case 'CHANGE_NAME':
            newData.name=params
            break;
        default:
            break;
    }
    console.log('修改后的数据',newData)
    return newData  //
}