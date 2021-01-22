import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'


class Genre extends React.Component {

    state = {
        user: null
    }

    submitHandler = () => {
        this.props.history.push("/difficulty")
    }

    render(){
        return(
            this.state.user? 
                    <div>
                        <h1>Select Genre</h1>
                        <form onSubmit={this.submitHandler}>
                            <input type = "text" id = "username" name = "username" placeholder = "Type Username"/>
                            <button class = "play-button" type = "submit" value = "Play">🎵</button>
                        </form>
                    </div>

            :
           <Redirect to="/login"/>
        )
           
    }
}

export default withRouter(Genre)