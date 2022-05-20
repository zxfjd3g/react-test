import React from 'react'

class EventThis extends React.Component {

  constructor () { // 构造器中的this是组件对象
    super()
    /* 
    解决办法2 - bind绑定this
    原因: 构造器中的this是组件对象, 将处理函数通过bind绑定为了组件对象
    */
    this.handle3 = this.handle3.bind(this)

    /* 
    this.handle4 = () =>  {
      console.log(this)
      this.setState({
        count: this.state.count + 3
      })
    } */
  }
  
	// 初始化state
  state = { count: 0 }

  /* 
  问题: 类中定义的事件回调方法中this是undefined, 无法更新state
  原因: babel编译jsx. 采用的是严格模式, 事件监听函数中this就指向undefined
  */
  handle1 () {
    console.log(this) // this是undefined
    this.setState({ // 报错
      count: this.state.count + 1
    })
  }

  handle2 () {
    console.log(this)
    this.setState({
      count: this.state.count + 2
    })
  }

  handle3 () {
    console.log(this)
    this.setState({
      count: this.state.count + 3
    })
  }

  /* 
  解决办法3 - 箭头函数
  原因: 改为箭头函数后, 变为了给组件对象添加属性, 且是在构造器中执行的, 用的就是构造函数中的this
  */
  handle4 = () =>  {
    console.log(this)
    this.setState({
      count: this.state.count + 3
    })
  }


  render () { // render中的this是组件对象
    console.log('render()', this.state.count)
    
    return (
      <div>
        <h3>当前count为: {this.state.count}</h3>
        <button onClick={this.handle1}>点击报错, 有this问题</button>
        {/* 
        解决办法1 - 包裹箭头函数
        原因: render中的this是组件对象, 处理函数是我们通过组件对象来调用的
        */}
        <button onClick={() => {this.handle2()}}>解决办法1 - 包裹箭头函数</button>
        <button onClick={this.handle3}>解决办法2 - bind绑定this </button>
        <button onClick={this.handle4}>解决办法3 - 箭头函数</button>
      </div>
    )
  }
}

export default EventThis