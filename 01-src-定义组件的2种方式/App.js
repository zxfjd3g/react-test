import React from 'react'

/* 
function App() {
  console.log('App', this)
  return (
    <div>函数组件</div>
  )
} */

class App extends React.Component {
  
  render () {
    console.log(this)
    return <div>类组件</div>
  }
}

export default App
