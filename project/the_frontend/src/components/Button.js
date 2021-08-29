import React, { Component} from 'react';

export default class Button extends Component {

    constructor() {
        super();
        this.state = {
            likes: 0
        }
    }

    handleOnClick = () => {
        this.setState(prevState => {
            return{
                likes: prevState.likes + this.state.likes
            }
        })
            console.log()
    }

    render(){
        return (
            <div>
                <p>Likes: {this.state.likes}</p>
            <button onClick={this.handleOnClick}>Like</button>
            </div>
        )
    }
}