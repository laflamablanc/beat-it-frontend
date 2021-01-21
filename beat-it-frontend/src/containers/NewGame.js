import React from 'react'
import {Redirect} from 'react-router-dom'

class NewGame extends React.Component {

    state = {
        clicked: false
    }

    submitHandler = () => {
        this.setState({
            clicked: true
        })
    }

    render(){

        return(
            <div>
            {this.state.clicked? <Redirect to='/genre' /> :
            <div>
                <h1>New Game</h1>
                <form onSubmit={this.submitHandler}>
                    <input type = "text" id = "username" name = "username" placeholder = "Type Username"/>
                    <button class = "play-button" type = "submit" value = "Play">🎵</button>
                </form>
            </div>
        }

            </div>

        )
    }
}

export default NewGame