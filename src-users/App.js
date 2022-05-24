import React from "react"
import Search from './components/Search'
import Main from './components/Main'

class App extends React.Component {

  state = {
    searchName: ''
  }

  setSearchName = (searchName) => {
    this.setState({ searchName })
  }

  render () {
    return <div className="container">
      <Search setSearchName={this.setSearchName}></Search>
      <Main searchName={this.state.searchName}></Main>
    </div>
  }
}

export default App