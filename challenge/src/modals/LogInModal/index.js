import React from 'react'

import './index.less'

class LogInModal extends React.Component {
    state = {userName : '', lastName : '', birthday : '', email : '', password : '', confirmPassword : '', passwordError : ''}

    onFormSubmit = (event) => {
        event.preventDefault()
    }

    onSaveClick = () => {
        const {password, confirmPassword} = this.state
        if(password === confirmPassword && password !== '') {
            //enviar dados ao banco
            this.props.closeModal()
        }
        else if (password === '') {
            this.setState({passwordError : 'noPassword'})
        }
        else {
            this.setState({passwordError : 'difPasswords'})
        }
    }

    render () {
        const {userName, lastName, birthday, email, password, confirmPassword, passwordError} = this.state
        return (
            <div className = "newUserContainer">
                <div className = "infoNewUserContainer">
                    <label>Name: </label>
                     <form className = "formNewUserContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "newUserInputContainer"
                            type = "text"
                            value = {userName}
                            onChange = {(event)=>{this.setState({userName : event.target.value})}}
                        />
                    </form>
                </div>
                <div className = "infoNewUserContainer">
                    <label>Last Name: </label>
                     <form className = "formNewUserContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "newUserInputContainer"
                            type = "text"
                            value = {lastName} 
                            onChange = {(event)=>{this.setState({lastName : event.target.value})}}
                        />
                    </form>
                </div>
                <div className = "infoNewUserContainer">
                    <label>Birthday: </label>
                     <form className = "formNewUserContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "newUserInputContainer"
                            type = "text" 
                            value = {birthday}
                            onChange = {(event)=>{this.setState({birthday : event.target.value})}}
                        />
                    </form>
                </div>
                <div className = "infoNewUserContainer">
                    <label>Email: </label>
                     <form className = "formNewUserContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "newUserInputContainer"
                            type = "text" 
                            value = {email}
                            onChange = {(event)=>{this.setState({email : event.target.value})}}
                        />
                    </form>
                </div>
                <div className = "infoNewUserContainer">
                    <label>Password: </label>
                     <form className = "formNewUserContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "newUserInputContainer"
                            type = "password" 
                            value = {password}
                            onChange = {(event)=>{this.setState({password : event.target.value})}}
                        />
                    </form>
                </div>
                <div className = "infoNewUserContainer">
                    <label>Confirm Password: </label>
                     <form className = "formNewUserContainer" onSubmit = {this.onFormSubmit}>
                        <input 
                            className = "newUserInputContainer"
                            type = "password" 
                            value = {confirmPassword}
                            onChange = {(event)=>{this.setState({confirmPassword : event.target.value})}}
                        />
                    </form>
                </div>
                <div  className = "errorContainer" style = {{display : (passwordError === '') ? 'none' : ''}}>
                    {(passwordError === 'noPassword') ? 'Please type a password' : (passwordError === 'difPasswords') ? "Passwords don't match" : 'Error'}
                </div>
                <div className = "newUserSaveButton" onClick = {this.onSaveClick} >
                    save
                </div>
            </div>
        )
    }
}

export default LogInModal;