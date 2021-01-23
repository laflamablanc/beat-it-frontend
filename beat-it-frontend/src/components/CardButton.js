import React from 'react'

class CardButton extends React.Component {
    render(){
        return(
            <div className = "play-button">
                <div id={this.props.displayText} onClick={this.props.clickHandler}>{this.props.displayText}</div>
            </div>
        )
    }
}

export default CardButton