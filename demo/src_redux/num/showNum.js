import React,{Component} from 'react';
import Store from '../store/store'
class ShowNum extends Component{
  componentDidMount(){
    Store.subscribe(()=>{
      this.setState({})
    })
  }
  render(){
    let {num,name}=Store.getState()
    return(
      <div>
        <h3>显示数</h3>
       {num}
       <br/>
       {name}
      </div>
    )
    
  }
}

export default ShowNum;
