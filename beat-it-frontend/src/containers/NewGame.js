import React from 'react'
import {withRouter} from 'react-router-dom'
import CardButton from '../components/CardButton'

class NewGame extends React.Component {

    state = {
        clicked: false
    }

    submitHandler = (e) => {
        if (e.target.id == "Start Game"){
            this.props.history.push("/genre")
        } else if (e.target.id == "View Scores"){
            this.props.history.push("/highscores")
        }
    }


    render(){
        console.log(this.props)

        return(
            <div>
                <h1>Beat It!</h1>
                <CardButton displayText="Start Game" submitHandler={this.submitHandler}/>
                <CardButton displayText="View Scores" submitHandler={this.submitHandler}/>
            </div>
        )
    }
}

export default withRouter(NewGame)