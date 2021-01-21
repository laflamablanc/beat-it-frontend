import React from 'react'

class Difficulty extends React.Component {

    submitHandler = () => {
        this.props.history.push("/difficulty")
    }

    render(){
        return(
            <div>
                <h1>Select Difficulty</h1>
                <form>
                    <input type = "text" id = "username" name = "username" placeholder = "Type Username"/>
                    <button class = "play-button" type = "submit" value = "Play">🎵</button>
                </form>
            </div>
        )
    }
}

export default Difficulty