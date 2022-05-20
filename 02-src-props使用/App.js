import React from "react"
import {FunProps, ClassProps} from './components/PropTest'

class App extends React.Component {
  state = {
    person: {
      myName: 'tom',
      age: 12
    }
  }

  render () {
    const {myName, age} = this.state.person
    return <div>
        <p>人员信息: {myName + ' : ' +age}</p>
        <button onClick={() => {
          this.setState({
            person: { myName: myName+'--', age: age+1}
          })
        }}>更新人员信息</button>
        <br/>

        <FunProps name={myName} age={age}/>
        <hr/>
        {/* <ClassProps myName={myName} age={age}/> */}
        <ClassProps {...this.state.person}/>
      </div>
  }
}

export default App
