import React from "react"
import ClassProps from './components/PropTest'

class App extends React.Component {
  state = {
    person: {
      myName: 'tom',
      age: 21,
    }
  }

  render () {
    const {myName, age} = this.state.person
    return <div>
        <ClassProps myName={myName} age={age} wife={{name: 'marry', age: 20}}/>
      </div>
  }
}

export default App
