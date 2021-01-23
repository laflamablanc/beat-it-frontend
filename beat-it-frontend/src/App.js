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
    user: null
  }
  render(){
  
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" render={()=> <Login/>}/>
        <Route path="/signup" render={()=> <Signup/>}/>
        <Route path="/genre" render={()=> <Genre/>}/>
        <Route path="/difficulty" render={()=> <Difficulty/>}/>
        <Route path="/highscores" render={()=> <HighScores/>}/>
        <Route path="/" render={()=> <NewGame/>}/>
      </Switch>
    </React.Fragment>
  );
  }
    
}

export default App;
