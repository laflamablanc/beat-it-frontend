import React from 'react'
import {withRouter} from 'react-router-dom'

class NewGame extends React.Component {

    state = {
        clicked: false
    }

    submitHandler = () => {
        this.props.history.push("/genre")
    }


    render(){
        console.log(this.props)

        return(
            <div>
                <h1>Beat It!</h1>
                <CardButton displayText="Start Game"/>
                <CardButton displayText="View Scores"/>
            </div>
        )
    }
}

export default withRouter(NewGame)