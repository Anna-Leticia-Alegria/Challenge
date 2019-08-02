import React from 'react';

import './index.less';

class ProfilePage extends React.Component {
    state = { actualUserData : {userName : 'Lele', userLastName : 'Alegria', userBirthDate : '23/10/1995', userEmail : 'annaalegria23@hotmail.com', userPassword : 'uauauiua'},
              newUserData : {userName : '', userLastName : '', userBirthDate : '', userEmail : '', userPassword : ''},
              isEditOn : false};

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

    render() {
        return (
            <div className="profilePageContainer" onClick = {() => {this.onSaveClick()}}>
                <div className = "headerContainer">
                    Profile
                </div>
                <div className = "editButton" onClick = {() => {this.setState({isEditOn : true})}}>
                    edit
                </div>
            </div>
        );
    }
}

export default ProfilePage;