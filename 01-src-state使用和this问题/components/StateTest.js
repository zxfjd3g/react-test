import React from 'react'
class StateTest extends React.Component {

  /* 
  constructor () {
    super() // 必须调用super()
    // 初始化state
    this.state = {
      count: 0,
      xxx: 'abc'
    }
  } */

  // 初始化状态(简洁语法)
  state = {
    count: 0,
    xxx: 'abc'
  }


  render () {
    // 读取state数据
    const {count} = this.state

    return <div onClick={() => {
      // 直接更新状态数据 => 界面不会自动更新  不可用
      // this.state.count = count + 1
      
      // 通过setState()更新state => 界面会自动更新
      this.setState({
        count: count + 1
      })
    }}>点击的次数: {count}</div>
  }
}

export default StateTest