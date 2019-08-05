import React from 'react';
import Modal from 'react-modal'

import './index.less';

import LogInModal from '../../modals/LogInModal/index'

class LogInPage extends React.Component {
    state = {user : '', password : '', isModalOpen : false}
    onFormSubmit = (event) => {
        event.preventDefault();
    }

    sigInOnClick = () => {
        //fazer verificação de log in 
        this.props.changePage("home")
    }

    handleCloseModal = () => {
        this.setState({isModalOpen : false})
    }
    
    render() {
        const {user, password, isModalOpen} = this.state
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
                            placeholder = "Type your email here"
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
                            placeholder = "Type your password here"
                        />
                    </form>
                </div>
                <Modal
                    className = "logInModal"
                    isOpen = {isModalOpen}
                    onRequestClose = {this.handleCloseModal}
                    ariaHideApp={false}
                    shouldFocusAfterRender={false}
                >
                    <LogInModal closeModal = {this.handleCloseModal}/>
                </Modal>    
                <div className = "newUserButton" onClick = {() => {this.setState({isModalOpen : true})}}>
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