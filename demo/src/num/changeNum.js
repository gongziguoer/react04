import React,{Component} from 'react';
import ActionCreator from '../store/actionCreator'

 //引入bindActionCreators, 把ActionCreator 里的方法直接生成一个对象，并且传个dispatch ,就不用手动发送dispatch,会自动触发
import {bindActionCreators} from 'redux' 
import {connect} from 'react-redux'

class ChangeNum extends Component{
  
  render(){
    console.log('changeNum',this)
    return(
      <div>
          <hr/>
        <h3>ChangeNum</h3>
       {/* <button onClick={this.props.change}>add</button> */}
       <button onClick={this.props.changeNum}>add</button>
      </div>
    )
    
  }
}
//  mapDispatchToProps 也是一个函数
//接收dispatch 作为参数
//可以return 出去一个函数 数据直接挂载到props里

//原始版本
// let mapDispathToProps=(dispatch)=>{
//   return{
//     change(){
//       // alert(1111)
//       let action=ActionCreator.changeNum()
//       dispatch(action)  //这里接收dispatch 来提交action
//     }
//   }
// }
//export default connect(state=>state,mapDispathToProps)(ChangeNum);


//bindActionCreators版本
// let mapDispathToProps=(dispatch)=>{
//   return bindActionCreators(ActionCreator,dispatch)
//  return{
//    changeNum(){
//      dispatch(ActionCreator.changeNum)
//    },
//    xixi(){
//      dispatch(ActionCreator.xixi)
//    }
//  }
// }
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(ChangeNum);

