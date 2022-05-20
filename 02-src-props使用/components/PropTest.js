import React from 'react'

/* 
函数组件: 通过参数props读取props数据
*/
export function FunProps(props) {
  return <h2>FunProps-个人信息: 姓名: {props.name}, 年龄: {props.age}</h2>
}

/* 
类组件: 通过this.props读取props数据
*/
export class ClassProps extends React.Component {
  render () {
    const { myName, age} = this.props
    return <h2>ClassProps-个人信息: 姓名: {myName}, 年龄: {age}</h2>
  }
}