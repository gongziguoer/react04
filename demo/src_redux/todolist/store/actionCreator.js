import actionType from "./action-type";
import Store from './store'
export default{
    addlist(params){
        //type类型就可以用 actionType l里声明的常量进行使用
        let action={
            type:actionType.ADD_LIST,
            params:params
        }
        Store.dispatch(action)
    },
    dellist(params){
        let action={
            type:actionType.DEL_LIST,
            params:params
        }
        Store.dispatch(action)  
    }
}