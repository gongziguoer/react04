import {createStore} from 'redux'   //引入createStore方法,来创建全局状态对象
import reducer from './reducer'
const store =createStore(reducer)  //创建store
export default store
