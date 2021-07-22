import React, { Component } from 'react'
import { authRequest } from '../services/api'
import { connect } from 'react-redux'

class Login extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    message: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, email, password } = this.state
    // authRequest({username, email, password}).then(console.log)

    authRequest({username, email, password})
    .then(res => {
      if (res.error) {
        this.setState({message: res.error})
      } else {
        localStorage.setItem('jwt', res.jwt)

        // this.props.history.push('/profile')
      }
    })
  }

  handleChangeUsername = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleChangeEmail = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleChangePassword = e => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div>

          {/* <p>{localStorage.getItem('jwt')}</p> */}

        <form onSubmit={this.handleSubmit}>

          <p style={{color: 'red'}}>{this.state.message}</p>

          <input type="text"
          name="username"
          onChange={this.handleChangeUsername}
          value={this.state.username}
          />

          <input type="text"
          name="email"
          onChange={this.handleChangeEmail}
          value={this.state.email}
          />

          <input type="password"
          name="password"
          onChange={this.handleChangePassword}
          value={this.state.password}
          />

          <input type="submit"
          value="Login"
          />

        </form>

      </div>
    )
  }

}

// const mapDispatchToProps = dispatch => {
//   return {
//     setUser: user => dispatch({type: 'SET_USER', payload: user})
//   }
// }

export default Login
// export default connect(null, mapDispatchToProps)(Login)