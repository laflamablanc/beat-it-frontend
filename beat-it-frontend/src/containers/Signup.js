import React from 'react'
import {Link} from 'react-router-dom'

class Signup extends React.Component{

    state = {
        username: "",
        password: ""
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitCredentials(this.state)
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    render(){
        return(
            <div className="card">
                <div className="login-page-card">
                <img src="/LoginLogoClear.png" alt=""/>
                <h5 className="login-page-header-text login-page-header-text-sm"> Please Signup Below </h5>
                <form className="login-page-form" onSubmit = {this.localSubmitHandler}>
                    <label className="login-page-input-text" for="username">Username:</label><br/>
                    <input className="login-page-input" placeholder="username" type="text" id="username" name="username" onChange = {this.handleChange} value={this.state.username}/><br/>
                    <label className="login-page-input-text" for="password">Password:</label><br/>
                    <input className="login-page-input" placeholder="password" type="password" id="password" name="password" onChange = {this.handleChange} value = {this.state.password}/><br/>
                    <input className="login-page-submit" type="submit" id="submit" name="submit"/>
                    <br/>
                    <Link to="/signup"> Create Account Here </Link>
                </form>
                </div>
            </div>
        )
    }
}


export default Signup