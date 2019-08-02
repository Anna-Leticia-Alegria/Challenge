import React from 'react';

import './index.less';

class ProfilePage extends React.Component {
    state = { actualUserData : {userName : 'Lele', userLastName : 'Alegria', userBirthDate : '23/10/1995', userEmail : 'annaalegria23@hotmail.com', userPassword : 'uauauiua'},
              newUserData : {userName : '', userLastName : '', userBirthDate : '', userEmail : '', userPassword : ''},
              isEditOn : false};

    onFormSubmit = (event) => {
        event.preventDefault(); //para impedir de atualizar a pagina depois de enivar o formulario
    }

    onSaveClick = () => {
        const {actualUserData, newUserData} = this.state
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

    onCancelClick = () => {
        //abrir popup de "tem certeza que quer cancelar?"
        this.setState({newUserData :{ userName : '', userLastName : '', userBirthDate : '', userEmail : '', userPassword : ''}, isEditOn : false});
    }

    render() {
        const {isEditOn, actualUserData, newUserData} = this.state
        return (
            <div className="profilePageContainer" >
                <div className = "headerProfileContainer">
                    Profile
                </div>
                <div className = "editProfileButton" onClick = {() => {this.setState({isEditOn : true}); this.setState({newUserData : actualUserData})}}>
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
                                onChange = {(event)=>{this.setState( { newUserData : {userName : event.target.value, userLastName : newUserData.userLastName, userBirthDate :newUserData.userBirthDate, userEmail : newUserData.userEmail, userPassword : newUserData.userPassword} } )}}
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
                                onChange = {(event)=>{this.setState( { newUserData : {userName : newUserData.userName, userLastName : event.target.value, userBirthDate :newUserData.userBirthDate, userEmail : newUserData.userEmail, userPassword : newUserData.userPassword}} )}}
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
                                onChange = {(event)=>{this.setState( { newUserData : {userName : newUserData.userName, userLastName : newUserData.userLastName, userBirthDate : event.target.value, userEmail : newUserData.userEmail, userPassword : newUserData.userPassword} } )}}
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
                                onChange = {(event)=>{this.setState( { newUserData : {userName : newUserData.userName, userLastName : newUserData.userLastName, userBirthDate : newUserData.userBirthDate, userEmail : event.target.value, userPassword : newUserData.userPassword} } )}}
                            />
                        </form>
                        : actualUserData.userEmail}
                    </div>
                </div>
                <div className = "fieldProfileContainer" style={{display: (isEditOn) ? '' : 'none'}}>
                    <div className = "fieldNameProfileContainer">Confirm Password:  </div>
                    <div className = "infoProfileContainer">
                        <form className = "formProfileContainer" onSubmit = {this.onFormSubmit}>
                            <input 
                                className = "changeUserInputContainer"
                                type = "text" 
                                value = '*'
                                onChange = {(event)=>{this.setState( { newUserData : {userName : newUserData.userName, userLastName : newUserData.userLastName, userBirthDate : newUserData.userBirthDate, userEmail : newUserData.userEmail, userPassword : event.target.value} } )}}
                            />
                        </form>
                    </div>
                </div>
                <div className = "profileBottomButtonsContainer" style={{display: (isEditOn) ? '' : 'none'}} >
                    <div className = "profileBottomButton" onClick = {this.onSaveClick}>
                        save
                    </div>
                    <div className = "profileBottomButton" onClick = {this.onCancelClick}>
                        cancel
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;