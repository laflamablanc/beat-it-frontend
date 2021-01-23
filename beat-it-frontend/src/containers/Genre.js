import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import CardButton from '../components/CardButton'


class Genre extends React.Component {

    state = {
        user: this.props.user
        questionId: 1
    }


    clickHandler = (e) => {
        if (e.target.id == "Rap"){
            questionID = 1
        } else (e.target.id == "Rock"){
            questionID = 37
        }

        this.props.history.push("/difficulty")

    }

    render(){
        console.log("GENRE!!!!", this.state.user)
        return(
            
            this.state.user? 
                    <div className = "card">
                        <h1>Select Genre</h1>
                        <CardButton displayText="Rap"/>
                        <CardButton displayText="Rock"/>
                    </div>

            :
           <Redirect to="/login"/>
        )
           
    }
}

export default withRouter(Genre)