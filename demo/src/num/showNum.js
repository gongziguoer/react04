import React,{Component} from 'react';
import {connect} from 'react-redux' //connect也是一个高阶组件
class ShowNum extends Component{
  
  render(){
    console.log('showNum',this)
    return(
      <div>
        <h3>显示数</h3>
       {this.props.num}
      </div>
    )
    
  }
}
// mapStateToprops 是一个函数，
// 1：return出去的值挂载在props  
// 2：接收一个state参数 为全局状态值
//  state=>state  一个函数接收state 作为参数 并且返回state
let mapStateToprops=(state)=>{
  console.log(state)
  //return {hehe:123,xixi:456}
  return state
}


//connect 高阶组件需要2个参数
//export default connect(mapStateToprops)(ShowNum);
export default connect(state=>state)(ShowNum);
