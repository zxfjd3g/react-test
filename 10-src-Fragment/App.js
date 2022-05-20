import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  render() {
    return (
      // React.Fragment ==> 简写 ==> <></>
      <React.Fragment>
        <Test></Test>
      </React.Fragment>
    )
  }
}
