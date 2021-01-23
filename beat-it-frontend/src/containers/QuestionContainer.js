import React from 'react'
import Timer from '../components/Timer'
import QuestionCard from '../components/QuestionCard'
import { Redirect } from 'react-router-dom'


class QuestionContainer extends React.Component{

    state = {
        questionArray: [],
        questionId: 1
    }

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

    componentDidMount(){
        fetch('http://localhost:3000/questions')
        .then(r=> r.json())
        .then(data => console.log("Questions", data))

    }
}

export default QuestionContainer