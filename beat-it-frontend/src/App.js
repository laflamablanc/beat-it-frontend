import './App.css';
import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Login from './containers/Login'
import Signup from './containers/Signup'
import NewGame from './containers/NewGame'
import Genre from './containers/Genre'
import Difficulty from './containers/Difficulty'
import HighScores from './containers/HighScores'
import QuestionContainer from './containers/QuestionContainer'




class App extends React.Component {

  state = {
    user: null,
    questionID: null,
    time: null,
    gameDuration: 60,
    resetDuration: 0,
    gameSecElapsed: 0,
    gameInterval: 0
  }

  genreSelect = (e) => {
    if (e.target.id === "Rap"){
        this.setState({
          questionID: 1
        })
    } else if(e.target.id === "Rock"){
        this.setState({
          questionId: 37
        })
    }
    this.props.history.push("/difficulty")
  }

  difficultySelect = (e) => {
  
    if (e.target.id === "Easy"){
        this.setState({
          gameDuration: 60
        })
    } else if (e.target.id === "Medium"){
      this.setState({
        gameDuration: 30
      })
    } else if (e.target.id === "Hard"){
      this.setState({
        gameDuration: 15
      })
    }
    this.props.history.push(`/question/${this.state.questionID}`)
  }

  submitCredentials = (userObj) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userObj})
    })
    .then(r => r.json())
    .then(user => {
      this.setState({
        user: userObj
      })
      this.props.history.push("/")
    })
  }

  render(){
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" render={()=> <Login submitCredentials={this.submitCredentials}/>}/>
          <Route path="/signup" render={()=> <Signup submitCredentials={this.submitCredentials}/>}/>
          <Route path="/genre" render={()=> <Genre user = {this.state.user} questionID = {this.state.questionID}/>}/>
          <Route path="/difficulty" render={()=> <Difficulty user = {this.state.user} difficultySelect = {this.difficultySelect}/>}/>
          <Route path="/highscores" render={()=> <HighScores user = {this.state.user}/>}/>
          <Route path="/question/" render={()=> <QuestionContainer user = {this.state.user} questionID = {this.state.questionId} gameDuration = {this.state.gameDuration}/>}/>
          <Route path="/" render={()=> <NewGame user = {this.state.user}/>}/>
        </Switch>
      </React.Fragment>
    );
  }
    
}

export default withRouter(App);
