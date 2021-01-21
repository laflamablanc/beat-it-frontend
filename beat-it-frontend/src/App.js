import './App.css';
import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Login from './containers/Login'
import Signup from './containers/Signup'
import NewGame from './containers/NewGame'
import Genre from './containers/Genre'
import Difficulty from './containers/Difficulty'


class App extends React.Component {

  state = {
    user: null
  }
  render(){
  
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/genre" component={Genre}/>
        <Route path="/difficulty" component={Difficulty}/>
        <Route path="/" component={NewGame}/>
      </Switch>
    </React.Fragment>
  );
  }
    
}

export default App;
