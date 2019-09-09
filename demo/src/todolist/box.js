import React,{Component} from 'react'
import Input from './input'
import List from './list'

//只当一个容器层来使用
function Box(){
    return(
        <div>
            <Input></Input>
            <List></List>
        </div>
    )
}
export default Box