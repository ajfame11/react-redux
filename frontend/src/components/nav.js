import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { getToken, clearToken } from '../services/local-storage'
import './nav.css'

const Nav = () => {
    const link = {
        color: "lightgrey", 

    }
    const activeLink = {
        color: "white", 
        fontWeight: "bold"
    }
    
   const handleLogout = () => {
        clearToken()
        window.location.href="/login" 
      }
    
      const history= useHistory()
    const handleAllPosts = () => {
        history.push('/allposts')
    }
      const user= localStorage.getItem('jwt')
console.log(getToken())
    return(
        <div className="navbar">
            <div className="nav">
                 {
                     user?
                     <button onclick={handleLogout} >Logout</button>:
                     <div className="navItem">
                <NavLink 
                exact
                to="/login"
                style={link}
                activeStyle={activeLink}
                >
                   Login
                </NavLink>
                </div>
                 }

                <div>|</div>
                <div className="navItem">
                <NavLink 
                exact
                to="/drivers/new"
                style={link}
                activeStyle={activeLink}
                >
                    Sign-up
              </NavLink>
                </div>

                <div className="navItem" >
                    {user &&
                   <div>
                        <button>Create Post</button>
                        <button onClick={handleAllPosts}>All Posts</button>
                        <button>My Posts</button>
                        
                       </div>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Nav