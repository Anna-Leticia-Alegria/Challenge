import React from 'react';

import './index.less';

class LogInPage extends React.Component {
    state = {user : '', password : ''}
    onFormSubmit = (event) => {
        event.preventDefault();
    }

    sigInOnClick = () => {
        //fazer verificação de log in 
        this.props.changePage("home")
    }
    
    render() {
        const {user, password} = this.state
        return (
            <div className="logInPageContainer">
                <div className="headerLogInContainer">
                    Login
                </div>
                <div className="logInContainer">
                    <form className = "formLogInContainer" onSubmit = {this.onFormSubmit}>
                        <label className = "labelLogInContainer">user: </label>
                        <input 
                            className = "changeLogInContainer"
                            type = "text" 
                            value = {user} 
                            onChange = {(event)=>{this.setState({user : event.target.value})}}
                        />
                    </form>
                </div>
                <div className="logInContainer">
                    <form className = "formLogInContainer" onSubmit = {this.onFormSubmit}>
                        <label className = "labelLogInContainer">password: </label>
                        <input 
                            className = "changeLogInContainer"
                            type = "password" 
                            value = {password} 
                            onChange = {(event)=>{this.setState({password : event.target.value})}}
                        />
                    </form>
                </div>
                <div className = "newUserButton">
                    new user
                </div>
                <div className = "signInButton"  onClick = {this.sigInOnClick}>
                    Sign In
                </div>
            </div>
        );
    }
}

export default LogInPage;