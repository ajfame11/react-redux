import React, { Component } from 'react'
import { getUser } from '../actions/userActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getToken } from '../services/local-storage'

class Profile extends Component {


    componentDidMount() {
      // console.log("A", this.props)
      this.props.getUser()
    }

  render() {
    // console.log(this.props.user)
    return (
      <div>

        {/* {!getToken() ? <Redirect to="/login" /> : null} */}

          {this.props.user && this.props.user.username ? <h1>{this.props.user.username}'s Profile</h1> : <h1>Loading...</h1>}

      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("Profile", state)
  return {
    user: state.userReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)