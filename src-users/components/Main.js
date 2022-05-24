import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {

  state = {
    firstView: true,
    loading: false,
    errorMsg: '',
    users: [],
  }

  async componentDidUpdate (prevProps) {
    const searchName = this.props.searchName
    if (searchName ===prevProps.searchName) return
    
    this.setState({
      firstView: false,
      loading: true
    })

    try {
      const response = await axios({
        url: 'https://api.github.com/search/users',
        params: {
          q: searchName
        }
      })
      const users = response.data.items.map(item => ({
        name: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url,
      }))
      this.setState({
        loading: false,
        users
      })
    } catch (error) {
      this.setState({
        loading: false,
        errorMsg: error.message
      })
    }
  }

  render() {
    const { firstView, loading, users, errorMsg } = this.state

    if (firstView) {
      return <h2>请输入关键字进行搜索</h2>
    } else if (loading) {
      return <h2>正在加载中...</h2>
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>
    }
    return (
      <div className="row">
        {
          users.map(user => (
            <div className="card" key={user.name}>
              <a href={user.url} target="_blank">
                <img src={user.avatar_url} style={{width: 100}}/>
              </a>
              <p className="card-text">{user.name}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
