import React,{Component} from 'react';

import ActionCreator from '../store/actionCreator'
class ChangeNum extends Component{
  change(){
    ActionCreator.changeNum()
  }
  changeName(){
    ActionCreator.changeName('李磊')
  }
  render(){
    
    return(
      <div>
          <hr/>
        <h3>ChangeNum</h3>
        <button onClick={this.change}>add</button>
        <button onClick={this.changeName}>改名字</button>
      </div>
    )
    
  }
}

export default ChangeNum;
