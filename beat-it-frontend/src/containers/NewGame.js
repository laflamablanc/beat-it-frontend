import React from 'react'

class NewGame extends React.Component {
    render(){
        return(
            <div>
                <h1>New Game</h1>
                <form>
                    <input type = "text" id = "username" name = "username" placeholder = "Type Username"/>
                    <button class = "play-button" type = "submit" value = "Play">🎵</button>
                </form>
            </div>
        )
    }
}