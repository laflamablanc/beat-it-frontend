import React from 'react'
import Timer from '../components/Timer'
import QuestionCard from '../components/QuestionCard'
import { Redirect } from 'react-router-dom'


class QuestionContainer extends React.Component{
    render(){
        return(
            this.state.user? 
            <div>
                <Timer gameDuration={this.props.gameDuration}/>
                <QuestionCard questionId={this.props.questionId}/>
            </div>
            :
            <Redirect to="/login"/>
        )
    }
}

export default QuestionContainer