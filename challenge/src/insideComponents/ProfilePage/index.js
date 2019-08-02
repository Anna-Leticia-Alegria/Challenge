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

        for (let field in actualUserData) {
            if(actualUserData.hasOwnProperty(field) && (newUserData[field] !== '')){
                this.setState({actualUserData: {[field] : newUserData[field]}});
            }
        } 
        this.setState({isEditOn : false});
    }

    onCancelClick = () => {
        //abrir popup de "tem certeza que quer cancelar?"
        this.setState({newUserData :{ userName : '', userLastName : '', userBirthDate : '', userEmail : '', userPassword : ''}, isEditOn : false});
    }

    putForm (field) {
        const {actualUserData, newUserData} = this.state
        return (<form className = "formProfileContainer" onSubmit = {this.onFormSubmit}>
                    <input 
                        className = "changeUserInputContainer"
                        type = "text" 
                        value = {(newUserData[field]) ? newUserData[field] : actualUserData[field]} 
                        onChange = {(event)=>{this.setState( { newUserData : {[field] : event.target.value} } )}}
                    />
                </form>)
    }

    render() {
        const {isEditOn, actualUserData} = this.state
        let fieldName = ['Name: ', 'Last Name: ', 'Birthday: ', 'Email: ']
        let valueName = ['userName', 'userLastName', 'userBirthDate', 'userEmail']
        return (
            <div className="profilePageContainer" >
                <div className = "headerProfileContainer">
                    Profile
                </div>
                <div className = "editProfileButton" onClick = {() => {this.setState({isEditOn : true})}}>
                    edit
                </div>
                {fieldName.map( (info, idx) => {
                    return <div className = "fieldProfileContainer">
                                <div className = "fieldNameProfileContainer">{info} </div>
                                <div className = "infoProfileContainer">
                                    {(isEditOn) ? this.putForm(valueName[idx]) : actualUserData[valueName[idx]]}
                                </div>
                            </div>
                    })}
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