import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import CardButton from '../components/CardButton'


class Genre extends React.Component {

    state = {
        user: this.props.user,
        questionId: this.props.questionId
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