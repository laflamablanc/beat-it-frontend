import './App.css';
import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Login from './containers/Login'
import Signup from './containers/Signup'
import NewGame from './containers/NewGame'
import Genre from './containers/Genre'
import Difficulty from './containers/Difficulty'
import HighScores from './containers/HighScores'



class App extends React.Component {

  state = {
    user: null,
    questionID: null,
    time: null
  }

  genreSelect = (e) => {
    if (e.target.id == "Rap"){
        questionID = 1
    } else (e.target.id == "Rock"){
        questionID = 37
    }
    this.props.history.push("/difficulty")
  }

  difficultySelect = (e) => {
    if (e.target.id == "Easy"){
        time = 60
    } else if (e.target.id == "Medium"){
      time = 30
    } else (e.target.id == "Hard"){
        time = 15
    }
    this.props.history.push("/difficulty")
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
    console.log("App User:", this.state.user)
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" render={()=> <Login submitCredentials={this.submitCredentials}/>}/>
          <Route path="/signup" render={()=> <Signup submitCredentials={this.submitCredentials}/>}/>
          <Route path="/genre" render={()=> <Genre user = {this.state.user}/>}/>
          <Route path="/difficulty" render={()=> <Difficulty user = {this.state.user}/>}/>
          <Route path="/highscores" render={()=> <HighScores user = {this.state.user}/>}/>
          <Route path="/" render={()=> <NewGame user = {this.state.user}/>}/>
        </Switch>
      </React.Fragment>
    );
  }
    
}

export default withRouter(App);
