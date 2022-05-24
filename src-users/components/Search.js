import React, { Component } from 'react'

export default class Search extends Component {

  state = {
    searchName: ''
  }

  render() {
    const {searchName} = this.state
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input value={searchName} onChange={e => this.setState({
            searchName: e.target.value
          })} type="text" placeholder="enter the name you search"/>
          <button onClick={() => {
            const {searchName} = this.state
            this.props.setSearchName(searchName)
            this.setState({searchName: ''})
          }}>Search</button>
        </div>
      </section>
    )
  }
}
