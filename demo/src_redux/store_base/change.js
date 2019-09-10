import React,{Component} from 'react';
import ActionCreator from './actionCreator'

class Change extends Component{
    changeName(){
        ActionCreator.changeName('李磊')  
    }
  render(){
    return(
      <div>
        <h6>修改全局状态值</h6>
        <button onClick={this.changeName}>改名字</button>
      </div>
    )
    
  }
}

export default Change;
