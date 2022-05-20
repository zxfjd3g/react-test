import React from 'react'

/* 
非受控组件
*/
export default class FormTest extends React.Component {

  nameRef = React.createRef()
  pwdRef = React.createRef()

  submit = (e) => {
    // 阻止事件的默认行为(提交表单)
    e.preventDefault()

    const name = this.nameRef.current.value
    const pwd = this.pwdRef.current.value
    alert(`提交登陆请求 name=${name}, pwd=${pwd}`)
  }

  render () {
    return (
      <form action=''>
        <h2>登陆页面(非受控组件)</h2>
        用户名: <input type="text" ref={this.nameRef}/> <br/>
        密  码: <input type="password" ref={this.pwdRef}/> <br/>
        <input type="submit" value="登 陆" onClick={this.submit}/>
      </form>
    )
  }
}

/* 
受控组件
*/
export class FormTest2 extends React.Component {
  state = {
    name: 'admin',
    pwd: '123456'
  }

  submit = (e) => {
    // 阻止事件的默认行为(提交表单)
    e.preventDefault()
    const {name, pwd} = this.state
    alert(`提交登陆请求 name=${name}, pwd=${pwd}`)
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handlePwdChange = (e) => {
    this.setState({
      pwd: e.target.value
    })
  }

  render () {
    const {name, pwd} = this.state

    return (
      <form action=''>
        <h2>登陆页面(受控组件)</h2>
        用户名: <input type="text" value={name} onChange={this.handleNameChange}/> <br/>
        密  码: <input type="password" value={pwd} onChange={this.handlePwdChange}/> <br/>
        <input type="submit" value="登 陆" onClick={this.submit}/>
      </form>
    )
  }
}

/* 
受控组件=> 优化
*/
export class FormTest3 extends React.Component {
  state = {
    name: 'admin',
    pwd: '123456'
  }

  submit = (e) => {
    // 阻止事件的默认行为(提交表单)
    e.preventDefault()
    const {name, pwd} = this.state
    alert(`提交登陆请求 name=${name}, pwd=${pwd}`)
  }

  handleChange = (e, prop) => {
    this.setState({
      [prop]: e.target.value
    })
  }

  render () {
    const {name, pwd} = this.state

    return (
      <form action=''>
        <h2>登陆页面(优化)</h2>
        用户名: <input type="text" value={name} onChange={e => this.handleChange(e, 'name')}/> <br/>
        密  码: <input type="password" value={pwd} onChange={e => this.handleChange(e, 'pwd')}/> <br/>
        <input type="submit" value="登 陆" onClick={this.submit}/>
      </form>
    )
  }
}

/* 
受控组件=> 优化2
*/
export class FormTest4 extends React.Component {
  state = {
    name: 'admin',
    pwd: '123456'
  }

  submit = (e) => {
    // 阻止事件的默认行为(提交表单)
    e.preventDefault()
    const {name, pwd} = this.state
    alert(`提交登陆请求 name=${name}, pwd=${pwd}`)
  }

  handleChange = (prop) => {
    return (e) => {
      this.setState({
        [prop]: e.target.value
      })
    }
  }

  render () {
    const {name, pwd} = this.state

    return (
      <form action=''>
        <h2>登陆页面(优化2)</h2>
        用户名: <input type="text" value={name} onChange={this.handleChange('name')}/> <br/>
        密  码: <input type="password" value={pwd} onChange={this.handleChange('pwd')}/> <br/>
        <input type="submit" value="登 陆" onClick={this.submit}/>
      </form>
    )
  }
}