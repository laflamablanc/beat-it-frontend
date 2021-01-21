import React from 'react'
import {withRouter} from 'react-router-dom'

class NewGame extends React.Component {

    state = {
        clicked: false
    }

    submitHandler = () => {
        this.props.history.push("/genre")
    }


    render(){
        console.log(this.props)

        return(
            <div>
                <h1>New Game</h1>
                <form onSubmit={this.submitHandler}>
                    <input type = "text" id = "username" name = "username" placeholder = "Type Username"/>
                    <button class = "play-button" type = "submit" value = "Play">🎵</button>
                </form>
            </div>
        )
    }
}

export default withRouter(NewGame)