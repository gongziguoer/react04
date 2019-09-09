import React,{Component} from 'react';

//基础知识点版本：
// import Store from './store_base/store'
// import Change from './store_base/change'

// class App extends Component{
//   //在组件挂载后，添加事件监听,来监听数据修改
//   componentDidMount(){
//     Store.subscribe(()=>{
//       console.log('全局状态改变触发的监听')
//       this.setState({}) //更新界面
//     })
//   }
//   render(){
//     console.log(this,Store)
//     console.log(Store.getState()) //拿到为reduce中return出去的值
//     let {name}=Store.getState() //解构name
//     return(
//       <div>
//         <h3>redux</h3>
//         {name}
//        <hr/>
//        <Change></Change> 
//       </div>
//     )
    
//   }
// }

//改数，改名字版本：
// import ShowNum from './num/showNum'
// import ChangeNum from './num/changeNum'
// function App(){
//   return(
//     <div>
//       <ShowNum></ShowNum>
//       <ChangeNum></ChangeNum>
//     </div>
//   )

//todolist 版本
  import Box from './todolist/box'
  function App(){
    return(
      <div>
        <Box></Box>
        
      </div>
    )
}


export default App;
