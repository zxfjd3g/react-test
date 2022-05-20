import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const element = <App />

console.log(element)
console.log(<div/>)

ReactDOM.render(element, document.getElementById('root'))

/* 
区别: 组件 / 组件实例对象 / 组件标签
1. 定义组件函数/类
2. 创建组件函数/类对应的虚拟DOM => 也就是我们写了一个组件标签
    type: 组件函数/类
    props: {}
3. 渲染组件标签
    如果是函数组件 => 调用函数得到用于界面显示的虚拟DOM => 生成对应的真实DOM显示到页面上
    如果是类组件 => 创建组件类的实例对象, 调用其render方法得到用于界面显示的虚拟DOM 
                  => 生成对应的真实DOM显示到页面上
*/