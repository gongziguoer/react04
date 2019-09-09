import React,{Component} from 'react'
import ActionCreator from './store/actionCreator'
class Input extends Component{
    constructor(){
        super()
        this.state={
            input:''
        }
    }
    add=()=>{
        //alert(this.state.input)
        ActionCreator.addlist(this.state.input) //input 框中输入的数据作为参数，传进去
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.input} onChange={
                    (e)=>{
                        this.setState({input:e.target.value})
                    }
                } />
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

export default Input