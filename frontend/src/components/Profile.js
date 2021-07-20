import React, { Component } from 'react'
// import { getUser } from '../redux/actions/userActions'
import { connect } from 'react-redux'
// import { getToken } from '../services/local-storage'
import { Redirect } from 'react-router-dom'
import { profileRequest } from '../services/api'

class Profile extends Component {

    state = {
        username: '',
        email: '',
        posts: [],
        comments:[]
    }

    componentDidMount() {
        profileRequest()
        .then(res => {
            if (!res.error) {
                this.setState({username: res.username, email: res.email, posts: res.posts, comments: res.comments})
            }
        })
    }

  render() {
    return (
      <div>
          {this.state.username ? <h1>{this.state.username}'s Profile</h1> : <h1>Loading...</h1>}
{/* 
        {!getToken() ? <Redirect to="/login" /> : null}

        {this.props.user.username ? <h1>{this.props.user.username}'s Profile</h1> : <h1>Loading...</h1>} */}

      </div>
    )
  }
}

// const mapStateToProps = state => {
//   const {user, groceryItems} = state
//   return {
//     user, groceryItems
//   }
// }

// export default connect(mapStateToProps)(Profile)

export default Profile