import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import CardButton from '../components/CardButton'


class Difficulty extends React.Component {

    state = {
        user: this.props.user,
        questionId: this.props.questionId
    }

    clickHandler = (e) => {
        this.props.difficultySelect(e)
        this.props.history.push("/question")
    }

   

    render(){
        return(
            this.state.user? 
                    <div className = "card">
                        <h1>Select Difficulty</h1>
                        <CardButton clickHandler={this.clickHandler} displayText="Easy"/>
                        <CardButton clickHandler={this.clickHandler} displayText="Medium"/>
                        <CardButton clickHandler={this.clickHandler} displayText="Hard"/>
                    </div>

            :
           <Redirect to='/question'/>
        )
           
    }
}

export default withRouter(Difficulty)