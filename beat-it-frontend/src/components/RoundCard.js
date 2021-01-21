import React from 'react'

const RoundCard = (props) => {
    return(
        <div>
        <h2>Round ${props.round}</h2>
        <button class= "play-buttons" data-choice = " " type="button">Start Round</button>
    </div>
    )
}

export default RoundCard








