import React from "react"
import axios from 'axios'

class App extends React.Component {

  state = {
    url: '',
    repoName: ''
  }

  async componentDidMount () {
    const response = await axios('https://api.github.com/search/repositories?q=re&sort=stars')
    const {name, html_url} = response.data.items[0]
    this.setState({
      url: html_url,
      repoName: name
    })
  }

  render () {
    const { url, repoName } = this.state
    if (!url) {
      return <h3>正在加载中...</h3>
    }
    return <div>
      最受欢迎的仓库是: <a href={url}>{repoName}</a>
    </div>
  }
}

export default App