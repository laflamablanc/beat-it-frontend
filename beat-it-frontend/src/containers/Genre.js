import React from 'react'

class Genre extends React.Component {

    submitHandler = () => {
        window.location = '/home/'
    }

    render(){
        return(
            <div>
                <h1>Select Genre</h1>
                <form>
                    <input type = "text" id = "username" name = "username" placeholder = "Type Username"/>
                    <button class = "play-button" type = "submit" value = "Play">🎵</button>
                </form>
            </div>
        )
    }
}

export default Genre