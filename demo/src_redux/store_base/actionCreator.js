import Store from './store'
export default{
    changeName(params){ //change.js里面changeName穿的参数而来
        //1. 创建action
        let action={
            type:'CHANGE_NAME',
            params:params
        }
        console.log('action创建者',action)
        Store.dispatch(action)  //2. 通过dispatch, 将action提交给老佛爷
    }
}