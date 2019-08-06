import React from 'react';
import Modal from 'react-modal';

import './index.less';

class ProfilePage extends React.Component {
    state = { actualUserData : {userName : 'Lele', userLastName : 'Alegria', userBirthDate : '23/10/1995', userEmail : 'annaalegria23@hotmail.com', userPassword : 'uauauiua'},
              newUserData : {userName : '', userLastName : '', userBirthDate : '', userEmail : '', userPassword : '', userConfirmPassword : ''},
              isEditOn : false, isModalOpen : false};

    onFormSubmit = (event) => {
        event.preventDefault(); //para impedir de atualizar a pagina depois de enivar o formulario
    }

    onSaveClick = () => {
        const {actualUserData, newUserData} = this.state

        if(newUserData.userPassword === newUserData.userConfirmPassword) {
            let dataToBeSaved = {};
    
            for (let field in actualUserData) {
                if(actualUserData.hasOwnProperty(field)) {
                  if (newUserData[field] !== '') {
                    dataToBeSaved[field] = newUserData[field];
                  }
                  else {
                    dataToBeSaved[field] = actualUserData[field];
                  }
                }
            } 
            this.setState({actualUserData: dataToBeSaved});
            this.setState({isEditOn : false});
        }
        
    }

    handleCloseModal = () => {
        this.setState({isModalOpen : false})
    }

    onClickYesButton = () => {
        this.setState({newUserData :{ userName : '', userLastName : '', userBirthDate : '', userEmail : '', userPassword : ''}, isEditOn : false});
        this.handleCloseModal();
    }

    render() {
        const {actualUserData, newUserData, isEditOn, isModalOpen} = this.state

        return (
            <div className="profilePageContainer" >
                <div className = "headerProfileContainer">
                    Profile
                </div>
                <div className = "editProfileButton" onClick = {() => {this.setState({isEditOn : !isEditOn}); this.setState({newUserData : actualUserData})}}>
                    edit
                </div>
                <div className = "fieldProfileContainer">
                    <div className = "fieldNameProfileContainer">Name: </div>
                    <div className = "infoProfileContainer">
                        {(isEditOn) ? <form className = "formProfileContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "changeUserInputContainer"
                                type = "text" 
                                value = {newUserData.userName} 
                                onChange = {(event)=>{this.setState({newUserData: {...newUserData, userName: event.target.value}})}}
                            />
                        </form>
                        : actualUserData.userName}
                    </div>
                </div>
                <div className = "fieldProfileContainer">
                    <div className = "fieldNameProfileContainer">Last Name: </div>
                    <div className = "infoProfileContainer">
                        {(isEditOn) ? <form className = "formProfileContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "changeUserInputContainer"
                                type = "text" 
                                value = {newUserData.userLastName} 
                                onChange = {(event)=>{this.setState({newUserData: {...newUserData, userLastName: event.target.value}})}}
                            />
                        </form>
                        : actualUserData.userLastName}
                    </div>
                </div>
                <div className = "fieldProfileContainer">
                    <div className = "fieldNameProfileContainer">Birthday: </div>
                    <div className = "infoProfileContainer">
                        {(isEditOn) ? <form className = "formProfileContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "changeUserInputContainer"
                                type = "text" 
                                value = {newUserData.userBirthDate} 
                                onChange = {(event)=>{this.setState({newUserData: {...newUserData, userBirthDate: event.target.value}})}}
                            />
                        </form>
                        : actualUserData.userBirthDate}
                    </div>
                </div>
                <div className = "fieldProfileContainer">
                    <div className = "fieldNameProfileContainer">Email: </div>
                    <div className = "infoProfileContainer">
                        {(isEditOn) ? <form className = "formProfileContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "changeUserInputContainer"
                                type = "text" 
                                value = {newUserData.userEmail} 
                                onChange = {(event)=>{this.setState({newUserData: {...newUserData, userEmail: event.target.value}})}}
                            />
                        </form>
                        : actualUserData.userEmail}
                    </div>
                </div>
                <div className = "fieldProfileContainer">
                    <div className = "fieldNameProfileContainer">Password: </div>
                    <div className = "infoProfileContainer">
                        {(isEditOn) ? <form className = "formProfileContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "changeUserInputContainer"
                                type = "password" 
                                value = {newUserData.userPassword} 
                                onChange = {(event)=>{this.setState({newUserData: {...newUserData, userPassword: event.target.value}})}}
                            />
                        </form>
                        : ''}
                    </div>
                </div>
                <div className = "fieldProfileContainer" style={{display: (isEditOn) ? '' : 'none'}}>
                    <div className = "fieldNameProfileContainer">Confirm Password:  </div>
                    <div className = "infoProfileContainer">
                        <form className = "formProfileContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "changeUserInputContainer"
                                type = "password" 
                                value = {newUserData.userConfirmPassword} 
                                onChange = {(event)=>{this.setState({newUserData: {...newUserData, userConfirmPassword : event.target.value}})}}
                            />
                        </form>
                    </div>
                </div>
                <div className = "profileBottomButtonsContainer" style={{display: (isEditOn) ? '' : 'none'}} >
                    <div className = "profileBottomButton" onClick = {this.onSaveClick}>
                        save
                    </div>
                    <div className = "profileBottomButton" onClick = {() => this.setState({isModalOpen: true})}>
                        cancel
                    </div>
                </div>
                <Modal
                    className = "yesNoModal"
                    isOpen = {isModalOpen}
                    onRequestClose = {this.handleCloseModal}
                    ariaHideApp={false}
                    shouldFocusAfterRender={false}
                >
                    <div>
                        Do you want to cancel?
                    </div>
                    <div className = "yesNoContainer">
                        <div className = "yesNoButton" onClick = {this.onClickYesButton}>
                            Yes
                        </div>
                        <div className = "yesNoButton" onClick = {this.handleCloseModal}>
                            No
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ProfilePage;