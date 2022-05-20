import React from 'react'
import PropTypes from 'prop-types'

export default class ClassProps extends React.Component {
  // 指定属性名/属性值类型/属性的必要性
  static propTypes = {
    myName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    likes: PropTypes.array,
    wife: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    }).isRequired
  }

  // 指定属性的默认值
  static defaultProps = {
    likes: ['A', 'B', 'C']
  }

  render () {
    const { myName, age, likes, wife} = this.props
    return <div>
      <h2>ClassProps-个人信息</h2>
      <p>姓名: {myName}</p>
      <p>年龄: {age}</p>
      <p>爱好: {likes}</p>
      <p>老婆: {wife.name + ' : ' + wife.age}</p>
    </div>
  }
}

// 也可以在类外面通过类名来指定 ==> 函数组件只能这么指定
// ClassProps.propTypes = {}
// ClassProps.defaultTypes = {}