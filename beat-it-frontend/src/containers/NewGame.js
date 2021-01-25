import React from 'react'
import {withRouter} from 'react-router-dom'
import CardButton from '../components/CardButton'

class NewGame extends React.Component {

    state = {
        user: this.props.user
    }

    clickHandler = (e) => {

        if (e.target.id === "Start Game"){
            this.props.history.push("/genre")
        } else if (e.target.id === "View Scores"){
            this.props.history.push("/highscores")
        }
    }


    render(){
        console.log(this.state)

        return(
            <div id="page-header">
                <h1>Beat It!</h1>
                <CardButton displayText="Start Game" clickHandler={this.clickHandler}/>
                <CardButton displayText="View Scores" clickHandler={this.clickHandler}/>
            </div>
        )
    }
}

export default withRouter(NewGame)