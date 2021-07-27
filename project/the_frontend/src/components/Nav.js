import React from 'react';


import { NavLink } from 'react-router-dom'

const Nav = () => {
    const link = {
        color: "blue",
        padding: 20 

    }
    const activeLink = {
        color: "white", 
        fontWeight: "bold"
    }
    return(
        <div className="navbar">
                <NavLink 
                exact
                to="/"
                style={link}
                activeStyle={activeLink}
                >
                    Home
                </NavLink>

                <NavLink 
                exact
                to="/posts"
                style={link}
                activeStyle={activeLink}
                >
                    Posts
                </NavLink>
                
                <NavLink 
                exact
                to="/about"
                style={link}
                activeStyle={activeLink}
                >
                    About
              </NavLink>
            
        </div>
    )
}

export default Nav