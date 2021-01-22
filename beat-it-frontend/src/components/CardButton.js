import React from 'react'

class CardButton extends React.Component {
    render(){
        return(
            <div>
                <button id={this.props.displayText} onClick={this.props.submitHandler}>{this.props.displayText}</button>
            </div>
        )
    }
}

export default CardButton