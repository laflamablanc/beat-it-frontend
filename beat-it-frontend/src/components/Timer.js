import React from 'react'

class Timer extends React.Component{
    render(){
        return(
            <div>
                <h2> Timer: {this.props.time}</h2>
            </div>
        )
    }

    componentDidMount(){
        
    }
}

export default Timer