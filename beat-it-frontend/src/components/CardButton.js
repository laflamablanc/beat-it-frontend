import React from 'react'

class CardButton extends React.Component {
    render(){
        return(
            <div>
                <h2>{this.props.displayText}</h2>
            </div>
        )
    }
}

export default CardButton