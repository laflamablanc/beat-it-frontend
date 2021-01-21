import React from 'react'
import {withRouter} from 'react-router-dom'


class Genre extends React.Component {

    submitHandler = () => {
        this.props.history.push("/difficulty")
    }

    render(){
        return(
            <div>
                <h1>Select Genre</h1>
                <form onSubmit={this.submitHandler}>
                    <input type = "text" id = "username" name = "username" placeholder = "Type Username"/>
                    <button class = "play-button" type = "submit" value = "Play">🎵</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Genre)