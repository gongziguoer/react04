import React,{Component} from 'react'
import Store from './store/store'
import ActionCreator from './store/actionCreator'
//import actionCreator from './store/actionCreator';
class List extends Component{
    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({})   //一定要传一个空对象
        })
    }
    del=(index)=>{
        ActionCreator.dellist(index)
    }
    render(){
        let {list}=Store.getState() //获取list 的值
        return(
            <div>
                <ul>
                    {list.map((item,index)=>{
                        return <li key={index}>{item}
                        <button onClick={this.del.bind(this,index)}>删除</button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default List