import React from "react"
import StateTest from './components/StateTest'
import EventThis from './components/EventThis'

/* 
1. 组件名首字母必须大写. 因为react以此来区分组件元素和react元素
2. 组件内部如果有多个标签,必须使用一个根标签包裹.只能有一个根标签
3. 必须有返回值.返回的内容就是组件呈现的结构, 如果返回值为 null，表示不渲染任何内容
4. 会在组件标签渲染时调用, 但不会产生实例对象,  不能有状态
*/

/* 
function App() {
  // return null
  return <div>
      <h2>App</h2>
      <div>内容部分</div>
    </div>
} */

class App extends React.Component {
  render () {
    return <div>
        <StateTest />
        <hr/>
        <EventThis />
      </div>
  }
}

export default App
